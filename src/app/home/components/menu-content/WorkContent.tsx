"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { MenuContentProps } from './types';
// Removed font imports (louize, inter)

// Removed workItems array

export function WorkContent({ isActive }: MenuContentProps) {
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
        delay: i * 0.1 // Additional delay based on index for the wave effect
      }
    })
  };

  return (
    <div className="p-6 h-full flex items-center justify-center">
      {/* Horizontal row of 4 Project Placeholders */}
      <motion.div 
        className="flex w-full justify-center items-center gap-4 h-full max-h-[150px]"
        variants={containerVariants}
        initial="hidden"
        animate={animationTriggered ? "show" : "hidden"}
      >
        {/* Placeholder 1 */}
        <motion.div 
          className="w-1/4 aspect-square bg-gray-200 rounded-lg hover:bg-gray-300"
          variants={itemVariants}
          custom={0} // First in the wave
        />
        
        {/* Placeholder 2 */}
        <motion.div 
          className="w-1/4 aspect-square bg-gray-200 rounded-lg hover:bg-gray-300"
          variants={itemVariants}
          custom={1} // Second in the wave
        />
        
        {/* Placeholder 3 */}
        <motion.div 
          className="w-1/4 aspect-square bg-gray-200 rounded-lg hover:bg-gray-300"
          variants={itemVariants}
          custom={2} // Third in the wave
        />
        
        {/* Placeholder 4 */}
        <motion.div 
          className="w-1/4 aspect-square bg-gray-200 rounded-lg hover:bg-gray-300"
          variants={itemVariants}
          custom={3} // Fourth in the wave
        />
      </motion.div>
    </div>
  );
} 