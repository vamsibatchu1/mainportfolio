import React from 'react';
import { ChevronRight } from 'lucide-react';

// Image constants from Figma
const imgImage1 = "http://localhost:3845/assets/0710408050e27c729bcca4743ad19e12e4fe9b44.png";
const imgImage2 = "http://localhost:3845/assets/50275703f70bd26404e1a6ec4cd0a16d48ba297a.png";

// Simplified Button Component
const Button = () => (
  <div className="bg-[#f2f2f2] rounded-full w-8 h-8 flex items-center justify-center">
    <ChevronRight className="w-4 h-4 text-[#666666]" />
  </div>
);

export const RecentArticles: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full pl-6">
      <div className="flex flex-col gap-5 items-start justify-start w-full">
        
        {/* Title */}
        <div className="font-jakarta font-semibold text-[#111111] text-[20px] text-nowrap">
          <p className="leading-[24px]">Read my recent articles</p>
        </div>
        
        {/* Articles Carousel */}
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-3 items-start justify-start min-w-max pr-6">
            
            {/* Article Card 1 */}
            <div className="bg-[#f7f7f7] rounded-2xl w-80 p-4">
              <div className="flex flex-row gap-4 items-center justify-start w-full">
                <div className="flex flex-row gap-4 items-center flex-1">
                  {/* Article Image */}
                  <div 
                    className="bg-center bg-cover bg-no-repeat rounded-lg w-[72px] h-[72px]"
                    style={{ backgroundImage: `url('${imgImage1}')` }}
                  />
                  
                  {/* Article Content */}
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 items-start justify-start">
                      <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                        <p className="leading-[20px]">Home buying as a single woman</p>
                      </div>
                      <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                        <p className="leading-[20px]">1 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Button */}
                <Button />
              </div>
            </div>
            
            {/* Article Card 2 */}
            <div className="bg-[#f7f7f7] rounded-2xl w-80 p-4">
              <div className="flex flex-row gap-4 items-center justify-start w-full">
                <div className="flex flex-row gap-4 items-center flex-1">
                  {/* Article Image */}
                  <div 
                    className="bg-center bg-cover bg-no-repeat rounded-lg w-[72px] h-[72px]"
                    style={{ backgroundImage: `url('${imgImage2}')` }}
                  />
                  
                  {/* Article Content */}
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 items-start justify-start">
                      <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                        <p className="leading-[20px]">Home buying expectations</p>
                      </div>
                      <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                        <p className="leading-[20px]">2 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Button */}
                <Button />
              </div>
            </div>

            {/* Article Card 3 */}
            <div className="bg-[#f7f7f7] rounded-2xl w-80 p-4">
              <div className="flex flex-row gap-4 items-center justify-start w-full">
                <div className="flex flex-row gap-4 items-center flex-1">
                  {/* Article Image */}
                  <div 
                    className="bg-center bg-cover bg-no-repeat rounded-lg w-[72px] h-[72px]"
                    style={{ backgroundImage: `url('${imgImage1}')` }}
                  />
                  
                  {/* Article Content */}
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 items-start justify-start">
                      <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                        <p className="leading-[20px]">Design principles</p>
                      </div>
                      <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                        <p className="leading-[20px]">3 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Button */}
                <Button />
              </div>
            </div>

            {/* Article Card 4 */}
            <div className="bg-[#f7f7f7] rounded-2xl w-80 p-4">
              <div className="flex flex-row gap-4 items-center justify-start w-full">
                <div className="flex flex-row gap-4 items-center flex-1">
                  {/* Article Image */}
                  <div 
                    className="bg-center bg-cover bg-no-repeat rounded-lg w-[72px] h-[72px]"
                    style={{ backgroundImage: `url('${imgImage2}')` }}
                  />
                  
                  {/* Article Content */}
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 items-start justify-start">
                      <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                        <p className="leading-[20px]">The future of enterprise design</p>
                      </div>
                      <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                        <p className="leading-[20px]">5 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Button */}
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 