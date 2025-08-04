'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { priFont } from '@/app/fonts';
import ToolbarPage from '../navbar/toolbar/toolbar';
import { useSound } from '@/hooks/use-sound';
import WelcomeDialog from '@/components/ui/WelcomeDialog';

const LandingPageNew2: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true);
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

  const handleYesClick = () => {
    setShowWelcomeDialog(false);
  };

  const handleYesAgainClick = () => {
    setShowWelcomeDialog(false);
  };

  const handleCloseDialog = () => {
    setShowWelcomeDialog(false);
  };

  return (
    <>
      <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center" style={{ backgroundImage: 'url(/images/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        
        {/* Welcome Dialog */}
        <AnimatePresence>
          {showWelcomeDialog && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10"
            >
              <WelcomeDialog 
                onYesClick={handleYesClick}
                onYesAgainClick={handleYesAgainClick}
                onClose={handleCloseDialog}
              />
            </motion.div>
          )}
        </AnimatePresence>

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