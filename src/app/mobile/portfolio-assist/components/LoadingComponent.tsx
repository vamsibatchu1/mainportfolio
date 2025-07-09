import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from 'lucide-react';

const LOADING_MESSAGES = [
  "Brewing some design insights...",
  "Diving deep into my design vault...",
  "Connecting the design dots...",
  "Sketching out the perfect response...",
  "Gathering inspiration from my portfolio...",
  "Analyzing user experience patterns...",
  "Curating design wisdom for you...",
  "Piecing together creative solutions...",
  "Exploring design methodologies...",
  "Crafting a thoughtful perspective...",
  "Navigating through design principles...",
  "Synthesizing years of experience...",
  "Uncovering design stories to share..."
];

export const LoadingComponent: React.FC = () => {
  const [selectedMessages, setSelectedMessages] = useState<string[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Function to randomly select 3 unique messages from the list
  const selectRandomMessages = () => {
    const shuffled = [...LOADING_MESSAGES].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  // Initialize with 3 random messages when component mounts
  useEffect(() => {
    setSelectedMessages(selectRandomMessages());
  }, []);

  useEffect(() => {
    if (selectedMessages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex < selectedMessages.length - 1) {
          return prevIndex + 1;
        }
        return prevIndex; // Stay on the last message
      });
    }, 1500); // Change message every 1.5 seconds

    return () => clearInterval(interval);
  }, [selectedMessages]);

  return (
    <div className="relative w-full">
      <div className="flex flex-row gap-2 items-center justify-start">
        {/* Spinning Loader Icon */}
        <div className="relative shrink-0 size-4 flex items-center justify-center">
          <Loader 
            size={16} 
            className="text-[#545454] animate-spin" 
          />
        </div>
        
        {/* Loading Text with smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-jakarta font-medium text-[#545454] text-[14px] leading-[20px]"
          >
            {selectedMessages[currentMessageIndex] || "Loading..."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}; 