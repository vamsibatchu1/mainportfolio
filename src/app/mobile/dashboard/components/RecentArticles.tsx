import React from 'react';
import { ChevronRight } from 'lucide-react';

// Image constants from Figma
const imgImage1 = "http://localhost:3845/assets/0710408050e27c729bcca4743ad19e12e4fe9b44.png";
const imgImage2 = "http://localhost:3845/assets/50275703f70bd26404e1a6ec4cd0a16d48ba297a.png";

// Button Component
const Button = () => (
  <div className="relative rounded-full w-full h-full">
    <div className="flex flex-row items-center justify-center relative w-full h-full">
      <div className="flex flex-row gap-2.5 items-center justify-center p-3 relative w-10 h-10">
        <div className="bg-[#f2f2f2] relative rounded-full shrink-0 w-8 h-8">
          <div className="flex flex-row items-center justify-center relative w-full h-full">
            <div className="flex flex-row gap-2.5 items-center justify-center p-2 relative w-8 h-8">
              <div className="overflow-hidden relative shrink-0 w-6 h-6">
                <ChevronRight className="w-full h-full text-[#666666]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const RecentArticles: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full sm:w-[345px]">
      <div className="flex flex-col gap-5 items-start justify-start relative w-full">
        
        {/* Title */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-start justify-start relative w-full">
            <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[20px] text-left text-nowrap">
              <p className="block leading-[24px] whitespace-pre">Read my recent articles</p>
            </div>
          </div>
        </div>
        
        {/* Articles Carousel */}
        <div className="relative shrink-0 w-full">
          <div className="overflow-x-auto overflow-y-hidden relative w-full">
            <div className="flex flex-row gap-3 items-start justify-start relative min-w-max px-0 py-0">
              
              {/* Article Card 1 */}
              <div className="bg-[#f7f7f7] relative rounded-2xl shrink-0 w-80">
                <div className="flex flex-col justify-end overflow-hidden relative w-full h-full">
                  <div className="flex flex-col items-start justify-end p-4 relative w-80">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row gap-4 items-center justify-start relative w-full">
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                          <div className="flex flex-row gap-4 items-center justify-start relative w-full">
                            {/* Article Image */}
                            <div 
                              className="bg-center bg-cover bg-no-repeat rounded-lg shrink-0 w-[72px] h-[72px]"
                              style={{ backgroundImage: `url('${imgImage1}')` }}
                            />
                            
                            {/* Article Content */}
                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-col gap-1 items-start justify-start leading-[0] text-left relative w-full">
                                <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[16px] w-full">
                                  <p className="block leading-[20px]">Home buying as a single woman</p>
                                </div>
                                <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[14px] w-full">
                                  <p className="block leading-[20px]">1 min read</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Button */}
                        <div className="relative rounded-full shrink-0 w-10 h-10">
                          <Button />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Article Card 2 */}
              <div className="bg-[#f7f7f7] relative rounded-2xl shrink-0 w-80">
                <div className="flex flex-col justify-end overflow-hidden relative w-full h-full">
                  <div className="flex flex-col items-start justify-end p-4 relative w-80">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row gap-4 items-center justify-start relative w-full">
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                          <div className="flex flex-row gap-4 items-center justify-start relative w-full">
                            {/* Article Image */}
                            <div 
                              className="bg-center bg-cover bg-no-repeat rounded-lg shrink-0 w-[72px] h-[72px]"
                              style={{ backgroundImage: `url('${imgImage2}')` }}
                            />
                            
                            {/* Article Content */}
                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-col gap-1 items-start justify-start leading-[0] text-left relative w-full">
                                <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[16px] w-full">
                                  <p className="block leading-[20px]">Home buying expectations</p>
                                </div>
                                <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[14px] w-full">
                                  <p className="block leading-[20px]">2 min read</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Button */}
                        <div className="relative rounded-full shrink-0 w-10 h-10">
                          <Button />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Card 3 */}
              <div className="bg-[#f7f7f7] relative rounded-2xl shrink-0 w-80">
                <div className="flex flex-col justify-end overflow-hidden relative w-full h-full">
                  <div className="flex flex-col items-start justify-end p-4 relative w-80">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row gap-4 items-center justify-start relative w-full">
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                          <div className="flex flex-row gap-4 items-center justify-start relative w-full">
                            {/* Article Image */}
                            <div 
                              className="bg-center bg-cover bg-no-repeat rounded-lg shrink-0 w-[72px] h-[72px]"
                              style={{ backgroundImage: `url('${imgImage1}')` }}
                            />
                            
                            {/* Article Content */}
                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-col gap-1 items-start justify-start leading-[0] text-left relative w-full">
                                <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[16px] w-full">
                                  <p className="block leading-[20px]">Design principles</p>
                                </div>
                                <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[14px] w-full">
                                  <p className="block leading-[20px]">3 min read</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Button */}
                        <div className="relative rounded-full shrink-0 w-10 h-10">
                          <Button />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Card 4 */}
              <div className="bg-[#f7f7f7] relative rounded-2xl shrink-0 w-80">
                <div className="flex flex-col justify-end overflow-hidden relative w-full h-full">
                  <div className="flex flex-col items-start justify-end p-4 relative w-80">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row gap-4 items-center justify-start relative w-full">
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                          <div className="flex flex-row gap-4 items-center justify-start relative w-full">
                            {/* Article Image */}
                            <div 
                              className="bg-center bg-cover bg-no-repeat rounded-lg shrink-0 w-[72px] h-[72px]"
                              style={{ backgroundImage: `url('${imgImage2}')` }}
                            />
                            
                            {/* Article Content */}
                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                              <div className="flex flex-col gap-1 items-start justify-start leading-[0] text-left relative w-full">
                                <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[16px] w-full">
                                  <p className="block leading-[20px]">The future of enterprise design</p>
                                </div>
                                <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[14px] w-full">
                                  <p className="block leading-[20px]">5 min read</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Button */}
                        <div className="relative rounded-full shrink-0 w-10 h-10">
                          <Button />
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