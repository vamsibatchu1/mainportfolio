'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainNav } from "../components/main-nav";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    // Start transition immediately when component mounts
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200); // Match the transition duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeInOut",
              delay: 0.2
            }}
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div 
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut",
          delay: 0.6
        }}
      >
      <div className="w-[1440px] mx-auto min-h-screen">
        {/* Navbar */}
        <div className="flex flex-col items-center pt-8 pb-4">
          <MainNav />
        </div>
        
        {/* Page Content */}
        {children}
      </div>
      </motion.div>
    </div>
  );
}
