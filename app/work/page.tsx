import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          As Senior Technical Program Manager (TPM) at IBM Infrastructure, I
          manage content on a diverse range of products - on enterprise data
          storage, hybrid cloud, compute Infrastructure, processor architecture
          (ppc64le) and operating systems. I present on several of these topics
          at conferences and to senior executives. Contact me if you'd like to
          learn more about my enterprise offerings.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">IBM</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Senior TPM at IBM Infrastructure
        </p>
        <p>
          I joined{' '}
          <a href="https://www.ibm.com/it-infrastructure">IBM Infrastructure</a>{' '}
          in 2011 and worked on several aspects of data center - compute,
          storage and networking. I built our Technical Training offerings from
          the ground up and it has had a significant impact on several IT system
          administrators using these products.
        </p>
        <ul>
          <li>
            Led all operations of IBM Infrastructure technical training and
            badging, managing teams of engineers and a 100+ course portfolio
            developed and delivered to Fortune 500 clients. Worked with senior
            executives on private cloud, server modernization, DevOps and
            related client services, achieving steady yearly revenue growth and
            95%+ CSAT, exceeding industry benchmarks
          </li>
          <li>
            Delivered engaging product demos and presentations on advanced cloud
            infrastructure topics at 30+ international conferences, receiving
            over 92% positive feedback and contributing to new product adoptions
          </li>
          <li>
            Hired and directed architects and engineers internationally.
            Allocated $2M+ capital yearly to scale operations worldwide
          </li>
        </ul>
        <p>
          Since joining IBM in 2011, my impact has grown significantly. My work
          has directly benefited large enterprise clients across finance,
          technology, and various other industries.
        </p>
        <h3 className="font-medium text-xl mb-1 tracking-tighter">
          Speaker at{' '}
          <a
            href="https://www.ibm.com/community/ibm-techxchange-conference/"
            target="_blank"
          >
            conferences
          </a>
        </h3>
        <span>
          <ul>
            <li>IBM TechXchange 2024, Las Vegas</li>
            <li>IBM TechUmini 2023, Paris</li>
            <li>IBM TechXchange 2023, Las Vegas</li>
            <li>IBM TechU 2022, Virtual event</li>
            <li>IBM TechU 2021, Virtual event</li>
            <li>IBM TechU 2020, Istanbul and a virtual event</li>
            <li>
              IBM TechU 2019, Casablanca, Atlanta, Bangkok, Sydney, Prague
            </li>
            <li>IBM TechU 2018, Cairo, Dubai, Sydney and Hollywood (FL)</li>
            <li>IBM TechU 2017, New Orleans, Prague</li>
            <li>IBM TechU 2016, London, Atlanta, Baltimore</li>
            <li>
              IBM Edge 2012, 2013, 2014, 2015, 2016 and IBM Pulse 2014, Las
              Vegas
            </li>
            <li>IBM Power Systems Technical Symposium 2012, Las Vegas</li>
            <li>IBM Cloud Computing Technical Symposium 2012, San Francisco</li>
            <li>IBM TechU 2013, 2015, 2016, 2017, Orlando</li>
            <li>IBM Systems Technical Symposium 2013, Nordwijk</li>
            <li>
              IBM Systems Technical Symposium 2012, 2013, 2014, Auckland and
              Melbourne
            </li>
            <li>IBM Systems Technical Symposium 2013, Berlin</li>
            <li>
              IBM Systems Technical Symposium 2014, Johannesburg, Cape Town
            </li>
            <li>IBM TechU 2014, Istanbul, Dublin, Sao Paulo</li>
            <li>And many other virtual client events</li>
          </ul>
        </span>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Cities visited
        </h2>
        <br />
        <div>
          <iframe
            height="300px"
            src="https://www.google.com/maps/d/embed?mid=1DNDs3fIaVs77g3IGDeFxp_D9iRy03d7X&libraries=marker"
            title="Upendra Travelled Cities"
            width="100%"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
