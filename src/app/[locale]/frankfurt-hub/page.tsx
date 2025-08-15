import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import Hero from '@/components/home/Hero'; // Import the Hero component

interface FrankfurtHubPageProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: 'Frankfurt Hub',
  description: 'Our European headquarters in Frankfurt, Germany.',
  openGraph: {
    title: 'Frankfurt Hub - Big Rock Intelligence',
    description: 'Our European headquarters in Frankfurt, Germany.',
    url: 'https://bigrockintelligence.com/frankfurt-hub',
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

export default function FrankfurtHubPage({ params }: FrankfurtHubPageProps) {
  const { locale } = params;
  
  const translations = {
    title: 'Frankfurt Hub',
    description: locale === 'en' 
      ? 'Our European headquarters in Frankfurt, Germany.' 
      : 'Unser europäischer Hauptsitz in Frankfurt, Deutschland.',
    europeanReach: locale === 'en' ? 'European Reach' : 'Europäische Reichweite',
    reachDescription: locale === 'en'
      ? 'From our Frankfurt hub, we serve clients across Europe with a focus on Germany, Austria, Switzerland, and the UK.'
      : 'Von unserem Frankfurter Standort aus betreuen wir Kunden in ganz Europa mit Schwerpunkt auf Deutschland, Österreich, der Schweiz und Großbritannien.',
    expertise: locale === 'en' ? 'Local Expertise, Global Perspective' : 'Lokale Expertise, Globale Perspektive',
    expertiseDescription: locale === 'en'
      ? 'Our team combines deep local knowledge with global cybersecurity and AI expertise.'
      : 'Unser Team verbindet tiefes lokales Wissen mit globaler Expertise in Cybersicherheit und KI.'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        locale={locale}
        imageUrl="/images/hero_frankfurt.jpg"
        altText="Frankfurt skyline"
        overlayClass="bg-cyber-navy bg-opacity-50"
        contentPosition="justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">{translations.title}</h1>
      </Hero>

      <div className="container-custom section pt-16"> {/* Added pt-16 for consistent padding */}
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center mb-16">{translations.description}</p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-cyber-navy">{translations.europeanReach}</h2>
              <p className="text-lg">{translations.reachDescription}</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-cyber-navy">{translations.expertise}</h2>
              <p className="text-lg">{translations.expertiseDescription}</p>
            </div>
          </div>

          <div className="bg-light-steel bg-opacity-30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-cyber-navy">
              {locale === 'en' ? 'Visit Us' : 'Besuchen Sie uns'}
            </h2>
            <p className="text-lg">
              {locale === 'en' 
                ? 'Our Frankfurt office serves as our European headquarters and innovation hub.'
                : 'Unser Frankfurter Büro dient als europäischer Hauptsitz und Innovationszentrum.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}