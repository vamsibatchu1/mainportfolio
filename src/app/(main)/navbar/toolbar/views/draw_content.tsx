import React from 'react';
import { motion } from 'framer-motion';

const contentSpring = { type: "spring", stiffness: 150, damping: 25 };

const DrawContent = () => {
  return (
    <motion.div
      key="draw-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="p-4"
    >
      Content for Draw Mode
    </motion.div>
  );
};

export default DrawContent; 