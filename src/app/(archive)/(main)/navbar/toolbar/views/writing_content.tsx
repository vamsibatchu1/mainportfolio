'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { SpotifyCard } from "../components/music-card";
import { interFont } from '@/app/fonts';
import DisplayCards from "../components/stacked-cards";
import { Sparkles } from "lucide-react";

const contentSpring = { type: "spring", stiffness: 200, damping: 25 };

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    titleClassName: "text-white",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-gray-800 before:h-[100%] before:content-[''] before:bg-black/20 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    titleClassName: "text-white",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-gray-800 before:h-[100%] before:content-[''] before:bg-black/20 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    titleClassName: "text-white",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

// Second card component
const WritingStatsCard = () => {
  return (
    <motion.div 
      className="w-96 rounded-xl overflow-hidden relative cursor-pointer group pl-6 pb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 25 }}
      style={{
        background: 'rgba(24, 24, 27, 0.98)',
        boxShadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.08) inset, 
                    0 0 0 1px rgba(255, 255, 255, 0.05) inset,
                    0 10px 30px -5px rgba(0, 0, 0, 0.3)`
      }}
    >
      <DisplayCardsDemo />
    </motion.div>
  );
};

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
    <div className="flex items-center justify-center gap-4 w-full h-full">
      <SpotifyCard songs={songs} />
      <WritingStatsCard />
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