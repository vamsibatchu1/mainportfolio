'use client';

import React from 'react';
import Image from 'next/image';
import { ebGaramondFont, jakartaFont } from '@/app/fonts';
import { motion } from 'framer-motion';
import { useHomepageAnimation } from '@/app/context/HomepageAnimationContext';

export default function HomeHero() {
  const { hasAnimated, isInitialized } = useHomepageAnimation();

  const heroHeader = "With a proven track record leading cross-functional initiatives to shape product strategy, I specialize in defining the vision for zero-to-one, AI-native products and evolving data-informed design systems.";
  const dynamicText1 = "Beyond designing products, I'm actively advancing AI fluency at Rocket through multiple initiatives";
  const dynamicText2 = "and serving on the AI Leadership Council to shape tool strategy, training programs, and adoption.";

  return (
    <motion.div 
      className="w-full max-w-[1440px] mx-auto flex flex-col gap-8"
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
      </div>
      
      {/* Hero Section: Image and Text */}
      <motion.div 
        className="w-full max-w-[1440px] mx-auto flex gap-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: (isInitialized && hasAnimated) ? 0 : 0.2, ease: "easeOut" }}
      >
        {/* Image Section - Left */}
        <div className="w-[700px] h-[400px] relative shrink-0">
          <Image
            src="/images/wip/home/thumb_hero.png"
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
    </motion.div>
  );
}
