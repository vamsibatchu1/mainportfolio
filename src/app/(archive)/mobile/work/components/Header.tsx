import React from 'react';
import { User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="bg-white relative shrink-0 w-full px-6">
      <div className="flex flex-row gap-2 items-start justify-center pt-6 w-full">
        {/* Good morning text */}
        <div className="flex-1 font-jakarta font-semibold text-[#111111] text-[32px] text-left tracking-[-0.96px] overflow-hidden">
          <p className="leading-[40px] text-nowrap overflow-ellipsis">Good morning !</p>
        </div>
        
        {/* User Icon */}
        <div className="p-2">
          <User size={20} strokeWidth={1.5} className="text-[#111111]" />
        </div>
      </div>
    </div>
  );
}; 