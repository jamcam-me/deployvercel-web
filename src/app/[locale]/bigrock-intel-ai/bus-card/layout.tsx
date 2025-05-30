import React from 'react';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import '../../../../app/globals.css';

interface BusCardLayoutProps {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'de';
  };
}

export async function generateMetadata({ params }: BusCardLayoutProps): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'busCard' });
  
  return {
    title: t('title'),
    description: t('tagline'),
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default async function BusCardLayout({ children, params }: BusCardLayoutProps) {
  const { locale } = params;
  setRequestLocale(locale);
  
  return (
    <html lang={locale}>
      <body className="antialiased">
        {children}
        
        {/* Vercel Analytics Script Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // This is where Vercel Analytics script would be included
              // The actual tracking is handled in the page component
            `,
          }}
        />
      </body>
    </html>
  );
}

// Define the locales you support
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' }
  ];
}