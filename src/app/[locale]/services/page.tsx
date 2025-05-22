import { Metadata } from 'next';
import Image from 'next/image'; // Added import for Image
import ServicesList from '@/components/services/ServicesList';
import { Locale } from '@/lib/i18n';

interface ServicesPageProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive cybersecurity and AI advisory services tailored to your organization\'s needs.',
  openGraph: {
    title: 'Services - Big Rock Intelligence',
    description: 'Comprehensive cybersecurity and AI advisory services tailored to your organization\'s needs.',
    url: 'https://bigrockintelligence.com/services',
    siteName: 'Big Rock Intelligence',
    images: [
      {
        url: '/images/ai_cyber_illustration.png',
        alt: 'Cybersecurity and AI services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = params;

  return (
    <>
      <div className="relative h-[60vh] w-full"> {/* Adjust height as needed */}
        <Image
          src="/images/Frankfurt Skyline at Dusk.png"
          alt="Frankfurt Skyline at Dusk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-navy/70 to-evergreen-intel/50 z-10" /> {/* Overlay for text readability */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <h1 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-4xl md:text-5xl lg:text-6xl mb-6">
            {locale === 'en' ? 'Strategic Services' : 'Strategische Dienstleistungen'}
          </h1>
          <p className="font-futura text-light-stone text-lg md:text-xl max-w-2xl">
            {locale === 'en'
              ? 'Empowering secure digital transformation through expert cybersecurity and AI advisory.'
              : 'Ermöglichung sicherer digitaler Transformation durch Expertenberatung in Cybersicherheit und KI.'}
          </p>
        </div>
      </div>

      <div className="container-custom section">
        {/* The title and description below will be handled by the reordering in the next step */}
        {/* <h1 className="section-title text-center mb-12">
          {locale === 'en' ? 'Our Services' : 'Unsere Dienstleistungen'}
        </h1>
        <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
          {locale === 'en'
            ? 'Comprehensive cybersecurity and AI advisory services tailored to your organization\'s needs.'
            : 'Umfassende Beratungsdienste für Cybersicherheit und KI, maßgeschneidert für die Bedürfnisse Ihrer Organization.'}
        </p> */}
        <ServicesList locale={locale} />
      </div>
    </>
  );
}