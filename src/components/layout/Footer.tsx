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
    pathname.startsWith(`/${locale}/contact`)
      ? 'bg-white'
      : pathname.startsWith(`/${locale}/services`) // If it's a services page
      ? 'bg-white' // Use white background for footer
      : pathname === `/${locale}` ||
        pathname === `/` ||
        pathname === `/${locale}/about` // Check for home and about pages
          ? 'bg-light-stone'
          : 'bg-gradient-to-b from-light-stone/80 to-light-stone/20'; // Default for other pages
  
  const translations = {
    copyright: locale === 'en'
      ? `© ${currentYear} BRI. All rights reserved.`
      : `© ${currentYear} BRI. Alle Rechte vorbehalten.`,
    privacyPolicy: locale === 'en' ? 'Privacy Policy' : 'Datenschutzrichtlinie',
    terms: locale === 'en' ? 'Terms of Service' : 'Nutzungsbedingungen',
    contact: locale === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns',
    resources: locale === 'en' ? 'Resources' : 'Ressourcen', // Added comma here
  };

  // Quick Links and Legal sections should always be primary green
  const sectionTextColorClass = 'text-evergreen-intel'; // Always use primary green (#1f302d)

  return (
    <footer className={`${footerBgClass} py-4`}> {/* Removed dynamic text color to allow individual element colors */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start"> {/* Adjusted grid layout */}
          
          {/* Combined Quick Links & Legal Section - now side-by-side on md screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-1"> {/* This div now acts as a single column */}
            {/* Quick Links Section */}
            <div>
              <h1 className={`${sectionTextColorClass} font-futura font-bold uppercase tracking-wider text-sm md:text-base mb-2`}>
                {locale === 'en' ? 'Quick Links' : 'Schnellzugriff'}
              </h1>
              <ul className="space-y-1">
                <li>
                  <Link href={`/${locale}/services`} className={`${sectionTextColorClass} hover:text-executive-gold transition text-xs md:text-sm`}>
                    {locale === 'en' ? 'Services' : 'Dienstleistungen'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about`} className={`${sectionTextColorClass} hover:text-executive-gold transition text-xs md:text-sm`}>
                    {locale === 'en' ? 'About Us' : 'Über Uns'}
                  </Link>
                </li>
                <li>
                  <Link href={`${process.env.NEXT_PUBLIC_RESOURCES_LINK || 'https://www.linkedin.com/in/jamcam-cyberleader/recent-activity/articles/'}`} target="_blank" rel="noopener noreferrer" className={`${sectionTextColorClass} hover:text-executive-gold transition text-xs md:text-sm`}>
                    {translations.resources}
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal Section */}
            <div>
              <h1 className={`${sectionTextColorClass} font-futura font-bold uppercase tracking-wider text-sm md:text-base mb-2`}>
                {locale === 'en' ? 'Legal' : 'Rechtliches'}
              </h1>
              <ul className="space-y-1">
                <li>
                  <Link href={`/${locale}/privacy`} className={`${sectionTextColorClass} hover:text-executive-gold transition text-xs md:text-sm`}>
                    {translations.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/terms`} className={`${sectionTextColorClass} hover:text-executive-gold transition text-xs md:text-sm`}>
                    {translations.terms}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`} className={`${sectionTextColorClass} hover:text-executive-gold transition text-xs md:text-sm`}>
                    {translations.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bridging AI Innovation Text & Copyright */}
          <div className="col-span-full md:col-span-2 flex flex-col justify-center items-center"> {/* Added justify-center for vertical centering */}
             <p className={`font-cinzel uppercase font-bold tracking-wider text-2xl md:text-3xl lg:text-4xl text-center`}> {/* Added text-center */}
               {locale === 'en'
                 ? (<><span className="text-green-70">Bridging AI Innovation</span><br /><span className="text-gold-800">with Enterprise Security</span></>)
                 : 'Verbindung von KI-Innovation mit Unternehmenssicherheit'
               }
             </p>
             <p className={`${ (pathname === `/${locale}` || pathname === `/`) ? 'text-cyber-navy' : 'text-light-stone' } text-sm text-center md:text-center mt-4`}> {/* Adjusted text size and alignment, added mt-4 for spacing */}
               {translations.copyright}
             </p>
          </div>

          {/* Logo Section - Far Right */}
          <div className="col-span-1 md:col-span-1 flex justify-end items-center p-4 order-first md:order-last"> {/* Changed items-end to items-center for vertical centering */}
            <Link href={`/${locale}`} onClick={() => window.scrollTo(0, 0)} className="block"> {/* Hyperlink to top of current page */}
              <Image
                src="/images/BRI-LOGO-NAMELEFT.svg"
                alt="Big Rock Intelligence Logo"
                width={288} // Increased width
                height={288} // Increased height
                className="h-24 w-auto" // Increased height from h-16 to h-24
              />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
