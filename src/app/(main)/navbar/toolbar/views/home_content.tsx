import React from 'react';
import { motion } from 'framer-motion';

const contentSpring = { type: "spring", stiffness: 150, damping: 25 };

const HomeContent = () => {
  return (
    <motion.div
      key="home-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="p-4"
    >
      Content for Home Mode
    </motion.div>
  );
};

export default HomeContent; 