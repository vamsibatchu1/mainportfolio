'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Palette,
  UserCircle2,
  FlaskConical,
  Home
} from 'lucide-react'

// Import new content components
import WorkContent from './views/work_content';
import HomeContent from './views/home_content';
import WritingContent from './views/writing_content';
import AboutContent from './views/about_content';
import ExperimentsContent from './views/experiments_content';
import { ExpandableTabs } from './components/expandable-tabs';

type Mode = 'home' | 'work' | 'writing' | 'about' | 'experiments'

const spring = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 20,
  duration: 0.3,
}

function DefaultDemo({ onTabChange }: { onTabChange: (mode: Mode) => void }) {
  const tabs = [
    { title: "Home", icon: Home },
    { title: "Work", icon: Palette },
    { type: "separator" as const },
    { title: "Writing", icon: Code2 },
    { title: "About", icon: UserCircle2 },
    { title: "Experiments", icon: FlaskConical },
  ];

  const handleTabSelection = (index: number | null) => {
    if (index === null) return;
    
    // Map actual tab clicks to modes, accounting for separator
    let mode: Mode;
    switch (index) {
      case 0: mode = 'home'; break;
      case 1: mode = 'work'; break;
      case 3: mode = 'writing'; break;  // Skip separator at index 2
      case 4: mode = 'about'; break;
      case 5: mode = 'experiments'; break;
      default: return;
    }
    
    onTabChange(mode);
  };

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs 
        tabs={tabs} 
        activeColor="text-black" 
        onChange={handleTabSelection}
      />
    </div>
  );
}

const ContentCard = ({ mode }: { mode: Mode }) => {
  const renderContent = () => {
    switch (mode) {
      case 'work':
        return <WorkContent />;
      case 'home':
        return <HomeContent />;
      case 'writing':
        return <WritingContent />;
      case 'about':
        return <AboutContent />;
      case 'experiments':
        return <ExperimentsContent />;
      default:
        return null;
    }
  };

  return (
    <div className="shadow-box flex flex-col items-start gap-1.5 overflow-hidden w-[640px] h-auto p-4 rounded-xl bg-white">
      <motion.div
        className="shadow-box flex items-center gap-1.5 overflow-hidden rounded-xl bg-white"
        transition={spring}
      >
      <AnimatePresence mode="wait">
        {renderContent()}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Page = () => {
  const [mode, setMode] = useState<Mode>('work')

  const handleTabChange = (newMode: Mode) => {
    setMode(newMode);
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-end px-4 py-10 gap-8"> 
      <ContentCard mode={mode} />
      <DefaultDemo onTabChange={handleTabChange} />
    </main>
  )
}

export default Page 