'use client';

import React, { useState, useEffect, useRef } from 'react';
import { priFont, triFont } from '@/lib/config/fonts';

// --- Grid Configuration ---
const GRID_WIDTH = 25;
const GRID_HEIGHT = 22;
const PIXEL_SIZE_PX = 16;
const TOTAL_PIXELS = GRID_WIDTH * GRID_HEIGHT; // 550

// --- Brand Colors (from Design System) ---
const brandColors = {
  zenith: "#FBAF1D",
  nebula: "#E29FC8",
  juniper: "#4F7834",
  breeze: "#90D9E0",
  paprika: "#F25A3F",
  white: "#FFFFFF", // Keep white for potential future use if needed
  black: "#000000", // Keep black
};
// Type helper for color names
// type BrandColorName = keyof typeof brandColors; // Removed unused type

// --- Animation Configuration ---
const PIXEL_STAGGER_DELAY = 5; // Faster stagger for full grid animation


// --- WorkCard Component ---
interface WorkCardProps {
  title: string;
  subtitle: string;
  gridColor: string; // Expecting one of the hex codes from brandColors
  className?: string;
}

export function WorkCard({ 
  title, 
  subtitle, 
  gridColor,
  className = '' 
}: WorkCardProps) {

  const [isHovered, setIsHovered] = useState(false);
  const [pixelColors, setPixelColors] = useState<string[]>(() => 
    Array(TOTAL_PIXELS).fill(gridColor)
  );
  // Ref to store animation timers for cleanup
  const animationTimers = useRef<NodeJS.Timeout[]>([]);

  // --- Get Alternate Colors --- 
  // Memoize this calculation so it only runs when gridColor changes
  const alternateColors = React.useMemo(() => {
      return Object.values(brandColors).filter(
          color => color !== gridColor && color !== brandColors.white && color !== brandColors.black
      );
  }, [gridColor]);

  // --- Cleanup Function --- 
  const cleanupTimers = () => {
    animationTimers.current.forEach(clearTimeout);
    animationTimers.current = [];
  };

  // Effect to reset grid when gridColor prop changes
  useEffect(() => {
    cleanupTimers();
    setPixelColors(Array(TOTAL_PIXELS).fill(gridColor));
    // Ensure hover state doesn't persist animations with old color logic
    if (isHovered) {
        setIsHovered(false);
    }
  }, [gridColor]);

  // --- Animation Logic --- 
  useEffect(() => {
    cleanupTimers(); // Clear previous timers

    if (isHovered && alternateColors.length > 0) {
      // Animate IN: Fill grid with random alternate colors
      for (let i = 0; i < TOTAL_PIXELS; i++) {
        const timer = setTimeout(() => {
          setPixelColors(prevGrid => {
            const newGrid = [...prevGrid];
            const randomAltColor = alternateColors[Math.floor(Math.random() * alternateColors.length)];
            newGrid[i] = randomAltColor;
            return newGrid;
          });
        }, i * PIXEL_STAGGER_DELAY); // Stagger based on pixel index
        animationTimers.current.push(timer);
      }
    } else {
      // Animate OUT / Initial State: Reset to base gridColor
      // Check if it's already the base color to avoid unnecessary re-renders
      if (pixelColors[0] !== gridColor) {
           setPixelColors(Array(TOTAL_PIXELS).fill(gridColor));
      }
    }

    // Cleanup function for when effect re-runs or component unmounts
    return cleanupTimers;

  }, [isHovered, gridColor, alternateColors]); // Dependencies


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    // Overall Container: Flex row, total width 1120px
    <div 
      className={`flex flex-row w-[1120px] overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Card: Text Content */}
      <div 
        className="bg-[#E5E7E0] w-[720px] h-[352px] p-12 flex flex-col justify-end"
      >
        <div className="flex flex-col gap-10"> 
          <h2 
            className={`${priFont.className} font-normal text-black leading-none tracking-tight`}
            style={{ fontSize: '64px' }}
          >
            {title}
          </h2>
          <p 
            className={`${triFont.className} font-normal text-gray-700 leading-tight`}
            style={{ fontSize: '28px' }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right Card: Pixel Grid */}
      <div
        className="grid w-[400px] h-[352px]"
        style={{
          gridTemplateColumns: `repeat(${GRID_WIDTH}, ${PIXEL_SIZE_PX}px)`,
          gridTemplateRows: `repeat(${GRID_HEIGHT}, ${PIXEL_SIZE_PX}px)`,
          gap: 0,
          backgroundColor: gridColor // Base background for gaps/initial
        }}
      >
        {pixelColors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: `${PIXEL_SIZE_PX}px`,
              height: `${PIXEL_SIZE_PX}px`,
              transition: 'background-color 0.05s ease-in', // Keep quick transition
              border: '0.5px solid #ffffff' // Keep thin white border
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkCard;