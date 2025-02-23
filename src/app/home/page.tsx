"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Past from './past';
import Transition from './transition';
import dynamic from 'next/dynamic';

type Phase = 'past' | 'transition' | 'current';

const Current = dynamic(() => import('./current'), { ssr: false });

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState<Phase>('past');

  // Handle phase transitions
  const handleKeyPress = (e: KeyboardEvent) => {
    if (currentPhase === 'past' && e.key === 'Enter') {
      setCurrentPhase('transition');
      // Auto transition to current after 3 seconds
      setTimeout(() => {
        setCurrentPhase('current');
      }, 3000);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPhase]);

  // Render current phase with AnimatePresence for smooth transitions
  return (
    <main>
      <AnimatePresence mode="wait">
        {currentPhase === 'past' && (
          <motion.div
            key="past"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Past />
          </motion.div>
        )}
        {currentPhase === 'transition' && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Transition />
          </motion.div>
        )}
        {currentPhase === 'current' && (
          <motion.div
            key="current"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Current />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

