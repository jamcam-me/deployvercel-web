import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/home/Hero';
import ExecutiveOverview from '@/components/home/ExecutiveOverview';
import ExecutiveOutcomes from '@/components/home/ExecutiveOutcomes';
import { Locale } from '@/lib/i18n';

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'AI-driven cybersecurity advisory firm headquartered in Frankfurt and operating across Germany and Europe.',
  openGraph: {
    title: 'Big Rock Intelligence - Cybersecurity & AI Advisory',
    description: 'AI-driven cybersecurity advisory firm headquartered in Frankfurt and operating across Germany and Europe.',
    url: 'https://bigrockintelligence.com',
    siteName: 'Big Rock Intelligence',
    images: [
      {
        url: '/images/hero_frankfurt.jpg',
        alt: 'Frankfurt skyline',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;

  return (
    <div className="flex flex-col">
      <Hero
        locale={locale}
        imageUrl="/images/hero_frankfurt.jpg"
        altText="Frankfurt skyline"
      >
        {/* Main Hero Text */}
        <h1 className="font-futura uppercase text-executive-gold tracking-wider text-2xl md:text-3xl lg:text-4xl pb-8">
          {locale === 'en'
            ? (
                <>
                  Bridging AI Innovation<br />
                  <span className="text-green-600">with Enterprise Security</span>
                </>
              )
            : (
                <>
                  Brücke zwischen KI-Innovation<br />
                  <span className="text-green-500">mit Unternehmenssicherheit</span><br />
                </>
              )}
        </h1>
        
        {/* Buttons */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <Link href={`/${locale}/services`} className="primary-button">
            {locale === 'en' ? 'Explore Strategic Services' : 'Strategische Dienste entdecken'}
          </Link>
          
          <Link href={`/${locale}/contact`} className="secondary-button">
            {locale === 'en' ? 'Schedule Consultation' : 'Beratungstermin vereinbaren'}
          </Link>
        </div>
      </Hero>
      <ExecutiveOverview locale={locale} />
      <ExecutiveOutcomes locale={locale} />
    </div>
  );
}