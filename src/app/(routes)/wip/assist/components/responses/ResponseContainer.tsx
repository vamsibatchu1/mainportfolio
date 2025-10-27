import React from 'react';
import { interFont } from '@/app/fonts';
import { ResponseContainerProps, ResponseData } from '../../types/responses';
import { LoadingComponent } from './LoadingComponent';
import { TextResponse } from './TextResponse';
import { ResearchResponseComponent } from './ResearchResponse';

export function ResponseContainer({ response, messageId, isLoading, onPromptClick }: ResponseContainerProps) {
  // Show loading component if message is in loading state
  if (isLoading) {
    return (
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
        <LoadingComponent message="Here goes the loading message" />
      </div>
    );
  }

  // Render different response types
  switch (response.type) {
    case 'text':
    case 'sources':
      return (
        <TextResponse 
          response={response} 
          messageId={messageId} 
          onPromptClick={onPromptClick} 
        />
      );

    case 'research':
      return <ResearchResponseComponent response={response} />;

    default:
      // Fallback to simple text for unknown types
      return (
        <p className={`${interFont.className} font-normal leading-[20px] max-w-[400px] not-italic relative shrink-0 text-[16px] text-foreground whitespace-pre-wrap`}>
          {response.content}
        </p>
      );
  }
}
