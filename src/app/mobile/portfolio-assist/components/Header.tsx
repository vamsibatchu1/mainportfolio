import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="bg-white relative shrink-0 w-full px-6">
      <div className="flex flex-col gap-3 items-start justify-start pt-6 w-full">
        {/* Portfolio Agent Title */}
        <div className="font-jakarta font-semibold text-[#111111] text-[32px] text-left tracking-[-0.96px] overflow-hidden w-full">
          <p className="leading-[40px] text-nowrap overflow-ellipsis">
            Portfolio Agent
          </p>
        </div>
        
        {/* Subtitle */}
        <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
          <p className="leading-[20px]">
            Ask me anything about me, my work or get to know my design thoughts.
          </p>
        </div>
      </div>
    </div>
  );
}; 