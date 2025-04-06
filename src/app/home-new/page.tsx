"use client";

import React, { useState, useEffect } from 'react';
import { louize, doto, ppNeueMontrealBook } from '../fonts';
import { IBM_Plex_Mono } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { TextScramble } from '@/components/ui/text-scramble';
import CustomActionBar from './components/CustomActionBar';
import styles from './components/styles.module.css';

// Initialize IBM Plex Mono font
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut"
      }}
    />
  );
}

// Define different image grid layouts that correspond to each carousel item
const GridLayout1 = ({ delay = 0 }: { delay?: number }) => (
  <div className="relative h-full w-full">
    {/* 3-card layout (current one): 1 large left, 2 small right */}
    <div className="absolute left-0 top-0 w-[343px] h-[488px]">
      <ImageCard delay={delay + 0.2} />
    </div>
    <div className="absolute right-0 top-0 w-[188px] h-[234px] ml-[20px]">
      <ImageCard delay={delay + 0.4} />
    </div>
    <div className="absolute right-0 bottom-0 w-[188px] h-[234px] mt-[20px] ml-[20px]">
      <ImageCard delay={delay + 0.6} />
    </div>
  </div>
);

const GridLayout2 = ({ delay = 0 }: { delay?: number }) => (
  <div className="relative h-full w-full">
    {/* 2-card layout: side by side equal width */}
    <div className="absolute left-0 top-0 w-[270px] h-[488px]">
      <ImageCard delay={delay + 0.2} />
    </div>
    <div className="absolute right-0 top-0 w-[270px] h-[488px]">
      <ImageCard delay={delay + 0.4} />
    </div>
  </div>
);

const GridLayout3 = ({ delay = 0 }: { delay?: number }) => (
  <div className="relative h-full w-full">
    {/* 4-card grid layout */}
    <div className="absolute left-0 top-0 w-[270px] h-[234px]">
      <ImageCard delay={delay + 0.2} />
    </div>
    <div className="absolute right-0 top-0 w-[270px] h-[234px]">
      <ImageCard delay={delay + 0.3} />
    </div>
    <div className="absolute left-0 bottom-0 w-[270px] h-[234px]">
      <ImageCard delay={delay + 0.4} />
    </div>
    <div className="absolute right-0 bottom-0 w-[270px] h-[234px]">
      <ImageCard delay={delay + 0.5} />
    </div>
  </div>
);

const GridLayout4 = ({ delay = 0 }: { delay?: number }) => (
  <div className="relative h-full w-full">
    {/* 1 large card centered - adjusted to maintain consistent margins */}
    <div className="absolute left-0 top-0 w-full h-full">
      <ImageCard delay={delay + 0.2} />
    </div>
  </div>
);

const GridLayout5 = ({ delay = 0 }: { delay?: number }) => (
  <div className="relative h-full w-full">
    {/* 4-card layout - adjusted for consistent margins */}
    <div className="absolute left-0 top-0 w-[343px] h-[234px]">
      <ImageCard delay={delay + 0.2} />
    </div>
    <div className="absolute right-0 top-0 w-[188px] h-[234px]">
      <ImageCard delay={delay + 0.3} />
    </div>
    <div className="absolute left-0 bottom-0 w-[188px] h-[234px]">
      <ImageCard delay={delay + 0.4} />
    </div>
    <div className="absolute right-0 bottom-0 w-[343px] h-[234px]">
      <ImageCard delay={delay + 0.5} />
    </div>
  </div>
);

const GridLayout6 = ({ delay = 0 }: { delay?: number }) => (
  <div className="relative h-full w-full">
    {/* 5-card mosaic - adjusted for consistent margins */}
    <div className="absolute left-0 top-0 w-[343px] h-[234px]">
      <ImageCard delay={delay + 0.1} />
    </div>
    <div className="absolute right-0 top-0 w-[188px] h-[110px]">
      <ImageCard delay={delay + 0.2} />
    </div>
    <div className="absolute right-0 top-[120px] w-[188px] h-[110px]">
      <ImageCard delay={delay + 0.3} />
    </div>
    <div className="absolute left-0 bottom-0 w-[160px] h-[234px]">
      <ImageCard delay={delay + 0.4} />
    </div>
    <div className="absolute left-[170px] bottom-0 w-[361px] h-[234px]">
      <ImageCard delay={delay + 0.5} />
    </div>
  </div>
);

