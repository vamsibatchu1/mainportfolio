'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { priFont } from '@/app/fonts';
import ToolbarPage from '../../navbar/toolbar/toolbar';
import { useSound } from '@/hooks/use-sound';

const LandingPage: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { playSound } = useSound();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      // Check if the event target is an input, textarea, or contenteditable element
      const isInputFocused = target.tagName === 'INPUT' || 
                             target.tagName === 'TEXTAREA' || 
                             target.isContentEditable;

      if (event.code === 'Space') {
        // Only preventDefault and show overlay if not focused on an input field
        if (!isInputFocused) {
          event.preventDefault();
          if (!showOverlay) {
            playSound('tab-appear'); // Play slide-up sound
            setShowOverlay(true);
          }
        }
        // If an input is focused, do nothing here, let the space be typed
      }
      
      if (event.code === 'Escape') {
        // Escape should always work to close the overlay
        setShowOverlay(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showOverlay, playSound]);

  // Calculate the actual bounds needed for all cards
  // Card 1: left: 595px, auto size (assume ~250px width, ~150px height)
  // Card 2: left: 508px, width: 537px, height: 279px, top: 450px
  // Card 3: left: 964px, width: 375px, height: 155px, top: 579px
  // Card 4: left: 1284px, width: 128px, height: 120px, top: 521px
  
  // Calculate container bounds:
  // Right edge: Card 4 (1284 + 128) = 1412px
  // Bottom edge: Card 3 (579 + 155) = 734px
  // Left edge: Card 2 (508px) = 508px
  // Top edge: Card 1 (346px) = 346px
  
  // Container size: width = 1412 - 508 = 904px, height = 734 - 346 = 388px
  // Adjust card positions relative to container (subtract left/top offsets)
  
  return (
    <>
      <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/blackbg.png)',
          }}
        />
              
        {/* Main content container - auto-sized to wrap around cards */}
        <div 
          className="relative z-10" 
          style={{ 
            width: '904px', 
            height: '388px',
            transform: 'scale(0.75)',
            transformOrigin: 'center'
          }}
        >
          
          {/* Card 1 - Top center position */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute"
            style={{
              left: '87px', // 595 - 508 = 87px
              top: '0px',   // 346 - 346 = 0px
            }}
          >
            <img 
              src="/images/Card 1.svg" 
              alt="Portfolio showcase card featuring design work" 
              className="drop-shadow-2xl"
              style={{
                width: 'auto',
                height: 'auto'
              }}
            />
          </motion.div>

          {/* Card 2 - Left side, larger card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute"
            style={{
              left: '0px',   // 508 - 508 = 0px
              top: '104px',  // 450 - 346 = 104px
            }}
          >
            <img 
              src="/images/Card 2.svg" 
              alt="Featured project card with technical details" 
              className="drop-shadow-2xl"
              style={{
                width: '537px',
                height: '279px'
              }}
            />
          </motion.div>

          {/* Card 3 - Right side, medium card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute"
            style={{
              left: '456px', // 964 - 508 = 456px
              top: '233px',  // 579 - 346 = 233px
            }}
          >
            <img 
              src="/images/Card 3.svg" 
              alt="Skills and experience highlight card" 
              className="drop-shadow-2xl"
              style={{
                width: '375px',
                height: '155px'
              }}
            />
          </motion.div>

          {/* Card 4 - Far right, small square card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute"
            style={{
              left: '776px', // 1284 - 508 = 776px
              top: '175px',  // 521 - 346 = 175px
            }}
          >
            <img 
              src="/images/Card 4.svg" 
              alt="Personal achievement and contact card" 
              className="drop-shadow-2xl"
              style={{
                width: '128px',
                height: '120px'
              }}
            />
          </motion.div>
          
        </div>

        {/* Spacebar Navigation Instruction */}
        <motion.div 
          style={{ 
            position: 'fixed',
            bottom: '40px',
            left: '0',
            right: '0',
            margin: '0 auto',
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            zIndex: 10,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 3.3, 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <span className={`${priFont.className} text-[#666666] text-[31px] leading-none`}>
            Tap
          </span>
          <div 
            style={{
              width: '40.8px',
              height: '40.8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg
              width="40.8"
              height="40.8"
              viewBox="0 0 41 41"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M37.3998 28.9V30.6C37.3998 31.45 36.5498 32.3 35.6998 32.3H5.09982C4.24982 32.3 3.39982 31.45 3.39982 30.6V28.9"
                stroke="#854D27"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.4"
              />
            </svg>
          </div>
          <span className={`${priFont.className} text-[#666666] text-[31px] leading-none`}>
            spacebar to navigate
          </span>
        </motion.div>
      </div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-end justify-center"
            style={{ backdropFilter: 'blur(80px)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 100 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-6xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <ToolbarPage onDismiss={() => setShowOverlay(false)} />
            </motion.div>
          </motion.div> 
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingPage; 