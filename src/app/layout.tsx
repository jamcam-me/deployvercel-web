import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import localFont from 'next/font/local';

// Define the Futura Standard font family
const futuraStd = localFont({
  variable: '--font-futura',
  src: [
    {
      path: '../fonts/futura/FuturaStd-Book.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/futura/FuturaStd-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/futura/FuturaStd-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

// Define Cinzel for hero/logo text
const cinzel = localFont({
  variable: '--font-cinzel',
  src: [
    {
      path: '../fonts/cinzel/Cinzel-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/cinzel/Cinzel-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/cinzel/Cinzel-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Big Rock Intelligence | Strategic Cybersecurity & AI Advisory',
  description: 'Empowering organizations with strategic guidance in cybersecurity and AI integration to enable secure digital transformation.',
  keywords: 'cybersecurity, AI advisory, enterprise security, digital transformation, AI security governance, CISO advisory, cyber ROI frameworks',
};

// This is the root layout that doesn't have locale info
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use a default locale for the root layout
  const defaultLocale = 'en';
  
  return (
    <html lang={defaultLocale} className={`${futuraStd.variable} ${cinzel.variable}`}>
      <body className="font-futura bg-white text-cyber-navy">
        {children}
        <Footer locale={defaultLocale} />
      </body>
    </html>
  );
}
