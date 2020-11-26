const title = 'Upendra Rajan';
const description = 'Senior IT Management Consultant.';

const SEO = {
  title,
  description,
  canonical: 'https://upenr.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://upenr.vercel.app',
    image: 'https://upenr.vercel.app/static/images/upen.jpg',
    title,
    description,
    images: [
      {
        url: 'https://upenr.vercel.app/static/images/upen.jpg',
        alt: 'Upendra Rajan',
        width: 400,
        height: 400
      }
    ]
  },
  twitter: {
    handle: '@__upen',
    site: 'https://twitter.com/__upen',
    cardType: 'summary_large_image'
  }
};

export default SEO;
