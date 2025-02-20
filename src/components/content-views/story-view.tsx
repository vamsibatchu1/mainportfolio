import { StoryGallery } from "@/components/ui/story-gallery";
import { motion } from 'framer-motion';

export function StoryView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row rounded-3xl border-0 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center justify-center">
        <StoryGallery />
      </div>
    </motion.div>
  );
} 