/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  images: {
    domains: ['localhost'],
  },
}

module.exports = withNextIntl({
  // Other Next.js configuration ...
  ...nextConfig
});