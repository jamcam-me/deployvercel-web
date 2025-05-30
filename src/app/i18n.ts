
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  return {
    locale,
    timeZone: 'Europe/Berlin',
    messages: (await import(`../../public/locales/${locale}/common.json`)).default
  };
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: ['en', 'de'],
  localePrefix: 'always'
});