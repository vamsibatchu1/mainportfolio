'use client';

import React, { useState } from 'react';
import { secFont, triFont, priFont } from '@/lib/config/fonts';

// Removed unused imports: useEffect, useRef, priFont, fourFont

// Removed old grid/color constants

// --- Accent Colors (Subset of Brand Colors) ---
const accentColors = [
  "#FBAF1D", // Zenith
  "#E29FC8", // Nebula
  "#4F7834", // Juniper
  "#90D9E0", // Breeze
  "#F25A3F"  // Paprika
];
const brandColors = { // Define full object for white color access
  white: "#FFFFFF",
  zenith: accentColors[0],
  nebula: accentColors[1],
  juniper: accentColors[2],
  breeze: accentColors[3],
  paprika: accentColors[4],
};

// --- Card 1 Pixel Grid Config ---
const CARD1_GRID_WIDTH = 33;
const CARD1_GRID_HEIGHT = 10;
const CARD1_PIXEL_SIZE = 8;
const CARD1_TOTAL_PIXELS = CARD1_GRID_WIDTH * CARD1_GRID_HEIGHT;
const CARD1_WHITE_PIXEL_COUNT = 20;
const CARD1_PIXEL_GAP = '2px';

// Helper to generate a grid with a base color and N random white pixels
const generateBaseGridWithWhiteAccents = (
  baseColor: string, 
  totalPixels: number, 
  whitePixelCount: number, 
  whiteColor: string
): string[] => {
  const grid = Array(totalPixels).fill(baseColor);
  const whiteIndices = new Set<number>();
  while (whiteIndices.size < whitePixelCount && whiteIndices.size < totalPixels) {
    const randomIndex = Math.floor(Math.random() * totalPixels);
    whiteIndices.add(randomIndex);
  }
  whiteIndices.forEach(index => { grid[index] = whiteColor; });
  return grid;
};

// --- PixelGrid Component --- Restored fixed height calc
interface PixelGridProps {
  id?: string;
  pixelColors: string[];
  gridWidth: number;
  gridHeight: number;
  pixelSize: number;
  gap: string;
  className?: string;
}
const PixelGrid: React.FC<PixelGridProps> = ({ 
  id,
  pixelColors,
  gridWidth,
  gridHeight,
  pixelSize,
  gap,
  className = ''
}) => {
  const gapValue = parseInt(gap) || 0;
  return (
    <div 
      id={id}
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${gridWidth}, ${pixelSize}px)`,
        gridTemplateRows: `repeat(${gridHeight}, ${pixelSize}px)`,
        width: `${gridWidth * pixelSize + (gridWidth > 0 ? gridWidth - 1 : 0) * gapValue}px`, 
        height: `${gridHeight * pixelSize + (gridHeight > 0 ? gridHeight - 1 : 0) * gapValue}px`,
        gap: gap, 
      }}
    >
      {pixelColors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: `${pixelSize}px`,
            height: `${pixelSize}px`
          }}
        />
      ))}
    </div>
  );
};

// --- WorkCard Component --- 
interface WorkCardProps {
  className?: string;
}

export function WorkCard({ className = '' }: WorkCardProps) {

  // Removed old state, refs, effects, and handlers

  // State for Card 1's pixel grid colors - uses reverted TOTAL_PIXELS
  const [card1GridColors] = useState<string[]>(() => 
    generateBaseGridWithWhiteAccents(
      brandColors.juniper, 
      CARD1_TOTAL_PIXELS, 
      CARD1_WHITE_PIXEL_COUNT, 
      brandColors.white
    )
  );

  return (
    // Overall Container: 3 columns, 1248px wide, 600px high
    <div 
      className={`flex flex-row w-[1248px] h-[600px] gap-6 ${className}`}
    >
      {/* Card 1 */}
      <div 
        className="bg-[#F9FFF3] w-[400px] h-[600px] p-8 flex flex-col justify-between"
      >
        {/* Row 1: Title */}
        <h2 className={`${secFont.className} text-5xl text-neutral-800`}> 
          Redesigning a billpay system for 2.3 million users
        </h2>
        
        {/* Nested Group for Subtitle and Grid */}
        <div className="flex flex-col gap-6"> {/* New grouping div with gap */} 
          {/* Row 2: Subtitle */}
          <p className={`${triFont.className} text-lg text-neutral-600`}>
            With more types of work happening on Slack, teams becoming larger, and new features like Canvas expanding what Slack can do, our UI was becoming congested.
          </p>
          
          {/* Row 3: Pixel Grid - Removed self-center */}
          <div> 
             <PixelGrid
              id="card1-pixelgrid"
              pixelColors={card1GridColors}
              gridWidth={CARD1_GRID_WIDTH} 
              gridHeight={CARD1_GRID_HEIGHT} 
              pixelSize={CARD1_PIXEL_SIZE}
              gap={CARD1_PIXEL_GAP}
            />
          </div>
        </div> {/* End of nested group */} 
      </div>

      {/* Card 2 */}
      <div 
        className="bg-[#F9FFF3] w-[400px] h-[600px] p-8 flex flex-col justify-start gap-6"
      >
        {/* Row 1: Image Placeholder - Updated background color */}
        <div 
          className="w-full h-[250px] rounded-lg flex items-center justify-center text-neutral-500"
          style={{ backgroundColor: '#E8EDE3' }} // Use inline style for custom color
        >
        </div>

        {/* Row 2: Flex Row with 2 Columns */}
        <div className="flex flex-row items-top gap-0">
          <div className="w-1/3 text-neutral-800 text-3xl font-semibold">22%</div>
          <div className="w-2/3 text-neutral-600 text-sm">The increase in user satisfaction after the new billpay system was launched.</div>
        </div>

        {/* Row 3: Flex Row with 2 Columns */}
        <div className="flex flex-row items-top gap-0">
          <div className="w-1/3 text-neutral-800 text-3xl font-semibold">10x</div>
          <div className="w-2/3 text-neutral-600 text-sm">The increase in user satisfaction after the new billpay system was launched.</div>
        </div>

        {/* Row 4: Flex Row with 2 Columns */}
        <div className="flex flex-row items-top gap-0">
          <div className="w-1/3 text-neutral-800 text-3xl font-semibold">4.8</div>
          <div className="w-2/3 text-neutral-600 text-sm">The rating of the new billpay system app in the App Store.</div>
        </div>
      </div>

      {/* Card 3 - New Structure */}
      <div 
        className="w-[400px] h-[600px] flex flex-col gap-6" 
      >
        {/* Primary Row 1 (Height 460px) - Added Juniper background */}
        <div className="h-[460px] p-8 flex flex-col justify-between bg-[#4F7834]"> 
          {/* Content for Row 1 (e.g., Title, Subtitle) */}
          <h1 className={`${priFont.className} text-4xl text-white`}> {/* Changed text back to white */} 
The new billpay system is blazingly fast and secure making payments effortless.          </h1>
           <p className={`${triFont.className} text-lg text-white opacity-80`}> {/* Changed text back to light */} 
86% of the users have reported a better experience.           </p>
        </div>

        {/* Primary Row 2 (Height 116px) - Re-added black background */}
        <div className="h-[116px] p-8 flex flex-col justify-center bg-black"> 
          {/* Replaced button with styled paragraph */}
          <p className={`${triFont.className} text-white text-3xl cursor-pointer hover:opacity-80 transition-opacity`}> 
            Go to Casestudy &gt;
          </p>
        </div>
      </div>

    </div>
  );
}

export default WorkCard;