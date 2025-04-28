'use client';

import React, { useState, useEffect } from 'react';

const GRID_SIZE = 10;
const PIXEL_SIZE_PX = 16;
const TOTAL_PIXELS = GRID_SIZE * GRID_SIZE;

// --- Keyword to Pixel Art Mapping ---
// Simple example mapping. You'll need to expand this significantly
// or implement a more sophisticated generation algorithm.
// Each array represents the 100 pixels (10x10 grid).
// `true` means white, `false` means black.

const keywordPatterns: Record<string, boolean[]> = {
  "cat": [
    false,false,false,false,false,false,false,false,false,false,
    false,false,false,true ,false,false,true ,false,false,false,
    false,false,false,true ,false,false,true ,false,false,false,
    false,false,false,true ,true ,true ,true ,false,false,false,
    false,false,false,false,true ,true ,false,false,false,false,
    false,false,true ,true ,true ,true ,true ,true ,false,false,
    false,false,true ,true ,true ,true ,true ,true ,false,false,
    false,false,true ,false,true ,true ,false,true ,false,false,
    false,false,false,true ,true ,true ,true ,false,false,false,
    false,false,false,false,false,false,false,false,false,false,
  ],
  "dog": [
    false,false,false,false,false,false,false,false,false,false,
    false,true ,true ,false,false,false,true ,true ,false,false,
    false,true ,true ,true ,false,true ,true ,true ,false,false,
    false,false,true ,true ,true ,true ,true ,false,false,false,
    false,false,true ,true ,true ,true ,true ,false,false,false,
    false,false,false,true ,true ,true ,false,false,false,false,
    false,true ,true ,true ,true ,true ,true ,true ,false,false,
    false,true ,false,true ,true ,true ,false,true ,false,false,
    false,true ,true ,true ,true ,true ,true ,true ,false,false,
    false,false,false,false,false,false,false,false,false,false,
  ],
  "hi": [
    false,false,false,false,false,false,false,false,false,false,
    false,true ,false,true ,false,false,true ,true ,true ,false,
    false,true ,false,true ,false,false,false,true ,false,false,
    false,true ,true ,true ,false,false,false,true ,false,false,
    false,true ,false,true ,false,false,false,true ,false,false,
    false,true ,false,true ,false,false,true ,true ,true ,false,
    false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false,false,false,false,false,false,
  ],
  "default": Array(TOTAL_PIXELS).fill(false) // All black
};

// --- Pixel Art Page Component ---
export default function PixelArtPage() {
  const [keyword, setKeyword] = useState('');
  const [gridState, setGridState] = useState<boolean[]>(keywordPatterns["default"]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value.toLowerCase());
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const pattern = keywordPatterns[keyword] || keywordPatterns["default"];
      setGridState(pattern);
    }
  };

  // Reset grid if input is cleared
  useEffect(() => {
    if (keyword === '') {
      setGridState(keywordPatterns["default"]);
    }
  }, [keyword]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-white mb-8">Pixel Art Generator</h1>
      
      {/* Input Field */}
      <div className="mb-8">
        <input 
          type="text"
          value={keyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter keyword (e.g., cat, dog, hi)"
          className="px-4 py-2 w-80 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xs text-gray-500 mt-1 text-center">Press Enter to generate</p>
      </div>

      {/* Pixel Grid */}
      <div
        className="grid border border-gray-700"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${PIXEL_SIZE_PX}px)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, ${PIXEL_SIZE_PX}px)`,
          width: `${GRID_SIZE * PIXEL_SIZE_PX}px`,
          height: `${GRID_SIZE * PIXEL_SIZE_PX}px`,
          backgroundColor: 'black' // Ensure background is black
        }}
      >
        {gridState.map((isWhite, index) => (
          <div
            key={index}
            style={{
              backgroundColor: isWhite ? 'white' : 'black',
              width: `${PIXEL_SIZE_PX}px`,
              height: `${PIXEL_SIZE_PX}px`,
              // Optional: add a faint border for visual separation
              // border: '1px solid rgba(255, 255, 255, 0.05)' 
            }}
          />
        ))}
      </div>
    </div>
  );
} 