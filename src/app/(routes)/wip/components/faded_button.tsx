'use client';

import React from 'react';
import { Play } from 'lucide-react';

interface FadedButtonProps {
  onClick?: () => void;
  className?: string;
}

export function FadedButton({ onClick, className = '' }: FadedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-black 
        border-[3px] 
        border-solid 
        border-white 
        rounded-[96.82px] 
        w-full 
        hover:bg-gray-900 
        transition-colors duration-200
        ${className}
      `}
      data-name="Faded button"
    >
      <div className="flex items-center gap-[13.454px] px-[24px] py-[20.182px] w-full">
        {/* Play Icon */}
        <div className="w-[32px] h-[32px] flex-shrink-0 flex items-center justify-center">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>

        {/* Main Text */}
        <p className="flex-1 text-white text-[23.545px] font-normal leading-[33.636px] whitespace-nowrap font-jakarta">
          Click to begin
        </p>

        {/* Keyboard Shortcut */}
        <p className="text-[#b0b0b0] text-[20.182px] font-normal leading-[26.909px] whitespace-nowrap flex-shrink-0 font-jakarta">
          ⌘
        </p>
      </div>
    </button>
  );
}
