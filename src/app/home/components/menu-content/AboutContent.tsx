"use client";

import React from 'react';
import { Link } from 'lucide-react';
import { IBM_Plex_Mono } from 'next/font/google';
import type { MenuContentProps } from './types';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export function AboutContent({ isActive, onClose }: MenuContentProps) {
  const items = [
   /* {
      title: 'Experience',
      description: '10+ years of design and development',
      date: '10+ years',
    },
    {
      title: 'Leadership',
      description: 'Leading design teams and initiatives',
      date: '5+ years',
    }*/
  ];

  return (
    <div className="p-6 h-full flex">
      {/* First column - Text content */}
      <div className="w-[40%] pr-4">
        <p className={`${ibmPlexMono.className} text-sm leading-relaxed`}>
          As designers, we are often in our visual canvas painting the vision of
          what is possible.
        </p>
        <p className={`${ibmPlexMono.className} text-sm leading-relaxed mt-4`}>
          It's also really important for us to share ideas, stories and e.
        </p>
      </div>
      
      {/* Three image columns with different widths */}
      <div className="flex w-[60%] gap-4">
        {/* Image column 1 - Wider */}
        <div className="w-[45%]">
          <div className="bg-gray-200 h-full rounded-md"></div>
        </div>
        
        {/* Image column 2 - Medium */}
        <div className="w-[30%]">
          <div className="bg-gray-200 h-full rounded-md"></div>
        </div>
        
        {/* Image column 3 - Narrower */}
        <div className="w-[25%]">
          <div className="bg-gray-200 h-full rounded-md"></div>
        </div>
      </div>
    </div>
  );
} 