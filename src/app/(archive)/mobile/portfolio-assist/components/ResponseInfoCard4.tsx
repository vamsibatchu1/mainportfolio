import React from 'react';

interface ResponseInfoCard4Props {
  title: string;
  description: string;
  actionText?: string;
  onClick?: () => void;
}

/**
 * Response Info Card Style 4 - Rich content card with call-to-action
 * Features: Large title, detailed description, prominent action button
 * Use case: Detailed explanations, important announcements, primary actions
 */
export const ResponseInfoCard4: React.FC<ResponseInfoCard4Props> = ({
  title,
  description,
  actionText = "Learn more",
  onClick
}) => {
  return (
    <div className="bg-[#f7f7f7] relative rounded-2xl w-full">
      <div className="flex flex-col justify-end relative w-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-end overflow-clip p-6 relative w-full">
          
          {/* Content section */}
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
            
            {/* Title */}
            <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
              <div className="basis-0 font-jakarta font-semibold grow leading-[0] min-h-px min-w-px relative text-[#111111] text-[16px] text-left">
                <p className="block leading-[20px]">
                  {title}
                </p>
              </div>
            </div>
            
            {/* Description */}
            <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
              <div className="basis-0 font-jakarta font-medium grow leading-[0] min-h-px min-w-px relative text-[#545454] text-[14px] text-left">
                <p className="block leading-[20px]">
                  {description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Action button */}
          <button
            onClick={onClick}
            className="bg-[#ededed] box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative rounded-3xl shrink-0 hover:bg-[#e0e0e0] transition-colors"
          >
            <div className="flex flex-col font-jakarta font-medium justify-center leading-[0] relative text-[#111111] text-[14px] text-left">
              <p className="block leading-normal">
                {actionText}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}; 