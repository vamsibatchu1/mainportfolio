'use client';

import React, { useState } from 'react';
import { secFont, triFont, priFont } from '@/lib/config/fonts';
import Link from 'next/link';
import Image from 'next/image';

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
  // Card 1
  title: string;
  subtitle: string;
  gridColor: string;
  // Card 2
  card2ImageSrc: string;
  card2Metrics: { value: string; description: string }[];
  // Card 3
  card3Title: string;
  card3Subtitle: string;
  card3LinkText: string;
  card3LinkHref: string;
}

export function WorkCard({ 
  className = '',
  // Card 1 props
  title,
  subtitle,
  gridColor, 
  // Card 2 props
  card2ImageSrc,
  card2Metrics,
  // Card 3 props
  card3Title,
  card3Subtitle,
  card3LinkText,
  card3LinkHref
}: WorkCardProps) {

  // Removed old state, refs, effects, and handlers

  // State for Card 1's pixel grid colors - uses gridColor prop
  const [card1GridColors] = useState<string[]>(() => 
    generateBaseGridWithWhiteAccents(
      gridColor,
      CARD1_TOTAL_PIXELS, 
      CARD1_WHITE_PIXEL_COUNT, 
      brandColors.white
    )
  );

  return (
    // Overall Container: Apply responsive classes
    <div 
      className={`flex flex-col lg:flex-row w-full h-auto lg:w-[1248px] lg:h-[600px] gap-6 ${className}`}
    >
      {/* Card 1: Apply responsive classes */}
      <div 
        className="bg-[#F9FFF3] w-full h-auto lg:w-[400px] lg:h-[600px] p-8 flex flex-col justify-between"
      >
        {/* Row 1: Title */}
        <h2 className={`${secFont.className} text-5xl text-neutral-800`}> 
          {title} 
        </h2>
        
        {/* Nested Group for Subtitle and Grid */}
        <div className="flex flex-col gap-6">
          {/* Row 2: Subtitle */}
          <p className={`${triFont.className} text-lg text-neutral-600`}>
            {subtitle}
          </p>
          
          {/* Row 3: Pixel Grid */}
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
        </div>
      </div>

      {/* Card 2: Apply responsive classes */}
      <div 
        className="bg-[#F9FFF3] w-full h-auto lg:w-[400px] lg:h-[600px] p-8 flex flex-col justify-start gap-6"
      >
        {/* Row 1: Image */}
        <div 
          className="w-full h-[250px] rounded-lg flex items-center justify-center text-neutral-500 relative overflow-hidden bg-[#E8EDE3]"
        >
          <Image 
            src={card2ImageSrc}
            alt={title || 'Case study image'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Rows 2-4: Metrics */}
        {card2Metrics.map((metric, index) => (
          <div key={index} className="flex flex-row items-start gap-0">
            <div className="w-1/3 text-neutral-800 text-3xl font-semibold">{metric.value}</div>
            <div className="w-2/3 text-neutral-600 text-sm">{metric.description}</div>
          </div>
        ))}
      </div>

      {/* Card 3: Apply responsive classes */}
      <div 
        className="w-full h-auto lg:w-[400px] lg:h-[600px] flex flex-col gap-6" 
      >
        {/* Primary Row 1: Apply responsive height */}
        <div className="h-auto lg:h-[460px] p-8 flex flex-col justify-between bg-[#4F7834]">
          {/* Content for Row 1 (e.g., Title, Subtitle) */}
          <h1 className={`${priFont.className} text-4xl text-white`}> 
            {card3Title}
          </h1>
           <p className={`${triFont.className} text-lg text-white opacity-80`}> 
            {card3Subtitle}
           </p>
        </div>

        {/* Primary Row 2: Apply responsive height */}
        <div className="h-auto lg:h-[116px] p-8 flex flex-col justify-center bg-black">
          <Link href={card3LinkHref} passHref legacyBehavior>
            <a className={`${triFont.className} text-white text-3xl cursor-pointer hover:opacity-80 transition-opacity`}> 
              {card3LinkText} &gt;
            </a>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default WorkCard;