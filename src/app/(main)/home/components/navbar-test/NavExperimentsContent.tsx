import React from 'react';
import { secFont, triFont, fourFont } from '@/app/fonts'; 
import Image from 'next/image';


export default function NavExperimentsContent() {
  return (
    <div className="flex flex-row w-[1184px] gap-[40px]">
      {/* Column 1 */}
      <div className="w-[368px] h-[280px] flex flex-col bg-black justify-between"> 
      <p className={`${secFont.className} text-white text-4xl leading-[44px]`}>I love experimenting with new technologies and building fun apps. Take a look!</p>
      <p className={`${fourFont.className} text-gray-400 text-lg`}>Currently building a new app focused on apple health for couples</p>
      </div>

      {/* Column 2 - Simplified to display single pre-rendered image */}
      <div className="w-[368px] h-[280px] relative overflow-hidden bg-[#151515]"> 
        <Image 
            src="/images/navexperimentscard1.png" // Verify this filename
            alt="Experiment Card 2 Content" 
            fill 
            style={{ objectFit: 'cover' }} 
        />
      </div>

      {/* Column 3 */}
      <div className="w-[368px] h-[280px] relative overflow-hidden bg-[#151515]"> 
        <Image 
            src="/images/navexperimentscard1.png" // Verify this filename
            alt="Experiment Card 2 Content" 
            fill 
            style={{ objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
} 