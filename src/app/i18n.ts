
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Load messages for the locale
  const messages = (await import(`../../public/locales/${locale}/common.json`)).default;
  console.log(`[i18n] Loaded messages for locale: ${locale}`, Object.keys(messages));
  return {
    timeZone: 'Europe/Berlin',
    messages,
    // Return locale to ensure proper static generation
    locale: locale
  };
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: ['en', 'de'],
  localePrefix: 'always'
});