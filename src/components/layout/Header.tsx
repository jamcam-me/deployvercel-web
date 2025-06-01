'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageSwitcher } from './LanguageSwitcher';
import { usePathname } from 'next/navigation'; // Added import

interface HeaderProps {
  locale: 'en' | 'de';
  navTranslations: {
    home: string;
    services: string;
    about: string;
    resources: string;
    contact: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ locale, navTranslations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Added pathname constant

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-[999] transition-all duration-300 ${
      isScrolled
        ? `h-12 shadow-sm backdrop-blur-md ${
            pathname === `/${locale}` || pathname === `/` // Home page
              ? 'bg-gradient-to-t from-executive-gold/60 via-executive-gold/40 to-executive-gold/20'
              : pathname.startsWith(`/${locale}/about`) // About page (check for /about or /about/subpath)
              ? 'bg-gradient-to-t from-evergreen-intel/60 via-evergreen-intel/40 to-evergreen-intel/20'
              : 'bg-gradient-to-t from-cyber-navy/60 via-cyber-navy/40 to-cyber-navy/20' // Default for other pages
          }`
        : 'h-16 bg-transparent backdrop-blur-sm' // Completely transparent initially
    }`}>
      <div className="w-full flex items-center justify-between py-2 px-4"> {/* Removed max-w-7xl mx-auto, added px-4 */}
        <Link href={`/${locale}`} className="flex items-center pl-0"> {/* Ensure logo is far left */}
          <Image
            src="/images/BRI-LOGO-NAMERIGHT.svg"
            alt="Big Rock Intelligence Logo"
            width={isScrolled ? 256 : 512}
            height={isScrolled ? 64 : 128}
            className={`w-auto transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-32' // Adjust logo size based on scroll
            }`}
          />
        </Link>

        {/* Right Section (Navigation + Mobile Button) */}
        <div className="flex items-center space-x-8"> {/* Added ml-auto to push to right */}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-light-stone hover:text-executive-gold transition font-cinzel text-lg">
              {navTranslations.home}
            </Link>
            <Link href={`/${locale}/services`} className="text-light-stone hover:text-executive-gold transition font-cinzel text-lg">
              {navTranslations.services}
            </Link>
            <Link href={`/${locale}/about`} className="text-light-stone hover:text-executive-gold transition font-cinzel text-lg">
              {navTranslations.about}
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_RESOURCES_LINK || 'https://www.linkedin.com/in/jamcam-cyberleader/recent-activity/articles/'}`} target="_blank" rel="noopener noreferrer" className="text-light-stone hover:text-executive-gold transition font-cinzel text-lg">
              {navTranslations.resources}
            </Link>
            <Link href={`/${locale}/contact`} className="text-light-stone hover:text-executive-gold transition font-cinzel text-lg">
              {navTranslations.contact}
            </Link>
            <LanguageSwitcher locale={locale} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light-stone"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-cyber-navy/90 via-cyber-navy/80 to-cyber-navy/70 backdrop-blur-md shadow-md z-50">
            <nav className="flex flex-col p-4">
              <Link
                href={`/${locale}`}
                className="py-2 text-light-stone hover:text-executive-gold transition font-cinzel text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {navTranslations.home}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="py-2 text-light-stone hover:text-executive-gold transition font-cinzel text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {navTranslations.services}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="py-2 text-light-stone hover:text-executive-gold transition font-cinzel text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {navTranslations.about}
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_RESOURCES_LINK || 'https://www.linkedin.com/in/jamcam-cyberleader/recent-activity/articles/'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-light-stone hover:text-executive-gold transition font-cinzel text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {navTranslations.resources}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="py-2 text-light-stone hover:text-executive-gold transition font-cinzel text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {navTranslations.contact}
              </Link>
              <LanguageSwitcher locale={locale} className="mt-2" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
