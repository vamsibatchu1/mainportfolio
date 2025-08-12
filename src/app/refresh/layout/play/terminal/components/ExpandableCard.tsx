'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Settings, FileText, BarChart3, Palette, Code, Zap } from 'lucide-react';
import { ExpandableTabs } from './animated-tabs';

interface ExpandableCardProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const tabs = [
  { title: "Settings", icon: Settings },
  { title: "Documents", icon: FileText },
  { title: "Analytics", icon: BarChart3 },
  { title: "Design", icon: Palette },
  { title: "Code", icon: Code },
  { title: "Actions", icon: Zap },
];

export default function ExpandableCard({ isExpanded, onToggle }: ExpandableCardProps) {
  const [selectedTab, setSelectedTab] = React.useState<number | null>(null);

  const handleTabChange = (index: number | null) => {
    setSelectedTab(index);
  };

  return (
    <motion.div
      className="bg-white border-b border-gray-200 overflow-hidden"
      initial={false}
      animate={{ height: isExpanded ? 'auto' : '48px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between px-4 py-3 cursor-pointer transition-colors"
        onClick={onToggle}
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}
      >
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Quick Actions</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </motion.div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="px-4"
          >
            {/* Tabs */}
            <div className="mb-4">
              <ExpandableTabs
                tabs={tabs}
                onChange={handleTabChange}
                className="w-full"
                activeColor="text-black"
                selectedTab={selectedTab}
              />
            </div>


          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 