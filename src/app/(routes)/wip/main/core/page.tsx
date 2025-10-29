'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CorePage() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Core Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Welcome to the core section. Navigate through the different views using the tabs above.
        </p>
        
        {/* Quick navigation cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { name: 'Home', href: '/wip/main/core/home', color: 'bg-blue-50 hover:bg-blue-100' },
            { name: 'About', href: '/wip/main/core/about', color: 'bg-green-50 hover:bg-green-100' },
            { name: 'Highlights', href: '/wip/main/core/highlights', color: 'bg-purple-50 hover:bg-purple-100' },
            { name: 'Work', href: '/wip/main/core/work', color: 'bg-orange-50 hover:bg-orange-100' },
            { name: 'Writing', href: '/wip/main/core/writing', color: 'bg-pink-50 hover:bg-pink-100' },
            { name: 'Play', href: '/wip/main/core/play', color: 'bg-yellow-50 hover:bg-yellow-100' },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`p-4 rounded-lg border border-gray-200 ${item.color} transition-colors`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-medium text-gray-900">{item.name}</h3>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
