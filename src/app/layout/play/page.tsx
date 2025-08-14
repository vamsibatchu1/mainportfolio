'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, fiveFont } from '../../fonts';

export default function PlayPage() {
  const experiments = [
    {
      id: 1,
      title: "Interactive Particle System",
      category: "Creative Coding",
      description: "Real-time particle system with physics simulation and user interaction.",
      tech: "Three.js, WebGL",
      status: "Live Demo"
    },
    {
      id: 2,
      title: "Generative Typography",
      category: "Design Systems",
      description: "Algorithmically generated typography that adapts to user input and context.",
      tech: "Canvas API, JavaScript",
      status: "In Progress"
    },
    {
      id: 3,
      title: "AI-Powered Color Palette",
      category: "Machine Learning",
      description: "Neural network that generates harmonious color palettes based on input images.",
      tech: "TensorFlow.js, React",
      status: "Live Demo"
    },
    {
      id: 4,
      title: "3D Web Experience",
      category: "WebGL",
      description: "Immersive 3D web experience with custom shaders and animations.",
      tech: "Three.js, GLSL",
      status: "Live Demo"
    },
    {
      id: 5,
      title: "Interactive Data Visualization",
      category: "Data Art",
      description: "Real-time data visualization with interactive elements and smooth animations.",
      tech: "D3.js, SVG",
      status: "Live Demo"
    },
    {
      id: 6,
      title: "Sound Reactive Visuals",
      category: "Audio Visual",
      description: "Audio-reactive visual system that responds to music and sound input.",
      tech: "Web Audio API, Canvas",
      status: "In Progress"
    }
  ];

  return (
    <motion.div 
      className="w-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className={`${fiveFont.className} text-black text-[48px] leading-[100%] tracking-[-0.02em] mb-4`}>
          Experiments & Play
        </h1>
        <p className={`${jakartaFont.className} text-gray-600 text-[20px] leading-[140%] max-w-[500px]`}>
          Creative experiments, prototypes, and explorations at the intersection of design and technology.
        </p>
      </motion.div>
      
      {/* Experiments Grid */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        {experiments.map((experiment, index) => (
          <motion.div 
            key={experiment.id}
            className="group cursor-pointer bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`${jakartaFont.className} text-gray-500 text-[12px] uppercase tracking-wider`}>
                  {experiment.category}
                </span>
                <span className={`${jakartaFont.className} text-green-600 text-[12px] font-medium`}>
                  {experiment.status}
                </span>
              </div>
              
              <h3 className={`${fiveFont.className} text-black text-[20px] leading-[120%] group-hover:text-gray-600 transition-colors`}>
                {experiment.title}
              </h3>
              
              <p className={`${jakartaFont.className} text-gray-600 text-[14px] leading-[140%]`}>
                {experiment.description}
              </p>
              
              <div className="pt-2">
                <span className={`${jakartaFont.className} text-gray-500 text-[12px] font-medium`}>
                  {experiment.tech}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Call to Action */}
      <motion.div 
        className="mt-12 pt-8 border-t border-gray-200"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center">
          <p className={`${jakartaFont.className} text-gray-600 text-[16px] mb-4`}>
            Want to collaborate on something experimental?
          </p>
          <button className={`${jakartaFont.className} bg-black text-white px-8 py-4 text-[18px] font-semibold rounded-lg hover:bg-gray-800 transition-colors`}>
            Let&apos;s Create Together
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
