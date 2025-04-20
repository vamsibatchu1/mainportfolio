'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

// Project data
const projects = [
  {
    id: 1,
    title: 'SkinAI',
    description: 'AI-powered skin cancer detection application',
    image: '/projects/skinai.png',
    category: 'Mobile App',
    year: '2023',
  },
  {
    id: 2,
    title: 'Filmflicks',
    description: 'Modern streaming service with personalized recommendations',
    image: '/projects/filmflicks.png',
    category: 'Web App',
    year: '2022',
  },
  {
    id: 3,
    title: 'CogniLearn',
    description: 'Adaptive learning platform for students',
    image: '/projects/cognilearn.png',
    category: 'EdTech',
    year: '2023',
  },
  {
    id: 4,
    title: 'FinTrack',
    description: 'Personal finance tracking and investment dashboard',
    image: '/projects/fintrack.png',
    category: 'Finance',
    year: '2022',
  },
  {
    id: 5,
    title: 'EcoHome',
    description: 'Smart home system for energy optimization',
    image: '/projects/ecohome.png',
    category: 'IoT',
    year: '2023',
  },
  {
    id: 6,
    title: 'TaskFlow',
    description: 'Productivity tool for team collaboration',
    image: '/projects/taskflow.png',
    category: 'Productivity',
    year: '2022',
  },
];

export default function WorkContent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold mb-4`}>
          My Work
        </h1>
        <p className={`${inter.className} text-lg text-gray-600 max-w-2xl mx-auto`}>
          A collection of projects I&apos;ve led and contributed to over the years.
        </p>
      </motion.div>

      <AnimatePresence>
        {loaded && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`${spaceGrotesk.className} text-xl font-bold`}>{project.title}</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className={`${inter.className} text-gray-600 mb-4`}>{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.category}</span>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 