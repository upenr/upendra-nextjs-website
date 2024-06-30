export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://upenr.vercel.app/sitemap.xml',
    host: 'https://upenr.vercel.app',
  };
}
