'use client';

import React from 'react';
import { motion } from 'framer-motion';

const contentSpring = { type: "spring", stiffness: 150, damping: 25 };

const AskMeContent = () => {
  return (
    <motion.div
      key="askme-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="flex items-start gap-1.5 w-full h-[320px] rounded-sm"
    >
      <div className="flex flex-col bg-gray-100 rounded-sm items-center justify-center gap-1.5 w-full h-full">
        <h1 className="text-2xl font-bold">Ask Me</h1>
        <p className="text-gray-600 text-center">Questions and conversations</p>
      </div>
    </motion.div>
  );
};

export default AskMeContent; 