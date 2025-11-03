'use client';

import React from 'react';
import Image from 'next/image';
import { ebGaramondFont, jakartaFont } from '@/app/fonts';
import { motion } from 'framer-motion';
import { useHomepageAnimation } from '@/app/context/HomepageAnimationContext';

export default function HomeHero() {
  const { hasAnimated, isInitialized } = useHomepageAnimation();

  const heroHeader = " With a proven track record leading cross-functional initiatives to shape product strategy, I specialize in defining the vision for zero-to-one, AI-native products and evolving data-informed design systems.";
  const dynamicText1 = "Beyond designing products, I'm actively advancing AI fluency at Rocket through multiple initiatives";
  const dynamicText2 = "and serving on the AI Leadership Council to shape tool strategy, training programs, and adoption. ";

  return (
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

        {/* Hero Subheader */}
        <div className={`${jakartaFont.className} font-medium flex gap-[40px] items-center leading-[1.1] text-[18px] text-black w-full`}>
          <p className="flex-1 min-w-0">
            {dynamicText1}
          </p>
          <p className="flex-1 min-w-0">
            {dynamicText2}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
