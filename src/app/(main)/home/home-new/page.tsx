'use client';

import React, { useState, useEffect } from 'react';
import LeftCard from './components/LeftCard';
import { motion, AnimatePresence } from 'framer-motion';
import { fourFont } from '@/app/fonts';
import ToolbarPage from '../../navbar/toolbar/page';

export default function HomeNewPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        setShowOverlay(prev => !prev);
      }
      if (event.code === 'Escape') {
        setShowOverlay(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="bg-black flex-col min-h-screen flex items-center justify-center p-10">
          <LeftCard />
          <motion.div 
              style={{ 
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'end',
                justifyContent: 'end',
                gap: '10px',
                width: '992px',
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9.49958L2 11.9996L11.6422 16.8207C11.7734 16.8863 11.839 16.9191 11.9078 16.932C11.9687 16.9434 12.0313 16.9434 12.0922 16.932C12.161 16.9191 12.2266 16.8863 12.3578 16.8207L22 11.9996L17 9.49958M7 14.4996L2 16.9996L11.6422 21.8207C11.7734 21.8863 11.839 21.9191 11.9078 21.932C11.9687 21.9434 12.0313 21.9434 12.0922 21.932C12.161 21.9191 12.2266 21.8863 12.3578 21.8207L22 16.9996L17 14.4996M2 6.99958L11.6422 2.17846C11.7734 2.11287 11.839 2.08008 11.9078 2.06717C11.9687 2.05574 12.0313 2.05574 12.0922 2.06717C12.161 2.08008 12.2266 2.11287 12.3578 2.17846L22 6.99958L12.3578 11.8207C12.2266 11.8863 12.161 11.9191 12.0922 11.932C12.0313 11.9434 11.9687 11.9434 11.9078 11.932C11.839 11.9191 11.7734 11.8863 11.6422 11.8207L2 6.99958Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={`${fourFont.className} text-gray-400`}>TAP SPACEBAR TO NAVIGATE</span>
            </motion.div>
        </div>

        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ backdropFilter: 'blur(10px)' }}
              onClick={() => setShowOverlay(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 100 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                className="relative max-w-6xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <ToolbarPage />
              </motion.div>
            </motion.div> 
          )}
        </AnimatePresence>
    </>
  );
} 