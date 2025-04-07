"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ActionBar from '../../home/components/ActionBar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Debug the current path
  console.log('Current pathname:', pathname);
  
  // Use exact path matching
  const isMainPage = pathname === '/experiments/old-home' || 
                    pathname === '/experiments/old-home/ask' || 
                    pathname === '/experiments/old-home/experiments';

  // Debug the condition
  console.log('Is main page:', isMainPage);

  return (
    <div className="min-h-[100svh] px-12 pt-4 flex flex-col items-center gap-4 bg-[#F5F4F0]">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      {isMainPage && (
        <div className="relative w-full h-[200px] mt-8">
          <ActionBar />
        </div>
      )}
    </div>
  );
} 