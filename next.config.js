/** @type {import('next').NextConfig} */

const BASE_URL = process.env.BASE_URL || "";

const nextConfig = {
  env: {
    BASE_URL,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
