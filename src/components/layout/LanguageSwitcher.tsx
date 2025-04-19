'use client';

import { useState } from 'react';
import { Locale, Link, getDisplayName, getFlag } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const locales: Locale[] = ['en', 'de'];
  const currentLocale = locale;

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-cyber-navy hover:text-forest-green transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="mr-1">{getFlag(currentLocale)}</span>
        <span>{getDisplayName(currentLocale)}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {locales
            .filter((l) => l !== currentLocale)
            .map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className="block px-4 py-2 text-sm text-cyber-navy hover:bg-light-steel hover:text-forest-green"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{getFlag(l)}</span>
                <span>{getDisplayName(l)}</span>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}