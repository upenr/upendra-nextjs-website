'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  useEffect(() => {
    setQuery(searchParams.get('query') || '');
  }, [searchParams, pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/blog?query=${encodeURIComponent(query)}`);
    } else {
      router.push('/blog');
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
          </svg>
        </div>
        <input 
          type="text" 
          id="simple-search" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B49F] focus:border-[#36B49F] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#36B49F] dark:focus:border-[#36B49F]" 
          placeholder="Search blogs (AND, OR, &quot;quotes&quot;)..." 
          required 
        />
      </div>
      <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-[#36B49F] rounded-lg border border-[#36B49F] hover:bg-[#2c9080] focus:ring-4 focus:outline-none focus:ring-[#36B49F]/50 dark:bg-[#36B49F] dark:hover:bg-[#2c9080] dark:focus:ring-[#36B49F]/50">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}