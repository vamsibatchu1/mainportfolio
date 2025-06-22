'use client';

import React from 'react';
import { jakartaFont } from '@/app/fonts';
import { Header, PromptSection } from './components';
import { BottomNavigation } from '../dashboard/components';

export default function PortfolioAssist() {
  const handlePromptSelect = (prompt: string) => {
    console.log('Selected prompt:', prompt);
    // Handle prompt selection logic here
  };

  const handlePromptSubmit = (prompt: string) => {
    console.log('Submitted prompt:', prompt);
    // Handle prompt submission logic here
  };

  return (
    <div className={`bg-gray-100 min-h-screen sm:flex sm:items-center sm:justify-center ${jakartaFont.variable}`}>
      {/* Mobile Container - Full width on mobile, capped at 393px on 600px+ screens */}
      <div className="bg-white relative w-full sm:w-[393px] sm:max-w-[393px] h-screen max-h-screen overflow-hidden flex flex-col">
        
        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto w-full">
          <div className="relative w-full h-full">
            <div className="flex flex-col gap-10 items-start justify-start pb-6 pt-6 relative w-full">
              
              {/* Header Section */}
              <Header />
              
              {/* Chat Area Content - To be added */}
              <div className="w-full px-6 flex-1">
                <div className="text-center text-gray-500">
                  Chat area will be added here
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Prompt Section - Sticky above bottom nav */}
        <PromptSection 
          onPromptSelect={handlePromptSelect}
          onPromptSubmit={handlePromptSubmit}
        />
        
        {/* Bottom Navigation - Sticky */}
        <BottomNavigation />
      </div>
    </div>
  );
} 