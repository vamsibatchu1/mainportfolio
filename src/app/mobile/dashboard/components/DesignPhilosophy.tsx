import React from 'react';
import { ArrowRight, DollarSign, CreditCard, Receipt, TrendingUp, MessageCircle } from 'lucide-react';

// Image constants from Figma - keeping the profile image
const imgEllipse184 = "http://localhost:3845/assets/fd7bba309554df13a359662a70858d76b9d382d6.png";

export const DesignPhilosophy: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full px-6">
      <div className="flex flex-col gap-4 items-start justify-start relative w-full">
        
        {/* Philosophy Title */}
        <div className="h-8 relative shrink-0 w-full">
          <div className="flex flex-row gap-2.5 h-8 items-center justify-start relative w-full">
            <div className="basis-0 font-jakarta font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[20px] text-left">
              <p className="block leading-[24px]">My design philosophy</p>
            </div>
            <div className="overflow-hidden relative shrink-0 w-6 h-6">
              <ArrowRight className="w-full h-full text-[#111111]" />
            </div>
          </div>
        </div>
        
        {/* Philosophy Card */}
        <div className="bg-white relative rounded-3xl shrink-0 w-full border border-[#e9e9e9]">
          <div className="flex flex-col justify-center overflow-hidden relative w-full h-full">
            <div className="flex flex-col gap-6 items-start justify-center p-6 relative w-full">
              
              {/* Philosophy Content */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col gap-4 items-start justify-start leading-[0] text-left relative w-full">
                  <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[16px] w-full">
                    <p className="block leading-[20px]">What truly excites me about design is its potential to orchestrate meaningful change.</p>
                  </div>
                  <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[14px] w-full">
                    <p className="block leading-[20px]">
                      Every pixel we place, every interaction we craft, and every system we architect has the power to make someone&apos;s day better, their work more efficient, or their goals more achievable.
                      <br /><br />
                      After all, a designer just doesn&apos;t just solve problems; they create possibilities.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Philosophy Card with Photo */}
              <div className="bg-[#f7f7f7] relative rounded-[20px] shrink-0 w-full border border-[#f2f2f2]">
                <div className="relative w-full h-full">
                  <div className="flex flex-col gap-4 items-start justify-start p-5 relative w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row gap-2 items-center justify-start relative w-full">
                        <div className="relative shrink-0 w-10 h-10">
                          <div className="absolute inset-[-2.5%]">
                            <img alt="" className="block max-w-none w-full h-full" height="42" loading="lazy" src={imgEllipse184} width="42" />
                          </div>
                        </div>
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                          <div className="flex flex-col gap-0.5 items-start justify-center relative w-full">
                            <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[14px] text-left w-full">
                              <p className="block leading-[20px]">Peter is here to help!</p>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <div className="flex flex-row gap-1 items-start justify-start relative w-full">
                                <div className="font-jakarta font-medium leading-[0] relative shrink-0 text-[#545454] text-[12px] text-left text-nowrap">
                                  <p className="block leading-[20px] whitespace-pre">Mortgage Specialist</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0">
                          <div className="flex flex-row gap-1 items-center justify-start relative">
                            <div className="overflow-hidden relative shrink-0 w-6 h-6">
                              <MessageCircle className="w-full h-full text-[#666666]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Philosophy Carousel */}
              <div className="relative shrink-0 w-full">
                <div className="overflow-x-auto overflow-y-hidden relative w-full h-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start pl-0 pr-8 py-0 relative w-full">
                    
                    {/* Card 1 - Loan Amount */}
                    <div className="bg-[#f7f7f7] relative rounded-[20px] shrink-0 w-[142.5px] h-[142.5px]">
                      <div className="flex flex-col justify-end overflow-hidden relative w-full h-full">
                        <div className="flex flex-col gap-2.5 items-start justify-end px-5 py-6 relative w-[142.5px] h-[142.5px]">
                          <div className="h-[94px] relative shrink-0 w-full">
                            <div className="flex flex-col gap-2 h-[94px] items-start justify-end relative w-full">
                              <div className="overflow-hidden relative shrink-0 w-4 h-4">
                                <DollarSign className="w-full h-full text-[#666666]" />
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-col gap-1 items-start justify-end leading-[0] text-left relative w-full">
                                  <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                                    <p className="block leading-[24px]">$344.016</p>
                                  </div>
                                  <div className="font-jakarta font-medium leading-[16px] relative shrink-0 text-[#545454] text-[12px] w-full">
                                    <p className="block mb-0">Loan</p>
                                    <p className="block">amount</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card 2 - Monthly Payment */}
                    <div className="bg-[#f7f7f7] relative rounded-[20px] shrink-0 w-[142.5px] h-[142.5px]">
                      <div className="flex flex-col justify-end overflow-hidden relative w-full h-full">
                        <div className="flex flex-col gap-2.5 items-start justify-end px-5 py-6 relative w-[142.5px] h-[142.5px]">
                          <div className="relative shrink-0 w-[102px]">
                            <div className="flex flex-col gap-2 items-start justify-end relative w-[102px]">
                              <div className="overflow-hidden relative shrink-0 w-4 h-4">
                                <CreditCard className="w-full h-full text-[#666666]" />
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-col gap-1 items-start justify-end leading-[0] text-left relative w-full">
                                  <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                                    <p className="block leading-[24px]">$2,419.71</p>
                                  </div>
                                  <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[12px] w-full">
                                    <p className="block leading-[16px]">Est. monthly payment</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card 3 - Monthly Escrow */}
                    <div className="bg-[#f7f7f7] relative rounded-[20px] shrink-0 w-[142.5px] h-[142.5px]">
                      <div className="flex flex-col justify-end overflow-hidden relative w-full h-full">
                        <div className="flex flex-col gap-2.5 items-start justify-end px-5 py-6 relative w-[142.5px] h-[142.5px]">
                          <div className="relative shrink-0 w-[102px]">
                            <div className="flex flex-col gap-2 items-start justify-end relative w-[102px]">
                              <div className="overflow-hidden relative shrink-0 w-4 h-4">
                                <Receipt className="w-full h-full text-[#666666]" />
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-col gap-1 items-start justify-end leading-[0] text-left relative w-full">
                                  <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                                    <p className="block leading-[24px]">$575.05</p>
                                  </div>
                                  <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[12px] w-full">
                                    <p className="block leading-[16px]">Est. monthly escrow</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card 4 - Interest Rate */}
                    <div className="bg-[#f7f7f7] relative rounded-[20px] shrink-0 w-[142.5px] h-[142.5px]">
                      <div className="flex flex-col justify-end overflow-hidden relative w-full h-full">
                        <div className="flex flex-col gap-2.5 items-start justify-end px-5 py-6 relative w-[142.5px] h-[142.5px]">
                          <div className="relative shrink-0 w-[102px]">
                            <div className="flex flex-col gap-2 items-start justify-end relative w-[102px]">
                              <div className="overflow-hidden relative shrink-0 w-4 h-4">
                                <TrendingUp className="w-full h-full text-[#666666]" />
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-col gap-1 items-start justify-end leading-[0] text-left relative w-full">
                                  <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                                    <p className="block leading-[24px]">4.990%</p>
                                  </div>
                                  <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[12px] w-full">
                                    <p className="block leading-[16px]">Interest rate</p>
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
      </div>
    </div>
  );
}; 