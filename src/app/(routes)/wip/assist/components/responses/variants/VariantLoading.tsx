import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { interFont } from '@/app/fonts';
import assistLoadingAnimation from '../../../../../../../assets/animations/assist-loading.json';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface VariantLoadingProps {
  content: string;
}

export function VariantLoading({ content }: VariantLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading for 4 seconds, then show the actual content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
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
            Searching files, reading the documentation and creating a report
          </p>
        </div>
      </div>
    );
  }

  // Show the actual response content after loading
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full">
      <p className={`${interFont.className} font-normal leading-[20px] max-w-[320px] not-italic relative shrink-0 text-[14px] text-foreground whitespace-pre-wrap`}>
        {content}
      </p>
    </div>
  );
}
