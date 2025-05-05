// src/app/(main)/home/components/navbar-test/NavBlogContent.tsx
import React from 'react';
// Removed unused priFont, triFont
import { secFont, triFont, fourFont } from '@/app/fonts'; 


export default function NavBlogContent() {
  return (
    <div className="flex flex-row w-[1184px] gap-[40px]">
      {/* Column 1 */}
      <div className="w-[368px] h-[280px] flex flex-col bg-black justify-between"> 
      <p className={`${secFont.className} text-white text-4xl leading-[44px]`}>My thoughts on design, code, and product. Explore articles on UX & latest technologies.</p>
      <p className={`${fourFont.className} text-gray-400 text-lg`}>Column 1 content placeholder...</p>
      </div>

      {/* Column 2 */}
      <div className="w-[368px] h-[280px] flex flex-col p-8 bg-white justify-between">
        <h3 className={`${triFont.className} text-[#000000] text-2xl`}>From personal computing to personal software</h3>
        <p className={`${triFont.className} text-gray-400 text-lg`}>Published Feb 18, 2025</p>
      </div>

      {/* Column 3 */}
      <div className="w-[368px] h-[280px] flex flex-col p-8 bg-white justify-between">
        <h3 className={`${triFont.className} text-[#000000] text-2xl`}>The next era of design is Intent-driven</h3>
        <p className={`${triFont.className} text-gray-400 text-lg`}>Published Dec 09, 2024</p>
      </div>
    </div>
  );
} 