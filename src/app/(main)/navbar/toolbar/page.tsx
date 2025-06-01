'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Code2,
  Palette,
  UserCircle2,
  FlaskConical,
  Home,
  X
} from 'lucide-react'

// Import new content components
import WorkContent from './views/work_content';
import HomeContent from './views/home_content';
import WritingContent from './views/writing_content';
import AboutContent from './views/about_content';
import ExperimentsContent from './views/experiments_content';
import { ExpandableTabs } from './components/expandable-tabs';
import { useSound } from '@/hooks/use-sound';

type Mode = 'home' | 'work' | 'writing' | 'about' | 'experiments'

function DefaultDemo({ onTabChange }: { onTabChange: (mode: Mode) => void }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Start with Home selected
  const { playSound } = useSound();

  const tabs = [
    { title: "Home", icon: Home },
    { title: "Work", icon: Palette },
    { title: "Writing", icon: Code2 },
    { title: "About", icon: UserCircle2 },
    { title: "Experiments", icon: FlaskConical },
  ];

  const handleTabSelection = (index: number | null) => {
    if (index === null) return;
    
    // Play tab navigation sound
    playSound('tab-nav');
    
    setActiveIndex(index);
    
    // Map actual tab clicks to modes
    let mode: Mode;
    switch (index) {
      case 0: mode = 'home'; break;
      case 1: mode = 'work'; break;
      case 2: mode = 'writing'; break;
      case 3: mode = 'about'; break;
      case 4: mode = 'experiments'; break;
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
        selectedIndex={activeIndex}
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
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ y: 60, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -60, opacity: 0, scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.4
        }}
        className="shadow-box flex flex-col items-start gap-1.5 overflow-hidden w-[640px] h-auto p-2 rounded-xl"
      >
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

const Page = ({ onDismiss }: { onDismiss: () => void }) => {
  const [mode, setMode] = useState<Mode>('home')
  const { playSound } = useSound();

  const handleTabChange = (newMode: Mode) => {
    setMode(newMode);
  };

  const handleDismiss = () => {
    playSound('tab-close'); // Play close sound
    onDismiss();
  };

  return (
    <div className="relative flex flex-col items-center justify-end gap-4 w-full px-4 pb-10"> 
      <ContentCard mode={mode} />
      <div className="flex items-end gap-2">
        <DefaultDemo onTabChange={handleTabChange} />
        <button
          onClick={handleDismiss}
          className="p-2.5 bg-[#27272A] rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          aria-label="Close toolbar"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

export default Page 