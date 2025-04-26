"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { MenuContentProps } from './types';
import { louize, inter } from '@/app/fonts';

// Removed sample experiment data - not needed for new layout
// const experiments = [...];

export function ExperimentsContent({ isActive }: MenuContentProps) {
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
        <h4 className={`${louize.className} font-medium mb-3 text-xl`}>Experiments</h4>
        <p className={`${inter.className} text-sm leading-relaxed text-gray-600`}>
          I love experimenting with new technologies and building fun apps. Take a look!
        </p>
         <a href="/experiments" className={`${inter.className} text-sm text-gray-600 hover:text-black mt-4 inline-block`}>
            View all experiments →
        </a>
      </motion.div>
      
      {/* Two image columns for animations */}
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
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 h-full rounded-md group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
             {/* Placeholder for Animation 1 */}
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-indigo-400 text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity">Animation Preview 1</span>
             </div>
          </div>
        </motion.div>
        
        {/* Image column 2 */}
        <motion.div 
          className="w-1/2"
          variants={itemVariants}
          custom={1}
        >
           <div className="bg-gradient-to-br from-pink-100 to-rose-100 h-full rounded-md group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
             {/* Placeholder for Animation 2 */}
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-rose-400 text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity">Animation Preview 2</span>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 