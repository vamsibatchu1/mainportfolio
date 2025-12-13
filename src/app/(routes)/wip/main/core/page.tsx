'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MainNav } from './nav/navbar';
import HomePage from './home/page';
import AboutPage from './about/page';
import HighlightsPage from './highlights/page';
import WorkPage from './work/page';
import WritingPage from './writing/page';
import PlayPage from './play/page';
import MobilePage from './mobile/page';
import { useContainerScale } from '@/hooks/use-container-scale';

type TabType = 'home' | 'about' | 'highlights' | 'work' | 'writing' | 'play' | 'mobile';

const tabComponents = {
  home: HomePage,
  about: AboutPage,
  highlights: HighlightsPage,
  work: WorkPage,
  writing: WritingPage,
  play: PlayPage,
  mobile: MobilePage,
};

export default function CorePage() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const ActiveComponent = tabComponents[activeTab];
  const { scale, containerRef } = useContainerScale();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Debug: Log scale value
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[CorePage] Current scale:', scale);
    }
  }, [scale]);

  // Reset scroll position when tab changes
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as TabType);
  };

  const navTabs = [
    { title: "Home", path: "/home" },
    { title: "About", path: "/about" },
    { title: "Highlights", path: "/highlights" },
    { title: "Work", path: "/work" },
    { title: "Writing", path: "/writing" },
    { title: "Play", path: "/play" },
  ];

  return (
    <div 
      ref={containerRef}
      className="h-full w-full flex flex-col overflow-hidden px-[64px]"
    >
      {/* Use the navbar component */}
      <div className="flex-shrink-0">
        <MainNav 
          onTabChange={handleTabChange}
          activeTab={activeTab}
          tabs={navTabs}
        />
      </div>

      {/* Content Area - Scaled */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden relative hide-scrollbar">
        <div 
          id="scaled-content-container"
          style={{ 
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            width: scale !== 1 ? `${100 / scale}%` : '100%',
            position: 'relative',
          } as React.CSSProperties}
        >
          <AnimatePresence mode="wait">
            <ActiveComponent key={activeTab} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
