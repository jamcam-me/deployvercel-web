/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { setRequestLocale } from 'next-intl/server';
import AboutContentOverview from '@/components/about/AboutContentOverview';
import Link from 'next/link'; // Import Link

interface AboutPageProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn how Big Rock Intelligence anchors your security and AI strategy with strategic guidance and executive-level insight.',
};

export default function About({ params }: AboutPageProps) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <>
      {/* Page Hero - Moved outside main for full width */}
      <div className="relative h-[70vh] w-full"> {/* Adjust height as needed */}
        <Image
          src="/images/202002~1.JPG"
          alt="Big Rocks in Blue Sky"
          fill
          className="object-cover object-bottom" /* Image aligns to bottom */
          priority
        />
        <div className="absolute inset-0 bg-cyber-navy/40 z-20" /> {/* Changed overlay opacity to 50% */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 sm:px-8 pb-8 pt-16"> {/* Increased pt to move content down */}
          <h1 className="font-cinzel text-green-30 z-30 text-4xl"> {/* Changed p to h1, lighter green text, removed max-w */}
            The Foundation of Strategic Security
          </h1>
          {/* Added buttons as per user request */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
            <Link href={`/${locale}/services`} className="primary-button text-2xl px-8 py-4 w-full">
              Services
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_RESOURCES_LINK || 'https://www.linkedin.com/in/jamcam-cyberleader/recent-activity/articles/'}`} target="_blank" rel="noopener noreferrer" className="secondary-button text-2xl px-8 py-4 w-full">
              Resources
            </Link>
          </div>
        </div>
      </div>
      <AboutContentOverview locale={locale} />
    </>
  );
}
