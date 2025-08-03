import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingIndicatorProps {
  isLoading: boolean;
}

// @hidden
function MessageLoading() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="text-foreground"
    >
      <circle cx="4" cy="12" r="2" fill="currentColor">
        <animate
          id="spinner_qFRN"
          begin="0;spinner_OcgL.end+0.25s"
          attributeName="cy"
          calcMode="spline"
          dur="0.6s"
          values="12;6;12"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
        />
      </circle>
      <circle cx="12" cy="12" r="2" fill="currentColor">
        <animate
          begin="spinner_qFRN.begin+0.1s"
          attributeName="cy"
          calcMode="spline"
          dur="0.6s"
          values="12;6;12"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
        />
      </circle>
      <circle cx="20" cy="12" r="2" fill="currentColor">
        <animate
          id="spinner_OcgL"
          begin="spinner_qFRN.begin+0.2s"
          attributeName="cy"
          calcMode="spline"
          dur="0.6s"
          values="12;6;12"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
        />
      </circle>
    </svg>
  );
}

export default function LoadingIndicator({ isLoading }: LoadingIndicatorProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const loadingMessages = [
    "Tinkering with ideas...",
    "Assembling the pieces...",
    "Fine-tuning your answer..."
  ];

  useEffect(() => {
    if (!isLoading) {
      setCurrentMessageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        }
        return prev; // Stay on the last message
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoading, loadingMessages.length]);

  if (!isLoading) return null;

  return (
    <div className="flex justify-start mt-4">
      <div className="text-black max-w-[70%] font-sf-pro text-sm flex items-center space-x-2">
        <MessageLoading />
        <AnimatePresence mode="wait">
          <motion.span
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="min-w-[200px]"
          >
            {loadingMessages[currentMessageIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}