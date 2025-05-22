'use client';

import React from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  locale: 'en' | 'de';
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const translations = {
    home: locale === 'en' ? 'Home' : 'Startseite',
    services: locale === 'en' ? 'Services' : 'Dienstleistungen',
    about: locale === 'en' ? 'About Us' : 'Über Uns',
    resources: locale === 'en' ? 'Resources' : 'Ressourcen',
    contact: locale === 'en' ? 'Contact' : 'Kontakt' // Still needed for footer and about page
  };
  
  return (
    <header className="bg-cyber-navy shadow-sm py-4">
      <div className="container-custom flex justify-between items-center pl-4">
        {/* Company Name (Left) */}
        <Link href={`/${locale}`}>
          <span className="text-5xl font-bold text-executive-gold font-cinzel">Big Rock Intelligence</span>
        </Link>

        {/* Right Section (Navigation + Logo + Mobile Button) */}
        <div className="flex items-center space-x-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-green-600 hover:text-green-700 transition">
              {translations.home}
            </Link>
            <Link href={`/${locale}/services`} className="text-green-600 hover:text-green-700 transition">
              {translations.services}
            </Link>
            <Link href={`/${locale}/resources`} className="text-green-600 hover:text-green-700 transition">
              {translations.resources}
            </Link>
            <Link href={`/${locale}/about`} className="text-green-600 hover:text-green-700 transition">
              {translations.about}
            </Link>
            <LanguageSwitcher locale={locale} />
          </nav>

          {/* Logo (Desktop Only) */}
          <Link href={`/${locale}`} className="hidden md:block">
            <img 
              src="/images/logo.png" 
              alt="Big Rock Intelligence" 
              className="h-48"
            />
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-green-600" // text-white for dark background
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
                className="py-2 text-green-600 hover:text-green-700 transition" // text-white for dark background
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.home}
              </Link>
              <Link 
                href={`/${locale}/services`}
                className="py-2 text-green-600 hover:text-green-700 transition" // text-white for dark background
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.services}
              </Link>
              <Link
                href={`/${locale}/resources`}
                className="py-2 text-green-600 hover:text-green-700 transition" // text-white for dark background
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.resources}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="py-2 text-green-600 hover:text-green-700 transition" // text-white for dark background
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
