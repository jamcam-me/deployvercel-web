import { Metadata } from 'next';
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
    <div className="container-custom section">
      <h1 className="section-title text-center mb-12">
        {locale === 'en' ? 'Our Services' : 'Unsere Dienstleistungen'}
      </h1>
      <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
        {locale === 'en'
          ? 'Comprehensive cybersecurity and AI advisory services tailored to your organization\'s needs.'
          : 'Umfassende Beratungsdienste für Cybersicherheit und KI, maßgeschneidert für die Bedürfnisse Ihrer Organisation.'}
      </p>
      <ServicesList locale={locale} />
    </div>
  );
}