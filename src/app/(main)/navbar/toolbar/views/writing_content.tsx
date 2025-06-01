'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { SpotifyCard } from "../components/music-card";
import { interFont } from '@/app/fonts';

const contentSpring = { type: "spring", stiffness: 200, damping: 25 };

export function Demo() {
  const songs = [
    {
      title: "Finding Her",
      artists: "Kushagra, Bharath, Saaheal",
      duration: 207,
      albumArt:
        "https://i.scdn.co/image/ab67616d00001e0283141000ee8ce3b893a0b425",
    },
    {
      title: "Daylight",
      artists: "David Kushner",
      duration: 226,
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273e40c514edddb844439af6201",
    },
    {
      title: "Heat Waves",
      artists: "Glass Animals",
      duration: 237,
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464",
    },
    {
      title: "Perfect",
      artists: "Ed Sheeran",
      duration: 263,
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
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