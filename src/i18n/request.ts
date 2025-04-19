import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async ({ locale }) => {
  return {
    locale,
    messages: (await import(`../../public/locales/${locale}/common.json`)).default
  };
});