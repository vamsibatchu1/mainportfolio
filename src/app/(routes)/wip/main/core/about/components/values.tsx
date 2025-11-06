'use client';

import React from 'react';
import Image from 'next/image';
import { ebGaramondFont } from '@/app/fonts';

export default function Values() {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-row gap-[40px] items-start">
      {/* Block 1 Image */}
      <div className="flex flex-col gap-[16px]">
      <div className="relative shrink-0 w-[250px] h-[250px]">
        <Image
          src="/images/wip/about/block1.png"
          alt="Block 1"
          width={250}
          height={250}
          className="w-full h-full object-cover"
        />
      </div>
      <p className={`${ebGaramondFont.className} font-italic text-[24px] leading-[1.1] text-black`}>Humility</p>
      </div>

      {/* Text Content */}
      <div className={`${ebGaramondFont.className} font-normal text-[32px] leading-[1.1] text-black flex-1`}>
        <p className="mb-0">Here&apos;s what people who worked with me are saying. Values: These values define what we consider to be the most important things. They guide our decision-making. We believe that channeling these values is the most promising way to achieve our mission.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Working at OpenAI means being part of a team that is passionate about benefitting people.</p>
      </div>

      {/* Block 2 Image */}
      <div className="flex flex-col gap-[16px]">
      <div className="relative shrink-0 w-[250px] h-[250px]">
        <Image
          src="/images/wip/about/block2.png"
          alt="Block 1"
          width={250}
          height={250}
          className="w-full h-full object-cover"
        />
      </div>
      <p className={`${ebGaramondFont.className} font-italic text-[24px] leading-[1.1] text-black`}>Humility</p>
      </div>


      {/* Block 4 Image */}
      <div className="flex flex-col gap-[16px]">
      <div className="relative shrink-0 w-[250px] h-[250px]">
        <Image
          src="/images/wip/about/block3.png"
          alt="Block 4"
          width={250}
          height={250}
          className="w-full h-full object-cover"
        />
      </div>
      <p className={`${ebGaramondFont.className} font-italic text-[24px] leading-[1.1] text-black`}>
          Integrity
        </p>  
      </div>  
      </div>
  );
}
