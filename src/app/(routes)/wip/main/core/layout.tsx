'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CoreLayoutProps {
  children: React.ReactNode;
}

export default function CoreLayout({ children }: CoreLayoutProps) {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Core Navigation - You can customize this based on your design */}
      <div className="flex-shrink-0 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-8">
            <h2 className="text-lg font-semibold text-gray-900">Core</h2>
            {/* Navigation items for core sub-routes */}
            <div className="flex items-center space-x-6">
              <a href="/wip/main/core/home" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="/wip/main/core/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="/wip/main/core/highlights" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Highlights
              </a>
              <a href="/wip/main/core/work" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Work
              </a>
              <a href="/wip/main/core/writing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Writing
              </a>
              <a href="/wip/main/core/play" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Play
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Core Content Area */}
      <motion.main 
        className="flex-1 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </div>
  );
}
