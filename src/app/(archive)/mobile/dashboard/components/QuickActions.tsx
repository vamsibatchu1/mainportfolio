import React from 'react';
import { Briefcase, User, Eye, ChevronRight, FolderOpen } from 'lucide-react';

export const QuickActions: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full pl-6">
      <div className="flex flex-col gap-4 items-start justify-start relative w-full">
        
        {/* Title */}
        <div className="font-jakarta font-semibold text-[20px] leading-[24px] text-[#111111] w-[283px]">
          <p>A few things you can do</p>
        </div>
        
        {/* Quick Actions Carousel */}
        <div className="relative shrink-0 w-full overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-3 items-center min-w-max pr-6">
            
            {/* Card 1 - Look at the recent work */}
            <div className="bg-[rgba(115,38,18,0.05)] h-40 w-40 rounded-3xl p-4 flex flex-col justify-between">
              {/* Icon */}
              <div className="bg-[#f4e4da] rounded-2xl w-12 h-12 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#732612]" />
              </div>
              
              {/* Content */}
              <div className="flex items-center justify-between pl-0.5">
                <div className="font-jakarta font-semibold text-[16px] leading-[20px] text-[#111111]">
                  <p>Look at the<br />recent work</p>
                </div>
                <ChevronRight className="w-6 h-6 text-[#111111]" />
              </div>
            </div>
            
            {/* Card 2 - Learn more about me */}
            <div className="bg-[rgba(229,227,201,0.25)] h-40 w-40 rounded-3xl p-4 flex flex-col justify-between">
              {/* Icon */}
              <div className="bg-[#f0eed9] rounded-2xl w-12 h-12 flex items-center justify-center">
                <User className="w-6 h-6 text-[#8b8a65]" />
              </div>
              
              {/* Content */}
              <div className="flex items-center justify-between pl-0.5">
                <div className="font-jakarta font-semibold text-[16px] leading-[20px] text-[#111111]">
                  <p>Learn more<br />about me</p>
                </div>
                <ChevronRight className="w-6 h-6 text-[#111111]" />
              </div>
            </div>
            
            {/* Card 3 - Just browsing */}
            <div className="bg-[rgba(115,146,252,0.05)] h-40 w-40 rounded-3xl p-4 flex flex-col justify-between">
              {/* Icon */}
              <div className="bg-[#edf1ff] rounded-2xl w-12 h-12 flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#7392fc]" />
              </div>
              
              {/* Content */}
              <div className="flex items-center justify-between pl-0.5">
                <div className="font-jakarta font-semibold text-[16px] leading-[20px] text-[#111111]">
                  <p>Just<br />browsing</p>
                </div>
                <ChevronRight className="w-6 h-6 text-[#111111]" />
              </div>
            </div>

            {/* Card 4 - View more projects */}
            <div className="bg-[rgba(115,38,18,0.05)] h-40 w-40 rounded-3xl p-4 flex flex-col justify-between">
              {/* Icon */}
              <div className="bg-[#f4e4da] rounded-2xl w-12 h-12 flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-[#732612]" />
              </div>
              
              {/* Content */}
              <div className="flex items-center justify-between pl-0.5">
                <div className="font-jakarta font-semibold text-[16px] leading-[20px] text-[#111111]">
                  <p>View more<br />projects</p>
                </div>
                <ChevronRight className="w-6 h-6 text-[#111111]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 