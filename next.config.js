/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CLIENT_WOOCOMERCE_KEY: process.env.CLIENT_WOOCOMERCE_KEY,
    PRIVATE_WOOCOMERCE_KEY: process.env.PRIVATE_WOOCOMERCE_KEY,
  },
  images: {
    domains: ["e-asante.pl"],
  },
};

module.exports = nextConfig;
