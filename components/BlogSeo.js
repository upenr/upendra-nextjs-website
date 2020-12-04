import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, summary, lastPublishedOn, url, image }) => {
  const date = new Date(lastPublishedOn).toISOString();
  const featuredImage = {
    url: `https://upenr.vercel.app${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Upendra Rajan`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Upendra Rajan"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Upendra Rajan"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
