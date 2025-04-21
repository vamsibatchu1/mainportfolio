"use client";

import React from 'react';
import type { MenuContentProps } from './types';
import { louize, inter } from '@/app/fonts';

// NOTE: Content copied from AboutContent.tsx as requested.
// Renamed function to BlogContent.
export function BlogContent({ /* isActive, onClose */ }: MenuContentProps) {
  /* const items = [
   // {
      title: 'Experience',
      description: '10+ years of design and development',
      date: '10+ years',
    },
    {
      title: 'Leadership',
      description: 'Leading design teams and initiatives',
      date: '5+ years',
    }
  ]; */ // Removed unused variable

  return (
    <div className="p-6 h-full flex">
      {/* First column - Text content */}
      <div className="w-[40%] pr-4 flex flex-col justify-center"> 
        <h4 className={`${louize.className} font-medium mb-3 text-xl`}>From the Blog</h4>
        <p className={`${inter.className} text-sm leading-relaxed text-gray-600`}>
          Thoughts on design, code, and product. Explore articles on UI/UX, front-end techniques, design systems, and more. Read on!
        </p>
         <a href="/blog" className={`${inter.className} text-sm text-gray-600 hover:text-black mt-4 inline-block`}>
            View all posts →
        </a>
      </div>
      
      {/* Two image columns - representing blog posts or categories */}
      <div className="flex w-[60%] gap-4">
        {/* Image column 1 - Represents latest/featured post */}
        <div className="w-1/2">
          <div className="bg-gray-200 h-full rounded-md group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-200"></div>
             <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-1.5 py-0.5 rounded">Latest Post</span>
          </div>
        </div>
        
        {/* Image column 2 - Represents another post/category */}
        <div className="w-1/2">
          <div className="bg-gray-300 h-full rounded-md group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-200"></div>
            <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-1.5 py-0.5 rounded">Design Thinking</span>
          </div>
        </div>
        
        {/* Removed third image column */}
      </div>
    </div>
  );
} 