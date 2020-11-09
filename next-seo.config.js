const title = 'Upendra Rajan';
const description =
  'IT infrastructure enthusiast and content creator.';

const SEO = {
  title,
  description,
  canonical: 'upenr.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'upenr.vercel.app',
    title,
    description,
    images: [
      {
        url: '',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@__upen',
    site: '',
    cardType: 'summary_large_image'
  }
};

export default SEO;
