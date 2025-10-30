'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainNav } from "./nav/navbar";

interface CoreLayoutProps {
  children: React.ReactNode;
}

export default function CoreLayout({ children }: CoreLayoutProps) {
  return (
    <div className="min-h-screen relative bg-white">
      <div className="w-[1440px] mx-auto min-h-screen">
        {/* Navbar - Always visible, no transitions */}
        <div className="flex flex-col items-center pt-8 pb-4 px-6 relative z-10">
          <MainNav />
        </div>
        
        {/* Page Content - simple fade transition */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.4, 
            ease: "easeInOut"
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
