/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['gsap'],
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
      'blog-interaction.vercel.app'
    ],
  },
};

module.exports = nextConfig; 