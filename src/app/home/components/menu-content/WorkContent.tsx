"use client";

import React from 'react';
import type { MenuContentProps } from './types';
// Removed font imports (louize, inter)

// Removed workItems array

export function WorkContent({ /* isActive, onClose */ }: MenuContentProps) { 
  return (
    <div className="p-6 h-full flex items-center justify-center"> 
      {/* Horizontal row of 4 Project Placeholders */}
      <div className="flex w-full justify-center items-center gap-4 h-full max-h-[150px]"> {/* Adjust max-h as needed */} 
        {/* Placeholder 1 */}
        <div className="w-1/4 aspect-square bg-gray-200 rounded-lg transition-all duration-300 hover:bg-gray-300"></div>
        {/* Placeholder 2 */}
        <div className="w-1/4 aspect-square bg-gray-200 rounded-lg transition-all duration-300 hover:bg-gray-300"></div>
        {/* Placeholder 3 */}
        <div className="w-1/4 aspect-square bg-gray-200 rounded-lg transition-all duration-300 hover:bg-gray-300"></div>
        {/* Placeholder 4 */}
        <div className="w-1/4 aspect-square bg-gray-200 rounded-lg transition-all duration-300 hover:bg-gray-300"></div>
      </div>
    </div>
  );
} 