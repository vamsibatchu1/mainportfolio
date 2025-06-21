'use client';

import React from 'react';
import { X } from 'lucide-react';

interface LearnMoreSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LearnMoreSheet: React.FC<LearnMoreSheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
              {/* Bottom Sheet */}
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300 flex justify-center">
          <div className="bg-[#ffffff] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_0px_24px_0px_rgba(17,17,17,0.12)] mx-2 w-[calc(100vw-16px)] max-w-[377px]">
            <div className="flex flex-col items-center relative w-full h-full">
              <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start pb-8 pt-10 px-6 relative w-full h-full">
                
                {/* Header with Title and Close Button */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
                    <div className="font-jakarta font-semibold leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[28px] text-left text-nowrap w-[233px]">
                      <p className="block leading-[32px] overflow-inherit">
                        About Rocket
                      </p>
                    </div>
                    <button 
                      onClick={onClose}
                      className="relative shrink-0 w-6 h-6"
                    >
                      <X className="w-full h-full" />
                    </button>
                  </div>
                </div>
                
                {/* Body Text */}
                <div className="font-jakarta font-medium leading-[0] min-w-full relative shrink-0 text-[#545454] text-[16px] text-left" style={{ width: "min-content" }}>
                  <p className="block leading-[20px]">
                    What truly excites me about design is its potential to orchestrate meaningful change. Every pixel we place, every interaction we craft, and every system we architect has the power to make someone&apos;s day better, their work more efficient, or their goals more achievable.
                    <br />
                    <br />
                    After all, a designer just doesn&apos;t just solve problems; they create possibilities.
                  </p>
                </div>
                
                {/* Read More Button */}
                <div className="bg-[#111111] h-12 relative rounded-[48px] shrink-0 w-[321px]">
                  <div className="flex flex-row items-center justify-center relative w-full h-full">
                    <button 
                      onClick={onClose}
                      className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-5 py-3 relative w-[321px]"
                    >
                      <div className="font-jakarta font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                        <p className="block leading-[24px] whitespace-pre">
                          Read more
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}; 