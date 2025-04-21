/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'assets.dub.co',
      'blog-interaction.vercel.app',
      'placehold.co'
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home-new',
        destination: '/home',
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 