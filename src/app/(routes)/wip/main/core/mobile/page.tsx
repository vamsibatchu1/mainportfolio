'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { jakartaFont } from '@/app/fonts';
import { ArrowRight, ArrowDown, ArrowUp } from 'lucide-react';

export default function MobilePage() {
  const [selectedPeriod, setSelectedPeriod] = useState<'6M' | '1Y' | '2Y'>('1Y');

  return (
    <div className={`${jakartaFont.className} bg-white relative rounded-[30px] w-[393px] mx-auto`}>
      {/* System UI Bar */}
      <div className="bg-white box-border flex h-[64px] items-center justify-between px-[32px] py-[16px] rounded-tl-[30px] rounded-tr-[30px] sticky top-0 z-10">
        <div className="flex flex-col gap-[8px] h-[28px] items-center justify-center p-[8px] relative shrink-0 w-[82px]">
          <div className="bg-[#c1c1c1] h-[16px] rounded-[8px] shrink-0 w-[56px]" />
        </div>
        <div className="flex gap-[5px] h-[28px] items-center relative shrink-0">
          <div className="bg-[#c1c1c1] h-[16px] rounded-[8px] shrink-0 w-[24px]" />
          <div className="bg-[#c1c1c1] rounded-[10px] shrink-0 size-[20px]" />
          <div className="bg-[#c1c1c1] h-[16px] rounded-[8px] shrink-0 w-[28px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="box-border flex flex-col gap-[20px] items-start px-[24px] py-[16px] w-[393px]">
        {/* Title Section */}
        <div className="flex gap-[10px] h-[32px] items-center relative shrink-0 w-full">
          <p className="basis-0 grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[20px] font-medium">
            Your neighborhood trends
          </p>
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <ArrowRight className="w-full h-full text-[#111111]" />
          </div>
        </div>

        {/* Map Image Section */}
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative shrink-0 w-full rounded-[16px] overflow-hidden">
            <div className="h-[160px] relative rounded-[16px] w-full bg-blue-500">
              <Image
                src="/images/wip/mobile/map-placeholder.png"
                alt="Neighborhood map"
                width={345}
                height={160}
                className="w-full h-full object-cover opacity-90 rounded-[16px]"
              />
            </div>
          </div>

          {/* Market Trends Section */}
          <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-[12px] items-start max-w-[628px] min-w-[240px] relative shrink-0 w-full">
                    <p className="leading-[20px] min-w-full not-italic relative shrink-0 text-[#545454] text-[14px] w-[min-content]">
                      Market trends for Troy, MI
                    </p>
                  </div>
                </div>

                {/* Slider Section */}
                <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <div className="flex items-center justify-center relative shrink-0 w-full">
                    <div className="flex-none rotate-[180deg] w-full">
                      <div className="box-border flex flex-col items-center justify-end pb-[12px] pt-0 px-0 relative w-full">
                        <div className="flex items-center justify-center mb-[-12px] relative shrink-0 w-full">
                          <div className="flex-none rotate-[180deg] w-full">
                            <div className="flex flex-col gap-[24px] items-start relative w-full">
                              <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                <div className="box-border flex flex-col items-start justify-center pb-[42px] pt-[2px] px-0 relative shrink-0 w-full">
                                  <div className="box-border flex gap-[8px] h-[16px] items-center mb-[-16px] relative shrink-0 w-full">
                                    <div className="basis-0 bg-[#7392fc] box-border flex grow h-[16px] items-start min-h-px min-w-px pb-[16px] pt-[28px] px-0 relative rounded-bl-[8px] rounded-tl-[8px] shrink-0">
                                      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[12px] text-center text-nowrap">
                                        <p className="leading-[16px] whitespace-pre font-medium">Seller</p>
                                      </div>
                                    </div>
                                    <div className="basis-0 bg-[#adc6f6] box-border flex gap-[165px] grow h-[16px] items-start min-h-px min-w-px pb-[16px] pt-[28px] px-0 relative shrink-0">
                                      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[12px] text-center text-nowrap">
                                        <p className="leading-[16px] whitespace-pre font-medium">Neutral</p>
                                      </div>
                                    </div>
                                    <div className="basis-0 bg-[#d2d9f4] box-border flex gap-[165px] grow h-[16px] items-start min-h-px min-w-px pb-[16px] pt-[28px] px-0 relative rounded-br-[8px] rounded-tr-[8px] shrink-0">
                                      <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[12px]">
                                        <p className="leading-[16px] font-medium">Buyer</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-[-16px] relative shrink-0 size-[16px]">
                                    <div className="absolute bottom-[-12.5%] left-0 right-[-1837.5%] top-[-12.5%]">
                                      <div className="w-full h-full bg-black rounded-full border-2 border-white" />
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

            {/* Statistics Section */}
            <div className="flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <div className="flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[159.5px]">
                  <div className="flex items-center relative shrink-0">
                    <p className="leading-[normal] not-italic relative shrink-0 text-[#111111] text-[18px] text-nowrap whitespace-pre font-medium">
                      54.7%
                    </p>
                    <div className="overflow-clip relative shrink-0 size-[24px] ml-1">
                      <ArrowDown className="w-full h-full text-[#111111]" size={16} />
                    </div>
                  </div>
                  <div className="flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#545454] text-[14px]">
                      Sold below asking
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[159.5px]">
                  <p className="leading-[normal] not-italic relative shrink-0 text-[#111111] text-[18px] w-full font-medium">
                    Fast
                  </p>
                  <div className="flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#545454] text-[14px]">
                      Home sale time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="flex items-center relative shrink-0">
                <p className="leading-[normal] not-italic relative shrink-0 text-[#111111] text-[18px] text-nowrap whitespace-pre font-medium">
                  10.6%
                </p>
                <div className="overflow-clip relative shrink-0 size-[24px] ml-1">
                  <ArrowDown className="w-full h-full text-[#111111]" size={16} />
                </div>
              </div>
              <div className="flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                <p className="basis-0 grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#545454] text-[14px]">
                  Increased in value
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Time Period Toggle and Additional Stats */}
        <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {/* Button Toggle */}
          <div className="bg-[#f7f7f7] border border-[#e9e9e9] border-solid box-border flex gap-[4px] items-start p-[4px] relative rounded-[100px] shrink-0 w-full">
            <button
              onClick={() => setSelectedPeriod('6M')}
              className={`basis-0 box-border flex flex-col grow h-[40px] items-start min-h-px min-w-px pb-[40px] pt-0 px-0 relative shrink-0 ${
                selectedPeriod === '6M' ? '' : ''
              }`}
            >
              <div className={`box-border flex gap-[6px] h-[40px] items-center mb-[-40px] px-[24px] py-0 relative rounded-[100px] shrink-0 w-full ${
                selectedPeriod === '6M'
                  ? 'bg-white border-[1.5px] border-[rgba(0,0,0,0.04)] border-solid'
                  : ''
              }`}>
                <p className={`basis-0 grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center ${
                  selectedPeriod === '6M' ? 'text-[#111111] font-semibold' : 'text-[#545454]'
                }`}>
                  6M
                </p>
              </div>
            </button>
            <button
              onClick={() => setSelectedPeriod('1Y')}
              className={`basis-0 box-border flex flex-col grow h-[40px] items-start min-h-px min-w-px pb-[40px] pt-0 px-0 relative shrink-0 ${
                selectedPeriod === '1Y' ? '' : ''
              }`}
            >
              <div className={`box-border flex gap-[6px] h-[40px] items-center mb-[-40px] px-[24px] py-0 relative rounded-[100px] shrink-0 w-full ${
                selectedPeriod === '1Y'
                  ? 'bg-white border-[1.5px] border-[rgba(0,0,0,0.04)] border-solid'
                  : ''
              }`}>
                <p className={`basis-0 grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center ${
                  selectedPeriod === '1Y' ? 'text-[#111111] font-semibold' : 'text-[#545454]'
                }`}>
                  1Y
                </p>
              </div>
            </button>
            <button
              onClick={() => setSelectedPeriod('2Y')}
              className={`basis-0 box-border flex flex-col grow h-[40px] items-start min-h-px min-w-px pb-[40px] pt-0 px-0 relative shrink-0 ${
                selectedPeriod === '2Y' ? '' : ''
              }`}
            >
              <div className={`box-border flex gap-[6px] h-[40px] items-center mb-[-40px] px-[24px] py-0 relative rounded-[100px] shrink-0 w-full ${
                selectedPeriod === '2Y'
                  ? 'bg-white border-[1.5px] border-[rgba(0,0,0,0.04)] border-solid'
                  : ''
              }`}>
                <p className={`basis-0 grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center ${
                  selectedPeriod === '2Y' ? 'text-[#111111] font-semibold' : 'text-[#545454]'
                }`}>
                  2Y
                </p>
              </div>
            </button>
          </div>

          {/* Additional Statistics */}
          <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="flex gap-[24px] items-center relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <div className="flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[159.5px]">
                  <div className="flex items-center relative shrink-0">
                    <p className="leading-[normal] not-italic relative shrink-0 text-[#111111] text-[18px] text-nowrap whitespace-pre font-medium">
                      3,177
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#545454] text-[14px]">
                      Active listings
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[159.5px]">
                  <p className="leading-[normal] not-italic relative shrink-0 text-[#111111] text-[18px] w-full font-medium">
                    45 days
                  </p>
                  <div className="flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#545454] text-[14px]">
                      on market (average)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-[24px] items-center relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <div className="flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[159.5px]">
                  <div className="flex items-center relative shrink-0">
                    <p className="leading-[normal] not-italic relative shrink-0 text-[#111111] text-[18px] text-nowrap whitespace-pre font-medium">
                      404
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#545454] text-[14px]">
                      Homes sold (last month)
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[159.5px]">
                  <div className="flex items-center relative shrink-0">
                    <p className="leading-[normal] not-italic relative shrink-0 text-[#111111] text-[18px] text-nowrap whitespace-pre font-medium">
                      8%
                    </p>
                    <div className="overflow-clip relative shrink-0 size-[24px] ml-1">
                      <ArrowUp className="w-full h-full text-[#111111]" size={16} />
                    </div>
                  </div>
                  <div className="flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#545454] text-[14px]">
                      Yearly home appreciation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-[24px] items-center relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <div className="flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[159.5px]">
                  <div className="flex items-center relative shrink-0">
                    <p className="leading-[normal] not-italic relative shrink-0 text-[#111111] text-[18px] text-nowrap whitespace-pre font-medium">
                      $84.9K
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#545454] text-[14px]">
                      Median sold price
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[159.5px]">
                  <p className="leading-[normal] not-italic relative shrink-0 text-[#111111] text-[18px] w-full font-medium">
                    Buyer
                  </p>
                  <div className="flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#545454] text-[14px]">
                      Market condition
                    </p>
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

