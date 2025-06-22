'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

// Configurable prompt suggestions - easy to add more in the future
const PROMPT_SUGGESTIONS = [
  "What's next for you?",
  "Favorite design trends right now?",
  "Thoughts about AI design tools?",
  "Any advice for new designers?",
  // Add more suggestions here easily
];

interface PromptSectionProps {
  onPromptSubmit?: (prompt: string) => void;
}

export const PromptSection: React.FC<PromptSectionProps> = ({
  onPromptSubmit,
}) => {
  const [inputValue, setInputValue] = useState('');

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
              {PROMPT_SUGGESTIONS.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-[#f7f7f7] h-12 min-w-[120px] relative rounded-[32px] shrink-0 hover:bg-[#efefef] transition-colors"
                >
                  <div className="flex flex-col justify-center min-w-inherit relative size-full">
                    <div className="box-border content-stretch flex flex-col h-8 items-start justify-center min-w-inherit p-[16px] relative">
                      <div className="relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
                          <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
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
            <div className="box-border content-stretch flex flex-row items-start justify-between overflow-clip pl-6 pr-4 py-4 relative size-full">
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
                      placeholder="What would you like to know?"
                      className="block leading-[20px] w-full bg-transparent border-none outline-none resize-none font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium text-[16px] text-[#000000] placeholder:text-[#9d9d9d] h-[88px]"
                      rows={1}
                    />
                  </div>
                  <div className="bg-[#000000] relative rounded-[50px] shrink-0 size-10">
                    <div className="flex flex-col items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-col items-center justify-center p-[8px] relative size-10">
                        <button
                          onClick={handleSubmit}
                          className="relative shrink-0 size-5 flex items-center justify-center"
                        >
                          <Send size={20} className="text-white" />
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