'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from './components/Terminal';
import { FlickeringGrid } from './components/flickerbg';

export default function TerminalTestPage() {
  return (
    <div className="h-screen bg-gray-100 p-8 relative overflow-hidden">
      <FlickeringGrid 
        className="absolute inset-0"
        color="rgb(0, 0, 0)"
        maxOpacity={0.1}
        flickerChance={0.2}
      />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 0.6 // .3 second delay for background to show first
          }}
        >
          <Terminal />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute top-[-4px] right-4">
        <img 
          src="/images/vamsi.svg"
          alt="Vamsi"
          className="w-[120px] h-auto"
        />
      </div>
    </div>
  );
} 