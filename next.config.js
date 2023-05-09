/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      'via.placeholder.com',
      'bucket.backendtropa.com.br',
      'bucket.trad1.com.br'
    ]
  }
};

module.exports = nextConfig;
