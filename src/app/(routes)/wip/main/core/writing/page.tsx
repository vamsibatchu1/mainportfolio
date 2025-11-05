'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WritingPage() {
  return (
    <div className="relative h-full w-full p-6 overflow-hidden">
      {/* Gradient Background Layers - Exact code from user */}
      <div className="bg-inverse z-[2] absolute left-0 right-0 top-0 h-[160px] w-full" style={{background:'linear-gradient(180deg, #FFF 14.33%, rgba(255, 255, 255, 0.00) 100%)'}}></div>
      
      <div aria-hidden="true" className="z-[1] pointer-events-none absolute" style={{top:'1px',left:'1px',right:'1px',bottom:'1px',height:'calc(50vh - 2px)',width:'calc(100% - 2px)',background:'radial-gradient(48.46% 47.11% at 25.78% 0%, #83DFFF 0%, rgba(131, 223, 255, 0.00) 100%), linear-gradient(180deg, rgba(73, 156, 222, 0.00) 48.1%, #499CDE 100%), radial-gradient(59.6% 57.06% at 18.87% 74.15%, #6686E4 14.71%, rgba(102, 134, 228, 0.00) 100%), #61B5DB',transform:'rotate(180deg)'}}></div>
      
      <div aria-hidden="true" className="z-[1] pointer-events-none absolute left-0 top-0 w-full" style={{height:'50vh',background:'radial-gradient(65.51% 113.9% at 50% 113.9%, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',transform:'rotate(180deg)'}}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Writing</h1>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <p className="text-gray-600 leading-relaxed">
              This is the Writing section within the Core area. Share your thoughts, 
              articles, blog posts, and written content here.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
