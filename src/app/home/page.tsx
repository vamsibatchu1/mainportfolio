'use client';

import React from 'react';
import MainLayout from '../layout/MainLayout';
import { jakartaFont, triFont, interFont } from '../fonts';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Expand } from 'lucide-react';

// Home Header Component
function HomeHeader() {
  return (
    <div className="w-[1440px] mx-auto mt-[32px] flex flex-col">
      {/* Home Header Section */}
      <div className="content-stretch flex gap-[40px] items-start justify-start relative size-full">
        {/* Left side - Main description */}
        <div className={`${jakartaFont.variable} font-jakarta font-bold leading-[1.1] relative shrink-0 text-[40px] text-black tracking-[-1.6px] w-[889px]`}>
          <p>
            A systems-thinking product designer with a high bar for visual design, skilled at simplifying complexity and designing cohesive experiences at enterprise scale. With a proven track record leading cross-functional initiatives to shape product strategy, I specialize in defining the vision for zero-to-one, AI-native products and evolving data-informed design systems.
          </p>
        </div>
        
        {/* Right side - Numbered list */}
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className={`content-stretch flex ${triFont.variable} font-tri gap-[40px] items-start justify-start leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.72px] w-full`}>
            <div className="relative shrink-0 w-[8px]">
              <p className="leading-none">1</p>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
              <p className="leading-none">Define and own the strategic vision for significant portions of the product platform, influ</p>
            </div>
          </div>
          <div className={`content-stretch flex ${triFont.variable} font-tri gap-[40px] items-start justify-start leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.72px] w-full`}>
            <div className="relative shrink-0 w-[8px]">
              <p className="leading-none">2</p>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
              <p className="leading-none">Define and own the strategic vision for significant portions</p>
            </div>
          </div>
          <div className={`content-stretch flex ${triFont.variable} font-tri gap-[40px] items-start justify-start leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.72px] w-full`}>
            <div className="relative shrink-0 w-[8px]">
              <p className="leading-none">3</p>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
              <p className="leading-none">Define and own the strategic vision for significant portions</p>
            </div>
          </div>
          <div className={`content-stretch flex ${triFont.variable} font-tri gap-[40px] items-start justify-start leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.72px] w-full`}>
            <div className="relative shrink-0 w-[8px]">
              <p className="leading-none">4</p>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
              <p className="leading-none">Define and own the strategic vision for significant portionsDefine and own the strategic vision for significant portionsDefine and own the strategic vision for significant portionsDefine and own the strategic vision for significant portions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Case Study 1 Component
function CaseStudy1() {
  return (
    <div className="w-[1440px] mx-auto mt-[48px] flex flex-col">
      <Card className="bg-white relative rounded-[10px] size-full border border-neutral-200 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <CardContent className="box-border content-stretch flex flex-col gap-[24px] items-start justify-start overflow-clip p-[32px] relative size-full">

          {/* Main Content */}
          <div className="content-stretch flex gap-[24px] items-start justify-start relative shrink-0 w-full">
            {/* Left side - Text content */}
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-start leading-none relative shrink-0 text-black w-[600px]">
              <div className={`${jakartaFont.variable} font-jakarta font-bold relative shrink-0 text-[28px] tracking-[-1.12px] w-full`}>
                <p className="leading-[1.1]">Spearheaded the end-to-end redesign of Rocket Logic</p>
              </div>
              <div className={`${triFont.variable} font-tri font-normal not-italic relative shrink-0 text-[22px] tracking-[-0.88px] w-full`}>
                <p className="leading-[1.2]">
                  The core origination and pricing platform used by 4,500 bankers. The redesign involved running design sprints with bankers, coming up with new design patterns and flows to ensure adoption & consistency. This initiative solved critical usability issues, improved information architecture, and redesigning resulted in a 135,000-hour per month productivity gain and a 30%+ increase in banker sentiment.
                </p>
              </div>
            </div>

            {/* Right side - Image placeholders */}
            <div className="basis-0 content-stretch flex gap-[40px] grow items-center justify-start min-h-px min-w-px relative shrink-0">
              <div className="basis-0 bg-[#e2e2e2] grow h-[300px] min-h-px min-w-px rounded-[14px] shrink-0" />
              <div className="basis-0 bg-[#e2e2e2] grow h-[300px] min-h-px min-w-px rounded-[14px] shrink-0" />
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="bg-white box-border content-stretch flex h-[auto] items-center justify-between px-0 pt-[16px] relative shrink-0 w-full">
            <div className={`${interFont.variable} font-inter font-semibold justify-center leading-[28px] relative shrink-0 text-[18px] text-neutral-950 text-nowrap`}>
              <p className="leading-[28px] whitespace-pre">Quick actions</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start justify-start relative shrink-0">
              <Button variant="secondary" size="default" className="h-[36px] px-[16px] py-[8px] bg-[#F5F5F5]">
                <span className={`${interFont.variable} font-inter font-medium text-[14px] leading-[20px] text-neutral-900`}>
                  Explain like I am 5
                </span>
              </Button>
              <Button variant="secondary" size="default" className="h-[36px] px-[16px] py-[8px] bg-[#F5F5F5]">
                <span className={`${interFont.variable} font-inter font-medium text-[14px] leading-[20px] text-neutral-900`}>
                  View the full case study
                </span>
              </Button>
              <Button variant="secondary" size="icon" className="w-[36px] h-[36px] bg-[#F5F5F5]">
                <Expand className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function HomePage() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col">
        {/* Home Header Section */}
        <HomeHeader />
        
        {/* Case Study 1 Section */}
        <CaseStudy1 />
        
        {/* Additional sections will be added here as components */}
      </div>
    </MainLayout>
  );
}
