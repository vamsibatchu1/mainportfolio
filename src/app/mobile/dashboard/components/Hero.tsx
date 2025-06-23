'use client';

import React, { useState, useMemo } from 'react';
import { LearnMoreSheet } from './learnmore-sheet';

// Dynamic greetings - easy to add more
const DYNAMIC_GREETINGS = [
  "Good morning!",
  "Hello there!",
  "Hope you are doing well!",
  "Thanks for visiting my website!",
  "Welcome!",
  "Great to see you here!",
  "Hope you're having a wonderful day!",
  "Thanks for stopping by!",
];

export const Hero: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  // Select a random greeting on component mount
  const dynamicGreeting = useMemo(() => {
    return DYNAMIC_GREETINGS[Math.floor(Math.random() * DYNAMIC_GREETINGS.length)];
  }, []);

  return (
    <>
      <LearnMoreSheet 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)} 
      />
    <div className="relative shrink-0 w-full px-6">
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        
        {/* Introduction Text */}
        <div className="font-jakarta font-semibold text-[#111111] text-[28px] text-left w-full overflow-hidden">
          <p className="leading-[32px]">{dynamicGreeting} I am vamsi batchu, a product design leader at the intersection of craft & code</p>
        </div>
        
        
        {/* Current Work Card */}
        {/* <div className="bg-[#f7f7f7] rounded-2xl w-full p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-start justify-start">
                <div className="flex-1 font-jakarta font-semibold text-[#111111] text-[16px]">
                  <p className="leading-[20px]">Currently leading an enterprise design team at Rocket</p>
                </div>
                <div className="w-[35.25px] h-[35.25px] relative">
                  <div className="absolute inset-[-10%]">
                    <img
                      alt="Rocket logo"
                      className="block max-w-none w-full h-full"
                      src="/images/rocketlogo.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="font-jakarta font-medium text-[#545454] text-[14px]">
                <p className="leading-[20px]">My team focuses on transforming trading experiences and workflows</p>
              </div>
            </div>
            <button 
              onClick={() => setIsSheetOpen(true)}
              className="bg-[#ededed] rounded-3xl px-4 py-2 w-fit"
            >
              <div className="font-jakarta font-medium text-[#111111] text-[14px] text-nowrap">
                <p className="leading-normal">Learn more</p>
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </div>
    </>
  );
}; 