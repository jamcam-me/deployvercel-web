import { Locale, locales } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import { Providers } from './providers';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const isValidLocale = locales.some((locale) => locale === params.locale);

  if (!isValidLocale) {
    notFound();
  }

  // Get messages for the current locale
  const messages = (await import(`../../../public/locales/${params.locale}/common.json`)).default;

  return (
    <Providers locale={params.locale} messages={messages}>
      <Header locale={params.locale as Locale} />
      <main className="min-h-screen">{children}</main>
    </Providers>
  );
}