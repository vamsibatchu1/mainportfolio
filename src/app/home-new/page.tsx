"use client";

import React, { useState, useEffect } from 'react';
import { louize, doto } from '../fonts';
import { motion, AnimatePresence } from 'framer-motion';
import { TextScramble } from '@/components/ui/text-scramble';
import CustomActionBar from './components/CustomActionBar';
import styles from './components/styles.module.css';

// Define the carousel content
const carouselContent = [
  {
    imageUrl: "/images/homepage-shape1.svg",
    text: "Crafting large scale enterprise products"
  },
  {
    imageUrl: "/images/homepage-shape2.svg",
    text: "Developing 0-1 product vision & MVPs of new products"
  },
  {
    imageUrl: "/images/homepage-shape3.svg",
    text: "Designing delightful consumer apps for millions of customers"
  },
  {
    imageUrl: "/images/homepage-shape4.svg",
    text: "Defining product vision and strategy"
  },
  {
    imageUrl: "/images/homepage-shape5.svg",
    text: "Setting high bar for for product design craft"
  },
  {
    imageUrl: "/images/homepage-shape6.svg",
    text: "Leading major redesign overhaul of product interfaces"
  }
];

// Add ImageCard component from current.tsx
function ImageCard({ delay }: { delay: number }) {
  return (
    <motion.div 
      className="bg-[#f1f1f1] rounded-2xl w-full h-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut"
      }}
    />
  );
}

