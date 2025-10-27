import React from 'react';
import { ChevronDown } from 'lucide-react';
import { interFont } from '@/app/fonts';
import { TextResponse as TextResponseType, SourcesResponse } from '../../types/responses';
import { PromptsSuggestions } from '../prompt/PromptsSuggestions';

interface TextResponseProps {
  response: TextResponseType | SourcesResponse;
  messageId?: string;
  onPromptClick?: (prompt: string) => void;
}

export function TextResponse({ response, messageId, onPromptClick }: TextResponseProps) {
  const sourcesResponse = response.type === 'sources' ? response as SourcesResponse : null;

  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className={`${interFont.className} font-normal leading-[20px] max-w-[400px] not-italic relative shrink-0 text-[14px] text-foreground whitespace-pre-wrap`}>
        {response.content}
      </p>
      
      {/* Show prompts suggestions only for welcome message */}
      {messageId === 'welcome' && onPromptClick && (
        <div className="mt-4">
          <PromptsSuggestions onPromptClick={onPromptClick} />
        </div>
      )}
      
      {/* Show sources if available */}
      {sourcesResponse?.sources && sourcesResponse.sources.length > 0 && (
        <>
          <div className="bg-secondary box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-xs shrink-0">
            <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-secondary-foreground text-[14px] text-nowrap">
              <p className={`${interFont.className} leading-[20px] whitespace-pre`}>
                {sourcesResponse.sources.length} sources
              </p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <ChevronDown className="w-4 h-4 shrink-0" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
            {sourcesResponse.sources.map((source, index) => (
              <div 
                key={source.id}
                className={`bg-background border border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 ${
                  index === 1 ? 'border-muted-foreground' : 'border-border'
                }`}
              >
                <p className={`${interFont.className} font-normal leading-[20px] relative shrink-0 text-foreground text-[14px] text-nowrap whitespace-pre`}>
                  {source.name}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
