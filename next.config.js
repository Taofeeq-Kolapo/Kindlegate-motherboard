/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // images: {
    //   domains: ["test.kindlegatefoundation.org"],
    // },

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