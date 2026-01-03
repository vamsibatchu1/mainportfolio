'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, ebGaramondFont, interFont } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const experiments = [
  {
    title: 'Gridscape',
    description: 'Dive into any kind of rabbit hole that you are curious about. Explore conceptual schematics and visual knowledge graphs.',
    images: [
      '/new/experiments/gridscape1.png',
      '/new/experiments/gridscape2.png',
      '/new/experiments/gridscape3.png'
    ]
  },
  {
    title: 'Worldwide',
    description: 'Built this interactive game last night called \'worldwide\', a geolocation guessing game powered by the Google Gemini API. It uses tactical intelligence clues to challenge users to identify global territories.',
    images: [
      '/new/experiments/worldwide1.png',
      '/new/experiments/worldwide2.png',
      '/new/experiments/worldwide3.png'
    ]
  },
  {
    title: 'Elsewhere',
    description: 'Where you can transport yourself anywhere with sounds for deep work.',
    images: [
      '/new/experiments/elsewhere1.png',
      '/new/experiments/elsewhere2.png',
      '/new/experiments/elsewhere3.png'
    ]
  }
];

export default function ExperimentsPage() {
  const pathname = usePathname();
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto">
      {/* Navigation */}
      <nav className={`${jakartaFont.variable} font-jakarta w-full max-w-[1200px] mx-auto px-4 md:px-4 pt-6 md:pt-8 pb-4 md:pb-6`}>
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/new" className={`text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === '/new' ? 'border-dotted border-black' : 'border-transparent'}`}>
            Home
          </Link>
          <Link href="/new/writing" className={`text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === '/new/writing' ? 'border-dotted border-black' : 'border-transparent'}`}>
            Writing
          </Link>
          <Link href="/new/experiments" className={`text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === '/new/experiments' ? 'border-dotted border-black' : 'border-transparent'}`}>
            Experiments
          </Link>
          <Link href="/work" className={`text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === '/work' ? 'border-dotted border-black' : 'border-transparent'}`}>
            Work
          </Link>
        </div>
      </nav>

      <div className="w-full min-h-screen bg-white flex flex-col gap-[40px] md:gap-[80px] pt-6 md:pt-[40px] max-w-[1200px] mx-auto px-4 md:px-4 pb-6 md:pb-12">
        {experiments.map((experiment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col gap-4 md:gap-6"
          >
            {/* Title */}
            <h2 className={`${ebGaramondFont.className} text-[18px] md:text-[48px] font-normal text-black leading-[1.1]`}>
              {experiment.title}
            </h2>
            
            {/* Description - 2 lines */}
            <p className={`${interFont.variable} font-inter text-[18px] md:text-[16px] text-gray-500 leading-relaxed`}>
              {experiment.description}
            </p>
            
            {/* 3 Images in a row */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-[40px] w-full">
              {experiment.images.map((imageSrc, imgIndex) => (
                <div key={imgIndex} className="w-full md:w-1/3">
                  <Image
                    src={imageSrc}
                    alt={`${experiment.title} ${imgIndex + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
