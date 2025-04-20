"use client";

import React, { useState, useEffect } from 'react';
import { 
  RegularDualCard,
  CardSubtitle,
  CardTitle
} from '@/components/ui/dual-card';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Rocket, Zap, Award, Star } from 'lucide-react';

// Icons that will rotate
const ICONS = [Clock, Rocket, Zap, Award, Star, ArrowRight];

export default function IntroAnimation() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  
  // Animate loading progress
  useEffect(() => {
    if (loadingProgress < 100 && subtitleVisible) {
      const timer = setTimeout(() => {
        setLoadingProgress(prev => Math.min(prev + 1, 100));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress, subtitleVisible]);
  
  // Rotate icons every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIconIndex(prev => (prev + 1) % ICONS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  
  // Staggered animation timing
  useEffect(() => {
    // Show title after card appears
    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 800);
    
    // Show subtitle after title appears
    const subtitleTimer = setTimeout(() => {
      setSubtitleVisible(true);
    }, 1600);
    
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);
  
  // Get current icon component
  const CurrentIcon = ICONS[currentIconIndex];
  
  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ 
        backgroundImage: 'url("/images/background-gradient.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          ease: "easeOut"
        }}
        className="w-full max-w-2xl"
      >
        <RegularDualCard 
          whiteCardContent={
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: titleVisible ? 1 : 0,
                  y: titleVisible ? 0 : 20 
                }}
                transition={{ duration: 0.5 }}
              >
                <CardTitle>Welcome to my portfolio</CardTitle>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: subtitleVisible ? 1 : 0,
                  y: subtitleVisible ? 0 : 20 
                }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="relative">
                  <CardSubtitle>Loading experience {loadingProgress}%</CardSubtitle>
                  <div className="h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#000]" 
                      initial={{ width: "0%" }}
                      animate={{ width: `${loadingProgress}%` }}
                      transition={{ ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            </>
          }
          translucentCardContent={
            <motion.div
              key={currentIconIndex}
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 30 }}
              transition={{ duration: 0.5 }}
            >
              <CurrentIcon size={48} color="white" />
            </motion.div>
          }
        />
      </motion.div>
    </div>
  );
}
