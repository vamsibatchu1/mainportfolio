'use client';

import React from 'react';
import LeftColumn from './left-column';
import RightColumn from './right-column';

export default function LayoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-[1600px]">
        <div className="flex flex-row">
          {/* Left Column - 600px width, black background */}
          <div className="w-[480px] h-screen bg-black p-[40px]">
            <LeftColumn />
          </div>
          
          {/* Right Column - 1000px width, white background */}
          <div className="w-[1000px] bg-white p-[40px]">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
} 