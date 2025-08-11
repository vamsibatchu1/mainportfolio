'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LeftColumn from './left-column';
import RightColumn from './right-column';

export default function LayoutPage() {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full h-screen flex flex-row">
        {/* Left Column - Fixed, black background */}
        <motion.div 
          className="w-[480px] h-screen bg-black p-[40px] flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LeftColumn activeItem={activeItem} setActiveItem={setActiveItem} />
        </motion.div>
        
        {/* Right Column - Scrollable, white background */}
        <motion.div 
          className="flex-1 h-screen bg-white p-[40px] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <RightColumn activeItem={activeItem} />
        </motion.div>
      </div>
    </motion.div>
  );
} 