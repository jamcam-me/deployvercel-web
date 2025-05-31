
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig, setRequestLocale } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  setRequestLocale(locale);
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