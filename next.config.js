/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
