'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { priFont } from '@/app/fonts';
import ToolbarPage from '../navbar/toolbar/toolbar';
import { useSound } from '@/hooks/use-sound';

const LandingPageNew2: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { playSound } = useSound();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isInputFocused = target.tagName === 'INPUT' || 
                             target.tagName === 'TEXTAREA' || 
                             target.isContentEditable;

      if (event.code === 'Space') {
        if (!isInputFocused) {
          event.preventDefault();
          if (!showOverlay) {
            playSound('tab-appear');
            setShowOverlay(true);
          }
        }
      }
      
      if (event.code === 'Escape') {
        setShowOverlay(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showOverlay, playSound]);

  return (
    <>
      <div className="min-h-screen w-full relative bg-black overflow-hidden flex items-center justify-center">
        
        {/* Container for all images - centered on page */}
        <div className="relative" style={{ width: '1215px', height: '571px' }}>
        
        {/* Mac Computer - x=0, y=16, w=432px, h=555.5px - 1st */}
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
            left: '0px',
            top: '16px',
          }}
        >
          <img 
            src="/images/home-new2/mac.png" 
            alt="Mac computer" 
            className="w-[432px] h-[555.5px]"
          />
        </motion.div>

        {/* Folder icon - x=87, y=109, w=116.5, h=96.5 - 2nd */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute"
          style={{
            left: '87px',
            top: '109px',
          }}
        >
          <img 
            src="/images/home-new2/folder.png" 
            alt="Folder icon" 
            className="w-[116.5px] h-[96.5px]"
          />
        </motion.div>

        {/* Sticky note - x=39, y=395, w=112.5, h=112.5 - 2nd */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute"
          style={{
            left: '39px',
            top: '395px',
          }}
        >
          <img 
            src="/images/home-new2/sticky.png" 
            alt="Sticky note" 
            className="w-[112.5px] h-[112.5px]"
          />
        </motion.div>

        {/* Card 1 - x=437, y=0, w=407, h=295.5 - 3rd */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.0,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute"
          style={{
            left: '437px',
            top: '0px',
          }}
        >
          <img 
            src="/images/home-new2/card1.png" 
            alt="Portfolio card 1" 
            className="w-[407px] h-[295.5px] opacity-90 hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* Card 2 - x=437, y=320, w=481, h=250 - 3rd */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.0,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute"
          style={{
            left: '437px',
            top: '320px',
          }}
        >
          <img 
            src="/images/home-new2/card2.png" 
            alt="Portfolio card 2" 
            className="w-[481px] h-[250px] opacity-90 hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* Card 3 - x=844, y=432, w=354, h=139 - 4th */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute"
          style={{
            left: '844px',
            top: '432px',
          }}
        >
          <img 
            src="/images/home-new2/card3.png" 
            alt="Portfolio card 3" 
            className="w-[354px] h-[139px] opacity-90 hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* "Let's do this" Speech Bubble - x=792, y=230, w=423, h=110.5 - 5th */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute"
          style={{
            left: '792px',
            top: '230px',
          }}
        >
          <img 
            src="/images/home-new2/dothis.png" 
            alt="Let's do this speech bubble" 
            className="w-[423px] h-[110.5px]"
          />
        </motion.div>

        {/* Ctrl/Yes Button - x=1059, y=382, w=156, h=100.5 - 5th */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute"
          style={{
            left: '1059px',
            top: '382px',
          }}
        >
          <img 
            src="/images/home-new2/ctrl.png" 
            alt="Ctrl Yes button" 
            className="w-[156px] h-[100.5px] cursor-pointer hover:scale-105 transition-transform"
          />
        </motion.div>

        </div> {/* End of container */}

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
            delay: 2.5, 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <span className={`${priFont.className} text-[#666666] text-[20px] leading-none`}>
            Tap
          </span>
          <div 
            style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg
              width="24"
              height="24"
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
          <span className={`${priFont.className} text-[#666666] text-[20px] leading-none`}>
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

export default LandingPageNew2; 