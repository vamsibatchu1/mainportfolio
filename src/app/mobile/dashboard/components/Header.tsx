import React from 'react';
import { User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="bg-white relative shrink-0 w-full px-6">
      <div className="flex flex-row justify-center relative w-full h-full">
        <div className="flex flex-row gap-2 items-start justify-center pb-0 pt-6 px-0 relative w-full">
          {/* Good morning text */}
          <div className="basis-0 font-jakarta font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[32px] text-left text-nowrap tracking-[-0.96px]">
            <p className="block leading-[40px] overflow-inherit">Good morning !</p>
          </div>
          
          {/* Action Container with User Icon */}
          <div className="relative shrink-0">
            <div className="flex flex-row gap-2 items-end justify-end relative">
              <div className="relative shrink-0">
                <div className="flex flex-row items-center justify-end relative">
                  <div className="relative shrink-0">
                    <div className="flex flex-row items-center justify-end relative w-full h-full">
                      <div className="flex flex-row gap-2 items-center justify-end p-2 relative">
                        <div className="relative shrink-0 w-5 h-5">
                          <User size={20} strokeWidth={1.5} className="text-[#111111]" />
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