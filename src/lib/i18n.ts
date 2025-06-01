import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// Centralized locale configuration
export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Single source of truth for message loading
export default getRequestConfig(async ({ locale }) => {
  // Validate locale
  if (!locales.includes(locale as any)) notFound();

  // Load messages from single source of truth
  const messages = (await import(`../../messages/${locale}/common.json`)).default;
  
  return {
    timeZone: 'Europe/Berlin',
    messages,
    locale: locale
  };
});

// Navigation utilities
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: [...locales],
  localePrefix: 'always'
});

// Re-export for components
export { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';