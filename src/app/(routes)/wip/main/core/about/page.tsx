'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { jakartaFont, fiveFont, ebGaramondFont } from '@/app/fonts';
import { Slack, CrosswordSection } from './components';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
});

// Image Carousel Component
const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Placeholder images - you can replace these with your actual images
  const images = [
    '/images/refresh-images/aboutimage1.svg',
    '/images/refresh-images/aboutimage2.svg',
    '/images/refresh-images/aboutimage3.svg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-[400px] aspect-square relative overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Carousel image ${currentImageIndex + 1}`}
            width={400}
            height={300}
            className="w-full h-auto max-h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Component for staggered word animation
const StaggeredText = ({ text, className, delay = 0, staggerDelay = 0.1 }: { 
  text: string; 
  className: string; 
  delay?: number;
  staggerDelay?: number;
}) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + (index * staggerDelay),
            ease: "easeOut"
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default function AboutPage() {
  return (
    <motion.div 
      className="w-full min-h-screen flex flex-col p-10 pt-10 gap-8 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section 2.5: About SVG */}
      <div className="flex justify-center items-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center w-full"
        >
          <Image 
            src="/images/wip/about.webp" 
            alt="About" 
            width={1200} 
            height={600} 
            className="w-full max-w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Section 1: Main Heading (Combined with Section 2) */}
      <div className="text-left w-full flex flex-col gap-12 mb-16">
        <motion.p 
          className={`${ebGaramondFont.className} text-black text-2xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[100%] tracking-[-0.02em]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Design to me is fundamentally about providing clarity in complexity. It&apos;s about seeing beyond immediate feature requests to uncover the deeper patterns and opportunities that can transform how people work and live.
        </motion.p>
        <p className={`${ebGaramondFont.className} text-black text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed`}>
          Just like a crossword puzzle, design is about finding the connections between the words (features) to create a meaningful whole.
        </p>
      </div>

      {/* Section 2: Crossword */}
      <div className="flex justify-center items-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
          className="flex justify-center w-full max-w-[1200px]"
        >
          <CrosswordSection />
        </motion.div>
      </div>



      {/* Section 4: TBD */}
      <div className="flex justify-center items-center mt-36 w-full">
       
      </div>

      

    </motion.div>
  );
}