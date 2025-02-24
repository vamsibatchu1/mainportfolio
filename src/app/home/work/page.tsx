"use client";

import { motion } from 'framer-motion';
import { IBM_Plex_Mono } from 'next/font/google';
import { doto } from '../../fonts';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const projects = [
  {
    title: "Home Buying Plan",
    description: "Led design for a 0-1 nurturing product to help first time home buyers",
    image: "/images/project_rocket.png",
    category: "Product Design",
    year: "2024"
  },
  {
    title: "Billpay Redesign",
    description: "Redesigned a billpay system for 6 million users of a major bank",
    image: "/images/project_truist.png",
    category: "UX Design",
    year: "2023"
  },
  // Add more projects here
];

export default function WorkPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={`${doto.className} text-6xl mb-4`}>SELECTED WORK</h1>
        <p className={`${ibmPlexMono.className} text-lg text-gray-600`}>
          A collection of projects I&apos;ve led and contributed to over the years.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-2xl p-6 border border-[#E7E5E4]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="aspect-video mb-6 overflow-hidden rounded-xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`${ibmPlexMono.className} text-sm text-gray-500`}>
                  {project.category}
                </span>
                <span className={`${ibmPlexMono.className} text-sm text-gray-500`}>
                  {project.year}
                </span>
              </div>
              <h2 className={`${doto.className} text-2xl`}>{project.title}</h2>
              <p className={`${ibmPlexMono.className} text-gray-600`}>
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 