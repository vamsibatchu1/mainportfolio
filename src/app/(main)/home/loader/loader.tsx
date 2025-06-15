'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { kodeMonoFont, fiveFont } from '@/app/fonts';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showWelcomeOnly, setShowWelcomeOnly] = useState(false);

  const texts = [
    'Setting up fonts...',
    'Loading interactions...',
    'Firing up the agents...'
  ];

  useEffect(() => {
    // Preload all homepage images
    const imageUrls = [
      '/images/home-new2/mac.png',
      '/images/home-new2/folder.png',
      '/images/home-new2/sticky.png',
      '/images/home-new2/card1.png',
      '/images/home-new2/card2.png',
      '/images/home-new2/card3.png',
      '/images/home-new2/dothis.png',
      '/images/home-new2/ctrl.png'
    ];

    const preloadImages = () => {
      return Promise.all(
        imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
          });
        })
      );
    };

    // Start preloading images
    preloadImages().catch(console.error);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100); // 5 seconds total (100 / 2 * 50ms = 5000ms)

    // Text typing animation
    let textIndex = 0;
    let charIndex = 0;
    const typeText = () => {
      if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText(texts[textIndex].substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeText, 50);
        } else {
          setTimeout(() => {
            textIndex++;
            charIndex = 0;
            if (textIndex < texts.length) {
              setCurrentText('');
              setTimeout(typeText, 200);
            }
          }, 600);
        }
      }
    };

    typeText();

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Show welcome only after progress reaches 100%
    const welcomeTimer = setTimeout(() => {
      setShowWelcomeOnly(true);
      setCurrentText('Welcome!');
    }, 5000);

    // Complete after showing welcome for 1 more second
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(cursorInterval);
      clearTimeout(welcomeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto relative">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 border-2 border-white/20 rounded-full"
            />
            
            {/* Inner spinning element */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-2 border-2 border-t-white border-r-white/40 border-b-white/20 border-l-white/60 rounded-full"
            />
            
            {/* Center dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-6 bg-white rounded-full"
            />
          </div>
        </motion.div>

                {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-white mb-2" style={{ fontSize: '24px' }}>
            <div className={`${fiveFont.className}`}>
              <span>{currentText}</span>
              <motion.span
                animate={{ opacity: showCursor ? 1 : 0 }}
                className="inline-block w-0.5 bg-white ml-1"
                style={{ height: '24px' }}
              />
            </div>
            {!showWelcomeOnly && <span className={`${kodeMonoFont.className}`}>{Math.round(progress)}%</span>}
          </div>
          
          <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-white/60 to-white rounded-full relative"
            >
              {/* Shimmer effect */}
              <motion.div
                animate={{ x: [-100, 320] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-20 skew-x-12"
              />
            </motion.div>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: 100,
              x: Math.random() * 400 - 200 
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              y: -100,
              x: Math.random() * 400 - 200 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeOut" 
            }}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: '50%',
              top: '60%'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader; 