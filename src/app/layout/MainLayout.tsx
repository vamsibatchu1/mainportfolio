'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MainNav } from "../components/main-nav";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
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
  );
}
