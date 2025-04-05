import React, { useState, useEffect, useRef } from 'react';
import ActionBar from '../../home/components/ActionBar';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

export default function CustomActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const actionBarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This function checks if any menu item is expanded
    const checkForExpandedMenu = () => {
      const expandedMenus = document.querySelectorAll('.overflow-hidden.bg-white.backdrop-blur-xl');
      const menuArray = Array.from(expandedMenus);
      
      for (const menu of menuArray) {
        const rect = menu.getBoundingClientRect();
        if (rect.height > 50) {
          return true;
        }
      }
      
      return false;
    };
    
    // Function to handle mouse movement across the entire document
    const handleMouseMove = (e: MouseEvent) => {
      if (!actionBarRef.current || !isVisible) return;
      
      const actionBarRect = actionBarRef.current.getBoundingClientRect();
      const expandedMenuActive = checkForExpandedMenu();
      
      // Check if mouse is inside the ActionBar area with some additional margin
      const insideActionBarArea = 
        e.clientX >= actionBarRect.left - 10 && 
        e.clientX <= actionBarRect.right + 10 && 
        e.clientY >= actionBarRect.top - 10 && 
        e.clientY <= actionBarRect.bottom + 50; // Extra margin at bottom where expanded menu appears
      
      // Only show blur when menu is expanded AND mouse is in action bar area
      if (expandedMenuActive && insideActionBarArea) {
        setShowBlur(true);
      } else if (!expandedMenuActive) {
        setShowBlur(false);
      }
    };
    
    // Function to handle when mouse leaves the document entirely
    const handleMouseLeave = () => {
      setShowBlur(false);
    };
    
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
    
    // Set up observers and event listeners
    const observer = new MutationObserver(() => {
      const expandedMenuActive = checkForExpandedMenu();
      if (!expandedMenuActive) {
        setShowBlur(false);
      }
    });
    
    // Observe the document for changes to detect menu expansion/collapse when visible
    if (isVisible) {
      observer.observe(document.body, { 
        attributes: true,
        childList: true,
        subtree: true
      });
    }
    
    // Add global mouse and keyboard event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);
  
  return (
    <>
      {/* Instant display of both blur and action bar together */}
      {isVisible && (
        <>
          {/* Page blur overlay - no animation */}
          <div className={styles.pageBlurOverlay} />
          
          {/* ActionBar - no animation */}
          <div 
            ref={actionBarRef} 
            className={styles.actionBarWrapper}
          >
            <ActionBar />
          </div>
        </>
      )}
      
      {/* Additional blur for menu items when expanded */}
      {showBlur && isVisible && (
        <div className={styles.menuBlurOverlay} />
      )}
      
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