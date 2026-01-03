'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fiveFont, jakartaFont, fourFont } from '../fonts';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Package, Layout, FileX, Settings, Briefcase, Zap, CheckCircle } from 'lucide-react';

export default function WelcomeScreen() {
  const router = useRouter();
  const [currentSymbol, setCurrentSymbol] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isLoadingPhase, setIsLoadingPhase] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [showControlIcons, setShowControlIcons] = useState(true);
  const [showInstructionText, setShowInstructionText] = useState(true);
  const [startLoadingMessages, setStartLoadingMessages] = useState(false);
  const [showLandingImage, setShowLandingImage] = useState(false);
  
  const symbols = ['/images/refresh-images/symbol1.svg', 
    '/images/refresh-images/symbol2.svg', 
    '/images/refresh-images/symbol4.svg',
    '/images/refresh-images/symbol5.svg',
    '/images/refresh-images/symbol3.svg', 
    '/images/refresh-images/symbol6.svg',
    '/images/refresh-images/symbol7.svg'];

  const loadingMessages = [
    "Loading components...",
    "Adjusting layouts...",
    "Cleaning up files...",
    "Initializing systems...",
    "Preparing workspace...",
    "Optimizing performance...",
    "Finalizing setup..."
  ];

  const loadingIcons = [
    Package,
    Layout,
    FileX,
    Settings,
    Briefcase,
    Zap,
    CheckCircle
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSymbol((prev) => {
        const nextSymbol = (prev + 1) % symbols.length;
        // After cycling through all symbols once, show landing image
        if (nextSymbol === 0 && prev === symbols.length - 1) {
          setTimeout(() => {
            setShowLandingImage(true);
          }, 500); // Small delay after completing cycle
        }
        return nextSymbol;
      });
    }, 250);

    return () => clearInterval(interval);
  }, [symbols.length]);




  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter' && !isExiting && !isLoadingPhase) {
      setIsLoadingPhase(true);
    }
  }, [isExiting, isLoadingPhase]);

  // Loading sequence effect
  useEffect(() => {
    if (!isLoadingPhase) return;

    // Start the sequence after images fade out (add delay)
    setTimeout(() => {
      // Hide control icons after delay
      setTimeout(() => {
        setShowControlIcons(false);
        
        // After control icons disappear, start loading messages
        setTimeout(() => {
          setStartLoadingMessages(true);
        }, 500); // Wait for control icons to fade away
      }, 500); // 0.5 second delay for control icons to disappear
    }, 100); // Delay after images fade out

    return () => {};
  }, [isLoadingPhase, router]);

  // Loading messages effect - separate from the main sequence
  useEffect(() => {
    if (!startLoadingMessages) return;

    const loadingInterval = setInterval(() => {
      setLoadingIndex((prev) => {
        const nextIndex = prev + 1;
        
        // If we've shown all loading messages, start exit animation
        if (nextIndex >= loadingMessages.length) {
          // Clear the interval to stop cycling
          clearInterval(loadingInterval);
          
          setTimeout(() => {
            setIsExiting(true);
            // Navigate to new page after fade-out animation completes
            setTimeout(() => {
              router.push('/');
            }, 300); // Wait for fade-out animation
          }, 100); // Wait 0.1 seconds after showing the final message
          return loadingMessages.length - 1; // Keep showing the final message
        }
        
        return nextIndex;
      });
    }, 750); // Change message every 750ms

    return () => {
      clearInterval(loadingInterval);
    };
  }, [startLoadingMessages, router, loadingMessages.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };







  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center relative">
      {/* Landing Image - shown after symbol animation */}
      <AnimatePresence>
        {showLandingImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed bottom-0 left-0 right-0 flex justify-center items-end pb-8"
          >
            <img
              src="/images/port/landing.png"
              alt="Landing"
              className="max-w-full h-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content that fades during loading */}
      <AnimatePresence mode="wait">
        {!isExiting && !isLoadingPhase && !showLandingImage && (
          <motion.div 
            className="w-[800px] flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* First column only - Symbol animation */}
            <motion.div 
              className="flex justify-center"
              variants={containerVariants}
            >
              <motion.div className="w-[160px]" variants={itemVariants}>
                <div className="w-[160px] flex items-end">
                  <Image
                    src={symbols[currentSymbol]}
                    alt={`Symbol ${currentSymbol + 1}`}
                    width={160}
                    height={160}
                    className="w-[160px] h-auto transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Instructions section - stays visible during loading */}
      {!showLandingImage && (
      <div className="fixed bottom-10 left-8 right-8">
        <div className="w-[800px] mx-auto flex justify-between items-center">
          <AnimatePresence>
            {/* Instructions */}
            {showInstructionText && (
              <motion.div 
                className={`${fourFont.className} text-white/50 text-sm flex items-center gap-2`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  key={startLoadingMessages ? loadingIndex : 'initial'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {startLoadingMessages ? (
                    <>
                      {React.createElement(loadingIcons[loadingIndex % loadingIcons.length], {
                        size: 16,
                        className: "text-white/50"
                      })}
                      {loadingMessages[loadingIndex % loadingMessages.length]}
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      Press Enter to continue...
                    </>
                  )}
                </motion.div>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </div>
      )}
    </div>
  );
} 