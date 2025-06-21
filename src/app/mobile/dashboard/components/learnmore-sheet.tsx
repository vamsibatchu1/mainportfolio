'use client';

import React, { useRef, useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

interface LearnMoreSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LearnMoreSheet: React.FC<LearnMoreSheetProps> = ({ isOpen, onClose }) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCurrentY(0);
    }
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaY = e.touches[0].clientY - startY;
    
    // Only allow downward drag
    if (deltaY > 0) {
      setCurrentY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    // If dragged down more than 100px, close the sheet
    if (currentY > 100) {
      onClose();
    } else {
      // Snap back to original position
      setCurrentY(0);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300 flex justify-center">
        <div 
          ref={sheetRef}
          className="bg-[#2a2a2a] rounded-t-3xl mx-3 w-full max-w-[calc(393px-24px)] sm:w-[calc(393px-24px)] transition-transform duration-300 ease-out"
          style={{ 
            transform: `translateY(${currentY}px)`,
            opacity: isDragging ? Math.max(0.3, 1 - currentY / 300) : 1
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Handle bar */}
          <div className="flex justify-center pt-3 pb-6">
            <div className="w-12 h-1 bg-gray-500 rounded-full" />
          </div>
          
          {/* Content */}
          <div className="px-6 pb-8">
            {/* Warning Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center mb-4">
              <h2 className="font-jakarta font-semibold text-white text-[24px] leading-[28px]">
                Easy PIN
              </h2>
            </div>
            
            {/* Message */}
            <div className="text-center mb-8">
              <p className="font-jakarta font-medium text-gray-300 text-[16px] leading-[22px]">
                Are you sure you want to set a PIN that anyone can guess?
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col gap-3">
              {/* Primary Button - Change it */}
              <button 
                onClick={onClose}
                className="bg-white rounded-full py-4 px-6 w-full"
              >
                <span className="font-jakarta font-semibold text-[#111111] text-[16px]">
                  Change it
                </span>
              </button>
              
              {/* Secondary Button - Continue */}
              <button 
                onClick={onClose}
                className="bg-[#4a4a4a] rounded-full py-4 px-6 w-full"
              >
                <span className="font-jakarta font-medium text-white text-[16px]">
                  Continue
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 