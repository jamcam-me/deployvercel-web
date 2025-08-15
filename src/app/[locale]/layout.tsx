import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server'; // Import getTranslations, getMessages and setRequestLocale
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
  // Set the locale for the request to enable static rendering
  setRequestLocale(locale);
  // Fetch translations for 'nav' section
  const t = await getTranslations('nav');
  // Load all messages for current locale
  const messages = await getMessages();

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
