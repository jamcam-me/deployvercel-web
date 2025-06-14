/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { setRequestLocale } from 'next-intl/server';
import AboutContentOverview from '@/components/about/AboutContentOverview';
import Link from 'next/link';
import Hero from '@/components/home/Hero'; // Import the Hero component

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
      <Hero
        locale={locale}
        imageUrl="/images/Big Rock Formation-remix-grn.png"
        altText="Big Rock Formation Green"
        overlayClass="bg-cyber-navy/40"
        contentPosition="justify-center"
        imagePosition="object-[60%_55%]"
      >
        <h1 className="font-futura uppercase font-bold text-green-500 tracking-wider text-2xl md:text-3xl lg:text-4xl pb-8"> {/* Reverted color to text-green-500, standardized font style and size */}
          The Foundation of Strategic Security
        </h1>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto justify-items-center">
          <Link href={`/${locale}/services`} className="primary-button">
            {locale === 'en' ? 'Explore Strategic Services' : 'Strategische Dienste entdecken'}
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_RESOURCES_LINK || 'https://www.linkedin.com/in/jamcam-cyberleader/recent-activity/articles/'}`} target="_blank" rel="noopener noreferrer" className="secondary-button">
            {locale === 'en' ? 'View Resources' : 'Ressourcen anzeigen'}
          </Link>
        </div>
      </Hero>
      <AboutContentOverview locale={locale} />
    </>
  );
}
