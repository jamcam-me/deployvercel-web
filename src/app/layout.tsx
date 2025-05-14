import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Big Rock Intelligence | Strategic Cybersecurity & AI Advisory',
  description: 'Empowering organizations with strategic guidance in cybersecurity and AI integration to enable secure digital transformation.',
};

// This is the root layout that doesn't have locale info
// We'll provide a default locale for this level
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use a default locale for the root layout
  const defaultLocale = 'en';
  
  return (
    <html lang={defaultLocale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Footer locale={defaultLocale} />
      </body>
    </html>
  );
}
