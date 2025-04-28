"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { MenuContentProps } from './types';
import { secFont, triFont } from '@/lib/config/fonts';

// NOTE: Content copied from AboutContent.tsx as requested.
// Renamed function to BlogContent.
export function BlogContent({ isActive }: MenuContentProps) {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  
  // Reset animation when component becomes active
  useEffect(() => {
    if (isActive) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setAnimationTriggered(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [isActive]);
  
  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    show: (i: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: i * 0.1
      }
    })
  };

  return (
    <div className="p-6 h-full flex">
      {/* First column - Text content */}
      <motion.div 
        className="w-[40%] pr-4 flex flex-col justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      > 
        <h4 className={`${secFont.className} font-medium mb-3 text-xl`}>From the Blog</h4>
        <p className={`${triFont.className} text-sm leading-relaxed text-gray-600`}>
          Thoughts on design, code, and product. Explore articles on UI/UX, front-end techniques, design systems, and more. Read on!
        </p>
         <a href="/blog" className={`${triFont.className} text-sm text-gray-600 hover:text-black mt-4 inline-block`}>
            View all posts →
        </a>
      </motion.div>
      
      {/* Two image columns - representing blog posts or categories */}
      <motion.div 
        className="flex w-[60%] gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={animationTriggered ? "show" : "hidden"}
      >
        {/* Image column 1 - Represents latest/featured post */}
        <motion.div 
          className="w-1/2"
          variants={itemVariants}
          custom={0}
        >
          <div className="bg-gray-200 h-full rounded-md group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-200"></div>
             <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-1.5 py-0.5 rounded">Latest Post</span>
          </div>
        </motion.div>
        
        {/* Image column 2 - Represents another post/category */}
        <motion.div 
          className="w-1/2"
          variants={itemVariants}
          custom={1}
        >
          <div className="bg-gray-300 h-full rounded-md group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-200"></div>
            <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-1.5 py-0.5 rounded">Design Thinking</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 