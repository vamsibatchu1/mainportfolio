"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import UnifiedActionBar from '../home/components/UnifiedActionBar';

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Use exact path matching
  const isMainPage = pathname === '/work';

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
          <UnifiedActionBar alwaysVisible={true} />
        </div>
      )}
    </div>
  );
} 