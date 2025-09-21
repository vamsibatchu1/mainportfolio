'use client';

import React from 'react';
import MainLayout from '../layout/MainLayout';
import { jakartaFont, triFont, interFont } from '../fonts';
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

// Home Header 2 Component
function HomeHeader2() {
  return (
    <div className="w-[1440px] mx-auto mt-[32px] flex flex-col">
      {/* Home Header 2 Section */}
      <div className="content-stretch flex gap-[40px] items-end justify-start relative size-full">
        {/* Left side - Main content */}
        <div className="basis-0 content-stretch flex flex-col gap-[40px] grow items-start justify-start min-h-px min-w-px relative shrink-0">
          {/* Main description with different font sizes */}
          <div className={`${jakartaFont.variable} font-jakarta font-bold leading-[0] relative shrink-0 text-[0px] text-black tracking-[-1.6px] w-full`}>
            <p className="leading-[1.1] whitespace-pre-wrap">
              <span className="text-[40px]">
                A systems-thinking product designer with a high bar for visual design, skilled at simplifying complexity and designing cohesive experiences at enterprise scale.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
              <span className="text-[32px]">I specialize in defining the vision for zero-to-one, AI-native products and evolving data-informed design systems.</span>
            </p>
          </div>
          
          {/* Decorative line and numbered list section */}
          <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">
            {/* Decorative line */}
            <div className="h-0 relative shrink-0 w-[312px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                {/* Placeholder for decorative line SVG */}
                <div className="w-full h-[1px] bg-black"></div>
              </div>
            </div>
            
            {/* Numbered list */}
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
              <div className={`content-stretch flex ${triFont.variable} font-tri gap-[40px] items-start justify-start leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.72px] w-full`}>
                <div className="relative shrink-0 w-[8px]">
                  <p className="leading-none">1</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                  <p className="leading-none">Define and own the strategic vision for significant portions of the product platform, influ</p>
                </div>
              </div>
              <div className={`content-stretch flex ${triFont.variable} font-tri gap-[40px] items-start justify-start leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.72px] w-full`}>
                <div className="relative shrink-0 w-[8px]">
                  <p className="leading-none">2</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                  <p className="leading-none">Define and own the strategic vision for significant portions</p>
                </div>
              </div>
              <div className={`content-stretch flex ${triFont.variable} font-tri gap-[40px] items-start justify-start leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.72px] w-full`}>
                <div className="relative shrink-0 w-[8px]">
                  <p className="leading-none">3</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                  <p className="leading-none">Define and own the strategic vision for significant portions</p>
                </div>
              </div>
              <div className={`content-stretch flex ${triFont.variable} font-tri gap-[40px] items-start justify-start leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.72px] w-full`}>
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
        
        {/* Right side - Handwritten note image */}
        <div className="h-[300px] shrink-0 w-[411px] overflow-hidden">
          <img 
            src="/images/currently.png" 
            alt="Handwritten note about current role at Rocket Mortgage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

// Case Study 1 Component
function CaseStudy1() {
  return (
    <div className="w-[1440px] mx-auto mt-[48px] flex flex-col">
      {/* Main Content */}
      <div className="content-stretch flex gap-[24px] items-start justify-start relative shrink-0 w-full">
            {/* Left side - Text content */}
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-start leading-none relative shrink-0 text-black w-[600px]">
              <div className="content-stretch flex flex-col gap-[32px] items-start justify-start relative size-full">
                <div className={`${triFont.variable} font-tri leading-[0] not-italic relative shrink-0 text-[22px] text-black tracking-[-0.88px] w-full`}>
                  <p className="leading-[1.3]">Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with bankers, coming up with new design patterns and flows to ensure adoption & consistency. This initiative solved critical usability issues, improved information architecture.</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                  <div className={`basis-0 flex flex-col ${interFont.variable} font-inter font-normal grow justify-center leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-neutral-950`}>
                    <p className="mb-0">Client requested dashboard redesign with focus on mobile responsiveness.</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">1. New analytics widgets for daily/weekly metrics</p>
                    <p className="mb-0">2. Simplified navigation menu</p>
                    <p className="mb-0">3. Dark mode support</p>
                    <p>4. Timeline: 6 weeks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image placeholders */}
            <div className="basis-0 content-stretch flex gap-[40px] grow items-center justify-start min-h-px min-w-px relative shrink-0">
              <div className="basis-0 bg-[#e2e2e2] grow h-[300px] min-h-px min-w-px rounded-[14px] shrink-0">
                <img 
                  src="/images/casestudy1-t1.png" 
                  alt="Handwritten note about current role at Rocket Mortgage"
                  className="w-full h-full object-cover"
              />
              </div>
              <div className="basis-0 bg-[#e2e2e2] grow h-[300px] min-h-px min-w-px rounded-[14px] shrink-0">
                <img 
              src="/images/casestudy1-t2.png" 
              alt="Handwritten note about current role at Rocket Mortgage"
              className="w-full h-full object-cover"
              />
              </div>
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
    </div>
  );
}

export default function HomePage() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col">
        {/* Home Header Section 
        <HomeHeader />*/}
        
        {/* Home Header 2 Section */}
        <HomeHeader2 />
        
        {/* Case Study 1 Section */}
        <CaseStudy1 />
        
        {/* Additional sections will be added here as components */}
      </div>
    </MainLayout>
  );
}
