import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export const getDisplayName = (locale: Locale): string => {
  switch (locale) {
    case 'en':
      return 'English';
    case 'de':
      return 'Deutsch';
    default:
      return locale;
  }
};

export const getFlag = (locale: Locale): string => {
  switch (locale) {
    case 'en':
      return '🇬🇧';
    case 'de':
      return '🇩🇪';
    default:
      return '';
  }
};