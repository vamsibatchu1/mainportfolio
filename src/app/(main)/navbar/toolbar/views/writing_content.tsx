import React from 'react';
import { motion } from 'framer-motion';
import { TextShimmerWave } from "../components/text-shimmer-wave";
import { sixFont } from '@/app/fonts';

const contentSpring = { type: "spring", stiffness: 200, damping: 25 };

const WritingContent = () => {
  return (
    <motion.div
      key="writing-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      style={{ fontFamily: sixFont.style.fontFamily }}
      className="p-4"
    >
      <TextShimmerWave
      className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]'
      duration={1}
      spread={1}
      zDistance={1}
      scaleDistance={1.1}
      rotateYDistance={20}
    >
      Creating the perfect dish...
    </TextShimmerWave>
    </motion.div>
  );
};

export default WritingContent; 