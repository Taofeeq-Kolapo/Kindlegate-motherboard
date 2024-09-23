/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
       remotePatterns: [
      {
        protocol: 'http',
        hostname: 'test.kindlegatefoundation.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;