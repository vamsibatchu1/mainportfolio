'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { jakartaFont, fiveFont, ebGaramondFont } from '@/app/fonts';
import { Slack, CrosswordSection, Testimonials } from './components';
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
    <div className="w-full min-h-screen flex flex-col pt-12 gap-8 max-w-[1440px] mx-auto hide-scrollbar">
      {/* Section 1: Main Heading (Combined with Section 2) */}
      <div className="text-left w-full flex flex-col gap-12 mb-16">
        <motion.p 
          className={`${ebGaramondFont.className} text-black text-2xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[100%] tracking-[-0.02em]`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
        >
          Design to me is fundamentally about providing clarity in complexity. It&apos;s about seeing beyond immediate feature requests to uncover the deeper patterns and opportunities that can transform how people work and live.
        </motion.p>
        <motion.p 
          className={`${ebGaramondFont.className} text-black text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Just like a crossword puzzle, design is about finding the connections between the words (features) to create a meaningful whole.
        </motion.p>
      </div>

      {/* Section 2: Crossword */}
      <div className="flex justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex justify-center w-full"
        >
          <CrosswordSection />
        </motion.div>
      </div>

      {/* Section 3: Testimonials */}
      <Testimonials />

    </div>
  );
}