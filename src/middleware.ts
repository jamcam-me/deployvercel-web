import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: [...locales],
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: defaultLocale,
  
  // Whether to add a locale prefix to the URL (e.g. `/en/about`)
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. /logo.png)
  // - API routes
  // - _next (Next.js internals)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};