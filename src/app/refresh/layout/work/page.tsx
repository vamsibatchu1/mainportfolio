'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, fiveFont } from '../../../fonts';

export default function WorkPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "Product Design",
      description: "Complete redesign of a major e-commerce platform focusing on user experience and conversion optimization.",
      year: "2024",
      image: "/images/card1.png"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "UX/UI Design",
      description: "Intuitive mobile banking application with advanced security features and seamless user flow.",
      year: "2023",
      image: "/images/card2.png"
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: "Data Visualization",
      description: "Comprehensive healthcare analytics dashboard for medical professionals and administrators.",
      year: "2023",
      image: "/images/card3.png"
    },
    {
      id: 4,
      title: "Social Media Platform",
      category: "Product Design",
      description: "Innovative social media platform designed for creative professionals and content creators.",
      year: "2022",
      image: "/images/card4.png"
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
          Selected Work
        </h1>
        <p className={`${jakartaFont.className} text-gray-600 text-[20px] leading-[140%] max-w-[500px]`}>
          A collection of projects that showcase my approach to design, problem-solving, and user experience.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="group cursor-pointer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 h-48">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className={`${jakartaFont.className} text-gray-500 text-[16px]`}>Project Image</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`${jakartaFont.className} text-gray-500 text-[14px] uppercase tracking-wider`}>
                  {project.category}
                </span>
                <span className={`${jakartaFont.className} text-gray-400 text-[14px]`}>
                  {project.year}
                </span>
              </div>
              
              <h3 className={`${fiveFont.className} text-black text-[24px] leading-[120%] group-hover:text-gray-600 transition-colors`}>
                {project.title}
              </h3>
              
              <p className={`${jakartaFont.className} text-gray-600 text-[16px] leading-[140%]`}>
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* View All Button */}
      <motion.div 
        className="mt-12 pt-8 border-t border-gray-200"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <button className={`${jakartaFont.className} border-2 border-black text-black px-8 py-4 text-[18px] font-semibold rounded-lg hover:bg-black hover:text-white transition-colors`}>
          View All Projects
        </button>
      </motion.div>
    </motion.div>
  );
}
