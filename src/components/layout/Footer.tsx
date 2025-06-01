'use client'; // Added to allow usePathname

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Added import

interface FooterProps {
  locale: 'en' | 'de';
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname(); // Get current path

  const footerBgClass =
    pathname === `/${locale}` || pathname === `/` // Home page
      ? 'bg-gradient-to-b from-executive-gold/5 via-executive-gold/60 to-executive-gold/100'
      : pathname.startsWith(`/${locale}/about`) // About page
      ? 'bg-gradient-to-b from-evergreen-intel/5 via-evergreen-intel/60 to-evergreen-intel/100'
      : 'bg-gradient-to-b from-cyber-navy/5 via-cyber-navy/60 to-cyber-navy/100'; // Default for other pages
  
  const translations = {
    copyright: locale === 'en'
      ? `© ${currentYear} BRI. All rights reserved.`
      : `© ${currentYear} BRI. Alle Rechte vorbehalten.`,
    privacyPolicy: locale === 'en' ? 'Privacy Policy' : 'Datenschutzrichtlinie',
    terms: locale === 'en' ? 'Terms of Service' : 'Nutzungsbedingungen',
    contact: locale === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns',
    resources: locale === 'en' ? 'Resources' : 'Ressourcen'
  };

  // Determine text color based on the current page's primary theme color
  const heroTextClass =
    pathname === `/${locale}` || pathname === `/` // Home page
      ? 'text-executive-gold'
      : pathname.startsWith(`/${locale}/about`) // About page
      ? 'text-evergreen-intel'
      : 'text-light-stone'; // Default for other pages (cyber-navy)

  return (
    <footer className={`${footerBgClass} text-white py-4`}> {/* Dynamic background class, decreased padding */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start"> {/* Adjusted grid layout */}
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-executive-gold font-bold mb-4">
              {locale === 'en' ? 'Quick Links' : 'Schnellzugriff'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/services`} className="text-light-stone hover:text-executive-gold transition">
                  {locale === 'en' ? 'Services' : 'Dienstleistungen'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-light-stone hover:text-executive-gold transition">
                  {locale === 'en' ? 'About Us' : 'Über Uns'}
                </Link>
              </li>
              <li>
                <Link href={`${process.env.NEXT_PUBLIC_RESOURCES_LINK || 'https://www.linkedin.com/in/jamcam-cyberleader/recent-activity/articles/'}`} target="_blank" rel="noopener noreferrer" className="text-light-stone hover:text-executive-gold transition">
                  {translations.resources}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal Section */}
          <div>
            <h3 className="text-executive-gold font-bold mb-4">
              {locale === 'en' ? 'Legal' : 'Rechtliches'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/privacy`} className="text-light-stone hover:text-executive-gold transition">
                  {translations.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-light-stone hover:text-executive-gold transition">
                  {translations.terms}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-light-stone hover:text-executive-gold transition">
                  {translations.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Bridging AI Innovation Text & Copyright */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start"> {/* Adjusted alignment */}
             <p className={`font-futura uppercase font-bold tracking-wider text-lg md:text-xl mb-2 ${heroTextClass}`}> {/* Increased font size */}
               {locale === 'en'
                 ? 'Bridging AI Innovation with Enterprise Security'
                 : 'Verbindung von KI-Innovation mit Unternehmenssicherheit'
               }
             </p>
             <p className="text-light-stone text-sm text-center md:text-left"> {/* Adjusted text size to match copyright */}
               {translations.copyright}
             </p>
          </div>

          {/* Logo Section - Far Right */}
          <div className="col-span-1 md:col-span-1 flex justify-end items-end p-4 order-first md:order-last"> {/* Order last for far right, added padding, items-end for bottom alignment */}
            <Link href={`/${locale}`} onClick={() => window.scrollTo(0, 0)} className="block"> {/* Hyperlink to top of current page */}
              <Image
                src="/images/BRI-LOGO-NAMELEFT.svg"
                alt="Big Rock Intelligence Logo"
                width={192} // original width
                height={192} // original height
                className="h-16 w-auto" // Decreased height, maintained aspect ratio
              />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
