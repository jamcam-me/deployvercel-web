const withNextIntl = require('next-intl/plugin')(
  './next-intl.config.js'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
};
 
module.exports = withNextIntl(nextConfig);