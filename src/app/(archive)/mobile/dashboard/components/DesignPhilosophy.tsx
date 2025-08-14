import React from 'react';
import { ArrowRight, Users, BarChart3, MessageSquare, Lightbulb, Heart, RefreshCw } from 'lucide-react';



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
              </div>
            </div>
            
            {/* My Core Values Section */}
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                <p className="leading-[20px]">My core values</p>
              </div>
              
              {/* Philosophy Carousel */}
              <div className="w-full overflow-x-auto overflow-y-hidden">
                <div className="flex flex-row gap-6 items-start justify-start pr-8">
                  
                  {/* Card 1 - User-Centered */}
                  <div className="rounded-2xl shrink-0">
                    <div className="flex flex-row gap-3 items-center justify-start">
                      <div className="bg-[#eaf3ec] rounded-xl shrink-0 size-12 flex items-center justify-center">
                        <Users size={24} className="text-[#8dbf9a]" />
                      </div>
                      <div className="shrink-0">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                            <p className="leading-[20px]">User-Centered</p>
                          </div>
                          <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                            <p className="leading-[20px]">Always putting users first</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 2 - Data-Driven */}
                  <div className="rounded-2xl shrink-0">
                    <div className="flex flex-row gap-3 items-center justify-start">
                      <div className="bg-[#eaf3ec] rounded-xl shrink-0 size-12 flex items-center justify-center">
                        <BarChart3 size={24} className="text-[#8dbf9a]" />
                      </div>
                      <div className="shrink-0">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                            <p className="leading-[20px]">Data-Driven</p>
                          </div>
                          <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                            <p className="leading-[20px]">Decisions backed by insights</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 3 - Collaborative */}
                  <div className="rounded-2xl shrink-0">
                    <div className="flex flex-row gap-3 items-center justify-start">
                      <div className="bg-[#eaf3ec] rounded-xl shrink-0 size-12 flex items-center justify-center">
                        <MessageSquare size={24} className="text-[#8dbf9a]" />
                      </div>
                      <div className="shrink-0">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                            <p className="leading-[20px]">Collaborative</p>
                          </div>
                          <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                            <p className="leading-[20px]">Building together as a team</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 4 - Innovative */}
                  <div className="rounded-2xl shrink-0">
                    <div className="flex flex-row gap-3 items-center justify-start">
                      <div className="bg-[#eaf3ec] rounded-xl shrink-0 size-12 flex items-center justify-center">
                        <Lightbulb size={24} className="text-[#8dbf9a]" />
                      </div>
                      <div className="shrink-0">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                            <p className="leading-[20px]">Innovative</p>
                          </div>
                          <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                            <p className="leading-[20px]">Pushing creative boundaries</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 5 - Accessible */}
                  <div className="rounded-2xl shrink-0">
                    <div className="flex flex-row gap-3 items-center justify-start">
                      <div className="bg-[#eaf3ec] rounded-xl shrink-0 size-12 flex items-center justify-center">
                        <Heart size={24} className="text-[#8dbf9a]" />
                      </div>
                      <div className="shrink-0">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                            <p className="leading-[20px]">Accessible</p>
                          </div>
                          <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                            <p className="leading-[20px]">Design for everyone</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 6 - Iterative */}
                  <div className="rounded-2xl shrink-0">
                    <div className="flex flex-row gap-3 items-center justify-start">
                      <div className="bg-[#eaf3ec] rounded-xl shrink-0 size-12 flex items-center justify-center">
                        <RefreshCw size={24} className="text-[#8dbf9a]" />
                      </div>
                      <div className="shrink-0">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                            <p className="leading-[20px]">Iterative</p>
                          </div>
                          <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                            <p className="leading-[20px]">Continuous improvement</p>
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
    </div>
  );
}; 