import { Locale } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const translations = {
    title: locale === 'en' 
      ? 'Strategic Cybersecurity & AI Advisory' 
      : 'Strategische Cybersicherheits- & KI-Beratung',
    subtitle: locale === 'en'
      ? 'Empowering organizations with strategic guidance in cybersecurity and AI integration to enable secure digital transformation.'
      : 'Wir befähigen Organisationen durch strategische Beratung in Cybersicherheit und KI-Integration zu einer sicheren digitalen Transformation.',
    cta: locale === 'en' 
      ? 'Explore Our Services' 
      : 'Unsere Dienstleistungen entdecken'
  };

  return (
    <div className="relative h-[80vh] w-full">
      <Image
        src="/images/hero_frankfurt.jpg"
        alt="Frankfurt skyline"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-cyber-navy bg-opacity-60 flex items-center justify-center">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {translations.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            {translations.subtitle}
          </p>
          <Link
            href="/services"
            className="inline-block bg-forest-green hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105"
          >
            {translations.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}