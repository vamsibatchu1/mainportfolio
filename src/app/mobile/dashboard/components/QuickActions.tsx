import React from 'react';
import { Briefcase, User, Eye, ChevronRight, FolderOpen } from 'lucide-react';

export const QuickActions: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full pl-6">
      <div className="flex flex-col gap-4 items-start justify-start relative w-full">
        
        {/* Title */}
        <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[20px] text-left w-[283px]">
          <p className="block leading-[24px]">Here are some quick actions</p>
        </div>
        
        {/* Quick Actions Carousel */}
        <div className="relative shrink-0 w-full">
          <div className="overflow-x-auto overflow-y-hidden relative w-full">
            <div className="flex flex-row gap-3 items-center justify-start relative min-w-max pl-0 pr-6 py-0">
              
              {/* Card 1 - Look at the recent work */}
              <div className="bg-[rgba(115,38,18,0.05)] h-40 min-w-40 relative rounded-3xl shrink-0 w-40">
                <div className="min-w-inherit relative w-full h-full">
                  <div className="flex flex-col h-40 items-start justify-between min-w-inherit p-4 relative w-full">
                    {/* Icon */}
                    <div className="bg-[#f4e4da] relative rounded-2xl shrink-0 w-12 h-12">
                      <div className="flex flex-row items-center justify-center relative w-full h-full">
                        <div className="flex flex-row gap-2 items-center justify-center p-2 relative w-12 h-12">
                          <div className="relative shrink-0 w-6 h-6">
                            <Briefcase className="w-full h-full text-[#732612]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center relative w-full h-full">
                        <div className="flex flex-row items-center justify-between pl-0.5 pr-0 py-0 relative w-full">
                          <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
                            <p className="block leading-[20px] whitespace-pre">
                              Look at the<br />recent work
                            </p>
                          </div>
                          <div className="flex items-center justify-center relative shrink-0">
                            <div className="flex-none rotate-180 scale-y-[-100%]">
                              <div className="overflow-hidden relative w-6 h-6">
                                <ChevronRight className="w-full h-full text-[#111111]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 - Learn more about me */}
              <div className="bg-[rgba(229,227,201,0.25)] h-40 min-w-40 relative rounded-3xl shrink-0 w-40">
                <div className="min-w-inherit relative w-full h-full">
                  <div className="flex flex-col h-40 items-start justify-between min-w-inherit p-4 relative w-full">
                    {/* Icon */}
                    <div className="bg-[#f0eed9] relative rounded-2xl shrink-0 w-12 h-12">
                      <div className="flex flex-row items-center justify-center relative w-full h-full">
                        <div className="flex flex-row gap-2 items-center justify-center p-2 relative w-12 h-12">
                          <div className="overflow-hidden relative shrink-0 w-6 h-6">
                            <User className="w-full h-full text-[#8b8a65]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center relative w-full h-full">
                        <div className="flex flex-row items-center justify-between pl-0.5 pr-0 py-0 relative w-full">
                          <div className="font-jakarta font-semibold leading-[20px] relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap whitespace-pre">
                            <p className="block mb-0">Learn more</p>
                            <p className="block">about me</p>
                          </div>
                          <div className="flex items-center justify-center relative shrink-0">
                            <div className="flex-none rotate-180 scale-y-[-100%]">
                              <div className="overflow-hidden relative w-6 h-6">
                                <ChevronRight className="w-full h-full text-[#111111]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 - Just browsing */}
              <div className="bg-[rgba(115,146,252,0.05)] h-40 min-w-40 relative rounded-3xl shrink-0 w-40">
                <div className="min-w-inherit relative w-full h-full">
                  <div className="flex flex-col h-40 items-start justify-between min-w-inherit p-4 relative w-full">
                    {/* Icon */}
                    <div className="bg-[#edf1ff] relative rounded-2xl shrink-0 w-12 h-12">
                      <div className="flex flex-row items-center justify-center relative w-full h-full">
                        <div className="flex flex-row gap-2 items-center justify-center p-2 relative w-12 h-12">
                          <div className="overflow-hidden relative shrink-0 w-6 h-6">
                            <Eye className="w-full h-full text-[#7392fc]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center relative w-full h-full">
                        <div className="flex flex-row items-center justify-between pl-0.5 pr-0 py-0 relative w-full">
                          <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
                            <p className="block leading-[20px] whitespace-pre">
                              Just<br />browsing
                            </p>
                          </div>
                          <div className="flex items-center justify-center relative shrink-0">
                            <div className="flex-none rotate-180 scale-y-[-100%]">
                              <div className="overflow-hidden relative w-6 h-6">
                                <ChevronRight className="w-full h-full text-[#111111]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional cards for carousel demonstration */}
              <div className="bg-[rgba(115,38,18,0.05)] h-40 min-w-40 relative rounded-3xl shrink-0 w-40">
                <div className="min-w-inherit relative w-full h-full">
                  <div className="flex flex-col h-40 items-start justify-between min-w-inherit p-4 relative w-full">
                    <div className="bg-[#f4e4da] relative rounded-2xl shrink-0 w-12 h-12">
                      <div className="flex flex-row items-center justify-center relative w-full h-full">
                        <div className="flex flex-row gap-2 items-center justify-center p-2 relative w-12 h-12">
                          <div className="relative shrink-0 w-6 h-6">
                            <FolderOpen className="w-full h-full text-[#732612]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center relative w-full h-full">
                        <div className="flex flex-row items-center justify-between pl-0.5 pr-0 py-0 relative w-full">
                          <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
                            <p className="block leading-[20px] whitespace-pre">
                              View more<br />projects
                            </p>
                          </div>
                          <div className="flex items-center justify-center relative shrink-0">
                            <div className="flex-none rotate-180 scale-y-[-100%]">
                              <div className="overflow-hidden relative w-6 h-6">
                                <ChevronRight className="w-full h-full text-[#111111]" />
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