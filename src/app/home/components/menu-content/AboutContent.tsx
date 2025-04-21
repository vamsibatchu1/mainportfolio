"use client";

import React from 'react';
import type { MenuContentProps } from './types';
import { louize, inter } from '@/app/fonts';

export function AboutContent({ /* isActive, onClose */ }: MenuContentProps) {
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
      <div className="w-[40%] pr-4">
        <h4 className={`${louize.className} font-medium mb-3 text-xl`}>About Me</h4>
        <p className={`${inter.className} text-sm leading-relaxed text-gray-600`}>
          Step into my world! See how I blend design craft with code, learn about my process, plus a few fun facts.
        </p>
         <a href="/about" className={`${inter.className} text-sm text-gray-600 hover:text-black mt-4 inline-block`}>
            Learn more →
        </a>
      </div>
      
      {/* Two image columns */}
      <div className="flex w-[60%] gap-4">
        {/* Image column 1 */}
        <div className="w-1/2">
          <div className="bg-gray-200 h-full rounded-md group relative overflow-hidden">
             {/* Placeholder for image/content 1 */}
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-200"></div>
             <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-1.5 py-0.5 rounded">Design Focus</span>
          </div>
        </div>
        
        {/* Image column 2 */}
        <div className="w-1/2">
          <div className="bg-gray-300 h-full rounded-md group relative overflow-hidden">
             {/* Placeholder for image/content 2 */}
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-200"></div>
             <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-1.5 py-0.5 rounded">Personal Interests</span>
          </div>
        </div>
      </div>
    </div>
  );
}