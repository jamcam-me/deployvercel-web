import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import Link from 'next/link';
import BusCardClientContent from './BusCardClientContent';
import { useTranslations } from 'next-intl';

interface BusinessCardPageProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: 'Digital Business Card',
  description: 'Connect with James Cameron, Founder of Big Rock Intelligence.',
  openGraph: {
    title: 'Digital Business Card - Big Rock Intelligence',
    description: 'Connect with James Cameron, Founder of Big Rock Intelligence.',
    url: 'https://bigrockintelligence.com/bus-card',
    siteName: 'Big Rock Intelligence',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BusinessCardPage({ params }: BusinessCardPageProps) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = useTranslations('busCard'); // Initialize useTranslations here for server component

  return (
    <>
      <Hero
        locale={locale}
        imageUrl="/images/Big Rock Formation-remix-grn.png"
        altText="Digital Business Card Background"
        overlayClass="bg-gradient-to-b from-cyber-navy/70 to-evergreen-intel/50"
        contentPosition="justify-center"
      >
        <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-4xl md:text-5xl lg:text-6xl mb-6 text-center">
          James Cameron
        </h2>
        <p className="font-futura text-light-stone text-lg md:text-xl max-w-2xl mb-8 text-center">
          Founder | Executive AI Security & Data Strategist
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto justify-items-center">
          <Link href={`/${locale}/services`} className="primary-button">
            {locale === 'en' ? 'Explore Strategic Services' : 'Strategische Dienste entdecken'}
          </Link>
          <Link href={`/${locale}/about`} className="secondary-button">
            {locale === 'en' ? 'Learn About Us' : 'Über uns erfahren'}
          </Link>
        </div>
      </Hero>

      <div className="container-custom section bg-white text-gray-800 pt-16">
        <BusCardClientContent locale={locale} />
      </div>
    </>
  );
}