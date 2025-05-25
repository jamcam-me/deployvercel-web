import React from 'react';
import { getTranslations, getMessages } from 'next-intl/server'; // Import getTranslations and getMessages
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from './providers'; // Corrected import path

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'de';
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;
  const t = await getTranslations('nav'); // Fetch translations for 'nav' section
  const messages = await getMessages({ locale }); // Corrected usage of getMessages

  return (
    <div className="flex flex-col min-h-screen">
      <Header locale={locale} navTranslations={{
        home: t('home'),
        services: t('services'),
        about: t('about'),
        resources: t('resources'),
        contact: t('contact')
      }} />
      <Providers locale={locale} messages={messages}>
        <main className="flex-grow">
          {children}
        </main>
      </Providers>
      <Footer locale={locale} />
    </div>
  );
}

// Define the locales you support
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' }
  ];
}
