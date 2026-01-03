'use client';

import React from 'react';
import { MousePointerClick } from 'lucide-react';

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
      <div className="flex items-center gap-[10px] md:gap-[13.454px] px-[18px] md:px-[24px] py-[16px] md:py-[20.182px] w-full">
        {/* Play Icon */}
        <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex-shrink-0 flex items-center justify-center">
          <MousePointerClick className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>

        {/* Main Text */}
        <p className="flex-1 text-white text-[18px] md:text-[23.545px] font-normal leading-[26px] md:leading-[33.636px] whitespace-nowrap font-jakarta">
          Tap to begin
        </p>

        {/* Keyboard Shortcut */}
        <p className="text-[#b0b0b0] text-[16px] md:text-[20.182px] font-normal leading-[22px] md:leading-[26.909px] whitespace-nowrap flex-shrink-0 font-jakarta">
          ⌘
        </p>
      </div>
    </button>
  );
}
