'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { jakartaFont, fiveFont } from '../../../fonts';

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
      className="w-full h-full flex flex-col justify-center p-10"
      style={{ backgroundColor: '#F3F3EB' }}
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
      <div className="text-center mx-40 flex flex-col items-center">    
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Image src="/images/refresh-images/about1.png" alt="About Me" width={200} height={158} className="mb-4" />
        </motion.div>
        <motion.p 
          className={`${jakartaFont.className} text-black text-[20px] leading-[140%] max-w-[600px] mx-auto text-left`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
        >
          I am an atlanta based product designer currently leading AI experiences at Rocket Mortgage. I am at a unique interesection of craft & code.
        </motion.p>
      </div>

    </motion.div>
  );
}
