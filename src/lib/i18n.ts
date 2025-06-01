import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../public/locales/${locale}/common.json`)).default
  };
});

export { unstable_setRequestLocale as setRequestLocale };