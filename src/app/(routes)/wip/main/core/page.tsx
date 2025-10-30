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

type TabType = 'home' | 'about' | 'highlights' | 'work' | 'writing' | 'play';

const tabComponents = {
  home: HomePage,
  about: AboutPage,
  highlights: HighlightsPage,
  work: WorkPage,
  writing: WritingPage,
  play: PlayPage,
};

export default function CorePage() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const ActiveComponent = tabComponents[activeTab];

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
    <div className="h-full w-full flex flex-col overflow-hidden">
      {/* Use the navbar component */}
      <div className="flex-shrink-0 px-6">
        <MainNav 
          onTabChange={handleTabChange}
          activeTab={activeTab}
          tabs={navTabs}
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <ActiveComponent key={activeTab} />
        </AnimatePresence>
      </div>
    </div>
  );
}
