import { getRequestConfig } from 'next-intl/server';
import { getLocale } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = await getLocale();
  return {
    messages: (await import(`../../public/locales/${locale}/common.json`)).default
  };
});