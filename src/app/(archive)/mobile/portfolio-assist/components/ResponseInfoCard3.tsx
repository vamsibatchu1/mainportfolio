import React from 'react';
import { AudioLines } from 'lucide-react';

interface ResponseInfoCard3Props {
  icon?: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

/**
 * Response Info Card Style 3 - Compact horizontal layout with icon and rich text
 * Features: Icon on left, title and description on right
 * Use case: Interactive features, detailed explanations, multi-line content
 */
export const ResponseInfoCard3: React.FC<ResponseInfoCard3Props> = ({
  icon = <AudioLines size={24} className="text-[#111111]" />,
  title,
  description,
  onClick
}) => {
  return (
    <div 
      className="bg-[#f7f7f7] relative rounded-2xl w-full cursor-pointer hover:bg-[#f0f0f0] transition-colors"
      onClick={onClick}
    >
      <div className="flex flex-row items-center relative w-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start overflow-clip p-4 relative w-full">
          
          {/* Left side - Icon */}
          <div className="bg-[#dddddd] box-border content-stretch flex flex-row gap-3 items-center justify-center p-2.5 relative rounded-full shrink-0 size-10">
            <div className="relative shrink-0 size-6">
              {icon}
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-center min-h-px min-w-px p-0 relative">
            
            {/* Title */}
            <div className="font-jakarta font-semibold leading-[0] relative text-[#111111] text-[16px] text-left">
              <p className="block leading-[20px]">
                {title}
              </p>
            </div>
            
            {/* Description */}
            <div className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative">
              <div className="font-jakarta font-medium leading-[0] relative text-[#545454] text-[14px] text-left">
                <p className="block leading-[20px]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 