'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PromptInputBox } from '../components/ai-prompt-box';

const contentSpring = { type: "spring", stiffness: 150, damping: 25 };

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-start">
      <div className="p-4 w-[500px]">
        <PromptInputBox onSend={(message, files) => console.log(message, files)} />
      </div>
    </div>
  );
};

const ExperimentsContent = () => {
  return (
    <motion.div
      key="experiments-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="flex items-start gap-1.5 w-full h-[320px]"
    >
      <DemoOne />
    </motion.div>
  );
};

export default ExperimentsContent; 