import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import localFont from 'next/font/local';

// Define the Futura Standard font family
const futuraStd = localFont({
  variable: '--font-futura',
  src: [
    {
      path: '../../public/fonts/futura/FuturaStd-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura/FuturaStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura/FuturaStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    // Add other weights if available
  ],
  display: 'swap',
});

// Define either Trajan Pro or Cinzel (I see both are options in your brand guide)
const cinzel = localFont({
  variable: '--font-cinzel',
  src: [
    {
      path: '../../public/fonts/cinzel/Cinzel-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/cinzel/Cinzel-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/cinzel/Cinzel-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

// You could also add Trajan Pro if you have the font files
// const trajanPro = localFont({
//   variable: '--font-trajan',
//   src: [
//     {
//       path: '../../public/fonts/trajan/TrajanPro-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/trajan/TrajanPro-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   display: 'swap',
// });

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
