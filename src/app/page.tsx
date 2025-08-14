'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fiveFont, jakartaFont, fourFont } from './fonts';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, RotateCcw, Play, Package, Layout, FileX, Settings, Briefcase, Zap, CheckCircle } from 'lucide-react';

export default function WelcomeScreen() {
  const router = useRouter();
  const [currentSymbol, setCurrentSymbol] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const symbols = ['/images/refresh-images/symbol1.svg', 
    '/images/refresh-images/symbol2.svg', 
    '/images/refresh-images/symbol4.svg',
    '/images/refresh-images/symbol5.svg',
    '/images/refresh-images/symbol3.svg', 
    '/images/refresh-images/symbol6.svg',
    '/images/refresh-images/symbol7.svg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSymbol((prev) => (prev + 1) % symbols.length);
    }, 250);

    return () => clearInterval(interval);
  }, [symbols.length]);



  // Auto-scroll effect
  useEffect(() => {
    if (isExiting) return;
    
    const timer = setTimeout(() => {
      setIsScrolling(true);
    }, 3500); // Start scrolling after 3 seconds

    return () => clearTimeout(timer);
  }, [isExiting]);

  useEffect(() => {
    if (!isScrolling || isPaused || isExiting) return;

    const interval = setInterval(() => {
      setScrollProgress((prev) => {
        const newProgress = prev + 0.01;
        return newProgress >= 1 ? 0 : newProgress; // Loop back to start
      });
    }, 50); // Smooth scrolling

    return () => clearInterval(interval);
  }, [isScrolling, isPaused, isExiting]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleRestart = () => {
    setIsPaused(false);
    // Reset scroll progress to exactly 0 and ensure it's applied
    setScrollProgress(0);
    // Force multiple resets to ensure it takes effect
    setTimeout(() => {
      setScrollProgress(0);
    }, 10);
    setTimeout(() => {
      setScrollProgress(0);
    }, 50);
  };

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

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !isExiting && !isLoading) {
      setIsExiting(true);
      
      // After elements start disappearing, show loading screen
      setTimeout(() => {
        setIsLoading(true);
        setCurrentMessageIndex(0);
        
        // Start loading messages
        const messageInterval = setInterval(() => {
          setCurrentMessageIndex((prev) => {
            const nextIndex = prev + 1;
            
            // If we've shown all messages, navigate to main app
            if (nextIndex >= loadingMessages.length) {
              clearInterval(messageInterval);
              setTimeout(() => {
                router.push('/refresh/layout');
              }, 1000); // Wait 1 second after showing the final message
              return prev; // Keep showing the last message
            }
            
            return nextIndex;
          });
        }, 750); // Change message every 750ms
        
        // Cleanup interval after navigation
        return () => clearInterval(messageInterval);
      }, 600); // Wait 600ms for exit animation to start
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isExiting]);

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

  const movieReelVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 2.0, duration: 0.8, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const movieReelColumnVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollbarVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 2.4, duration: 0.8, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };





  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          // Loading Screen
          <motion.div 
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Loading Messages */}
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMessageIndex}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div className="text-white/80">
                    {React.createElement(loadingIcons[currentMessageIndex], {
                      size: 20,
                      className: "text-white/80"
                    })}
                  </div>
                  
                  {/* Text */}
                  <p className={`${jakartaFont.className} text-white text-lg font-medium`}>
                    {loadingMessages[currentMessageIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        ) : !isExiting && (
          <motion.div 
            className="w-[800px] flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* First flex row */}
            <motion.div 
              className="flex flex-row gap-5"
              variants={containerVariants}
            >
              {/* First column - 160px width */}
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
              
              {/* Second column - 400px width */}
              <motion.div className="w-[400px]" variants={itemVariants}>
                <div className="w-full h-full lex items-end">
                  <Image
                    src="/images/refresh-images/vamsibatchu.svg"
                    alt="Vamsi Batchu"
                    width={400}
                    height={400}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
              
              {/* Third column - 200px width */}
              <motion.div className="w-[200px]" variants={itemVariants}>
                <div className="w-full h-full flex items-end">
                  {/* Text block */}
                  <p className={`${fiveFont.className} text-white text-[32px] leading-[92%] tracking-[-0.04em]`}>
                    product designer &amp; creative technologist crafting possibilities with craft &amp; code.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            
            {/* Second flex row - Movie reel */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <motion.div 
              className="w-[800px] h-[200px] bg-[#232323] p-[12px] overflow-hidden"
              variants={movieReelVariants}
            >
              <div 
                className="flex flex-row gap-3 transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(${scrollProgress * -400}px)`
                }}
              >
                {/* First column - Text */}
                <motion.div 
                  className="flex-shrink-0 w-[220px] h-[176px] flex items-start"
                  variants={movieReelColumnVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 2.2 }}
                >
                  <div className={`${jakartaFont.className} text-white font-bold text-[26px] leading-[130%] tracking-[-0.05em]`}>
                    <p>Currently at rocket mortgage, leading 0 to 1 AI product experiences for enterprise users.</p>
                  </div>
                </motion.div>
                
                {/* Second column - Image */}
                <motion.div 
                  className="flex-shrink-0 w-[295px] h-[176px] flex"
                  variants={movieReelColumnVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 2.4 }}
                >
                    <Image
                        src="/images/refresh-images/productshot1.svg"
                        alt="Rocket Mortgage"
                        width={340}
                        height={176}
                        className="w-full h-full"
                    />
                </motion.div>
                
                {/* Third column - Image */}
                <motion.div 
                  className="flex-shrink-0 w-[295px] h-[176px] flex"
                  variants={movieReelColumnVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 2.6 }}
                >
                    <Image
                        src="/images/refresh-images/productshot2.svg"
                        alt="Rocket Mortgage"
                        width={340}
                        height={176}
                        className="w-full h-full"
                    />
                </motion.div>
                
                {/* Fourth column - Text */}
                <motion.div 
                  className="flex-shrink-0 w-[180px] h-[176px] flex items-start"
                  variants={movieReelColumnVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 2.8 }}
                >
                  <div className={`${jakartaFont.className} text-white font-bold text-[26px] leading-[130%] tracking-[-0.05em]`}>
                    <p>Creating next generation financial tools.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
                        {/* Third row - Instructions and control icons */}
            <motion.div 
              className="flex justify-between items-center"
              variants={scrollbarVariants}
            >
              {/* Instructions */}
              <div className={`${fourFont.className} text-white/50 text-sm`}>
                Press Enter to continue...
              </div>
              
              {/* Control Icons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePause}
                  className="text-white/60 hover:text-white/80 transition-colors"
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleRestart}
                  className="text-white/60 hover:text-white/80 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
