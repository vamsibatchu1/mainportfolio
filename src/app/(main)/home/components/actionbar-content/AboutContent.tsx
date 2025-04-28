"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { MenuContentProps } from './types';
import { secFont, triFont } from '@/lib/config/fonts';

export function AboutContent({ isActive }: MenuContentProps) {
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
        className="w-[40%] pr-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className={`${secFont.className} font-medium mb-3 text-xl`}>About Me</h4>
        <p className={`${triFont.className} text-sm leading-relaxed text-gray-600`}>
          Step into my world! See how I blend design craft with code, learn about my process, plus a few fun facts.
        </p>
         <a href="/about" className={`${triFont.className} text-sm text-gray-600 hover:text-black mt-4 inline-block`}>
            Learn more →
        </a>
      </motion.div>
      
      {/* Two image columns */}
      <motion.div 
        className="flex w-[60%] gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={animationTriggered ? "show" : "hidden"}
      >
        {/* Image column 1 */}
        <motion.div 
          className="w-1/2"
          variants={itemVariants}
          custom={0}
        >
          <div className="bg-gray-200 h-full rounded-md group relative overflow-hidden">
             {/* Placeholder for image/content 1 */}
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-200"></div>
             <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-1.5 py-0.5 rounded">Design Focus</span>
          </div>
        </motion.div>
        
        {/* Image column 2 */}
        <motion.div 
          className="w-1/2"
          variants={itemVariants}
          custom={1}
        >
          <div className="bg-gray-300 h-full rounded-md group relative overflow-hidden">
             {/* Placeholder for image/content 2 */}
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-200"></div>
             <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-1.5 py-0.5 rounded">Personal Interests</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}