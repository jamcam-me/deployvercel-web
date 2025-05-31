
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`../../public/locales/${locale}/common.json`)).default;
  console.log(`[i18n] Loaded messages for locale: ${locale}`, Object.keys(messages));
  return {
    locale,
    timeZone: 'Europe/Berlin',
    messages
  };
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: ['en', 'de'],
  localePrefix: 'always'
});