const withNextIntl = require('next-intl/plugin')(
  './src/app/i18n.ts'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  output: 'export',
};
 
module.exports = withNextIntl(nextConfig);