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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white w-full px-6 pb-4">
      <div className="flex flex-col gap-3 items-end justify-start w-full">
        {/* Prompt Suggestions */}
        <div className="w-full overflow-x-auto">
          <div className="flex flex-row gap-3 items-center justify-start min-w-max">
            {PROMPT_SUGGESTIONS.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="bg-[#f7f7f7] h-8 min-w-[120px] rounded-[20px] shrink-0 hover:bg-[#efefef] transition-colors"
              >
                <div className="flex flex-col justify-center min-w-inherit h-full">
                  <div className="flex flex-col h-8 items-start justify-center min-w-inherit px-4">
                    <div className="font-jakarta font-medium text-[#111111] text-[14px] text-left text-nowrap leading-normal whitespace-pre">
                      {suggestion}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Composer */}
        <div className="bg-[#ffffff] h-16 rounded-[60px] w-full relative border border-[#e1e1e1]">
          <div className="flex flex-row items-center h-full">
            <div className="flex flex-row h-16 items-center justify-between pl-6 pr-4 py-4 w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything"
                className="font-jakarta font-medium text-[14px] text-[#111111] placeholder:text-[#9d9d9d] leading-[20px] bg-transparent border-none outline-none flex-1"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#f7f7f7] rounded-[50px] w-10 h-10 flex items-center justify-center hover:bg-[#efefef] transition-colors"
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