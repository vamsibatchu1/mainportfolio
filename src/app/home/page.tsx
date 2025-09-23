'use client';

import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { jakartaFont, triFont, interFont } from '../fonts';
import { Button } from '../../components/ui/button';
import { Expand } from 'lucide-react';
import { CaseStudyDialog } from '../components/casestudy_dialog';
import { motion } from 'framer-motion';



// Home Header 2 Component
function HomeHeader2() {
  return (
    <div className="w-[1440px] mx-auto mt-[40px] flex flex-col">
      {/* Home Header 2 Section */}
      <div className="content-stretch flex gap-[40px] items-end justify-start relative size-full">
        {/* Left side - Main content */}
        <motion.div 
          className="basis-0 content-stretch flex flex-col gap-[40px] grow items-start justify-start min-h-px min-w-px relative shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Main description with different font sizes */}
          <div className={`${jakartaFont.variable} font-jakarta font-bold leading-[0] relative shrink-0 text-[0px] text-black tracking-[-1.6px] w-full`}>
            <img 
              src="/images/home-header1.png" 
              alt="Handwritten note about current role at Rocket Mortgage"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Right side - Handwritten note image */}
        <motion.div 
          className="h-[300px] shrink-0 w-[411px] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <img 
            src="/images/currently.png" 
            alt="Handwritten note about current role at Rocket Mortgage"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}


// Case Study 1 Component
function CaseStudy1() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="w-[1440px] mx-auto flex flex-col">
      {/* Main Content */}
      <div className="content-stretch flex gap-[24px] items-start justify-start relative shrink-0 w-full">
            {/* Left side - Text content */}
            <motion.div 
              className="content-stretch flex flex-col gap-[16px] items-start justify-start leading-none relative shrink-0 text-black w-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            >
              <div className="content-stretch flex flex-col gap-[32px] items-start justify-start relative size-full">
                <div className={`${triFont.variable} font-tri leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.68px] w-full`}>
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
            </motion.div>

            {/* Right side - Image placeholders */}
            <div className="basis-0 content-stretch flex gap-[40px] grow items-center justify-start min-h-px min-w-px relative shrink-0">
              <motion.div 
                className="basis-0 bg-[#e2e2e2] grow h-[300px] min-h-px min-w-px rounded-[14px] shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
              >
                <img 
                  src="/images/casestudy1-t1.png" 
                  alt="Handwritten note about current role at Rocket Mortgage"
                  className="w-full h-full object-cover"
              />
              </motion.div>
              <motion.div 
                className="basis-0 bg-[#e2e2e2] grow h-[300px] min-h-px min-w-px rounded-[14px] shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
              >
                <img 
              src="/images/casestudy1-t2.png" 
              alt="Handwritten note about current role at Rocket Mortgage"
              className="w-full h-full object-cover"
              />
              </motion.div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <motion.div 
            className="bg-white box-border content-stretch flex h-[auto] items-center justify-between px-0 pt-[16px] relative shrink-0 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
          >
            <div className={`${interFont.variable} font-inter font-semibold justify-center leading-[28px] relative shrink-0 text-[18px] text-neutral-950 text-nowrap`}>
              <p className="leading-[28px] whitespace-pre">Quick actions</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start justify-start relative shrink-0">
              <div className="relative">
                <Button 
                  variant="secondary" 
                  size="default" 
                  className="h-[36px] px-[16px] py-[8px] bg-[#F5F5F5]"
                  onClick={() => setIsDialogOpen(!isDialogOpen)}
                >
                  <span className={`${interFont.variable} font-inter font-medium text-[14px] leading-[20px] text-neutral-900`}>
                    Explain like I am 5
                  </span>
                </Button>
                
                {/* Tooltip-like Case Study Dialog */}
                {isDialogOpen && (
                  <div className="absolute bottom-full left-0 mb-2 z-50">
                    <CaseStudyDialog />
                  </div>
                )}
              </div>
              <Button variant="secondary" size="default" className="h-[36px] px-[16px] py-[8px] bg-[#F5F5F5]">
                <span className={`${interFont.variable} font-inter font-medium text-[14px] leading-[20px] text-neutral-900`}>
                  View the full case study
                </span>
              </Button>
              <Button variant="secondary" size="icon" className="w-[36px] h-[36px] bg-[#F5F5F5]">
                <Expand className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
    </div>
  );
}




export default function HomePage() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-[96px]">
        {/* Home Header Section 
        <HomeHeader />*/}
        
        {/* Home Header 2 Section */}
        <HomeHeader2 />
        
        {/* Case Study 1 Section */}
        <CaseStudy1 />

        {/* Text Shimmer Basic Section 
        <TextShimmerBasic />*/}

        {/* Additional sections will be added here as components */}
      </div>
    </MainLayout>
  );
}
