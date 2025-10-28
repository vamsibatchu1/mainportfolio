import React from 'react';
import Lottie from 'lottie-react';
import { interFont } from '@/app/fonts';
import assistLoadingAnimation from '../../../../../../../assets/animations/assist-loading.json';

interface VariantLoadingProps {
  content: string;
}

export function VariantLoading({ content }: VariantLoadingProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <Lottie 
            animationData={assistLoadingAnimation}
            loop={true}
            autoplay={true}
            style={{ width: 20, height: 20 }}
          />
        </div>
        <p className={`${interFont.className} font-normal leading-[20px] max-w-[320px] not-italic relative shrink-0 text-[16px] text-foreground whitespace-pre-wrap`}>
          {content}
        </p>
      </div>
    </div>
  );
}
