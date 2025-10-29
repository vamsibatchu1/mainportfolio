import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Terminal } from 'lucide-react';
import { interFont } from '@/app/fonts';
import assistBrowsingAnimation from '../../../../../../../../assets/animations/assist-browsing.json';
import { animate } from "framer-motion";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// useAnimatedText hook
function useAnimatedText(text: string, delimiter: string = "") {
  const [cursor, setCursor] = useState(0);
  const [startingCursor, setStartingCursor] = useState(0);
  const [prevText, setPrevText] = useState(text);

  if (prevText !== text) {
    setPrevText(text);
    setStartingCursor(text.startsWith(prevText) ? cursor : 0);
  }

  useEffect(() => {
    const parts = text.split(delimiter);
    const duration = delimiter === "" ? 8 : // Character animation
                    delimiter === " " ? 4 : // Word animation
                    2; // Chunk animation
    
    const controls = animate(startingCursor, parts.length, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [startingCursor, text, delimiter]);

  return text.split(delimiter).slice(0, cursor).join(delimiter);
}

interface VariantCollabProps {
  content: string;
}

// Email Composition Animation Component
const EmailCompositionAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const subjectText = "Collaboration Request - Portfolio Project";
  const emailBodyText = `Hi Vamsi,

I hope this email finds you well. I came across your portfolio and was impressed by your work, particularly your recent project on [Project Name].

I'm reaching out to explore potential collaboration opportunities. I have a project that aligns well with your expertise in [Skill Area], and I believe we could create something amazing together.

Would you be interested in discussing this further? I'd love to share more details about the project and hear your thoughts.

Best regards,
[Your Name]`;

  const animatedSubject = useAnimatedText(isPlaying ? subjectText : "", "");
  const animatedBody = useAnimatedText(isPlaying ? emailBodyText : "", " ");

  useEffect(() => {
    // Start animation after 1 second
    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Natural scrolling when content reaches bottom
  useEffect(() => {
    if (isPlaying && scrollRef.current) {
      const scrollElement = scrollRef.current;
      const scrollHeight = scrollElement.scrollHeight;
      const clientHeight = scrollElement.clientHeight;
      
      // Only scroll if content exceeds visible area
      if (scrollHeight > clientHeight) {
        // Small delay to let content render first
        setTimeout(() => {
          scrollElement.scrollTop = scrollElement.scrollHeight;
        }, 100);
      }
    }
  }, [isPlaying, animatedBody]);

  return (
    <div className="w-full h-full bg-white relative flex flex-col">
      {/* Scrollable email content */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent p-3"
      >
        {/* Email Header */}
        <div className="space-y-2 mb-3">
          {/* Recipients */}
          <div className="space-y-1">
            <div className={`${interFont.className} text-xs text-gray-400`}>Recipients</div>
            <div className={`${interFont.className} text-xs text-gray-600`}>vamsi@example.com</div>
          </div>
          {/* Subject */}
          <div className="space-y-1">
            <div className={`${interFont.className} text-xs text-gray-400`}>Subject</div>
            <div className={`${interFont.className} text-xs text-gray-600`}>{animatedSubject}</div>
          </div>
        </div>
        
        {/* Email Body */}
        <div className="space-y-2">
          {/* Message content lines */}
          <div className={`text-xs text-gray-600 ${interFont.className} whitespace-pre-line`}>
            {animatedBody}
          </div>
        </div>
      </div>
    </div>
  );
};

export function VariantCollab({ content }: VariantCollabProps) {
  const [showHeader, setShowHeader] = useState(false);
  const [showTab1, setShowTab1] = useState(false);

  useEffect(() => {
    // Choreographed sequence
    const timers = [
      // Show header immediately
      setTimeout(() => setShowHeader(true), 0),
      
      // Show first tab after 1 second
      setTimeout(() => setShowTab1(true), 1000),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className={`content-stretch flex gap-[10px] items-center relative shrink-0 transition-all duration-500 ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <Lottie 
              animationData={assistBrowsingAnimation}
              loop={true}
              autoplay={true}
              style={{ width: 20, height: 20 }}
            />
          </div>
          <p className={`${interFont.className} font-normal leading-[20px] max-w-[320px] not-italic relative shrink-0 text-[16px] text-foreground whitespace-pre-wrap`}>
            Let me search that for you online
          </p>
        </div>
        
        {/* Single browser tab */}
        <div className="w-full flex justify-start">
          <div className={`bg-white border border-border border-solid box-border content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[266px] transition-all duration-500 ${showTab1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="border-b border-border border-l-0 border-r-0 border-solid border-t-0 box-border content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[10.667px]">
                <Terminal className="w-[10.667px] h-[10.667px] text-muted-foreground" />
              </div>
              <p className={`${interFont.className} font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-muted-foreground text-nowrap`}>
                Composing collaboration email
              </p>
            </div>
            <div className="bg-[#f1f1f1] border-[0px_1px_1px] border-border border-solid box-border content-stretch flex flex-col h-[160px] items-start rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full relative overflow-hidden">
              {/* Email Composition Animation */}
              <EmailCompositionAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
