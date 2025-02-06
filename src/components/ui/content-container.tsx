"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SkillsView, StoryView, WorkView, TestimonialsView } from "@/components/content-views";

interface ContentContainerProps {
  isOpen: boolean;
  onClose: () => void;
  activeContent: string;
}

export function ContentContainer({ isOpen, onClose, activeContent }: ContentContainerProps) {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const getContentView = () => {
    switch (activeContent) {
      case "skills":
        return <SkillsView />;
      case "story":
        return <StoryView />;
      case "work":
        return <WorkView />;
      case "testimonials":
        return <TestimonialsView />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="w-[800px] rounded-[14px] p-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full transition-colors mb-6"
          >
            <X size={24} />
          </button>

          {getContentView()}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 