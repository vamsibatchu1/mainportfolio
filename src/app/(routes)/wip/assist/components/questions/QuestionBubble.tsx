import React from 'react';
import { interFont } from '@/app/fonts';
import { QuestionBubbleProps } from '../../types/responses';

export function QuestionBubble({ question, timestamp }: QuestionBubbleProps) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full">
      <div className="bg-black box-border content-stretch flex gap-[10px] items-center justify-center max-w-[400px] p-[12px] relative rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0">
        <p className={`basis-0 ${interFont.className} font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-right text-white whitespace-normal break-words`}>
          {question}
        </p>
      </div>
    </div>
  );
}
