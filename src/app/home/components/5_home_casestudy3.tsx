'use client';

import React from 'react';
import { jakartaFont } from '../../fonts';
import { DefaultButton, IconButton, BrandSymbol } from '../../components/portfolio_button';
import { Airplay } from 'lucide-react';

export default function HomeCaseStudy3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-start relative size-full">
      {/* Row 1 */}
      <div className="content-stretch flex gap-[24px] items-end justify-start relative shrink-0 w-[1440px]">
        {/* Main text section */}
        <div className="flex flex-row items-end self-stretch">
          <div className="content-stretch flex flex-col gap-[20px] h-full items-start justify-end relative shrink-0 w-[480px]">
            <div className={`${jakartaFont.variable} font-jakarta font-medium leading-[1.1] relative shrink-0 text-[38px] text-black w-full`}>
              <p className="leading-[1.1]">
                Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with bankers
              </p>
            </div>
          </div>
        </div>

        {/* Description section */}
        <div className={`${jakartaFont.variable} font-jakarta font-medium h-full leading-[1.1] relative shrink-0 text-[21px] text-black w-[400px]`}>
          <p className="leading-[1.1]">
            Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with bankers, coming up with new design patterns and flows to ensure adoption & consistency. This initiative solved critical usability issues, improved information architecture.nitiative solved critical usability issues, improved information architecture.nitiative solved critical usability issues.solved critical usability issues.
          </p>
        </div>

        {/* Analytics section */}
        <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
          <div className="basis-0 content-stretch flex flex-col gap-[24px] grow h-full items-start justify-end min-h-px min-w-px relative shrink-0">
            {/* Buttons */}
            <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full">
              <DefaultButton className="h-[36px]">
                Button
              </DefaultButton>
              <IconButton className="h-[36px] w-[36px]" icon={Airplay} />
            </div>

            {/* Analytics numbers */}
            <div className="basis-0 bg-black box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px px-[64px] py-0 relative rounded-[16px] shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0">
                <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0">
                  {/* Brand symbol */}
                  <BrandSymbol 
                    color="#d6bbfb" 
                    size={64}
                    className="shrink-0"
                  />
                  <div className={`${jakartaFont.variable} font-jakarta font-medium leading-[1.1] relative shrink-0 text-[72px] text-nowrap text-white tracking-[-2.88px]`}>
                    <p className="leading-[1.1] whitespace-pre">36%</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-start relative shrink-0">
                  <div className={`${jakartaFont.variable} font-jakarta font-medium leading-[1.1] relative shrink-0 text-[19.97px] text-nowrap text-white tracking-[-0.7988px]`}>
                    <p className="leading-[1.1] whitespace-pre">increase in product sentiment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 - Images */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1440px]">
        <div className="bg-[#f2f2f2] rounded-[16px] shrink-0 size-[300px]" />
        <div className="bg-[#f2f2f2] rounded-[16px] shrink-0 size-[300px]" />
        <div className="bg-[#f2f2f2] h-[300px] rounded-[16px] shrink-0 w-[760px]" />
      </div>
    </div>
  );
}
