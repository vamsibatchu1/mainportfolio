import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';



export const DesignPhilosophy: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full px-6">
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        
        {/* Philosophy Title */}
        <div className="flex flex-row gap-2.5 h-8 items-center justify-start w-full">
          <div className="flex-1 font-jakarta font-semibold text-[#111111] text-[20px]">
            <p className="leading-[24px]">My design philosophy</p>
          </div>
          <ArrowRight className="w-6 h-6 text-[#111111]" />
        </div>
        
        {/* Philosophy Card */}
        <div className="bg-white rounded-3xl w-full border border-[#e9e9e9] p-6">
          <div className="flex flex-col gap-6 items-start justify-center">
            
            {/* Philosophy Content */}
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="font-jakarta font-medium text-[#545454] text-[16px] w-full">
                <p className="leading-[20px]">
                  What truly excites me about design is its potential to orchestrate meaningful change. Every pixel we place, every interaction we craft, and every system we architect has the power to make someone&apos;s day better, their work more efficient, or their goals more achievable.
                </p>
              </div>
            </div>
            
            {/* Philosophy Card with Quote */}
            <div className="bg-stone-100 rounded-[20px] w-full p-5">
              <div className="flex flex-row gap-2 items-center justify-start w-full">
                <div className="flex-1">
                  <div className="flex flex-col gap-1 items-start justify-center w-full">
                    <div className="font-jakarta font-semibold text-[#111111] text-[14px] w-full">
                      <p className="leading-[20px]">After all, a designer just doesn&apos;t just solve problems;</p>
                    </div>
                    <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                      <p className="leading-[20px]">they create possibilities.</p>
                    </div>
                  </div>
                </div>
                <Sparkles className="w-6 h-6 text-[#111111]" />
              </div>
            </div>
            
            {/* My Core Values Section */}
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                <p className="leading-[20px]">My core values</p>
              </div>
              
              {/* Philosophy Carousel */}
              <div className="w-full overflow-x-auto overflow-y-hidden">
                <div className="flex flex-row gap-2.5 items-start justify-start pr-8">
                  
                  {/* Card 1 - Value driven */}
                  <div className="bg-[#f7f7f7] rounded-[20px] w-[142.5px] h-[142.5px] p-5 flex flex-col justify-end">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <div className="font-jakarta font-semibold text-[#111111] text-[16px]">
                          <p className="leading-[24px]">Value driven</p>
                        </div>
                        <div className="font-jakarta font-medium text-[#545454] text-[12px]">
                          <p className="leading-[16px]">Putting the design first infront of anyone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 2 - Value 2 */}
                  <div className="bg-[#f7f7f7] rounded-[20px] w-[142.5px] h-[142.5px] p-5 flex flex-col justify-end">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <div className="font-jakarta font-semibold text-[#111111] text-[16px]">
                          <p className="leading-[24px]">Value 2</p>
                        </div>
                        <div className="font-jakarta font-medium text-[#545454] text-[12px]">
                          <p className="leading-[16px]">Putting the design first infront of anyone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 3 - Philosophy1 */}
                  <div className="bg-[#f7f7f7] rounded-[20px] w-[142.5px] h-[142.5px] p-5 flex flex-col justify-end">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <div className="font-jakarta font-semibold text-[#111111] text-[16px]">
                          <p className="leading-[24px]">Philosophy1</p>
                        </div>
                        <div className="font-jakarta font-medium text-[#545454] text-[12px]">
                          <p className="leading-[16px]">Putting the design first infront of anyone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 