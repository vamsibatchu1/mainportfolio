import React from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

export const LoadingComponent: React.FC = () => {
  return (
    <div className="bg-[#f7f7f7] max-w-[264px] relative rounded-2xl shrink-0">
      <div className="flex flex-row items-center relative w-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start px-4 py-2 relative w-full">
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
                  Talking to the AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 