import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import SearchBar from 'app/components/searchbar';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on IT, investing and more.',
};

function searchBlogPosts(posts: any[], searchQuery: string) {
  if (!searchQuery) return posts;

  const orQueries = searchQuery.toLowerCase().split(' or ');
  
  return posts.filter((post) => {
    const title = post.metadata.title.toLowerCase();
    
    return orQueries.some(orQuery => {
      const exactMatches = orQuery.match(/"([^"]*)"/g);
      if (exactMatches) {
        const withoutExactMatches = orQuery.replace(/"([^"]*)"/g, '').trim();
        const exactMatchFound = exactMatches.every(match => 
          title.includes(match.replace(/"/g, '').toLowerCase())
        );
        if (!exactMatchFound) return false;
        orQuery = withoutExactMatches;
      }

      const andTerms = orQuery.split(' and ');
      return andTerms.every(term => {
        const words = term.trim().split(' ');
        return words.every(word => title.includes(word));
      });
    });
  });
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  let allBlogs = getBlogPosts();
  const query = searchParams.query;

  const filteredBlogs = searchBlogPosts(allBlogs, query || '');

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full max-w-2xl mx-auto px-4">
        {query && (
          <div className="mb-8">
            <Link href="/blog" className="inline-block text-blue-500 hover:underline">
              ← Back to all posts
            </Link>
          </div>
        )}
        
        <SearchBar />
        
        {query && (
          <p className="mt-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
            {filteredBlogs.length} result{filteredBlogs.length !== 1 ? 's' : ''} below
          </p>
        )}
        
        <div className={`flex-grow flex flex-col ${!query && filteredBlogs.length === allBlogs.length ? 'justify-center' : ''}`}>
          {filteredBlogs.length === 0 ? (
            <p className="mt-4 text-center text-neutral-600 dark:text-neutral-400">No results found.</p>
          ) : (
            <div className="mt-8">
              {filteredBlogs
                .sort((a, b) => {
                  if (
                    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                  ) {
                    return -1;
                  }
                  return 1;
                })
                .map((post) => (
                  <Link
                    key={post.slug}
                    className="flex flex-col space-y-1 mb-4"
                    href={`/blog/${post.slug}`}
                  >
                    <div className="w-full flex flex-col">
                      <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        {post.metadata.title}
                      </p>
                      <Suspense fallback={<p className="h-6" />}>
                        <Views slug={post.slug} />
                      </Suspense>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}