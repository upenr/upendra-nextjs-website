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
    image: 'https://upenr.vercel.app/static/images/logo.png',
    title,
    description,
    images: [
      {
        url: 'https://upenr.vercel.app/static/images/logo.png',
        alt: 'Upendra Rajan',
        width: 512,
        height: 512
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
