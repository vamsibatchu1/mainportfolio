'use client';

import React, { useState } from 'react';
import { AudioLines } from 'lucide-react';

// Configurable prompt suggestions - easy to add more in the future
const PROMPT_SUGGESTIONS = [
  "Where do you work?",
  "Thoughts about AI?",
  "Find homes near me",
  // Add more suggestions here easily
];

interface PromptSectionProps {
  onPromptSelect?: (prompt: string) => void;
  onPromptSubmit?: (prompt: string) => void;
}

export const PromptSection: React.FC<PromptSectionProps> = ({
  onPromptSelect,
  onPromptSubmit,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    if (onPromptSelect) {
      onPromptSelect(suggestion);
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() && onPromptSubmit) {
      onPromptSubmit(inputValue.trim());
      setInputValue('');
    }
  };



  return (
    <div className="bg-white w-full">
      <div className="flex flex-col gap-5 items-start justify-start w-full">
        {/* Prompt Suggestions */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-x-auto overflow-y-clip relative size-full">
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-5 py-0 relative w-full">
              {PROMPT_SUGGESTIONS.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-[#f7f7f7] h-8 min-w-[120px] relative rounded-[20px] shrink-0 hover:bg-[#efefef] transition-colors"
                >
                  <div className="flex flex-col justify-center min-w-inherit relative size-full">
                    <div className="box-border content-stretch flex flex-col h-8 items-start justify-center min-w-inherit p-[16px] relative">
                      <div className="relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
                          <div className="flex flex-col font-jakarta font-medium justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
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
        <div className="bg-[#ececec] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
          <div className="flex flex-col items-end justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-end justify-center p-[32px] relative w-full">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                placeholder="Ask me anything"
                className="font-jakarta font-medium leading-[20px] w-full relative shrink-0 text-[#111111] placeholder:text-[#525151] text-[14px] text-left bg-transparent border-none outline-none resize-none"
                rows={2}
              />
              <button
                onClick={handleSubmit}
                className="bg-[#f7f7f7] relative rounded-[50px] shrink-0 w-10 h-10 flex items-center justify-center hover:bg-[#efefef] transition-colors"
              >
                <AudioLines size={24} className="text-[#111111]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 