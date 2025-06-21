import React from 'react';
import { BarChart3, DollarSign, ArrowRight } from 'lucide-react';

export const Specialties: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full sm:w-[344px]">
      <div className="flex flex-col gap-4 items-start justify-start relative w-full">
        
        {/* Title */}
        <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[20px] text-left w-full">
          <p className="block leading-[24px]">My specialities</p>
        </div>
        
        {/* Specialties Carousel */}
        <div className="relative shrink-0 w-full">
          <div className="overflow-x-auto overflow-y-hidden relative w-full">
            <div className="flex flex-row gap-3 items-start justify-start relative min-w-max px-0 py-0">
              
              {/* Card 1 - Enterprise Design */}
              <div className="bg-[#f2f2f2] h-[166px] overflow-hidden relative rounded-3xl shrink-0 w-[163px]">
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex flex-col gap-2 items-start justify-start relative w-full">
                    <div className="overflow-hidden relative shrink-0 w-4 h-4">
                      <BarChart3 className="w-full h-full text-[#666666]" />
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col gap-1 items-start justify-end leading-[0] text-left relative w-full">
                        <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                          <p className="block leading-[24px]">Enterprise Design</p>
                        </div>
                        <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[12px] w-full">
                          <p className="block leading-[20px]">Updated 3d ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 - Design Systems */}
              <div className="bg-[#f2f2f2] h-[166px] overflow-hidden relative rounded-3xl shrink-0 w-[163px]">
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex flex-col gap-2 items-start justify-start relative w-full">
                    <div className="overflow-hidden relative shrink-0 w-4 h-4">
                      <BarChart3 className="w-full h-full text-[#666666]" />
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col gap-1 items-start justify-end leading-[0] text-left relative w-full">
                        <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                          <p className="block leading-[24px]">Design Systems</p>
                        </div>
                        <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[12px] w-full">
                          <p className="block leading-[20px]">Updated 3d ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 - Craft and Taste */}
              <div className="bg-[#f2f2f2] h-[166px] overflow-hidden relative rounded-3xl shrink-0 w-[163px]">
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex flex-col gap-2 items-start justify-start relative w-full">
                    <div className="overflow-hidden relative shrink-0 w-4 h-4">
                      <BarChart3 className="w-full h-full text-[#666666]" />
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col gap-1 items-start justify-end leading-[0] not-italic text-left relative w-full">
                        <div className="relative shrink-0 text-[#111111] text-[20px] w-full">
                          <p className="block leading-[normal]">Craft and Taste</p>
                        </div>
                        <div className="relative shrink-0 text-[#545454] text-[12px] w-full">
                          <p className="block leading-[16px]">Updated 3d ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 4 - Accounts */}
              <div className="bg-[#f2f2f2] h-[166px] overflow-hidden relative rounded-3xl shrink-0 w-[163px]">
                {/* Top Header */}
                <div className="absolute left-5 right-3 top-4">
                  <div className="flex flex-row items-center justify-between relative w-full">
                    <div className="leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
                      <p className="block leading-[20px] whitespace-pre">Accounts</p>
                    </div>
                    <div className="overflow-hidden relative shrink-0 w-6 h-6">
                      <ArrowRight className="w-full h-full text-[#666666]" />
                    </div>
                  </div>
                </div>
                
                {/* Bottom Content */}
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex flex-col gap-2 items-start justify-start relative w-full">
                    <div className="overflow-hidden relative shrink-0 w-4 h-4">
                      <DollarSign className="w-full h-full text-[#666666]" />
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col gap-1 items-start justify-end leading-[0] not-italic text-left relative w-full">
                        <div className="relative shrink-0 text-[#111111] text-[32px] w-full">
                          <p className="block leading-[40px]">$5,848</p>
                        </div>
                        <div className="relative shrink-0 text-[#545454] text-[12px] w-full">
                          <p className="block leading-[16px]">Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Cards for carousel demonstration */}
              <div className="bg-[#f2f2f2] h-[166px] overflow-hidden relative rounded-3xl shrink-0 w-[163px]">
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex flex-col gap-2 items-start justify-start relative w-full">
                    <div className="overflow-hidden relative shrink-0 w-4 h-4">
                      <BarChart3 className="w-full h-full text-[#666666]" />
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col gap-1 items-start justify-end leading-[0] text-left relative w-full">
                        <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                          <p className="block leading-[24px]">Product Strategy</p>
                        </div>
                        <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[12px] w-full">
                          <p className="block leading-[20px]">Updated 1w ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f2f2f2] h-[166px] overflow-hidden relative rounded-3xl shrink-0 w-[163px]">
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex flex-col gap-2 items-start justify-start relative w-full">
                    <div className="overflow-hidden relative shrink-0 w-4 h-4">
                      <BarChart3 className="w-full h-full text-[#666666]" />
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col gap-1 items-start justify-end leading-[0] text-left relative w-full">
                        <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                          <p className="block leading-[24px]">User Research</p>
                        </div>
                        <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[12px] w-full">
                          <p className="block leading-[20px]">Updated 2w ago</p>
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