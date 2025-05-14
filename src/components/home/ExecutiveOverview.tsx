import { Locale } from '@/lib/i18n';
import Image from 'next/image';

// src/components/home/ExecutiveOverview.tsx
import React from 'react';
// Define the props interface
interface ExecutiveOverviewProps {
  locale: "en" | "de";
}
const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({ locale }) => {
  // Your existing component code
  // You can now use the locale prop inside the component
   return (
    // JSX content
  );
};
export default ExecutiveOverview;


export default function ExecutiveOverview({ locale }: ExecutiveOverviewProps) {
  const translations = {
    title: locale === 'en' ? 'Executive Overview' : 'Executive Overview',
    description: locale === 'en'
      ? 'Big Rock Intelligence provides executive-level advisory services in cybersecurity and AI integration. With 25+ years of experience in global leadership, we offer tailored solutions for enterprises, SMBs, VCs/PEs, and Boards.'
      : 'Big Rock Intelligence bietet Beratungsdienste auf Führungsebene in den Bereichen Cybersicherheit und KI-Integration. Mit über 25 Jahren Erfahrung in globaler Führung bieten wir maßgeschneiderte Lösungen für Unternehmen, KMUs, VCs/PEs und Vorstände.',
    expertise: locale === 'en'
      ? 'Expertise in cybersecurity, AI and global leadership'
      : 'Expertise in Cybersicherheit, KI und globaler Führung',
    tailored: locale === 'en'
      ? 'Services tailored for enterprise, SMBs, VCs/PEs, and Boards'
      : 'Maßgeschneiderte Dienstleistungen für Unternehmen, KMUs, VCs/PEs und Vorstände',
    recognized: locale === 'en'
      ? 'Recognized "Leading Voice" in Security & AI'
      : 'Anerkannte "führende Stimme" in Sicherheit & KI'
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{translations.title}</h2>
          <p className="text-xl max-w-4xl mx-auto">
            {translations.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Use regular img tag for SVG files instead of Next.js Image component */}
            <img
              src="/images/ai_cyber_illustration.png"
              alt="AI and Cybersecurity Illustration"
              width={500}
              height={400}
              className="mx-auto"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-light-steel bg-opacity-30 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-cyber-navy text-white p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyber-navy mb-2">
                    {translations.expertise}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'en'
                      ? 'Our team brings decades of experience in cybersecurity, AI integration, and global leadership roles.'
                      : 'Unser Team bringt jahrzehntelange Erfahrung in den Bereichen Cybersicherheit, KI-Integration und globale Führungsrollen mit.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-light-steel bg-opacity-30 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-forest-green text-white p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyber-navy mb-2">
                    {translations.tailored}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'en'
                      ? 'We customize our advisory services to meet the specific needs of different organization types and sizes.'
                      : 'Wir passen unsere Beratungsdienste an die spezifischen Bedürfnisse verschiedener Organisationstypen und -größen an.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-light-steel bg-opacity-30 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-gold text-cyber-navy p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyber-navy mb-2">
                    {translations.recognized}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'en'
                      ? 'Our founder is recognized as a leading voice in the intersection of cybersecurity and artificial intelligence.'
                      : 'Unser Gründer wird als führende Stimme an der Schnittstelle von Cybersicherheit und künstlicher Intelligenz anerkannt.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
