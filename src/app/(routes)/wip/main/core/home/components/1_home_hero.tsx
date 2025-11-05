'use client';

import React from 'react';
import Image from 'next/image';
import { ebGaramondFont } from '@/app/fonts';
import { motion } from 'framer-motion';

export default function HomeHeroCard() {
  const heroHeader = "With a proven track record leading cross-functional initiatives to shape product strategy, I specialize in defining the vision for zero-to-one, AI-native products and evolving data-informed design systems.";

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8">
      {/* Section 2.5: About SVG - Appears first */}
      <div className="flex justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
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

      {/* Section 1: Main Heading - Appears second */}
      <div className="text-left w-full flex flex-col gap-12 mb-16">
        <motion.p 
          className={`${ebGaramondFont.className} text-black text-2xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[100%] tracking-[-0.02em]`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Design to me is fundamentally about providing clarity in complexity. It&apos;s about seeing beyond immediate feature requests to uncover the deeper patterns and opportunities that can transform how people work and live.
        </motion.p>
      </div>
      
      {/* Hero Section: Image and Text - Appears third */}
      <motion.div 
        className="w-full flex gap-[40px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      >
        {/* Image Section - Left */}
        <div className="w-[700px] h-[400px] relative shrink-0">
          <Image
            src="/images/wip/home/thumb_hero.webp"
            alt="Hero"
            width={700}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Text Section - Right */}
        <div className="w-[700px] h-[400px] flex flex-col gap-[20px] items-start justify-end">
          {/* Hero Header */}
          <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[40px] text-black w-full`}>
            {heroHeader}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