export default function NewHomePage() {
  // Card visibility states
  const [firstCardVisible, setFirstCardVisible] = useState(false);
  const [secondCardVisible, setSecondCardVisible] = useState(false);
  
  // First card content states
  const [nameVisible, setNameVisible] = useState(false);
  const [scrambleFirst, setScrambleFirst] = useState(false);
  const [scrambleSecond, setScrambleSecond] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Second card content states
  const [imageVisible, setImageVisible] = useState(false);
  const [iconTextVisible, setIconTextVisible] = useState(false);
  
  // Carousel state
  const [currentPair, setCurrentPair] = useState(0);
  
  // Handle carousel rotation
  useEffect(() => {
    if (iconTextVisible) {
      const carouselTimer = setInterval(() => {
        setCurrentPair((prev) => (prev + 1) % carouselContent.length);
      }, 2000);
      
      return () => clearInterval(carouselTimer);
    }
  }, [iconTextVisible]);
  
  // Trigger animations with proper timing
  useEffect(() => {
    // First show the first card
    const firstCardTimer = setTimeout(() => {
      setFirstCardVisible(true);
    }, 100);
    
    // Then start first card content animations after the card is in place
    const nameTimer = setTimeout(() => {
      setNameVisible(true);
    }, 700);
    
    // Start text scramble animations
    const firstTimer = setTimeout(() => {
      setScrambleFirst(true);
    }, 1000);
    
    const secondTimer = setTimeout(() => {
      setScrambleSecond(true);
    }, 1500);
    
    // Show the rest of the content after the name scrambles (reduced delay)
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 2200); // Reduced from 2700ms to 2200ms
    
    // Then show the second card after first card's content animations are complete
    // The divider finishes at contentTimer(2200) + delay(1.1) + duration(0.6) = ~3900ms
    // The subtitle finishes at contentTimer(2200) + delay(1.5) + duration(0.6) = ~4300ms
    const secondCardTimer = setTimeout(() => {
      setSecondCardVisible(true);
    }, 4300); // Adjusted to wait for first card animations to complete
    
    // Then start second card content animations after the card is in place
    const imageTimer = setTimeout(() => {
      setImageVisible(true);
    }, 5100); // Adjusted based on secondCardTimer
    
    const iconTextTimer = setTimeout(() => {
      setIconTextVisible(true);
    }, 5600); // Adjusted based on imageTimer
    
    return () => {
      // Cleanup card timers
      clearTimeout(firstCardTimer);
      clearTimeout(secondCardTimer);
      
      // Cleanup first card content timers
      clearTimeout(nameTimer);
      clearTimeout(contentTimer);
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      
      // Cleanup second card content timers
      clearTimeout(imageTimer);
      clearTimeout(iconTextTimer);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-[#ee4428] overflow-hidden flex items-center justify-center">
      {/* === DESKTOP LAYOUT === */}
      <div className="hidden lg:flex items-center justify-center w-full h-full">
        {/* Centered Content Container - Using flex layout (auto layout) */}
        <div className="flex flex-col items-start">
          {/* Two Cards Container - Fixed width container for both cards */}
          <div className="flex flex-row w-[1086px]"> {/* 412px + 35px + 639px = 1086px */}
            
            {/* Left Card Container - Bio and intro */}
            <AnimatePresence>
              {firstCardVisible && (
                <motion.div 
                  className="w-[412px] h-[628px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* Left Card Content - White background */}
                  <div className="bg-[#fff] w-full h-full p-[40px] flex flex-col justify-between">
                    <AnimatePresence>
                      {nameVisible && (
                        <div 
                          className={`${doto.className} text-black text-[64px] font-bold leading-[60px] tracking-[-3.47px] mb-[44px]`}
                        >
                          <TextScramble
                            duration={1.0}
                            speed={0.04}
                            characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                            className="block"
                            trigger={scrambleFirst}
                          >
                            vamsi
                          </TextScramble>
                          <TextScramble
                            duration={1.0}
                            speed={0.04}
                            characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                            className="block"
                            trigger={scrambleSecond}
                          >
                            batchu
                          </TextScramble>
                        </div>
                      )}
                    </AnimatePresence>
                    
                    <div className="flex flex-col justify-between h-full">
                      <AnimatePresence>
                        {contentVisible && (
                          <>
                            {/* Bio Text */}
                            <motion.div 
                              className={`${louize.className} text-black text-[26px] font-normal leading-[32px] tracking-[-1.1px]`}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                              Hands on product design leader with 11+ years of experience in designing & leading teams developing highly impactful products at scale.
                            </motion.div>
                            
                            <div className="mt-auto">
                              {/* Divider Line */}
                              <motion.div 
                                className="w-full h-[1px] bg-black mb-[47px]"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                                style={{ transformOrigin: "left" }}
                              />
                              
                              {/* Bottom Subtitle */}
                              <motion.div 
                                className={`${louize.className} text-[#6f6f6f] text-[18px] font-normal leading-[22px] tracking-[-0.77px]`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                              >
                                Currently leading the enterprise AI design teams at Rocket
                              </motion.div>
                            </div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Spacer */}
            <div className="w-[35px]"></div>
            
            {/* Right Card Container - Portfolio showcase */}
            <AnimatePresence>
              {secondCardVisible && (
                <motion.div 
                  className="w-[639px] h-[628px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* Right Card Content - White background */}
                  <div className="bg-[#fff] w-full h-full p-[40px] flex flex-col justify-between">
                    {/* Larger image grid */}
                    <AnimatePresence>
                      {imageVisible && (
                        <motion.div 
                          className="w-full h-[448px] overflow-hidden"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Three card layout with equal spacing */}
                          <div className="relative h-full w-full">
                            {/* Main large card */}
                            <div className="absolute left-0 top-0 w-[343px] h-[448px]">
                              <ImageCard delay={0.2} />
                            </div>
                            
                            {/* Two smaller cards on the right with equal spacing */}
                            <div className="absolute right-0 top-0 w-[188px] h-[214px] ml-[20px]">
                              <ImageCard delay={0.4} />
                            </div>
                            <div className="absolute right-0 bottom-0 w-[188px] h-[214px] mt-[20px] ml-[20px]">
                              <ImageCard delay={0.6} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Right Side Content with rotating Icon/Text pairs */}
                    <AnimatePresence>
                      {iconTextVisible && (
                        <div className="mt-auto">
                          <AnimatePresence mode="wait">
                            <motion.div 
                              key={currentPair}
                              className="inline-flex items-center gap-[20px]"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <img 
                                src={carouselContent[currentPair].imageUrl} 
                                alt="Shape icon" 
                                className="w-[32px] h-[32px] object-contain" 
                              />
                              <div className={`${louize.className} w-[491px] text-[#191919] text-[21.7px] font-normal leading-[26.1px] tracking-[-0.65px] mt-[-1px]`}>
                                {carouselContent[currentPair].text}
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Navigation Hint Container - Below cards */}
          <motion.div 
            className={styles.navigationHint}
            style={{ 
              marginTop: '16px'
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 5.0, 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 22L12 2L22 22H2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            TAP SPACEBAR TO NAVIGATE
          </motion.div>
        </div>
      </div>
      
      {/* === MOBILE & TABLET LAYOUT === */}
      <div className="lg:hidden flex flex-col items-center justify-center w-full h-full px-6">
        {/* Mobile Card Container - Combined content */}
        <AnimatePresence>
          {firstCardVisible && (
            <motion.div 
              className="relative w-full max-w-md mx-auto bg-[#fff] p-8 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Name - Smaller for mobile */}
              <AnimatePresence>
                {nameVisible && (
                  <div className={`${doto.className} text-black text-[60px] font-bold leading-[60px] tracking-[-2px] mb-12`}>
                    <TextScramble
                      duration={1.0}
                      speed={0.04}
                      characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                      className="block"
                      trigger={scrambleFirst}
                    >
                      Vamsi
                    </TextScramble>
                    <TextScramble
                      duration={1.0}
                      speed={0.04}
                      characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                      className="block"
                      trigger={scrambleSecond}
                    >
                      batchu
                    </TextScramble>
                  </div>
                )}
              </AnimatePresence>
              
              {/* Bio Text - Condensed for mobile */}
              <AnimatePresence>
                {contentVisible && (
                  <>
                    <motion.div 
                      className={`${louize.className} text-black text-[22px] font-normal leading-[28px] tracking-[-0.8px] mb-10`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      Hands on product design leader with 11+ years of experience in designing & leading teams developing highly impactful products at scale.
                    </motion.div>
                    
                    {/* Divider Line */}
                    <motion.div 
                      className="w-full h-[1px] bg-black mb-4"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                    
                    {/* Bottom Subtitle */}
                    <motion.div 
                      className={`${louize.className} text-[#6f6f6f] text-[16px] font-normal leading-[22px] tracking-[-0.6px] mb-6`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    >
                      Currently leading the enterprise AI design teams at Rocket
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
              
              {/* Mobile second card content - sequential animation */}
              <AnimatePresence>
                {secondCardVisible && (
                  <>
                    {/* Profile Image Placeholder - with equal spacing */}
                    <AnimatePresence>
                      {imageVisible && (
                        <motion.div 
                          className="w-full h-[460px] mb-10"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Three card layout for mobile with equal spacing */}
                          <div className="relative h-full w-full">
                            {/* Main large card */}
                            <div className="absolute left-0 top-0 w-[61%] h-full">
                              <ImageCard delay={0.2} />
                            </div>
                            
                            {/* Two smaller cards on the right with equal spacing */}
                            <div className="absolute right-0 top-0 w-[32%] h-[47%] ml-[16px]">
                              <ImageCard delay={0.4} />
                            </div>
                            <div className="absolute right-0 bottom-0 w-[32%] h-[47%] mt-[16px] ml-[16px]">
                              <ImageCard delay={0.6} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </AnimatePresence>
              
              {/* Right Side Content with rotating Icon/Text pairs for mobile - consistent padding */}
              <AnimatePresence>
                {iconTextVisible && (
                  <div className="h-[60px] mb-8">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentPair}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <img 
                          src={carouselContent[currentPair].imageUrl} 
                          alt="Shape icon" 
                          className="w-8 h-8 object-contain" 
                        />
                        <div className={`${louize.className} text-[#191919] text-[18px] font-normal leading-[24px] tracking-[-0.5px]`}>
                          {carouselContent[currentPair].text}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Space-triggered Navigation Bar - Fixed at bottom */}
      <CustomActionBar />
    </div>
  );
}