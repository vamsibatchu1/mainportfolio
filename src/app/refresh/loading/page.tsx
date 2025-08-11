'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jakartaFont } from '../../fonts';

const loadingMessages = [
  "Loading components...",
  "Adjusting layouts...",
  "Cleaning up files...",
  "Initializing systems...",
  "Preparing workspace...",
  "Optimizing performance...",
  "Finalizing setup..."
];



export default function LoadingScreen() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the animation after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 650); // Change message every 1000ms (1 second)

    return () => {
      clearInterval(messageInterval);
    };
  }, [isVisible]);

  // Message animation variants
  const messageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Loading Messages */}
        <div className="h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentMessageIndex}
              className={`${jakartaFont.className} text-white text-lg font-medium`}
              variants={messageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {loadingMessages[currentMessageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 