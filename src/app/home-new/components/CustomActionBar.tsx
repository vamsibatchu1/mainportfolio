import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';
import dynamic from 'next/dynamic';

// Import our immediate action bar with no delays
const ImmediateActionBar = dynamic(() => import('./ImmediateActionBar'), { ssr: false });

export default function CustomActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const actionBarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Function to handle keyboard events
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle ActionBar visibility on spacebar press
      if (e.key === " " || e.code === "Space") {
        e.preventDefault(); // Prevent page scrolling
        setIsVisible(prev => !prev);
      }
      
      // Hide ActionBar on Escape press
      if (e.key === "Escape") {
        setIsVisible(false);
      }
    };
    
    // Add global keyboard event listener
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <>
      {/* Background blur overlay with enter/exit animations */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className={styles.blurOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      
      {/* ActionBar with enter/exit animations */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            ref={actionBarRef} 
            className={styles.actionBarWrapper}
            style={{ zIndex: 999 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ 
              duration: 0.3,
              type: "spring", 
              stiffness: 500, 
              damping: 30 
            }}
          >
            <ImmediateActionBar />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Keyboard instruction indicator - shows briefly when page loads */}
      <motion.div 
        className={styles.keyboardHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5,
          delay: 2,
          opacity: { duration: 0.5, delay: 2, delayChildren: 0, staggerChildren: 0 },
          exit: { duration: 1, delay: 5 }
        }}
      >
        Press Space to open menu
      </motion.div>
    </>
  );
} 