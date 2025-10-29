'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WorkPage() {
  return (
    <div className="h-full w-full p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Work</h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <p className="text-gray-600 leading-relaxed">
            This is the Work section within the Core area. Showcase your professional 
            work, case studies, and projects here.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
