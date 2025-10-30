'use client';

import React from 'react';
import { AssistSidebar } from './assist/components/assistsidebar';
import CorePage from './core/page';

// Force this page to be dynamic
export const dynamic = 'force-dynamic';

export default function WipAssistPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden fixed inset-0">
      {/* Main Layout - Flex Row */}
      <div className="relative z-10 flex flex-row h-full w-full">
        {/* Main Window - 65% width */}
        <div className="w-[70%] h-full bg-white overflow-y-auto">
          <CorePage />
        </div>

        {/* Right Column with Background Image - 30% width */}
        <div className="w-[30%] h-full relative flex items-end justify-center min-h-[600px]">
          {/* Background Image for right column only */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/wip/landing-bg.png"
              alt="Landing background"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Assist Sidebar - Stuck to bottom */}
          <AssistSidebar className="z-20 relative" />
        </div>
      </div>
    </div>
  );
}
