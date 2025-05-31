const withNextIntl = require('next-intl/plugin')(
  './src/app/i18n.ts'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Enable static generation with dynamic features
  // Note: We're not using 'export' output as it would disable dynamic features
  // Instead, we're relying on next-intl's setRequestLocale for static rendering
  staticPageGenerationTimeout: 180, // Increase timeout for static generation
};
 
module.exports = withNextIntl(nextConfig);