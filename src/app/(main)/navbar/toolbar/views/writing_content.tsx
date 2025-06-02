'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { SpotifyCard } from "../components/music-card";
import { interFont } from '@/app/fonts';

const contentSpring = { type: "spring", stiffness: 200, damping: 25 };

export function Demo() {
  const songs = [
    {
      title: "Building Intuitive User Experiences",
      artists: "A deep dive into creating interfaces that feel natural and effortless to use",
      duration: 6, // 6 min read
      albumArt: "/images/personalsoftware.png",
    },
    {
      title: "The Future of AI in Design", 
      artists: "How artificial intelligence is reshaping the design industry and creative processes",
      duration: 8, // 8 min read
      albumArt:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=center",
    },
    {
      title: "Crafting Delightful Products",
      artists: "The art and science behind creating products that users love and remember",
      duration: 5, // 5 min read
      albumArt:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=400&fit=crop&crop=center",
    },
    {
      title: "Design Systems at Scale",
      artists: "Building and maintaining consistent design languages across large organizations",
      duration: 7, // 7 min read
      albumArt:
        "https://images.unsplash.com/photo-1635405074683-96d266eb60aa?w=400&h=400&fit=crop&crop=center",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full h-full">
      <SpotifyCard songs={songs} />
    </div>
  );
}

const WritingContent = () => {
  return (
    <motion.div
      key="writing-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      style={{ fontFamily: interFont.style.fontFamily }}
      className="w-full h-full flex items-center justify-center"
    >
      <Demo />
    </motion.div>
  );
};

export default WritingContent; 