'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LeftColumn from './left-column';
import RightColumn from './right-column';

export default function LayoutPage() {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-[1600px]">
        <div className="flex flex-row">
          {/* Left Column - 600px width, black background */}
          <motion.div 
            className="w-[480px] h-screen bg-black p-[40px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LeftColumn />
          </motion.div>
          
          {/* Right Column - 1000px width, white background */}
          <motion.div 
            className="w-[1000px] bg-white p-[40px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <RightColumn />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 