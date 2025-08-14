import React from 'react';
import { ArrowUpRight, Component } from 'lucide-react';

interface ResponseInfoCard2Props {
  icon?: React.ReactNode;
  title: string;
  onClick?: () => void;
}

/**
 * Response Info Card Style 2 - Vertical layout with icon and call-to-action
 * Features: Icon at top, title text at bottom, navigation arrow
 * Use case: Quick actions, feature highlights, navigation prompts
 */
export const ResponseInfoCard2: React.FC<ResponseInfoCard2Props> = ({
  icon = <Component size={24} className="text-[#111111]" />,
  title,
  onClick
}) => {
  return (
    <div className="bg-[#f7f7f7] relative rounded-3xl w-40 h-40">
        <div className="box-border content-stretch gap-4 flex flex-col items-start justify-between min-w-inherit p-4 relative w-full h-full min-h-[120px]">
          
          {/* Top section - Icon */}
          <div className="bg-[#dddddd] box-border content-stretch flex flex-row gap-2 items-center justify-center p-2 relative rounded-2xl shrink-0 size-12">
            <div className="relative shrink-0 size-6">
              {icon}
            </div>
          </div>
          
          {/* Bottom section - Title and navigation */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center relative w-full">
              <div className="box-border content-stretch flex flex-row items-center justify-between pl-0.5 pr-0 py-0 relative w-full">
                
                {/* Title text */}
                <div className="font-jakarta font-semibold leading-[0] relative text-[#111111] text-[16px] text-left">
                  <p className="block leading-[20px] whitespace-pre-line">
                    {title}
                  </p>
                </div>
                
                {/* Navigation arrow */}
                <button
                  onClick={onClick}
                  className="flex items-center justify-center relative shrink-0 p-1 rounded-full hover:bg-[#ededed] transition-colors"
                >
                  <ArrowUpRight size={24} className="text-[#111111]" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}; 