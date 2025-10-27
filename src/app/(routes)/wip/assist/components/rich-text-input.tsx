'use client';

import React, { useState, useRef, useEffect } from 'react';
import { interFont } from '@/app/fonts';
import { SlashChip } from './slash-chip';

interface RichTextInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  placeholder?: string;
  className?: string;
  chips?: Array<{ id: string; command: string }>;
  onChipRemove?: (chipId: string) => void;
}

export function RichTextInput({ 
  value, 
  onChange, 
  onKeyPress, 
  placeholder = "Ask anything to the portfolio assist",
  className = '',
  chips = [],
  onChipRemove
}: RichTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle text input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  // Handle key press events
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle backspace to remove chips
    if (e.key === 'Backspace' && value === '' && chips.length > 0) {
      e.preventDefault();
      const lastChip = chips[chips.length - 1];
      if (onChipRemove) {
        onChipRemove(lastChip.id);
      }
      return;
    }
    
    onKeyPress(e);
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <div 
      ref={containerRef}
      className={`relative min-h-[120px] ${className}`}
      onClick={() => textareaRef.current?.focus()}
    >
      {/* Chips Container */}
      {chips.length > 0 && (
        <div className="flex flex-wrap gap-[6px] p-[15px] pb-[8px]">
          {chips.map((chip) => (
            <SlashChip
              key={chip.id}
              command={chip.command}
              onRemove={() => onChipRemove?.(chip.id)}
            />
          ))}
        </div>
      )}
      
      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={chips.length > 0 ? "" : placeholder}
        className={`${interFont.className} font-normal leading-[25px] min-h-[120px] w-full overflow-hidden resize-none border-none outline-none bg-transparent placeholder:text-muted-foreground text-[17.5px] text-foreground px-[15px] py-[15px] ${
          chips.length > 0 ? 'pt-[8px]' : 'pt-[15px]'
        }`}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          outline: 'none',
          boxShadow: 'none',
          border: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none'
        }}
        rows={4}
      />
    </div>
  );
}
