'use client';

import React from 'react';
import Image from 'next/image';
import { ebGaramondFont } from '@/app/fonts';

export default function HomeHighlight1Card() {
  const text = "Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with bankers, coming up with new design patterns and flows to ensure adoption & consistency. This initiative solved critical usability issues, improved information architecture.";

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10">
      {/* First Row: Image */}
      <div className="w-full">
        <Image
          src="/images/wip/home/thumb_hbp.png"
          alt="Rocket Logic redesign"
          width={1440}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
