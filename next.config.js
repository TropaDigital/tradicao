/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['via.placeholder.com', 'bucket.backendtropa.com.br']
  }
};

module.exports = nextConfig;
