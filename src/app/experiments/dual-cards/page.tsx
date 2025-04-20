"use client";

import React, { useState } from 'react';
import { 
  SmallDualCard,
  RegularDualCard,
  CardSubtitle,
  CardTitle
} from '@/components/ui/dual-card';

export default function DualCardsTest() {
  const [background, setBackground] = useState<string>('#000000');
  const backgrounds = ['#000000', '#FF531A', '#F5F4F0', '#1A365D', '#44337A'];
  
  return (
    <div className="min-h-screen p-8 transition-colors duration-300" style={{ backgroundColor: background }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-white">Dual Cards</h1>
          
          <div className="flex gap-2">
            {backgrounds.map((color) => (
              <button
                key={color}
                className="w-10 h-10 rounded-full border-2 border-white/50 transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
                onClick={() => setBackground(color)}
                aria-label={`Set background to ${color}`}
              />
            ))}
          </div>
        </div>
        
        {/* Regular Size Cards Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Regular Size Dual Card</h2>
          
          <RegularDualCard 
            whiteCardContent={
              <>
                <CardTitle>Regular Card Title</CardTitle>
                <CardSubtitle>Regular card subtitle</CardSubtitle>
              </>
            }
            translucentCardContent={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V12L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
        
        {/* Small Size Cards Section */}
        <div className="mb-12">
          <h2 className="text-[24px] font-semibold text-white mb-6">Small Size Dual Card</h2>
          
          <SmallDualCard 
            whiteCardContent={
              <CardSubtitle size="small">Small Card Subtitle</CardSubtitle>
            }
            translucentCardContent={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V12L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
} 