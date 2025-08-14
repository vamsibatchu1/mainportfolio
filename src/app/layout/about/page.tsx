'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { jakartaFont, fiveFont } from '../../fonts';
import Slack from './slack/page';
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
    <div className="w-[400px] h-[400px] relative overflow-hidden rounded-lg">
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
      className="w-full min-h-screen flex flex-col p-10 pt-40 overflow-y-auto"
      style={{ backgroundColor: '#FAF6F3' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section 1: Main Heading */}
      <div className="text-center mx-40 mb-16">
        <StaggeredText 
          text="Design to me is fundamentally about providing clarity in complexity."
          className={`${fiveFont.className} text-black text-[64px] leading-[100%] tracking-[-0.02em] mb-4 italic`}
          delay={0.2}
          staggerDelay={0.08}
        />
        <motion.p 
          className={`${fiveFont.className} text-black text-[32px] leading-[120%] tracking-[-0.01em]`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          It&apos;s about seeing beyond immediate feature requests to uncover the deeper patterns and opportunities that can transform how people work and live.
        </motion.p>
      </div>

      {/* Section 2: Text */}
      <div className="text-center mx-20 mt-10 flex flex-col items-center">    
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Image src="/images/refresh-images/about1.png" alt="About Me" width={200} height={158} className="mb-4" />
        </motion.div>
      </div>


      {/* Section 3: About Me */}
      <div className="flex justify-center items-center mt-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="w-[800px] flex flex-row bg-white rounded-lg shadow-lg">
                        {/* Left Column */}
            <div className="w-[400px] p-10 flex flex-col justify-between">
              {/* Top Left Section */}
              <div>
                <div className="mb-8">
                  <div className={`${fiveFont.className} text-black text-3xl font-bold mb-2`}>
                    I am an atlanta based product designer currently leading AI experiences at Rocket Mortgage. I am at a unique interesection of craft & code.
                  </div>
                </div>
              </div>
              
              {/* Image Carousel */}
              <div className="mb-8 flex justify-center">
                <ImageCarousel />
              </div>
              
              {/* Bottom Left Section */}
              <div className="mb-8">
                <p className={`${jakartaFont.className} text-black text-base leading-relaxed mb-4`}>
                  I believe great product design emerges at the intersection of empathy, systems thinking, and craftsmanship. Having started my journey as a computer science engineer who discovered design through building real solutions, I&apos;ve learned that the most impactful products aren&apos;t just beautiful interfaces – they&apos;re thoughtfully architected systems that solve complex problems with elegant simplicity.
                </p>
                <div className="text-2xl">→</div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-[400px] p-10 flex flex-col">
              {/* Top Text Block */}
              <div className="mb-8">
                <div className={`${instrumentSerif.className} text-black text-4xl font-bold mb-4`}>
                  Design Philosophy
                </div>
                <p className={`${jakartaFont.className} text-black text-base leading-relaxed`}>
                  Whether you are redesigning complex enterprise platforms or crafting daily used consumer experiences, you have to approach each challenge by first understanding the entire ecosystem: the business dynamics, technical constraints, and most importantly, the humans who will use these products and tools in their daily lives.
                </p>
              </div>

              {/* Bottom Text Block */}
              <div>
                <div className={`${instrumentSerif.className} text-black text-4xl font-bold mb-4`}>
                  Core Mission
                </div>
                <p className={`${jakartaFont.className} text-black text-base leading-relaxed mb-4`}>
                  What truly excites me about design is its potential to orchestrate meaningful change. Every pixel we place, every interaction we craft, and every system we architect has the power to make someone&apos;s day better, their work more efficient, or their goals more achievable. This is why I emphasize both the macro and micro aspects of design – from high-level strategy and systems thinking to the delightful details that make products not just usable, but lovable.
                </p>
                <div className={`${jakartaFont.className} text-black text-sm leading-relaxed`}>
                  <sup>1.</sup> As a creative and a design leader, I tend to foster environments where creativity flourishes alongside technical excellence, where we can push boundaries while delivering practical solutions, and where we never lose sight of the humans we&apos;re designing for. After all, the best designs don&apos;t just solve problems; they create possibilities.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


             {/* Section 4: Values */}
       <div className="flex justify-center items-center mt-16 w-full">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
           className="flex justify-center"
         >
           <Image 
             src="/images/refresh-images/aboutvalues.svg" 
             alt="About Values" 
             width={800} 
             height={400} 
             className="w-[800px] h-auto"
           />
         </motion.div>
       </div>    





      {/* Section 5: Slack */}
      <div className="flex justify-center items-center mt-36 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Slack />
        </motion.div>
      </div>

      

    </motion.div>
  );
}
