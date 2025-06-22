import React from 'react';

interface UserPromptProps {
  message: string;
}

export const UserPrompt: React.FC<UserPromptProps> = ({ message }) => {
  return (
    <div className="relative size-full">
      <div className="flex flex-col items-end relative size-full">
                  <div className="box-border content-stretch flex flex-col gap-1 items-end justify-start pl-20 pr-0 py-0 relative size-full">
            <div className="bg-[#111111] w-[264px] relative rounded-2xl shrink-0">
              <div className="flex flex-row items-center relative w-full">
                <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start px-4 py-2 relative w-full">
                <div className="basis-0 font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative text-[#ffffff] text-[16px] text-left">
                  <p className="block leading-[24px] break-words">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 