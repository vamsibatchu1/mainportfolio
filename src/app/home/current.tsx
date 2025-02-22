"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Current() {
  return (
    <motion.div 
      className="h-[100svh] w-full overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Modern portfolio content will go here */}
    </motion.div>
  );
} 