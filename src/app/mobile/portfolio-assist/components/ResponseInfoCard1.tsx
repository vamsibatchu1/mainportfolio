import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';

interface ResponseInfoCard1Props {
  imageUrl?: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

/**
 * Response Info Card Style 1 - Horizontal layout with image, text content, and navigation
 * Features: Image on left, title/subtitle in center, chevron right icon
 * Use case: Articles, blog posts, content with thumbnails
 */
export const ResponseInfoCard1: React.FC<ResponseInfoCard1Props> = ({
  title,
  subtitle,
  onClick,
  icon
}) => {
  return (
    <div className="bg-[#f7f7f7] relative rounded-2xl w-full">
      <div className="flex flex-col justify-end relative w-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end overflow-clip p-4 relative w-full">
          {/* Card content container */}
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative w-full">
            
            {/* Left side - Image and text content */}
            <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative">
              
              {/* Thumbnail icon */}
              <div className="bg-[#dddddd] rounded-lg shrink-0 size-[72px] flex items-center justify-center overflow-hidden">
                {icon || <FileText size={32} className="text-[#111111]" />}
              </div>
              
              {/* Text content */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative text-left">
                {/* Title */}
                <div className="font-jakarta font-semibold relative text-[#111111] text-[16px] w-full">
                  <p className="block leading-[20px]">
                    {title}
                  </p>
                </div>
                {/* Subtitle */}
                <div className="font-jakarta font-medium relative text-[#545454] text-[14px] w-full">
                  <p className="block leading-[20px]">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Navigation button */}
            <button
              onClick={onClick}
              className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-3 relative rounded-full shrink-0 size-10 hover:bg-[#f2f2f2] transition-colors"
            >
              <div className="bg-[#f2f2f2] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-2 relative rounded-full shrink-0 size-8">
                <ChevronRight size={24} className="text-[#111111]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 