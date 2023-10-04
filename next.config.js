/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i9.ytimg.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
