'use client';

import React from 'react';
import { jakartaFont } from '../../../fonts';
import { ButtonWithSymbol, DefaultButton, IconButton } from '../../../components/portfolio_button';
import { Airplay } from 'lucide-react';

export default function HomeCaseStudy2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative size-full">
      {/* Image section */}
      <div className="content-stretch flex gap-[40px] h-[400px] items-center justify-start relative shrink-0 w-full">
        <div className="basis-0 bg-[#f2f2f2] grow h-full min-h-px min-w-px rounded-[14px] shrink-0" />
        <div className="basis-0 bg-[#f2f2f2] grow h-full min-h-px min-w-px rounded-[14px] shrink-0" />
      </div>

      {/* Content section */}
      <div className="content-stretch flex gap-[24px] items-start justify-start relative shrink-0 w-full">
        {/* Left column - Large text */}
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-[40px] items-center justify-start relative shrink-0 w-full">
            <div className={`basis-0 ${jakartaFont.variable} font-jakarta font-medium grow leading-[1.1] min-h-px min-w-px relative shrink-0 text-[38px] text-black`}>
              <p className="leading-[1.1]">
                Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with bankers, coming up with new design patterns and flows to ensure adoption & consistency.
              </p>
            </div>
          </div>
        </div>

        {/* Right column - Smaller text, bullet points, and buttons */}
        <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
          {/* Description text */}
          <div className="content-stretch flex gap-[40px] items-center justify-start relative shrink-0 w-full">
            <div className={`basis-0 ${jakartaFont.variable} font-jakarta font-medium grow leading-[1.1] min-h-px min-w-px relative shrink-0 text-[21px] text-black`}>
              <p className="leading-[1.1]">
                Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with bankers, coming up with new design patterns and flows to ensure adoption & consistency. This initiative solved critical usability issues, improved information architecture.
              </p>
            </div>
          </div>

          {/* Bullet points */}
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
            <div className={`basis-0 ${jakartaFont.variable} font-jakarta font-medium grow leading-[1.1] min-h-px min-w-px relative shrink-0 text-[16px] text-black`}>
              <p className="mb-0">1. New analytics widgets for daily/weekly metrics</p>
              <p className="mb-0">2. Simplified navigation menu</p>
              <p className="mb-0">3. Dark mode support</p>
              <p>4. Timeline: 6 weeks</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[8px] items-start justify-start relative">
            <ButtonWithSymbol className="h-[36px]">
              Button
            </ButtonWithSymbol>
            <DefaultButton className="h-[36px]">
              Button
            </DefaultButton>
            <IconButton className="h-[36px] w-[36px]" icon={Airplay} />
          </div>
        </div>
      </div>
    </div>
  );
}
