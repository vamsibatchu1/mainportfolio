import React from 'react';
import { interFont } from '@/app/fonts';
import { ResearchResponse } from '../../types/responses';

interface ResearchResponseProps {
  response: ResearchResponse;
}

export function ResearchResponseComponent({ response }: ResearchResponseProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className={`${interFont.className} font-normal leading-[20px] max-w-[400px] not-italic relative shrink-0 text-[16px] text-foreground whitespace-pre-wrap`}>
        {response.content}
      </p>
      <div className="bg-neutral-100 border border-input border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-full">
        <p className={`${interFont.className} font-medium text-[14px] text-foreground whitespace-pre`}>
          Researched {response.researchCount} pages
        </p>
      </div>
    </div>
  );
}