// Array of grid layouts to match with carousel items
const gridLayouts = [
  GridLayout1, // Crafting large scale enterprise products
  GridLayout2, // Developing 0-1 product vision & MVPs of new products
  GridLayout3, // Designing delightful consumer apps for millions of customers
  GridLayout4, // Defining product vision and strategy
  GridLayout5, // Setting high bar for for product design craft
  GridLayout6  // Leading major redesign overhaul of product interfaces
];

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
  
  // Letter-by-letter scramble states
  const [nameVamsi, setNameVamsi] = useState("vamsi");
  const [nameBatchu, setNameBatchu] = useState("batchu");
  const [mobileNameVamsi, setMobileNameVamsi] = useState("Vamsi");
  
  // Scramble a single random letter in the provided text
  const scrambleSingleLetter = (text: string, isUppercase = false) => {
    // Choose a random position in the string
    const position = Math.floor(Math.random() * text.length);
    // Create an array from the string
    const chars = text.split('');
    // Get a random character from the alphabet
    const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
    // Replace the character at the chosen position
    chars[position] = isUppercase ? randomChar : randomChar.toLowerCase();
    
    // Return the modified string
    return chars.join('');
  };
  
  // Create visual scrambling effect by rapidly changing a single letter multiple times
  const createLetterScrambleEffect = (
    word: string, 
    setWord: React.Dispatch<React.SetStateAction<string>>, 
    originalWord: string,
    isUppercase = false
  ) => {
    // Number of rapid changes to create the scrambling effect
    const iterations = 6;
    let count = 0;
    
    // Create rapid scrambling effect with multiple changes
    const interval = setInterval(() => {
      setWord(scrambleSingleLetter(word, isUppercase));
      count++;
      
      // After several quick changes, restore the original word
      if (count >= iterations) {
        clearInterval(interval);
        setWord(originalWord);
      }
    }, 50); // Very quick interval between changes
  };
  
  // Handle periodic random letter scrambling
  useEffect(() => {
    // Only start periodic animations after initial load is complete
    if (scrambleFirst && scrambleSecond && contentVisible) {
      // Initial delay to let everything settle after loading
      const startDelay = setTimeout(() => {
        const periodicScrambleTimer = setInterval(() => {
          // Decide which name to scramble (randomly)
          const scrambleFirstName = Math.random() > 0.5;
          
          if (scrambleFirstName) {
            // Scramble a letter in "vamsi"
            createLetterScrambleEffect(nameVamsi, setNameVamsi, "vamsi");
            // Also scramble in mobile version
            createLetterScrambleEffect(mobileNameVamsi, setMobileNameVamsi, "Vamsi", true);
          } else {
            // Scramble a letter in "batchu"
            createLetterScrambleEffect(nameBatchu, setNameBatchu, "batchu");
          }
        }, 10000); // Every 10 seconds
        
        return () => clearInterval(periodicScrambleTimer);
      }, 5000); // Wait 5 seconds after initial load before starting periodic animations
      
      return () => clearTimeout(startDelay);
    }
  }, [scrambleFirst, scrambleSecond, contentVisible, nameVamsi, nameBatchu, mobileNameVamsi]);
  
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
    <div className="w-full h-screen overflow-hidden flex items-center justify-center" 
      style={{ 
        backgroundImage: 'url(/backgrounds/pinkgradient.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
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
                  {/* Left Card Content - White background with slide-up animation */}
                  <motion.div 
                    className="bg-[#fff] w-full h-full p-[40px] flex flex-col justify-between"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
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
                            {nameVamsi}
                          </TextScramble>
                          <TextScramble
                            duration={1.0}
                            speed={0.04}
                            characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                            className="block"
                            trigger={scrambleSecond}
                          >
                            {nameBatchu}
                          </TextScramble>
                        </div>
                      )}
                    </AnimatePresence>
                    
                    <div className="flex flex-col justify-between h-full">
                      <AnimatePresence>
                        {contentVisible && (
                          <>
                            {/* Bottom container with consistent 32px spacing */}
                            <div className="mt-auto flex flex-col">
                              {/* Bio Text */}
                              <motion.div 
                                className={`${louize.className} text-black text-[26px] font-normal leading-[32px] tracking-[-1.1px]`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              >
                                Hands on product design leader with 11+ years of experience in designing & leading teams developing highly impactful products at scale.
                              </motion.div>
                              
                              {/* Divider Line - 32px margin */}
                              <motion.div 
                                className="w-full h-[1px] bg-black my-[32px]"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                                style={{ transformOrigin: "left" }}
                              />
                              
                              {/* Bottom Subtitle */}
                              <motion.div 
                                className={`${ppNeueMontrealBook.className} text-[#6f6f6f] text-[18px] font-normal leading-[22px] tracking-[0px]`}
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
                  </motion.div>
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
                  {/* Right Card Content - White background with slide-up animation */}
                  <motion.div 
                    className="bg-[#fff] w-full h-full p-[40px] flex flex-col justify-between"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Larger image grid - Now dynamically changes based on carousel item */}
                    <AnimatePresence mode="wait">
                      {imageVisible && (
                        <motion.div 
                          key={currentPair}
                          className="w-full h-[488px] overflow-hidden"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Dynamically render the current grid layout based on carousel index */}
                          {React.createElement(gridLayouts[currentPair], { delay: 0 })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Right Side Content with rotating Icon/Text pairs */}
                    <AnimatePresence>
                      {iconTextVisible && (
                        <div className="flex items-center">
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
                              <div className={`${louize.className} w-[491px] text-[#191919] text-[21.7px] font-normal leading-[26.1px] tracking-[-0.65px]`}>
                                {carouselContent[currentPair].text}
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Navigation Hint Container - Below cards */}
          <motion.div 
            className={`${styles.navigationHint} ${ibmPlexMono.className}`}
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
              <path d="M7 9.49958L2 11.9996L11.6422 16.8207C11.7734 16.8863 11.839 16.9191 11.9078 16.932C11.9687 16.9434 12.0313 16.9434 12.0922 16.932C12.161 16.9191 12.2266 16.8863 12.3578 16.8207L22 11.9996L17 9.49958M7 14.4996L2 16.9996L11.6422 21.8207C11.7734 21.8863 11.839 21.9191 11.9078 21.932C11.9687 21.9434 12.0313 21.9434 12.0922 21.932C12.161 21.9191 12.2266 21.8863 12.3578 21.8207L22 16.9996L17 14.4996M2 6.99958L11.6422 2.17846C11.7734 2.11287 11.839 2.08008 11.9078 2.06717C11.9687 2.05574 12.0313 2.05574 12.0922 2.06717C12.161 2.08008 12.2266 2.11287 12.3578 2.17846L22 6.99958L12.3578 11.8207C12.2266 11.8863 12.161 11.9191 12.0922 11.932C12.0313 11.9434 11.9687 11.9434 11.9078 11.932C11.839 11.9191 11.7734 11.8863 11.6422 11.8207L2 6.99958Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                      {mobileNameVamsi}
                    </TextScramble>
                    <TextScramble
                      duration={1.0}
                      speed={0.04}
                      characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                      className="block"
                      trigger={scrambleSecond}
                    >
                      {nameBatchu}
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
                      className={`${ppNeueMontrealBook.className} text-[#6f6f6f] text-[16px] font-normal leading-[22px] tracking-[0px] mb-6`}
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
                    <AnimatePresence mode="wait">
                      {imageVisible && (
                        <motion.div 
                          key={currentPair}
                          className="w-full h-[500px] overflow-hidden"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Create simplified versions of the grid layouts for mobile */}
                          {currentPair === 0 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-[61%] h-full">
                                <ImageCard delay={0.2} />
                              </div>
                              <div className="absolute right-0 top-0 w-[32%] h-[47%] ml-[16px]">
                                <ImageCard delay={0.4} />
                              </div>
                              <div className="absolute right-0 bottom-0 w-[32%] h-[47%] mt-[16px] ml-[16px]">
                                <ImageCard delay={0.6} />
                              </div>
                            </div>
                          )}
                          {currentPair === 1 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-[48%] h-full">
                                <ImageCard delay={0.2} />
                              </div>
                              <div className="absolute right-0 top-0 w-[48%] h-full">
                                <ImageCard delay={0.4} />
                              </div>
                            </div>
                          )}
                          {currentPair === 2 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-[48%] h-[48%]">
                                <ImageCard delay={0.2} />
                              </div>
                              <div className="absolute right-0 top-0 w-[48%] h-[48%]">
                                <ImageCard delay={0.3} />
                              </div>
                              <div className="absolute left-0 bottom-0 w-[48%] h-[48%]">
                                <ImageCard delay={0.4} />
                              </div>
                              <div className="absolute right-0 bottom-0 w-[48%] h-[48%]">
                                <ImageCard delay={0.5} />
                              </div>
                            </div>
                          )}
                          {currentPair === 3 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-full h-full">
                                <ImageCard delay={0.2} />
                              </div>
                            </div>
                          )}
                          {currentPair === 4 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-[61%] h-[48%]">
                                <ImageCard delay={0.2} />
                              </div>
                              <div className="absolute right-0 top-0 w-[35%] h-[48%]">
                                <ImageCard delay={0.3} />
                              </div>
                              <div className="absolute left-0 bottom-0 w-[35%] h-[48%]">
                                <ImageCard delay={0.4} />
                              </div>
                              <div className="absolute right-0 bottom-0 w-[61%] h-[48%]">
                                <ImageCard delay={0.5} />
                              </div>
                            </div>
                          )}
                          {currentPair === 5 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-[61%] h-[48%]">
                                <ImageCard delay={0.1} />
                              </div>
                              <div className="absolute right-0 top-0 w-[35%] h-[22%]">
                                <ImageCard delay={0.2} />
                              </div>
                              <div className="absolute right-0 top-[26%] w-[35%] h-[22%]">
                                <ImageCard delay={0.3} />
                              </div>
                              <div className="absolute left-0 bottom-0 w-[29%] h-[48%]">
                                <ImageCard delay={0.4} />
                              </div>
                              <div className="absolute left-[33%] bottom-0 w-[67%] h-[48%]">
                                <ImageCard delay={0.5} />
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </AnimatePresence>
              
              {/* Right Side Content with rotating Icon/Text pairs for mobile - consistent padding */}
              <AnimatePresence>
                {iconTextVisible && (
                  <div className="flex items-center h-[60px]">
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