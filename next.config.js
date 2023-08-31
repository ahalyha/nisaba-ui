/** @type {import('next').NextConfig} */

const BASE_URL = process.env.BASE_URL || "";

const BASE_URL_PRIVATE = process.env.BASE_URL_PRIVATE || "";

const nextConfig = {
  env: {
    BASE_URL,
    BASE_URL_PRIVATE,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
