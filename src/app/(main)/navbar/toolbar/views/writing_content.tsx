import React from 'react';
import { motion } from 'framer-motion';

const contentSpring = { type: "spring", stiffness: 200, damping: 25 };

const WritingContent = () => {
  return (
    <motion.div
      key="writing-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="p-4"
    >
      Content for Writing Mode
    </motion.div>
  );
};

export default WritingContent; 