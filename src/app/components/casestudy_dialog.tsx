'use client';

import React, { useState, useEffect } from 'react';
import { interFont } from '../fonts';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { TextShimmer } from './text-shimmer';
import { ResponseStream } from './response-stream';
import { 
  Reply, 
  ReplyAll, 
  Forward, 
  MoreVertical 
} from 'lucide-react';

export function CaseStudyDialog() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show shimmer for 3-4 seconds, then show content
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 3500); // 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const placeholderText = `This case study demonstrates the end-to-end redesign of Rocket Logic, focusing on improving user experience and information architecture. The project involved running design sprints with bankers to understand their workflow and pain points. Key improvements included simplified navigation patterns, enhanced data visualization, and streamlined user flows that reduced task completion time by 40%. The redesign also introduced new design patterns that ensured consistency across the platform and improved overall adoption rates.`;

  return (
    <div className="bg-white w-[360px] box-border content-stretch flex flex-col gap-[16px] items-start justify-start p-[24px] relative rounded-[10px] size-full">
      {/* Border and shadow overlay */}
      <div 
        aria-hidden="true" 
        className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" 
      />
      
      {/* Dialog Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        
        {/* Action buttons */}
        <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0">
          <Button variant="ghost" size="icon" className="w-[36px] h-[36px]">
            <Reply className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-[36px] h-[36px]">
            <ReplyAll className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-[36px] h-[36px]">
            <Forward className="w-4 h-4" />
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <Button variant="ghost" size="icon" className="w-[36px] h-[36px]">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Dialog Content */}
      <div className={`content-stretch flex flex-col ${interFont.variable} font-inter font-normal gap-[16px] items-start justify-start leading-[0] relative shrink-0 text-[16px] text-zinc-900 w-full`}>
        {isLoading ? (
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <TextShimmer className="text-sm" duration={2}>
              Generating preview
            </TextShimmer>
          </div>
        ) : showContent ? (
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <ResponseStream
              textStream={placeholderText}
              mode="fade"
              className="text-sm leading-[24px]"
              fadeDuration={1200}
            />
          </div>
        ) : null}
      </div>
      
      {/* Input Section */}
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-start relative shrink-0 w-full">
        {/* Textarea */}
        <div className="content-stretch flex flex-col gap-[8px] h-[auto] items-start justify-start relative shrink-0 w-full">
          <Textarea 
            placeholder="Ask me anything"
            className={`min-h-[60px] resize-none ${interFont.variable} font-inter`}
          />
        </div>
        
        {/* Bottom controls */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {/* Switch */}
          <div className="flex items-center gap-[12px]">
            <Switch />
            <div className={`${interFont.variable} font-inter font-medium text-[14px] text-zinc-900`}>
              <p className="leading-none">Mute this thread</p>
            </div>
          </div>
          
          {/* Send button */}
          <Button className="bg-zinc-900 hover:bg-zinc-800 text-neutral-50 h-[36px] px-[16px] py-[8px]">
            <span className={`${interFont.variable} font-inter font-medium text-[14px] leading-[20px]`}>
              Send
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
