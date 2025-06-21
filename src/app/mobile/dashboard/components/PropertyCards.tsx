import { interFont } from '@/app/fonts';

export function PropertyCards() {
  return (
    <div className={`relative w-[345px] ${interFont.variable}`}>
      <div className="flex flex-row items-center justify-center relative">
        <div className="flex flex-row-reverse items-center justify-start pr-[120px] py-2 relative">
          {/* Card 1 - Most visible */}
          <div className="flex h-0 items-center justify-center -mr-[120px] order-3 relative shrink-0 w-0">
            <div className="flex-none rotate-[358deg]">
              <div className="backdrop-blur-sm backdrop-filter bg-white relative rounded-2xl w-[140px] h-[140px] border border-[rgba(224,224,224,0.5)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col justify-center relative w-full h-full">
                  <div className="flex flex-col gap-1 items-start justify-center p-2 relative w-[140px] h-[140px]">
                    {/* Main Image */}
                    <div className="flex-1 bg-gradient-to-br from-blue-300 to-green-300 bg-center bg-cover bg-no-repeat w-full rounded-lg">
                      <div className="flex flex-row justify-end relative w-full h-full"></div>
                    </div>
                    {/* Details */}
                    <div className="relative w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start p-0.5 relative w-full">
                        <div className="relative w-full">
                          <div className="flex flex-row gap-1 items-center justify-start p-0 relative w-full">
                            <div className="flex-1 font-inter font-medium text-[14px] leading-4 text-[#111111]">
                              <p>$589,000</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative w-full">
                          <div className="flex flex-wrap gap-0.5 items-start justify-start p-0 relative w-full font-inter font-normal text-[7px] leading-[10px] text-[#545454]">
                            <span>Altadena</span>
                            <span>•</span>
                            <span>3 beds + office</span>
                            <span>Built 2018 + modern kitchen</span>
                            <span>Small backyard + detached garage</span>
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
          <div className="flex h-0 items-center justify-center -mr-[120px] order-2 relative shrink-0 w-0">
            <div className="flex-none rotate-[5.469deg]">
              <div className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.75)] relative rounded-2xl w-[140px] h-[140px] border border-[rgba(224,224,224,0.5)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col justify-center relative w-full h-full">
                  <div className="flex flex-col gap-1.5 items-start justify-center p-2 relative w-[140px] h-[140px]">
                    <div className="flex-1 bg-gradient-to-br from-orange-300 to-red-300 opacity-75 rounded-lg w-full" />
                    <div className="relative w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start px-1 py-0.5 relative w-full">
                        <div className="font-inter font-medium text-[12px] leading-4 text-[#111111]">
                          <p>2230 Homet Rd</p>
                        </div>
                        <div className="font-inter font-normal text-[7px] leading-[10px] text-[#545454]">
                          <p>2230 Homet Rd, Pasadena, CA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Background */}
          <div className="flex h-0 items-center justify-center -mr-[120px] order-1 relative shrink-0 w-0">
            <div className="flex-none rotate-[355.076deg]">
              <div className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] opacity-50 relative rounded-2xl w-[140px] h-[140px] border border-[rgba(224,224,224,0.5)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col justify-center relative w-full h-full">
                  <div className="flex flex-col gap-1.5 items-start justify-center p-2 relative w-[140px] h-[140px]">
                    <div className="flex-1 bg-gradient-to-br from-purple-300 to-pink-300 opacity-50 rounded-lg w-full" />
                    <div className="relative w-full">
                      <div className="flex flex-col gap-0.5 items-start justify-start px-1 py-0.5 relative w-full">
                        <div className="font-inter font-medium text-[12px] leading-4 text-[#111111]">
                          <p>2230 Homet Rd</p>
                        </div>
                        <div className="font-inter font-normal text-[7px] leading-[10px] text-[#545454]">
                          <p>2230 Homet Rd, Pasadena, CA</p>
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
} 