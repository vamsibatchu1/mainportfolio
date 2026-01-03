'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ebGaramondFont, interFont } from '@/app/fonts';
import { ExpandingText, aboutTextData } from '../about/components';
import { CareerJourney } from '../about/components';

export default function PublicPage() {
  const heroHeader = "With a proven track record leading cross-functional initiatives to shape product strategy, I specialize in defining the vision for zero-to-one, AI-native products and evolving data-informed design systems.";

  return (
    <div className="w-full flex flex-col gap-[96px] pt-12 max-w-[1440px] mx-auto">
      {/* Section 1: Image at the top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
        className="flex justify-center items-center w-full"
      >
        <Image 
          src="/images/wip/about.webp" 
          alt="About" 
          width={1200} 
          height={600} 
          className="w-full max-w-full h-auto"
        />
      </motion.div>

      {/* Section 2: Clarity paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="text-left w-full flex flex-col gap-12 mb-16"
      >
        <p className={`${ebGaramondFont.className} text-black text-2xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[100%] tracking-[-0.02em]`}>
          Design to me is fundamentally about providing clarity in complexity. It&apos;s about seeing beyond immediate feature requests to uncover the deeper patterns and opportunities that can transform how people work and live.
        </p>
      </motion.div>

      {/* Section 3: Proven track record section with image */}
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
          <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[40px] text-black w-full`}>
            {heroHeader}
          </p>
        </div>
      </motion.div>

      {/* Section 4: Originally from India paragraph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
        className="text-left w-full flex flex-col gap-[64px] mb-16"
      >
        <ExpandingText segments={aboutTextData} />
      </motion.div>

      {/* Section 5: Images section from about */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        className="flex flex-row justify-left w-full gap-[48px]"
      >
        <div className="flex flex-col w-[60%] gap-4">
          <Image src="/images/wip/about/about_design.jpeg" alt="About Me" width={960} height={600}/>
          <p className={`${interFont.variable} font-inter text-[16px] text-gray-500 leading-relaxed max-w-[600px]`}>
            Design is not just about what exists, but about unlocking the possibility of transformative experiences that reshape how we interact with the world.
          </p>
        </div>
        <div className="flex flex-col w-[40%]">
          <Image src="/images/wip/about/vamsi.jpg" alt="Vamsi" width={640} height={600} className="w-full h-auto object-cover"/>
        </div>
      </motion.div>

      {/* Section 6: Career Journey */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
      >
        <CareerJourney />
      </motion.div>
    </div>
  );
}
