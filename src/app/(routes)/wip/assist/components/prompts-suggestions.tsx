'use client';

import React from 'react';
import { Send, BookOpen } from 'lucide-react';
import { interFont } from '@/app/fonts';

interface PromptsSuggestionsProps {
  onPromptClick?: (prompt: string) => void;
  className?: string;
}

export function PromptsSuggestions({ onPromptClick, className = '' }: PromptsSuggestionsProps) {
  const prompts = [
    {
      id: 'current-work',
      icon: Send,
      text: 'Learn about what I am currently working on',
      prompt: 'What are you currently working on?'
    },
    {
      id: 'articles',
      icon: BookOpen,
      text: 'Read my latest articles that i have written',
      prompt: 'Show me your latest articles'
    }
  ];

  const handlePromptClick = (prompt: string) => {
    if (onPromptClick) {
      onPromptClick(prompt);
    }
  };

  return (
    <div className={`content-stretch flex gap-[10px] items-center relative size-full ${className}`}>
      {prompts.map((prompt) => {
        const IconComponent = prompt.icon;
        return (
          <div 
            key={prompt.id}
            className="bg-white border border-border border-solid relative rounded-[14px] shrink-0 cursor-pointer hover:shadow-sm transition-shadow"
            onClick={() => handlePromptClick(prompt.prompt)}
          >
            <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip px-0 py-[16px] relative rounded-[inherit]">
              <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-0 relative shrink-0 w-[195px]">
                <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="bg-secondary border border-[#e8e8e8] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 size-[36px]">
                    <div className="overflow-clip relative shrink-0 size-[16px]">
                      <IconComponent className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                  <p className={`${interFont.className} font-normal leading-[20px] min-w-full relative shrink-0 text-muted-foreground text-[14px] w-[min-content]`}>
                    {prompt.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
