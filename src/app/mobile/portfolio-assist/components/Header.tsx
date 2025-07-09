import {RefreshCwIcon,MoreVerticalIcon } from 'lucide-react';
import React from 'react';


export const Header: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full px-6 pt-6 border-b border-gray-200">
      <div className="flex flex-col gap-3 items-start justify-start pb-6 leading-[0] text-left w-full">
        {/* Portfolio Agent Title */}
        <div className="flex flex-row items-center gap-4 justify-between w-full">
        <div className="font-jakarta font-semibold text-[#111111] text-[32px] text-left tracking-[-0.96px] overflow-hidden w-full">
          <p className="leading-[32px] text-nowrap overflow-ellipsis">
            Ask Vamsi
          </p>
        </div>
        <div className="bg-[#e7e7e7] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <RefreshCwIcon className="w-5 h-5 text-[#000000]" />
        </div>
        <div className="bg-[#e7e7e7] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <MoreVerticalIcon className="w-5 h-5 text-[#000000]" />
        </div>
        

        </div>
        
        {/* Subtitle */}
        <div className="font-jakarta font-medium text-[#545454] text-[16px] w-full">
          <p className="leading-[24px]">
          Get to know me, my work, and my thoughts</p>
        </div>
      </div>
    </div>
  );
}; 