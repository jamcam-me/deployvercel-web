'use client';

import { useState } from 'react';
import { Locale, Link, getDisplayName, getFlag } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: locale === 'en' ? 'Home' : 'Startseite' },
    { href: '/services', label: locale === 'en' ? 'Services' : 'Dienstleistungen' },
    { href: '/contact', label: locale === 'en' ? 'Contact' : 'Kontakt' },
    { href: '/frankfurt-hub', label: 'Frankfurt Hub' },
  ];

  const otherLocale = locale === 'en' ? 'de' : 'en';

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Big Rock Intelligence Logo"
              width={50}
              height={50}
              className="mr-3"
            />
            <span className="text-xl font-bold text-cyber-navy">Big Rock Intelligence</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cyber-navy hover:text-forest-green transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-l border-gray-300 pl-6">
              <Link
                href="/"
                locale={otherLocale}
                className="flex items-center text-cyber-navy hover:text-forest-green transition-colors"
              >
                <span className="mr-2">{getFlag(otherLocale)}</span>
                <span>{getDisplayName(otherLocale)}</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyber-navy"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden',
            isMenuOpen ? 'block' : 'hidden'
          )}
        >
          <nav className="mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cyber-navy hover:text-forest-green transition-colors font-medium block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-200">
                <Link
                  href="/"
                  locale={otherLocale}
                  className="flex items-center text-cyber-navy hover:text-forest-green transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">{getFlag(otherLocale)}</span>
                  <span>{getDisplayName(otherLocale)}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}