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
    contact: locale === 'en' ? 'Contact' : 'Kontakt'
  };
  
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container-custom flex justify-between items-center">
        <Link href={`/${locale}`}>
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Big Rock Intelligence" 
              className="h-10" 
            />
            <span className="ml-2 text-xl font-bold text-cyber-navy">Big Rock Intelligence</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href={`/${locale}`} className="text-gray-800 hover:text-gold transition">
            {translations.home}
          </Link>
          <Link href={`/${locale}/services`} className="text-gray-800 hover:text-gold transition">
            {translations.services}
          </Link>
          <Link href={`/${locale}/about`} className="text-gray-800 hover:text-gold transition">
            {translations.about}
          </Link>
          <Link href={`/${locale}/contact`} className="text-gray-800 hover:text-gold transition">
            {translations.contact}
          </Link>
          <LanguageSwitcher locale={locale} />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cyber-navy" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
            <nav className="flex flex-col p-4">
              <Link 
                href={`/${locale}`} 
                className="py-2 text-gray-800 hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.home}
              </Link>
              <Link 
                href={`/${locale}/services`} 
                className="py-2 text-gray-800 hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.services}
              </Link>
              <Link 
                href={`/${locale}/about`} 
                className="py-2 text-gray-800 hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.about}
              </Link>
              <Link 
                href={`/${locale}/contact`} 
                className="py-2 text-gray-800 hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.contact}
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
