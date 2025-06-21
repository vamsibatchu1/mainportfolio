import { interFont } from '@/app/fonts';
import { ChevronRight } from 'lucide-react';

export function Widgets() {
  return (
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
        <div className="bg-[#edf1ff] relative rounded-2xl w-full h-full">
          <div className="flex flex-row items-center relative w-full h-full">
            <div className="flex flex-row items-center justify-between overflow-hidden p-4 relative w-full h-full">
              <div className="relative shrink-0 w-[241px]">
                <div className="flex flex-col gap-1 items-start justify-center relative w-[241px]">
                  <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
                    <p className="block leading-[20px] whitespace-pre">Customize your home screen</p>
                  </div>
                  <div className="relative shrink-0">
                    <div className="flex flex-row gap-0.5 items-start justify-start relative">
                      <div className="font-jakarta font-medium leading-[0] relative shrink-0 text-[#545454] text-[14px] text-left text-nowrap">
                        <p className="block leading-[20px] whitespace-pre">Long press and search for &quot;Rocket&quot;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#e3e9fb] relative rounded-[100px] shrink-0 w-8 h-8">
                <div className="flex flex-row items-center justify-center relative w-full h-full">
                  <ChevronRight className="w-[18px] h-[18px] text-[#373d50]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 