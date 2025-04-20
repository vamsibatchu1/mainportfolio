"use client";

import React from 'react';
import { louize } from '../../fonts';

export default function Problem() {
  return (
    <div className="max-w-[800px] mx-auto px-[40px] py-[60px]">
      {/* Main Problem Content */}
      <div className="mb-[60px]">
        <h2 className={`${louize.className} text-[30px] font-normal mb-[24px] tracking-[-0.5px]`}>The Problem</h2>
        
        <p className={`${louize.className} text-[20px] leading-[32px] tracking-[-0.3px] mb-[40px]`}>
          StudioPaack™ is a Paris based creative and branding studio founded by Nicolas Garcia. For each opportunity and new project my approach is to create bold concepts and deep-colored graphics. The passion I have for this industry, feeding me everyday, mixed with the dedication and interest I have in the people I work with, have no other outcome than a beautiful collaboration and unique identity.
        </p>
        
        {/* Horizontal Line */}
        <div className="w-full h-[1px] bg-[#e0e0e0] mb-[40px]"></div>
        
        {/* Three Columns of Information */}
        <div className="grid grid-cols-3 gap-[40px]">
          <div>
            <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
              While the road to each project is personalized, I do love as much as I can to play with letters and create symbols as a nod. Teaming up with other designers, typographers, copyrighters and developers is also something I care about to gather a high qualified family and aspire for the best.
            </p>
          </div>
          
          <div>
            <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
              Art & creative direction, logotypes, symbols, typeface design, print, digital design, packaging, editorial design, graphic design, campaign development.
            </p>
          </div>
          
          <div>
            <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
              Numbered, Dogstudio, H5 Studio, Yard, Socialclub, VendrediSociety, Tambien, Crescenso, Tailbird, Cher Ami, L&apos;Oréal, Troa...
            </p>
          </div>
        </div>
      </div>
      
      {/* Additional Content (can be added if needed) */}
      <div className="mb-[60px]">
        <h3 className={`${louize.className} text-[24px] font-normal mb-[20px] tracking-[-0.4px]`}>Process Overview</h3>
        
        <p className={`${louize.className} text-[18px] leading-[28px] tracking-[-0.3px]`}>
          Our approach to solving design challenges involves a thorough understanding of both business requirements and user needs. We begin by identifying key pain points in the current system before exploring potential solutions that balance aesthetics with functionality.
        </p>
      </div>
      
      {/* Supporting Visuals */}
      <div>
        <img 
          src="/images/placeholder-process.jpg" 
          alt="Design process visualization" 
          className="w-full h-auto object-cover mb-[16px]"
        />
        <p className={`${louize.className} text-[14px] text-[#6f6f6f] italic`}>
          Visual representation of our design thinking process
        </p>
      </div>
    </div>
  );
} 