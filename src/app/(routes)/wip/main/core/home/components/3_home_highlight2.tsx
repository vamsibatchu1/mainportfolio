'use client';

import React from 'react';
import Image from 'next/image';
import { ebGaramondFont, jakartaFont } from '@/app/fonts';

export default function HomeHighlight2Card() {
  const firstParagraph = "Led the design and strategy for emerging AI initiatives, including the development of Rocket Logic Synopsis, a native AI-powered mortgage communication intelligence platform";
  
  const secondParagraph = "This project transformed compliance oversight from a fragmented, manual process into an intelligent system—reducing investigation time by 85% and impacting 3,244+ team members who previously reviewed 164,498 calls quarterly.";

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col">
      {/* Main Content */}
      <div className="flex gap-[24px] items-end justify-start w-full">
        {/* Left side - Text content */}
        <div className="flex flex-col gap-[16px] items-start justify-start w-full max-w-[600px]">
          {/* First Paragraph */}
          <div className="w-full">
            <p className={`${ebGaramondFont.className} text-black text-[32px] leading-[110%]`}>
              {firstParagraph}
            </p>
          </div>

          {/* Second Paragraph */}
          <div className="w-full">
            <p className={`${jakartaFont.className} text-[#767676] text-[20px] leading-[120%]`}>
              {secondParagraph}
            </p>
          </div>
        </div>

        {/* Right side - Images */}
        <div className="flex gap-[40px] items-center justify-start flex-1">
          <div className="w-[388px] h-[388px] relative shrink-0">
            <Image
              src="/images/wip/home/thumb_synopsis1.png"
              alt="Synopsis 1"
              width={388}
              height={388}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[388px] h-[388px] relative shrink-0">
            <Image
              src="/images/wip/home/thumb_synopsis2.png"
              alt="Synopsis 2"
              width={388}
              height={388}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

