import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative shrink-0 w-full px-6">
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        
        {/* Introduction Text */}
        <div className="font-jakarta font-semibold text-[#111111] text-[28px] text-left w-full overflow-hidden">
          <p className="leading-[32px]">I am vamsi batchu, a product design leader at the intersection of craft & code</p>
        </div>
        
        {/* Current Work Card */}
        <div className="bg-[#f7f7f7] rounded-2xl w-full p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-start justify-start">
                <div className="flex-1 font-jakarta font-semibold text-[#111111] text-[16px]">
                  <p className="leading-[20px]">Currently leading an enterprise design team at Rocket</p>
                </div>
                <div className="w-[35.25px] h-[35.25px] relative">
                  <div className="absolute inset-[-10%]">
                    <img
                      alt="Rocket logo"
                      className="block max-w-none w-full h-full"
                      src="/images/rocketlogo.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="font-jakarta font-medium text-[#545454] text-[14px]">
                <p className="leading-[20px]">My team focuses on transforming trading experiences and workflows</p>
              </div>
            </div>
            <div className="bg-[#ededed] rounded-3xl px-4 py-2 w-fit">
              <div className="font-jakarta font-medium text-[#111111] text-[14px] text-nowrap">
                <p className="leading-normal">Learn more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 