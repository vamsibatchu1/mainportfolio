'use client';

import React, { useState, useMemo } from 'react';
import { ArrowUp } from 'lucide-react';
import { kodeMonoFont } from '@/app/fonts';
import type { ChatMessage } from './ChatArea';

// Initial prompt suggestions
const INITIAL_SUGGESTIONS = [
  "WHAT'S YOUR DESIGN PROCESS?",
  "TELL ME ABOUT YOUR BEST PROJECT",
  "HOW DO YOU APPROACH UX CHALLENGES?",
  "WHAT TOOLS DO YOU USE DAILY?",
];

// Follow-up suggestions based on conversation topics
const FOLLOW_UP_SUGGESTIONS = {
  design: [
    "SHOW ME YOUR DESIGN PHILOSOPHY",
    "WHAT INSPIRES YOUR CREATIVITY?",
    "ANY RECENT DESIGN CHALLENGES?",
    "FAVORITE DESIGN RESOURCES?"
  ],
  work: [
    "WHAT'S YOUR TYPICAL WORKDAY LIKE?",
    "TELL ME ABOUT YOUR TEAM",
    "CURRENT PROJECTS YOU'RE WORKING ON?",
    "CAREER GROWTH ASPIRATIONS?"
  ],
  process: [
    "HOW DO YOU HANDLE FEEDBACK?",
    "YOUR FAVORITE DESIGN TOOLS?",
    "RESEARCH METHODS YOU USE?",
    "COLLABORATION WITH DEVELOPERS?"
  ],
  ai: [
    "AI TOOLS YOU RECOMMEND?",
    "FUTURE OF AI IN DESIGN?",
    "HOW AI CHANGED YOUR WORKFLOW?",
    "CONCERNS ABOUT AI IN DESIGN?"
  ],
  advice: [
    "PORTFOLIO TIPS FOR BEGINNERS?",
    "SKILLS TO FOCUS ON IN 2024?",
    "COMMON DESIGN MISTAKES?",
    "HOW TO GET FIRST DESIGN JOB?"
  ],
  personal: [
    "WHAT MOTIVATES YOU DAILY?",
    "WORK-LIFE BALANCE TIPS?",
    "HOBBIES OUTSIDE OF DESIGN?",
    "BOOKS THAT INFLUENCED YOU?"
  ]
};

interface PromptSectionProps {
  onPromptSubmit?: (prompt: string) => void;
  messages?: ChatMessage[];
}

export const PromptSection: React.FC<PromptSectionProps> = ({
  onPromptSubmit,
  messages = [],
}) => {
  const [inputValue, setInputValue] = useState('');

  // Generate dynamic suggestions based on conversation context
  const currentSuggestions = useMemo(() => {
    if (messages.length === 0) {
      return INITIAL_SUGGESTIONS;
    }

    // Analyze recent messages to determine context
    const recentMessages = messages.slice(-4); // Look at last 4 messages
    const conversationText = recentMessages
      .map(msg => typeof msg.content === 'string' ? msg.content : msg.content?.text || '')
      .join(' ')
      .toLowerCase();

    // Determine context based on keywords
    if (conversationText.includes('ai') || conversationText.includes('artificial')) {
      return FOLLOW_UP_SUGGESTIONS.ai;
    } else if (conversationText.includes('work') || conversationText.includes('job') || conversationText.includes('career')) {
      return FOLLOW_UP_SUGGESTIONS.work;
    } else if (conversationText.includes('process') || conversationText.includes('method') || conversationText.includes('approach')) {
      return FOLLOW_UP_SUGGESTIONS.process;
    } else if (conversationText.includes('advice') || conversationText.includes('tip') || conversationText.includes('beginner')) {
      return FOLLOW_UP_SUGGESTIONS.advice;
    } else if (conversationText.includes('design') || conversationText.includes('ux') || conversationText.includes('ui')) {
      return FOLLOW_UP_SUGGESTIONS.design;
    } else if (conversationText.includes('personal') || conversationText.includes('motivate') || conversationText.includes('inspire')) {
      return FOLLOW_UP_SUGGESTIONS.personal;
    }

    // Default to design-related suggestions if no specific context
    return FOLLOW_UP_SUGGESTIONS.design;
  }, [messages]);

  const handleSuggestionClick = (suggestion: string) => {
    // Directly submit the suggestion without setting it in the input field
    if (onPromptSubmit) {
      onPromptSubmit(suggestion);
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() && onPromptSubmit) {
      onPromptSubmit(inputValue.trim());
      setInputValue('');
    }
  };



  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-4 items-end justify-end p-0 relative w-full">
        {/* Prompt Suggestions */}
        <div className="relative shrink-0 w-full">
          <div className="overflow-x-auto overflow-y-hidden">
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-max">
              {currentSuggestions.map((suggestion: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-[#f7f7f7] h-12 min-w-[120px] relative rounded-[16px] border border-[#F3F3F3] shrink-0 hover:bg-[#efefef] transition-colors"
                >
                  <div className="flex flex-col justify-center min-w-inherit relative size-full">
                    <div className="box-border content-stretch flex flex-col h-8 items-start justify-center min-w-inherit p-[16px] relative">
                      <div className="relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
                          <div className={`flex flex-col ${kodeMonoFont.variable} font-kodemono font-semibold justify-center leading-[0] relative shrink-0 text-[#222222] text-[14px] text-left text-nowrap`}>
                            <p className="block leading-[normal] whitespace-pre">
                              {suggestion}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Prompt Composer */}
        <div className="bg-[#ffffff] h-[120px] relative rounded-[20px] shrink-0 w-full">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-row items-start justify-between overflow-clip pl-4 pr-4 py-4 relative size-full">
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row justify-between p-0 relative w-full">
                  <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative flex-1 text-[14px] text-left mr-4">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSubmit();
                        }
                      }}
                      
                      className="block leading-[20px] w-full bg-transparent border-none outline-none resize-none font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium text-[16px] text-[#000000] placeholder:text-[#9d9d9d] h-[88px]"
                      rows={1}
                    />
                  </div>
                  <div className="relative rounded-[50px] shrink-0 size-10">
                    <div className="flex flex-col items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-col items-center justify-center p-[8px] relative size-10">
                        <button
                          onClick={handleSubmit}
                          className="relative shrink-0 size-5 flex items-center justify-center"
                        >
                          <ArrowUp size={20} className="text-[#111111]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
      </div>
    </div>
  );
}; 