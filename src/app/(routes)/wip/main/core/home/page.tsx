'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HomeHeroCard, HomeHighlight1Card, HomeHighlight2Card, HomeHighlightCarouselCard } from './components';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-[96px] pt-12 max-w-[1440px] mx-auto">
      {/* Home Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
      >
        <HomeHeroCard />
      </motion.div>
      
      {/* Home Highlight 1 Section */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      >
        <HomeHighlight1Card />
      </motion.div>
      
      {/* Home Highlight 2 Section */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
      >
        <HomeHighlight2Card />
      </motion.div>

      {/* Home Highlight Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
      >
        <HomeHighlightCarouselCard />
      </motion.div>
      
      {/* Additional sections will be added here as components */}
    </div>
  );
}
