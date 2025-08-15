import React from 'react';
import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/lib/i18n';

interface BusCardLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
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
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
      
      {/* Vercel Analytics Script Placeholder */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // This is where Vercel Analytics script would be included
            // The actual tracking is handled in the page component
          `,
        }}
      />
    </>
  );
}

// Define the locales you support
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' }
  ];
}