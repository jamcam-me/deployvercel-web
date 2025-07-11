import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import { Cinzel } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

// Use Google Fonts for Cinzel
const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: 'Big Rock Intelligence | Strategic Cybersecurity & AI Advisory',
  description: 'Empowering organizations with strategic guidance in cybersecurity and AI integration to enable secure digital transformation.',
  keywords: 'cybersecurity, AI advisory, enterprise security, digital transformation, AI security governance, CISO advisory, cyber ROI frameworks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultLocale = 'en';
  
  return (
    <html lang={defaultLocale} className={`${cinzel.variable}`}>
      <head>
        {/* Add optional fallback for Futura using CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-futura: 'Jost', 'Trebuchet MS', sans-serif;
          }
        `}} />
        {/* Start of HubSpot Embed Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="https://js-eu1.hs-scripts.com/47932576.js"
        ></script>
        {/* HubSpot Analytics Code */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,w) {
                var hsjs = d.createElement('script');
                hsjs.type = 'text/javascript';
                hsjs.async = true;
                hsjs.src = 'https://js-eu1.hs-analytics.net/analytics/1750431600000/47932576.js';
                (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(hsjs);
              })(document, window);
            `,
          }}
        ></script>
        {/* HubSpot Banner Code */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,w) {
                var hsjs = d.createElement('script');
                hsjs.type = 'text/javascript';
                hsjs.async = true;
                hsjs.src = 'https://js-eu1.hs-banner.com/v2/47932576/banner.js';
                (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(hsjs);
              })(document, window);
            `,
          }}
        ></script>
        {/* End of HubSpot Embed Code */}
      </head>
      <body className="font-futura bg-white text-cyber-navy">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
