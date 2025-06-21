'use client';

import { interFont } from '@/app/fonts';
import { AudioLines } from 'lucide-react';
import { useState } from 'react';
import { VoiceAboutMeSheet } from './voiceaboutme-sheet';

export function Widgets() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleWidgetClick = () => {
    setIsSheetOpen(true);
  };
  return (
    <>
      <div className={`relative w-full px-6 ${interFont.variable}`}>
        <div className="flex flex-col gap-4 items-start justify-start p-0 relative w-full">
          <div className="relative w-full">
            <div className="flex flex-row items-center justify-between p-0 relative w-full">
              <div className="font-inter font-medium text-[20px] leading-6 text-[#111111]">
                <p>Widgets</p>
              </div>
              <div className="w-6 h-6 overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <button 
            onClick={handleWidgetClick}
            className="bg-[#edf1ff] relative rounded-2xl w-full h-full cursor-pointer hover:bg-[#e5efff] transition-colors"
          >
            <div className="flex flex-row items-center relative w-full h-full">
              <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start overflow-clip p-4 relative w-full h-full">
                <div className="bg-[#e3e9fb] relative rounded-[125px] shrink-0 w-10 h-10">
                  <div className="flex flex-row items-center justify-center relative w-full h-full">
                    <div className="box-border content-stretch flex flex-row gap-[12.5px] items-center justify-center p-[10px] relative w-10 h-10">
                      <div className="relative shrink-0 w-6 h-6">
                        <AudioLines className="block max-w-none w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                  <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative w-full">
                    <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
                      <p className="block leading-[20px] whitespace-pre">
                        Interactively listen to my story
                      </p>
                    </div>
                    <div className="relative shrink-0">
                      <div className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative">
                        <div className="font-jakarta font-medium leading-[0] relative shrink-0 text-[#545454] text-[14px] text-left text-nowrap">
                          <p className="block leading-[20px] whitespace-pre">Select your favorite voice &amp; enjoy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      
      <VoiceAboutMeSheet 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)} 
      />
    </>
  );
} 