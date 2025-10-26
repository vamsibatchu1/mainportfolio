'use client';

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import clickAnimation from '/public/images/wip/click.json';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface FadedButtonProps {
  onClick?: () => void;
  className?: string;
}

export function FadedButton({ onClick, className = '' }: FadedButtonProps) {
  const lottieRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.stop();
    }
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        bg-[rgba(38,38,38,0.5)] 
        border border-[#e9dfd6] 
        rounded-[16.818px] 
        w-full 
        hover:bg-[rgba(38,38,38,0.7)] 
        transition-colors duration-200
        ${className}
      `}
      data-name="Faded button"
    >
      <div className="flex items-center gap-[13.454px] px-[13.455px] py-[20.182px] w-full">
        {/* Click Animation Icon */}
        <div className="w-[32px] h-[32px] flex-shrink-0">
          <Lottie
            lottieRef={lottieRef}
            animationData={clickAnimation}
            loop={false}
            autoplay={false}
            className="w-full h-full"
          />
        </div>

        {/* Main Text */}
        <p className="flex-1 text-white text-[23.545px] font-normal leading-[33.636px] whitespace-nowrap font-jakarta">
          Click to begin
        </p>

        {/* Keyboard Shortcut */}
        <p className="text-[#b0b0b0] text-[20.182px] font-normal leading-[26.909px] whitespace-nowrap flex-shrink-0 font-jakarta">
          ⌘Enter
        </p>
      </div>
    </button>
  );
}
