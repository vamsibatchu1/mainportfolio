import React from 'react';
import { ChevronRight } from 'lucide-react';

// Image constants from Figma
const imgMainImage = "http://localhost:3845/assets/e744ffdab971b544fb0d4bf4c490d3bc5c0454a6.png";
const imgImage = "http://localhost:3845/assets/fe6bf7852e1e510ebb887301f3b47c723b9f2ce6.png";
const imgIanMacdonaldPmqTjdVbKdMUnsplash2 = "http://localhost:3845/assets/4ccb6745e41c352c755c988884adf02cef70517e.png";

export const Hero: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col gap-4 items-center justify-center relative w-full">
        
        {/* Introduction Text */}
        <div className="font-jakarta font-semibold leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[28px] text-left" style={{ width: "min-content" }}>
          <p className="block leading-[32px]">I am vamsi batchu, a product design leader at the intersection of craft & code</p>
        </div>
        
        {/* Hero Image Section with Property Cards */}
        <div className="relative shrink-0">
          <div className="flex flex-row items-center relative w-full h-full">
            <div className="flex flex-row-reverse items-center justify-start pl-0 pr-[120px] py-2 relative">
              
              {/* Card 1 - Main (rightmost) */}
              <div className="flex h-[144.801px] items-center justify-center mr-[-120px] order-3 relative shrink-0 w-[144.801px]">
                <div className="flex-none rotate-[358deg]">
                  <div className="backdrop-blur-[6px] backdrop-filter bg-white relative rounded-2xl w-[140px] h-[140px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] border border-[rgba(224,224,224,0.5)]">
                    <div className="flex flex-col justify-center relative w-full h-full">
                      <div className="flex flex-col gap-1 items-start justify-center p-2 relative w-[140px] h-[140px]">
                        {/* Property Image */}
                        <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px relative rounded-lg shrink-0 w-full" style={{ backgroundImage: `url('${imgMainImage}')` }}>
                          <div className="flex flex-row justify-end relative w-full h-full">
                            <div className="w-full h-full" />
                          </div>
                        </div>
                        
                        {/* Property Details */}
                        <div className="relative shrink-0 w-full">
                          <div className="relative w-full h-full">
                            <div className="flex flex-col gap-0.5 items-start justify-start p-0.5 relative w-full">
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row gap-1 items-center justify-start relative w-full">
                                  <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-left">
                                    <p className="block leading-[16px]">$589,000</p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-wrap gap-0.5 items-start justify-start leading-[0] not-italic relative text-[#545454] text-[7px] text-left text-nowrap w-full">
                                  <div className="relative shrink-0">
                                    <p className="block leading-[10px] text-nowrap whitespace-pre">Altadena</p>
                                  </div>
                                  <div className="relative shrink-0">
                                    <p className="block leading-[10px] text-nowrap whitespace-pre">•</p>
                                  </div>
                                  <div className="relative shrink-0">
                                    <p className="block leading-[10px] text-nowrap whitespace-pre">3 beds + office</p>
                                  </div>
                                  <div className="relative shrink-0">
                                    <p className="block leading-[10px] text-nowrap whitespace-pre">Built 2018 + modern kitchen</p>
                                  </div>
                                  <div className="relative shrink-0">
                                    <p className="block leading-[10px] text-nowrap whitespace-pre">Small backyard + detached garage</p>
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
              
              {/* Card 2 - Middle */}
              <div className="flex h-[152.705px] items-center justify-center mr-[-120px] order-2 relative shrink-0 w-[152.705px]">
                <div className="flex-none rotate-[5.469deg]">
                  <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.75)] relative rounded-2xl w-[140px] h-[140px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] border border-[rgba(224,224,224,0.5)]">
                    <div className="flex flex-col justify-center relative w-full h-full">
                      <div className="flex flex-col gap-1.5 items-start justify-center pb-1.5 pt-2 px-2 relative w-[140px] h-[140px]">
                        <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px opacity-75 rounded-lg shrink-0 w-full" style={{ backgroundImage: `url('${imgImage}')` }} />
                        <div className="relative shrink-0 w-full">
                          <div className="relative w-full h-full">
                            <div className="flex flex-col gap-0.5 items-start justify-start px-1 py-0.5 relative w-full">
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row gap-1 items-center justify-start relative w-full">
                                  <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[12px] text-left">
                                    <p className="block leading-[16px]">2230 Homet Rd</p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-col gap-0.5 items-start justify-start relative w-full">
                                  <div className="leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[7px] text-left" style={{ width: "min-content" }}>
                                    <p className="block leading-[10px]">2230 Homet Rd, Pasadena, CA</p>
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
              
              {/* Card 3 - Background (leftmost) */}
              <div className="flex h-[151.5px] items-center justify-center mr-[-120px] order-1 relative shrink-0 w-[151.5px]">
                <div className="flex-none rotate-[355.076deg]">
                  <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.5)] opacity-50 relative rounded-2xl w-[140px] h-[140px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] border border-[rgba(224,224,224,0.5)]">
                    <div className="flex flex-col justify-center relative w-full h-full">
                      <div className="flex flex-col gap-1.5 items-start justify-center pb-1.5 pt-2 px-2 relative w-[140px] h-[140px]">
                        <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px opacity-50 rounded-lg shrink-0 w-full" style={{ backgroundImage: `url('${imgIanMacdonaldPmqTjdVbKdMUnsplash2}')` }} />
                        <div className="relative shrink-0 w-full">
                          <div className="relative w-full h-full">
                            <div className="flex flex-col gap-0.5 items-start justify-start px-1 py-0.5 relative w-full">
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row gap-1 items-center justify-start relative w-full">
                                  <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[12px] text-left">
                                    <p className="block leading-[16px]">2230 Homet Rd</p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-col gap-0.5 items-start justify-start relative w-full">
                                  <div className="leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[7px] text-left" style={{ width: "min-content" }}>
                                    <p className="block leading-[10px]">2230 Homet Rd, Pasadena, CA</p>
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
            </div>
          </div>
        </div>
        
        {/* Current Work Card */}
        <div className="bg-[#f7f7f7] relative rounded-2xl shrink-0 w-full">
          <div className="flex flex-col justify-end overflow-hidden relative w-full h-full">
            <div className="flex flex-col gap-2 items-start justify-end p-6 relative w-full">
              <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[16px] text-left w-full">
                <p className="block leading-[20px]">Currently leading an enterprise design team focused on trading platform</p>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-start justify-between relative w-full">
                  <div className="font-jakarta font-medium leading-[0] relative shrink-0 text-[#545454] text-[14px] text-left w-[247px]">
                    <p className="block leading-[20px]">Match with 32 more homes by adding 5 mins to your commute</p>
                  </div>
                  <div className="relative rounded-full shrink-0 w-10 h-10">
                    <div className="flex flex-row items-center justify-center relative w-full h-full">
                      <div className="flex flex-row gap-2.5 items-center justify-center p-3 relative w-10 h-10">
                        <div className="bg-[#f2f2f2] relative rounded-full shrink-0 w-8 h-8">
                          <div className="flex flex-row items-center justify-center relative w-full h-full">
                            <div className="flex flex-row gap-2.5 items-center justify-center p-2 relative w-8 h-8">
                              <div className="relative shrink-0 w-[18px] h-[18px]">
                                <ChevronRight className="w-full h-full text-[#666666]" />
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
        </div>
      </div>
    </div>
  );
}; 