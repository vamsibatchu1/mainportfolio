import React from 'react';
import { motion } from 'framer-motion';

const contentSpring = { type: "spring", stiffness: 150, damping: 25 };

const DesignContent = () => {
  return (
    <motion.div
      key="design-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="p-4"
    >
      Content for Design Mode
    </motion.div>
  );
};

export default DesignContent; 