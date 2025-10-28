import React from 'react';
import { interFont } from '@/app/fonts';

interface VariantGeneralProps {
  content: string;
}

export function VariantGeneral({ content }: VariantGeneralProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full">
      <p className={`${interFont.className} font-normal leading-[20px] max-w-[320px] not-italic relative shrink-0 text-[16px] text-foreground whitespace-pre-wrap`}>
        {content}
      </p>
    </div>
  );
}
