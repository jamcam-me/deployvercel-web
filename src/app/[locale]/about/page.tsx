/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import AboutContentOverview from '@/components/about/AboutContentOverview';

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
        </div>
      </div>
      <AboutContentOverview locale={locale} />
    </>
  );
}
