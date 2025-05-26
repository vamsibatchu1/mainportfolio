import React from 'react';
import { motion } from 'framer-motion';

const contentSpring = { type: "spring", stiffness: 200, damping: 25 };

const WorkContent = () => {
  return (
    <motion.div
      key="work-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="p-4"
    >
      Content for Work Mode
    </motion.div>
  );
};

export default WorkContent; 