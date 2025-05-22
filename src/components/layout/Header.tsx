'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  locale: 'en' | 'de';
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const translations = {
    home: locale === 'en' ? 'Home' : 'Startseite',
    services: locale === 'en' ? 'Services' : 'Dienstleistungen',
    about: locale === 'en' ? 'About Us' : 'Über Uns',
    resources: locale === 'en' ? 'Resources' : 'Ressourcen',
    contact: locale === 'en' ? 'Contact' : 'Kontakt' // Still needed for footer and about page
  };
  
  return (
    <header className={`bg-gradient-to-t from-transparent via-cyber-navy/70 to-cyber-navy shadow-sm fixed top-0 left-0 right-0 w-full z-[999] transition-all duration-300 ${
      isScrolled ? 'h-24' : 'h-64' // Adjust initial and scrolled header height
    }`}>
      <div className="container-custom flex justify-between items-center pl-4"> {/* Reverted to justify-between */}
        {/* Company Logo and Name (Left) */}
        <Link href={`/${locale}`} className="flex items-center"> {/* Added flex and items-center to align logo and text */}
          <img
            src="/images/logo_white.png"
            alt="Big Rock Intelligence"
            className={`w-auto transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-32' // Adjust logo size based on scroll
            }`}
          />
          {/* Company Name next to logo */}
          <span className={`font-cinzel uppercase font-bold text-executive-gold tracking-wider transition-all duration-300 ${
            isScrolled ? 'text-xl ml-4' : 'text-3xl ml-6' // Adjust text size and margin based on scroll
          }`}>
            BigRock Intelligence
          </span>
        </Link>

        {/* Right Section (Navigation + Mobile Button) */}
        <div className="flex items-center space-x-8"> {/* Removed ml-auto */}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-light-stone hover:text-executive-gold transition font-cinzel text-lg">
              {translations.home}
            </Link>
            <Link href={`/${locale}/services`} className="text-light-stone hover:text-executive-gold transition font-cinzel text-lg">
              {translations.services}
            </Link>
            <Link href="https://www.linkedin.com/in/jamcam-cyberleader/recent-activity/articles/" target="_blank" rel="noopener noreferrer" className="text-light-stone hover:text-executive-gold transition font-cinzel text-lg">
              {translations.resources}
            </Link>
            <Link href={`/${locale}/about`} className="text-light-stone hover:text-executive-gold transition font-cinzel text-lg">
              {translations.about}
            </Link>
            <LanguageSwitcher locale={locale} />
          </nav>

          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-light-stone" // text-white for dark background
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-cyber-navy shadow-md z-50"> {/* Dark background for mobile menu */}
            <nav className="flex flex-col p-4">
              <Link 
                href={`/${locale}`} 
                className="py-2 text-light-stone hover:text-executive-gold transition font-cinzel text-lg" // text-white for dark background
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.home}
              </Link>
              <Link 
                href={`/${locale}/services`}
                className="py-2 text-light-stone hover:text-executive-gold transition font-cinzel text-lg" // text-white for dark background
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.services}
              </Link>
              <Link
                href="https://www.linkedin.com/in/jamcam-cyberleader/recent-activity/articles/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-light-stone hover:text-executive-gold transition font-cinzel text-lg" // text-white for dark background
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.resources}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="py-2 text-light-stone hover:text-executive-gold transition font-cinzel text-lg" // text-white for dark background
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.about}
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
