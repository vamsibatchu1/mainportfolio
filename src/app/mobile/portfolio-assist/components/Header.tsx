import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col gap-3 items-start justify-start pb-6 leading-[0] text-left w-full">
        {/* Portfolio Agent Title */}
        <div className="font-jakarta font-semibold text-[#111111] text-[32px] text-left tracking-[-0.96px] overflow-hidden w-full">
          <p className="leading-[40px] text-nowrap overflow-ellipsis">
            Ask Vamsi
          </p>
        </div>
        
        {/* Subtitle */}
        <div className="font-jakarta font-medium text-[#545454] text-[16px] w-full">
          <p className="leading-[24px]">
          Get to know me, my work, and my thoughts on design. What would you like to discover?          </p>
        </div>
      </div>
    </div>
  );
}; 