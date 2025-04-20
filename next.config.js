/** @type {import('next').NextConfig} */
const nextConfig = {
  serverComponentsExternalPackages: ['gsap'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'gsap/MorphSVGPlugin': 'gsap/dist/MorphSVGPlugin'
    };
    return config;
  },
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
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'vamsibatchu.com'],
    }
  },
};

module.exports = nextConfig; 