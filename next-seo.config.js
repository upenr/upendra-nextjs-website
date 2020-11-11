const title = 'Upendra Rajan';
const description = 'Senior IT Management Consultant.';

const SEO = {
  title,
  description,
  canonical: 'upenr.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'upenr.vercel.app',
    title,
    description,
    images: [
      {
        url: '/static/images/upen.jpg',
        alt: 'Upen',
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
