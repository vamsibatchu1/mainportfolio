'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from './components/Terminal';
import { FlickeringGrid } from './components/flickerbg';
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from './components/dock';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Products',
    icon: (
      <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Components',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Activity',
    icon: (
      <Activity className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Change Log',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Terminal',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
];

function AppleStyleDock({ isTerminalMinimized, onTerminalRestore }: { isTerminalMinimized?: boolean; onTerminalRestore?: () => void }) {
  return (
    <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => {
          // Terminal item represents the terminal
          const isTerminalItem = item.title === 'Terminal';
          const isActive = isTerminalItem && isTerminalMinimized;
          const isCurrentApp = isTerminalItem && !isTerminalMinimized;
          
          return (
            <DockItem
              key={idx}
              className={`aspect-square rounded-full ${
                isCurrentApp ? 'bg-black dark:bg-white' : 
                isActive ? 'bg-gray-200 dark:bg-neutral-800 ring-2 ring-black dark:ring-white' : 
                'bg-gray-200 dark:bg-neutral-800'
              }`}
              onClick={isTerminalItem ? onTerminalRestore : undefined}
            >
              <DockLabel className="font-sf-pro">{item.title}</DockLabel>
              <DockIcon>
                <motion.div
                  animate={isActive ? { 
                    scale: [1, 1.2, 1],
                    y: [0, -10, 0]
                  } : {}}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  className={isActive ? 'cursor-pointer' : ''}
                >
                  {React.cloneElement(item.icon, {
                    className: isCurrentApp ? 'h-full w-full text-white dark:text-black' : 'h-full w-full text-neutral-600 dark:text-neutral-300'
                  })}
                </motion.div>
              </DockIcon>
            </DockItem>
          );
        })}
      </Dock>
    </div>
  );
}

export default function TerminalTestPage() {
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [dockItemPosition, setDockItemPosition] = useState({ x: 0, y: 0 });

  const handleTerminalMinimize = () => {
    setIsTerminalMinimized(true);
  };

  const handleTerminalRestore = () => {
    setIsTerminalMinimized(false);
    setIsFirstLoad(false);
  };

  // Calculate the position of the Terminal dock item
  const calculateDockItemPosition = () => {
    // Terminal is the 6th item (index 5) in the dock
    // Dock is centered, so we calculate the position
    const dockWidth = 7 * 64 + 6 * 16; // 7 items * 64px + 6 gaps * 16px
    const itemWidth = 64;
    const gap = 16;
    const terminalIndex = 5; // Terminal is at index 5
    
    // Calculate position relative to dock center
    const terminalX = (terminalIndex * (itemWidth + gap)) - (dockWidth / 2) + (itemWidth / 2);
    const terminalY = window.innerHeight - 100; // Dock is at bottom
    
    setDockItemPosition({ x: terminalX, y: terminalY });
  };

  useEffect(() => {
    calculateDockItemPosition();
    window.addEventListener('resize', calculateDockItemPosition);
    return () => window.removeEventListener('resize', calculateDockItemPosition);
  }, []);

  return (
    <div className="h-screen bg-gray-100 p-8 relative overflow-hidden">
      <FlickeringGrid 
        className="absolute inset-0"
        color="rgb(0, 0, 0)"
        maxOpacity={0.1}
        flickerChance={0.2}
      />
              <AnimatePresence>
          {!isTerminalMinimized && (
            <motion.div
                          initial={isFirstLoad ? { 
              opacity: 0, 
              x: 0
            } : { 
              opacity: 0, 
              scale: 0.3,
              y: dockItemPosition.y,
              x: dockItemPosition.x
            }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0,
                x: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.1,
                y: dockItemPosition.y,
                x: dockItemPosition.x
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'auto'
              }}
            >
              <Terminal onMinimize={handleTerminalMinimize} />
            </motion.div>
          )}
        </AnimatePresence>
      
      <div className="absolute top-[-4px] right-4">
        <img 
          src="/images/vamsi.svg"
          alt="Vamsi"
          className="w-[120px] h-auto"
        />
      </div>
      
      <AppleStyleDock isTerminalMinimized={isTerminalMinimized} onTerminalRestore={handleTerminalRestore} />
    </div>
  );
} 