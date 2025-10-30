'use client';

import React, { useState } from 'react';
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

  const handleTerminalMinimize = () => {
    setIsTerminalMinimized(true);
  };

  const handleTerminalRestore = () => {
    setIsTerminalMinimized(false);
  };

  return (
    <div className="w-full h-full bg-gray-100 relative overflow-hidden">
      <FlickeringGrid 
        className="absolute inset-0"
        color="rgb(0, 0, 0)"
        maxOpacity={0.1}
        flickerChance={0.2}
      />
              <AnimatePresence>
          {!isTerminalMinimized && (
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.9
              }}
              animate={{ 
                opacity: 1, 
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.9
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              style={{
                position: 'absolute',
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
      

      
      <AppleStyleDock isTerminalMinimized={isTerminalMinimized} onTerminalRestore={handleTerminalRestore} />
    </div>
  );
} 