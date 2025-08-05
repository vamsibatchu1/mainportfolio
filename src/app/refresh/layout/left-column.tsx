'use client';

import React from 'react';
import Image from 'next/image';
import { jakartaFont, fiveFont } from '../../fonts';

export default function LeftColumn() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Navigation Section */}
      <div className="flex flex-col gap-8">
        {/* Home */}
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-5 h-5 bg-[#16B364]"></div>
              <div className="w-5 h-5 bg-[#16B364]"></div>
              <div className="w-5 h-5 bg-[#16B364]"></div>
              <div className="w-5 h-5 bg-[#16B364]"></div>
            </div>
            <div className="flex flex-row">
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5 bg-[#16B364]"></div>
            </div>
          </div>
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>Home</span>
        </div>
        
        {/* Work */}
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-5 h-5 bg-[#2973DE]"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5 bg-[#2973DE]"></div>
            </div>
            <div className="flex flex-row">
              <div className="w-5 h-5 bg-[#2973DE]"></div>
              <div className="w-5 h-5 bg-[#2973DE]"></div>
              <div className="w-5 h-5 bg-[#2973DE]"></div>
              <div className="w-5 h-5 bg-[#2973DE]"></div>
            </div>
          </div>
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>Work</span>
        </div>
        
        {/* Experiments */}
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-5 h-5 bg-[#FDB022]"></div>
              <div className="w-5 h-5 bg-[#FDB022]"></div>
              <div className="w-5 h-5 bg-[#FDB022]"></div>
              <div className="w-5 h-5"></div>
            </div>
            <div className="flex flex-row">
              <div className="w-5 h-5 bg-[#FDB022]"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5 bg-[#FDB022]"></div>
              <div className="w-5 h-5"></div>
            </div>
          </div>
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>Experiments</span>
        </div>
        
        {/* Writing */}
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-5 h-5 bg-[#A48AFB]"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5"></div>
            </div>
            <div className="flex flex-row">
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5 bg-[#A48AFB]"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5"></div>
            </div>
          </div>
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>Writing</span>
        </div>
        
        {/* About me */}
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-5 h-5 bg-[#EF6820]"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5"></div>
              <div className="w-5 h-5 bg-[#EF6820]"></div>
            </div>
            <div className="flex flex-row">
              <div className="w-5 h-5 bg-[#EF6820]"></div>
              <div className="w-5 h-5 bg-[#EF6820]"></div>
              <div className="w-5 h-5 bg-[#EF6820]"></div>
              <div className="w-5 h-5 bg-[#EF6820]"></div>
            </div>
          </div>
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>About me</span>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="mt-auto">
        {/* First row - 3 columns with 20px gap */}
        <div className="flex flex-row gap-5 items-end mb-4">
                      {/* First column - Image */}
            <div className="w-[103px] h-[40px]">
              <Image
                src="/images/refresh-images/v-b.svg"
                alt="Profile Image"
                width={103}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          
          {/* Second column - White cursor block */}
          <div className="w-6 h-10 bg-white"></div>
          
          {/* Third column - Text block with Instrument Serif */}
          <div className="flex-1">
            <div className={`${fiveFont.className} text-white text-[40px] leading-[100%] tracking-[0%]`}>
              <p>product designer &</p>
              <p>creative technologist</p>
              <p>crafting possibilities with</p>
              <p>craft & code.</p>
            </div>
          </div>
        </div>
        
        {/* Second row - Text with Plus Jakarta Sans */}
        <div className={`${jakartaFont.className} text-gray-400 text-[20px] leading-[120%] tracking-[-0.04em]`}>
          <p>Design is not what we make, design is what we make</p>
          <p>possible. We are here to show what can be.</p>
        </div>
      </div>
    </div>
  );
} 