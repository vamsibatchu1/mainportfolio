'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, fiveFont } from '../../fonts';

export default function HomePage() {
  return (
    <motion.div 
      className="w-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center">
        <motion.h1 
          className={`${fiveFont.className} text-black text-[64px] leading-[100%] tracking-[-0.02em] mb-8`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting digital
          <br />
          experiences with
          <br />
          purpose & precision
        </motion.h1>
        
        <motion.p 
          className={`${jakartaFont.className} text-gray-600 text-[24px] leading-[140%] tracking-[-0.01em] max-w-[600px] mb-12`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a product designer and creative technologist who believes in the power of thoughtful design to solve complex problems and create meaningful connections.
        </motion.p>
        
        <motion.div 
          className="flex flex-row gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className={`${jakartaFont.className} bg-black text-white px-8 py-4 text-[18px] font-semibold rounded-lg hover:bg-gray-800 transition-colors`}>
            View My Work
          </button>
          <button className={`${jakartaFont.className} border-2 border-black text-black px-8 py-4 text-[18px] font-semibold rounded-lg hover:bg-black hover:text-white transition-colors`}>
            Get in Touch
          </button>
        </motion.div>
      </div>
      
      {/* Stats Section */}
      <motion.div 
        className="flex flex-row gap-12 py-8 border-t border-gray-200"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div>
          <div className={`${fiveFont.className} text-black text-[32px] font-bold`}>5+</div>
          <div className={`${jakartaFont.className} text-gray-600 text-[16px]`}>Years Experience</div>
        </div>
        <div>
          <div className={`${fiveFont.className} text-black text-[32px] font-bold`}>50+</div>
          <div className={`${jakartaFont.className} text-gray-600 text-[16px]`}>Projects Completed</div>
        </div>
        <div>
          <div className={`${fiveFont.className} text-black text-[32px] font-bold`}>15+</div>
          <div className={`${jakartaFont.className} text-gray-600 text-[16px]`}>Happy Clients</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
