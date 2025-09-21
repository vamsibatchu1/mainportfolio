'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from '../home/page';
import WorkPage from '../work/page';
import PlayPage from '../play/page';
import WritingPage from '../writing/page';
import AboutPage from '../about/page';

interface RightColumnProps {
  activeItem: number;
}

export default function RightColumn({ activeItem }: RightColumnProps) {
  const pages = [
    { id: 0, component: HomePage, title: 'Home' },
    { id: 1, component: WorkPage, title: 'Work' },
    { id: 2, component: PlayPage, title: 'Play' },
    { id: 3, component: WritingPage, title: 'Writing' },
    { id: 4, component: AboutPage, title: 'About' }
  ];

  const currentPage = pages.find(page => page.id === activeItem);

  return (
    <div className="w-full h-full flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {currentPage && <currentPage.component />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 