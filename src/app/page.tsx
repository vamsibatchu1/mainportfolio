'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fiveFont, jakartaFont, fourFont } from './fonts';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, RotateCcw, Play, ArrowRight, Package, Layout, FileX, Settings, Briefcase, Zap, CheckCircle } from 'lucide-react';

export default function WelcomeScreen() {
  const router = useRouter();
  const [currentSymbol, setCurrentSymbol] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoadingPhase, setIsLoadingPhase] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [showControlIcons, setShowControlIcons] = useState(true);
  const [showInstructionText, setShowInstructionText] = useState(true);
  const [startLoadingMessages, setStartLoadingMessages] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
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
            // Navigate to home page after fade-out animation completes
            setTimeout(() => {
              router.push('/home');
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
    if (typeof window === 'undefined') return;
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





  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center relative px-6 md:px-0 py-10">
      {/* Main content that fades during loading */}
      <AnimatePresence mode="wait">
        {!isExiting && !isLoadingPhase && (
          <motion.div 
            className="w-full max-w-[800px] flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* First flex row */}
            <motion.div 
              className="flex flex-col md:flex-row gap-5"
              variants={containerVariants}
            >
              {/* First column - 160px width */}
              <motion.div 
                className="w-[120px] md:w-[160px] h-[120px] md:h-[160px]" 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={isMobile ? { delay: 0, duration: 0.6, ease: "easeOut" } : undefined}
              >
                <div className="w-[120px] md:w-[160px] h-[120px] md:h-[160px] flex items-end">
                  <Image
                    src={symbols[currentSymbol]}
                    alt={`Symbol ${currentSymbol + 1}`}
                    width={160}
                    height={160}
                    className="w-[120px] md:w-[160px] h-[120px] md:h-[160px] object-contain transition-opacity duration-300"
                  />
                </div>
              </motion.div>
              
              {/* Second column - 400px width */}
              <motion.div 
                className="w-full md:w-[400px]" 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={isMobile ? { delay: 0.3, duration: 0.6, ease: "easeOut" } : undefined}
              >
                <div className="w-full h-full lex items-end">
                  <Image
                    src="/images/refresh-images/vamsibatchu.svg"
                    alt="Vamsi Batchu"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
              
              {/* Third column - 200px width */}
              <motion.div 
                className="w-full md:w-[200px]" 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={isMobile ? { delay: 0.6, duration: 0.6, ease: "easeOut" } : undefined}
              >
                <div className="w-full h-full flex items-end">
                  {/* Text block */}
                  <div className="flex flex-col gap-2">
                    <p className={`${fiveFont.className} text-white text-[24px] md:text-[32px] leading-[92%] tracking-[-0.04em]`}>
                      product designer &amp; creative technologist crafting possibilities with craft &amp; code.
                    </p>
                    {/* Mobile-only Rocket Mortgage text */}
                    <p className={`${fiveFont.className} text-white text-[24px] md:hidden leading-[92%] tracking-[-0.04em]`}>
                      Currently at rocket mortgage, leading 0 to 1 AI product experiences for enterprise users.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Mobile-only images - outside carousel */}
            <div className="flex flex-col gap-4 md:hidden">
              <motion.div
                variants={movieReelColumnVariants}
                initial="hidden"
                animate="visible"
                transition={isMobile ? { delay: 0.9, duration: 0.6, ease: "easeOut" } : { delay: 2.4 }}
              >
                <Image
                  src="/images/refresh-images/productshot1.svg"
                  alt="Rocket Mortgage"
                  width={340}
                  height={176}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                variants={movieReelColumnVariants}
                initial="hidden"
                animate="visible"
                transition={isMobile ? { delay: 1.2, duration: 0.6, ease: "easeOut" } : { delay: 2.6 }}
              >
                <Image
                  src="/images/refresh-images/productshot2.svg"
                  alt="Rocket Mortgage"
                  width={340}
                  height={176}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
            
            {/* Mobile Enter Site Button */}
            {!isExiting && !isLoadingPhase && (
              <motion.button
                onClick={() => {
                  if (isMobile) {
                    router.push('/home');
                  } else {
                    setIsLoadingPhase(true);
                  }
                }}
                className={`${jakartaFont.className} md:hidden w-full bg-white text-black font-bold py-4 px-6 text-[16px] mt-3 uppercase`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
              >
                enter site
              </motion.button>
            )}
            
            {/* Second flex row - Movie reel (Desktop only) */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <motion.div 
              className="hidden md:block w-[800px] h-[200px] bg-[#232323] p-[12px] overflow-hidden"
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
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Instructions section - stays visible during loading */}
      <div className="hidden md:flex fixed bottom-10 left-8 right-8">
        <div className="w-full max-w-[800px] mx-auto flex justify-between items-center">
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
            
            {/* Control Icons - Hide during loading phase */}
            {showControlIcons && (
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  delay: 2.4, 
                  duration: 0.8, 
                  ease: "easeOut",
                  exit: { duration: 0.4, ease: "easeIn" }
                }}
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
