'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jakartaFont } from '../../fonts';
import { useRouter } from 'next/navigation';
import { 
  Package, 
  Layout, 
  FileX, 
  Settings, 
  Briefcase, 
  Zap, 
  CheckCircle 
} from 'lucide-react';

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



export default function LoadingScreen() {
  const router = useRouter();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

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
      setCurrentMessageIndex((prev) => {
        const nextIndex = prev + 1;
        
        // If we've shown all messages, start exit animation
        if (nextIndex >= loadingMessages.length) {
          setTimeout(() => {
            setIsExiting(true);
            // Redirect after fade-out animation completes
            setTimeout(() => {
              router.push('/refresh/layout');
            }, 800); // Wait for fade-out animation
          }, 1000); // Wait 1 second after showing the final message
          return prev; // Keep showing the last message
        }
        
        return nextIndex;
      });
    }, 750); // Change message every 750ms

    return () => {
      clearInterval(messageInterval);
    };
  }, [isVisible, router]);

  // Message animation variants
  const messageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <motion.div 
      className="min-h-screen bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Loading Messages */}
        <div className="h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessageIndex}
              className="flex items-center gap-3"
              variants={messageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
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
      </div>
    </motion.div>
  );
} 