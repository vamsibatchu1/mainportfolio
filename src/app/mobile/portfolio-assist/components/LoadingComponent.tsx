import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

const LOADING_MESSAGES = [
  "Establishing connection",
  "Talking to Vamsi's virtual agents",
  "Processing your request"
];

export const LoadingComponent: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex < LOADING_MESSAGES.length - 1) {
          return prevIndex + 1;
        }
        return prevIndex; // Stay on the last message
      });
    }, 1500); // Change message every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[264px] relative rounded-2xl shrink-0">
      <div className="flex flex-row items-center relative w-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start relative w-full">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative size-full">
              {/* Spinning Loader Icon */}
              <motion.div
                className="relative shrink-0 size-4"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Loader size={16} className="text-[#545454]" />
              </motion.div>
              
              {/* Loading Text */}
              <div className="font-jakarta font-medium leading-[0] relative shrink-0 text-[#545454] text-[14px] text-left text-nowrap">
                <p className="block leading-[20px] whitespace-pre">
                  {LOADING_MESSAGES[currentMessageIndex]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 