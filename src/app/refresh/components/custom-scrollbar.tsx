'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Hand } from 'lucide-react';
import { fourFont } from '../../fonts';

interface CustomScrollbarProps {
  onScrollChange: (progress: number) => void;
}

export function CustomScrollbar({ onScrollChange }: CustomScrollbarProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollbarRef.current) return;

      const rect = scrollbarRef.current.getBoundingClientRect();
      const scrollbarWidth = rect.width;
      const mouseX = e.clientX - rect.left;
      
      const progress = Math.max(0, Math.min(1, mouseX / scrollbarWidth));
      setScrollProgress(progress);
      onScrollChange(progress);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onScrollChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleScrollbarClick = (e: React.MouseEvent) => {
    if (!scrollbarRef.current) return;
    
    const rect = scrollbarRef.current.getBoundingClientRect();
    const scrollbarWidth = rect.width;
    const mouseX = e.clientX - rect.left;
    
    const progress = Math.max(0, Math.min(1, mouseX / scrollbarWidth));
    setScrollProgress(progress);
    onScrollChange(progress);
  };

  return (
        <div className="flex flex-row items-center gap-2">
      <Hand className="w-4 h-4 text-white opacity-60" />
      <div className={`${fourFont.className} text-white text-xs opacity-60`}>Drag to scroll</div>
      <div 
        ref={scrollbarRef}
        className="relative w-64 h-2 bg-[#565656] rounded-full cursor-pointer"
        onClick={handleScrollbarClick}
      >
        <div 
          className="absolute w-8 h-2 bg-white rounded-full transition-all duration-150 ease-out cursor-grab active:cursor-grabbing"
          style={{
            left: `${scrollProgress * 224}px`, // 224px = 256px (w-64) - 32px (thumb width)
            transform: isDragging ? 'scale(1.2)' : 'scale(1)'
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
} 