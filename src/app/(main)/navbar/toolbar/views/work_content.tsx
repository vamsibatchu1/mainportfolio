import React from 'react';
import { motion } from 'framer-motion';
import { PhotoGallery } from "../components/gallery";

const contentSpring = { type: "spring", stiffness: 200, damping: 25 };

export function GalleryPage() {
  return (
    <main className="overflow-hidden">  
     <PhotoGallery  /> 
    </main>
  );
}

const WorkContent = () => {
  return (
    <motion.div
      key="work-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="p-4 w-full"
    >
      <GalleryPage />
    </motion.div>
  );
};

export default WorkContent; 