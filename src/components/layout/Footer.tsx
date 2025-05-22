import React from 'react';
import Link from 'next/link';

interface FooterProps {
  locale: 'en' | 'de';
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const currentYear = new Date().getFullYear();
  
  const translations = {
    copyright: locale === 'en' 
      ? `© ${currentYear} Big Rock Intelligence. All rights reserved.` 
      : `© ${currentYear} Big Rock Intelligence. Alle Rechte vorbehalten.`,
    privacyPolicy: locale === 'en' ? 'Privacy Policy' : 'Datenschutzrichtlinie',
    terms: locale === 'en' ? 'Terms of Service' : 'Nutzungsbedingungen',
    contact: locale === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns',
    resources: locale === 'en' ? 'Resources' : 'Ressourcen'
  };
  
  return (
    <footer className="bg-cyber-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/images/logo_white.png"
              alt="Big Rock Intelligence" 
              className="h-48 mb-4"
            />
            <p className="text-light-stone mb-4">
              {locale === 'en' 
                ? 'Bridging AI Innovation with Enterprise Security'
                : 'Verbindung von KI-Innovation mit Unternehmenssicherheit'
              }
            </p>
            <p className="text-light-stone text-sm">
              {translations.copyright}
            </p>
          </div>
          
          <div>
            <h3 className="text-green-600 font-bold mb-4">
              {locale === 'en' ? 'Quick Links' : 'Schnellzugriff'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-green-600 hover:text-green-700 transition">
                  {locale === 'en' ? 'Home' : 'Startseite'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-green-600 hover:text-green-700 transition">
                  {locale === 'en' ? 'Services' : 'Dienstleistungen'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-green-600 hover:text-green-700 transition">
                  {locale === 'en' ? 'About Us' : 'Über Uns'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resources`} className="text-green-600 hover:text-green-700 transition">
                  {translations.resources}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about#contact-section`} className="text-green-600 hover:text-green-700 transition">
                  {locale === 'en' ? 'Contact' : 'Kontakt'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-green-600 font-bold mb-4">
              {locale === 'en' ? 'Legal' : 'Rechtliches'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/privacy`} className="text-green-600 hover:text-green-700 transition">
                  {translations.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-green-600 hover:text-green-700 transition">
                  {translations.terms}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about#contact-section`} className="text-green-600 hover:text-green-700 transition">
                  {translations.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
