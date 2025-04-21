"use client";

import React from 'react';
import type { MenuContentProps } from './types';
import { louize, inter } from '@/app/fonts';

// Removed sample experiment data - not needed for new layout
// const experiments = [...];

export function ExperimentsContent({ /* isActive, onClose */ }: MenuContentProps) { // Removed unused props
  return (
    <div className="p-6 h-full flex">
      {/* First column - Text content */}
      <div className="w-[40%] pr-4 flex flex-col justify-center">
        <h4 className={`${louize.className} font-medium mb-3 text-xl`}>Experiments</h4>
        <p className={`${inter.className} text-sm leading-relaxed text-gray-600`}>
          I love experimenting with new technologies and building fun apps. Take a look!
        </p>
         <a href="/experiments" className={`${inter.className} text-sm text-gray-600 hover:text-black mt-4 inline-block`}>
            View all experiments →
        </a>
      </div>
      
      {/* Two image columns for animations */}
      <div className="flex w-[60%] gap-4">
        {/* Image column 1 */}
        <div className="w-1/2">
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 h-full rounded-md group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
             {/* Placeholder for Animation 1 */}
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-indigo-400 text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity">Animation Preview 1</span>
             </div>
          </div>
        </div>
        
        {/* Image column 2 */}
        <div className="w-1/2">
           <div className="bg-gradient-to-br from-pink-100 to-rose-100 h-full rounded-md group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
             {/* Placeholder for Animation 2 */}
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-rose-400 text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity">Animation Preview 2</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
} 