import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import ViewCounter from 'app/blog/view-counter';
import { PreloadResources } from 'app/preload';
import upen from 'public/static/images/upen-old.jpg';
import coursemigrate from 'public/static/images/coursemigrate-logo.png';
import coursera from 'public/static/images/coursera-logo.svg';
import { getViewsCount } from 'app/db/queries';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16"
              priority
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}></Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}></Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        I'm Upendra Rajan. Welcome to my personal website.
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a computer engineer, technical content developer and publisher. I currently `}
        <Link href="/work">work</Link>
        {` as a Senior Technical Program Manager at IBM where I manage hundreds of client-facing services on several data center products that have generated millions of dollars in revenue.`}
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I write, publish and deliver technical education content for
          enterprise system administrators, architects and developers, teaching
          them about operating systems such as RHEL, IBM AIX and IBM i,
          virtualization, cloud computing and DevOps tools such as Ansible. This
          comes in several forms: classroom or online instructor-led, conference
          sessions, self-paced virtual courses, and workshops.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert"></div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="My summary of Warren Buffett's 2024 Berkshire Meeting"
          slug="buffett-2024-berkshire-hathaway"
        />
        <BlogLink
          name="Warren Buffett and Charlie Munger's 2023 Berkshire Meeting"
          slug="buffett-and-mungers-last"
        />
        <BlogLink
          name="Alphabet, Apple and Tesla: Recreating Chapter 18 of The Intelligent Investor in 2020"
          slug="alphabet-apple"
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I study value investors in my free time and analyze companies that
          meet my margin of safety and circle of competence requirements.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>Open to collaborate and build new things. Reach out to me.</p>
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={upen}
          name="IBM portfolio"
          link="https://systemstraining.vercel.app/course"
        />
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={coursemigrate}
          name="Personal project: CourseMigrate"
          link="https://www.coursemigrate.co"
        />
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={coursera}
          name="My Coursera courses"
          link="https://www.coursera.org/instructor/upenr"
        />
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/upenr"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://upenr.substack.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Subscribe to email alerts</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/__upen"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Twitter</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
