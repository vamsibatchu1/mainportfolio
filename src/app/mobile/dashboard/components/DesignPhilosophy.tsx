import React from 'react';
import { ArrowRight, DollarSign, CreditCard, Receipt, TrendingUp, MessageCircle } from 'lucide-react';

// Image constants from Figma - keeping the profile image
const imgEllipse184 = "http://localhost:3845/assets/fd7bba309554df13a359662a70858d76b9d382d6.png";

export const DesignPhilosophy: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full px-6">
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        
        {/* Philosophy Title */}
        <div className="flex flex-row gap-2.5 h-8 items-center justify-start w-full">
          <div className="flex-1 font-jakarta font-semibold text-[#111111] text-[20px]">
            <p className="leading-[24px]">My design philosophy</p>
          </div>
          <ArrowRight className="w-6 h-6 text-[#111111]" />
        </div>
        
        {/* Philosophy Card */}
        <div className="bg-white rounded-3xl w-full border border-[#e9e9e9] p-6">
          <div className="flex flex-col gap-6 items-start justify-center">
            
            {/* Philosophy Content */}
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                <p className="leading-[20px]">What truly excites me about design is its potential to orchestrate meaningful change.</p>
              </div>
              <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                <p className="leading-[20px]">
                  Every pixel we place, every interaction we craft, and every system we architect has the power to make someone&apos;s day better, their work more efficient, or their goals more achievable.
                  <br /><br />
                  After all, a designer just doesn&apos;t just solve problems; they create possibilities.
                </p>
              </div>
            </div>
            
            {/* Philosophy Card with Photo */}
            <div className="bg-[#f7f7f7] rounded-[20px] w-full border border-[#f2f2f2] p-5">
              <div className="flex flex-row gap-2 items-center justify-start w-full">
                <div className="w-10 h-10 relative">
                  <div className="absolute inset-[-2.5%]">
                    <img alt="" className="block max-w-none w-full h-full" height="42" loading="lazy" src={imgEllipse184} width="42" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-0.5 items-start justify-center w-full">
                    <div className="font-jakarta font-semibold text-[#111111] text-[14px] w-full">
                      <p className="leading-[20px]">Peter is here to help!</p>
                    </div>
                    <div className="font-jakarta font-medium text-[#545454] text-[12px] text-nowrap">
                      <p className="leading-[20px]">Mortgage Specialist</p>
                    </div>
                  </div>
                </div>
                <MessageCircle className="w-6 h-6 text-[#666666]" />
              </div>
            </div>
            
            {/* Philosophy Carousel */}
            <div className="w-full overflow-x-auto overflow-y-hidden">
              <div className="flex flex-row gap-2.5 items-start justify-start pr-8">
                
                {/* Card 1 - Loan Amount */}
                <div className="bg-[#f7f7f7] rounded-[20px] w-[142.5px] h-[142.5px] p-5 flex flex-col justify-end">
                  <div className="flex flex-col gap-2">
                    <DollarSign className="w-4 h-4 text-[#666666]" />
                    <div className="flex flex-col gap-1">
                      <div className="font-jakarta font-semibold text-[#111111] text-[18px]">
                        <p className="leading-[24px]">$344.016</p>
                      </div>
                      <div className="font-jakarta font-medium text-[#545454] text-[12px]">
                        <p className="leading-[16px]">Loan<br />amount</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card 2 - Monthly Payment */}
                <div className="bg-[#f7f7f7] rounded-[20px] w-[142.5px] h-[142.5px] p-5 flex flex-col justify-end">
                  <div className="flex flex-col gap-2">
                    <CreditCard className="w-4 h-4 text-[#666666]" />
                    <div className="flex flex-col gap-1">
                      <div className="font-jakarta font-semibold text-[#111111] text-[18px]">
                        <p className="leading-[24px]">$2,419.71</p>
                      </div>
                      <div className="font-jakarta font-medium text-[#545454] text-[12px]">
                        <p className="leading-[16px]">Est. monthly payment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card 3 - Monthly Escrow */}
                <div className="bg-[#f7f7f7] rounded-[20px] w-[142.5px] h-[142.5px] p-5 flex flex-col justify-end">
                  <div className="flex flex-col gap-2">
                    <Receipt className="w-4 h-4 text-[#666666]" />
                    <div className="flex flex-col gap-1">
                      <div className="font-jakarta font-semibold text-[#111111] text-[18px]">
                        <p className="leading-[24px]">$575.05</p>
                      </div>
                      <div className="font-jakarta font-medium text-[#545454] text-[12px]">
                        <p className="leading-[16px]">Est. monthly escrow</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card 4 - Interest Rate */}
                <div className="bg-[#f7f7f7] rounded-[20px] w-[142.5px] h-[142.5px] p-5 flex flex-col justify-end">
                  <div className="flex flex-col gap-2">
                    <TrendingUp className="w-4 h-4 text-[#666666]" />
                    <div className="flex flex-col gap-1">
                      <div className="font-jakarta font-semibold text-[#111111] text-[18px]">
                        <p className="leading-[24px]">4.990%</p>
                      </div>
                      <div className="font-jakarta font-medium text-[#545454] text-[12px]">
                        <p className="leading-[16px]">Interest rate</p>
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