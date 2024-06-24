/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
      {
        protocol: 'https',
        hostname: 'iris-portfolio.cdn.prismic.io',
      },
    ],
  },
}