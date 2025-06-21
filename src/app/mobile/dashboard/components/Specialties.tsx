import React from 'react';
import { BarChart3, DollarSign, ArrowRight } from 'lucide-react';

export const Specialties: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full pl-6">
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        
        {/* Title */}
        <div className="font-jakarta font-semibold text-[#111111] text-[20px] w-full">
          <p className="leading-[24px]">My specialities</p>
        </div>
        
        {/* Specialties Carousel */}
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-3 items-start justify-start min-w-max pr-6">
            
            {/* Card 1 - Enterprise Design */}
            <div className="bg-[#f2f2f2] h-[166px] rounded-3xl w-[163px] relative">
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex flex-col gap-2 items-start justify-start">
                  <BarChart3 className="w-4 h-4 text-[#666666]" />
                  <div className="flex flex-col gap-1 items-start justify-end w-full">
                    <div className="font-jakarta font-semibold text-[#111111] text-[18px] w-full">
                      <p className="leading-[24px]">Enterprise Design</p>
                    </div>
                    <div className="font-jakarta font-medium text-[#545454] text-[12px] w-full">
                      <p className="leading-[20px]">Updated 3d ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Design Systems */}
            <div className="bg-[#f2f2f2] h-[166px] rounded-3xl w-[163px] relative">
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex flex-col gap-2 items-start justify-start">
                  <BarChart3 className="w-4 h-4 text-[#666666]" />
                  <div className="flex flex-col gap-1 items-start justify-end w-full">
                    <div className="font-jakarta font-semibold text-[#111111] text-[18px] w-full">
                      <p className="leading-[24px]">Design Systems</p>
                    </div>
                    <div className="font-jakarta font-medium text-[#545454] text-[12px] w-full">
                      <p className="leading-[20px]">Updated 3d ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Craft and Taste */}
            <div className="bg-[#f2f2f2] h-[166px] rounded-3xl w-[163px] relative">
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex flex-col gap-2 items-start justify-start">
                  <BarChart3 className="w-4 h-4 text-[#666666]" />
                  <div className="flex flex-col gap-1 items-start justify-end w-full">
                    <div className="text-[#111111] text-[20px] w-full">
                      <p className="leading-normal">Craft and Taste</p>
                    </div>
                    <div className="text-[#545454] text-[12px] w-full">
                      <p className="leading-[16px]">Updated 3d ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 4 - Accounts */}
            <div className="bg-[#f2f2f2] h-[166px] rounded-3xl w-[163px] relative">
              {/* Top Header */}
              <div className="absolute left-5 right-3 top-4">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="text-[#111111] text-[14px] text-nowrap">
                    <p className="leading-[20px]">Accounts</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#666666]" />
                </div>
              </div>
              
              {/* Bottom Content */}
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex flex-col gap-2 items-start justify-start">
                  <DollarSign className="w-4 h-4 text-[#666666]" />
                  <div className="flex flex-col gap-1 items-start justify-end w-full">
                    <div className="text-[#111111] text-[32px] w-full">
                      <p className="leading-[40px]">$5,848</p>
                    </div>
                    <div className="text-[#545454] text-[12px] w-full">
                      <p className="leading-[16px]">Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Product Strategy */}
            <div className="bg-[#f2f2f2] h-[166px] rounded-3xl w-[163px] relative">
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex flex-col gap-2 items-start justify-start">
                  <BarChart3 className="w-4 h-4 text-[#666666]" />
                  <div className="flex flex-col gap-1 items-start justify-end w-full">
                    <div className="font-jakarta font-semibold text-[#111111] text-[18px] w-full">
                      <p className="leading-[24px]">Product Strategy</p>
                    </div>
                    <div className="font-jakarta font-medium text-[#545454] text-[12px] w-full">
                      <p className="leading-[20px]">Updated 1w ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - User Research */}
            <div className="bg-[#f2f2f2] h-[166px] rounded-3xl w-[163px] relative">
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex flex-col gap-2 items-start justify-start">
                  <BarChart3 className="w-4 h-4 text-[#666666]" />
                  <div className="flex flex-col gap-1 items-start justify-end w-full">
                    <div className="font-jakarta font-semibold text-[#111111] text-[18px] w-full">
                      <p className="leading-[24px]">User Research</p>
                    </div>
                    <div className="font-jakarta font-medium text-[#545454] text-[12px] w-full">
                      <p className="leading-[20px]">Updated 2w ago</p>
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