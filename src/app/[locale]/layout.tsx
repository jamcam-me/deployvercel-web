import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'de';
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header locale={locale} />
      <main className="flex-grow">
        {children}
      </main>
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
