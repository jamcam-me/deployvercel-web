import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { setRequestLocale } from 'next-intl/server';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Hero from '@/components/home/Hero'; // Import Hero component
import { useTranslations } from 'next-intl'; // Import useTranslations

interface ContactPageProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with our team to discuss how we can help your organization.',
  openGraph: {
    title: 'Contact - Big Rock Intelligence',
    description: 'Get in touch with our team to discuss how we can help your organization.',
    url: 'https://bigrockintelligence.com/contact',
    siteName: 'Big Rock Intelligence',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage({ params }: ContactPageProps) {
  const { locale } = params;
  setRequestLocale(locale);
  
  const t = useTranslations('contact'); // Initialize useTranslations
  
  return (
    <>
      <Hero
        locale={locale}
        imageUrl="/images/Big Rock Formation-remix.png"
        altText="Contact Hero Image"
        overlayClass="bg-gradient-to-b from-cyber-navy/70 to-evergreen-intel/50"
        contentPosition="justify-center"
      >
        <div className="w-full max-w-none bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mb-8"> {/* Container full width to prevent wrapping */}
          <h1 className="font-futura uppercase text-executive-gold tracking-wider text-3xl md:text-4xl lg:text-5xl pb-4 text-center">
            {t('title')}
          </h1>
          <p className="font-futura text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-4 text-center">
            {t('description')}
          </p>
          <div className="space-y-2 w-full mx-auto">
            <h2 className="font-cinzel text-4xl font-bold">{t('name')}</h2>
            <p className="text-3xl text-evergreen-intel -mt-0">{t('role')}</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyber-navy flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@bigrock-intelligence.com" className="text-base md:text-lg hover:text-forest-green transition-colors whitespace-nowrap">
                  contact@bigrock-intelligence.com
                </a>
              </div>
              <div className="flex items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyber-navy flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${t('phone').replace(/\s/g, '')}`} className="text-base md:text-lg hover:text-forest-green transition-colors whitespace-nowrap">
                  {t('phone')}
                </a>
              </div>
              <div className="flex items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyber-navy flex-shrink-0 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.18 20.45H3.5V8.13h3.68v12.32zM5.33 6.64c-1.21 0-1.98-.82-1.98-1.87-.02-1.07.77-1.87 2-1.87 1.21 0 1.98.8 1.98 1.87.02 1.05-.77 1.87-2 1.87zm15.11 13.81h-3.68V14.3c0-1.4-.49-2.35-1.75-2.35-1.22 0-1.94.82-1.94 2.37v6.13h-3.68V8.13h3.68v1.58c.51-.95 1.75-1.78 3.52-1.78 2.56 0 4.48 1.68 4.48 5.3v7.22z"/>
                </svg>
                <a href={`https://${t('linkedin')}`} target="_blank" rel="noopener noreferrer" className="text-base md:text-lg hover:text-forest-green transition-colors whitespace-nowrap">
                  {t('linkedin')}
                </a>
              </div>
              <div className="flex items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyber-navy flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h.01M16 11h.01M9 15h.01M15 15h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="https://outlook.office.com/book/contactbigrockintelai@bigrock-intelligence.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg hover:text-forest-green transition-colors whitespace-nowrap">
                  {locale === 'en' ? 'Schedule a Consultation' : 'Beratungstermin vereinbaren'}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons moved outside the white box */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto justify-items-center">
          <Link href={`/${locale}/services`} className="primary-button">
            {locale === 'en' ? 'Explore Strategic Services' : 'Strategische Dienste entdecken'}
          </Link>
          <Link href={`/${locale}/about`} className="secondary-button">
            {locale === 'en' ? 'Learn About Us' : 'Über uns erfahren'}
          </Link>
        </div>
      </Hero>
    </>
  );
}