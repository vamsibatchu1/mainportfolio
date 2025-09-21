"use client";

import React from 'react';
import Image from 'next/image';
import { secFont } from '@/lib/config/fonts';

export function Problem() {
  return (
    <section className="mb-[80px]">
      <div className="max-w-[1000px] mx-auto">
        {/* Problem Statement */}
        <h2 className={`${secFont.className} text-[30px] font-normal mb-[24px] tracking-[-0.5px]`}>The Problem</h2>
        
        <p className={`${secFont.className} text-[20px] leading-[32px] tracking-[-0.3px] mb-[40px]`}>
          Our legacy enterprise software was built over a decade ago with outdated UI patterns, resulting in poor usability and high training costs for new users. Key pain points included:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[40px]">
          <div className="bg-[#f8f8f8] p-[24px] rounded-[12px]">
            <h3 className="text-[18px] font-medium mb-[16px]">Complex Navigation</h3>
            <p className={`${secFont.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
              Users struggled to navigate the application, often spending 30+ seconds to locate key functions in nested menus.
            </p>
          </div>
          <div className="bg-[#f8f8f8] p-[24px] rounded-[12px]">
            <h3 className="text-[18px] font-medium mb-[16px]">Inconsistent Patterns</h3>
            <p className={`${secFont.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
              Different sections of the application used varying UI components and interaction models, leading to confused users.
            </p>
          </div>
          <div className="bg-[#f8f8f8] p-[24px] rounded-[12px]">
            <h3 className="text-[18px] font-medium mb-[16px]">Poor Mobile Support</h3>
            <p className={`${secFont.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
              With 40% of users now accessing the system on tablets and phones, the desktop-only design created significant limitations.
            </p>
          </div>
        </div>
        
        {/* Process Overview */}
        <h3 className={`${secFont.className} text-[24px] font-normal mb-[20px] tracking-[-0.4px]`}>Process Overview</h3>
        
        <p className={`${secFont.className} text-[18px] leading-[28px] tracking-[-0.3px]`}>
          Our goal was to completely redesign the core workflow while maintaining familiarity for existing users. We followed a structured process:
        </p>
        
        <div className="my-[40px]">
          <Image 
            src="/images/casestudy/process-diagram.png" 
            alt="Process diagram showing Research, Ideation, Design System Creation, Prototyping, and Implementation phases" 
            width={1000} 
            height={400} 
            className="rounded-[12px]"
          />
          <p className={`${secFont.className} text-[14px] text-[#6f6f6f] italic`}>
            Our 5-phase redesign approach spanning 14 weeks
          </p>
        </div>
      </div>
    </section>
  );
} 