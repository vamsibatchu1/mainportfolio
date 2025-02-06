"use client";
import { Contact, AppWindow, Users, Newspaper, Layers, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ActionGridProps {
  show: boolean;
  onActionClick: (content: string) => void;
  isCollapsed: boolean;
  initialDelay?: number;
}

export function ActionGrid({ show = false, onActionClick, isCollapsed, initialDelay = 0 }: ActionGridProps) {
  const [isCollapsedState, setIsCollapsed] = useState(isCollapsed);
  
  // Update internal state when prop changes
  useEffect(() => {
    setIsCollapsed(isCollapsed);
  }, [isCollapsed]);

  const actions = [
    { icon: <Contact />, label: "My story", id: "story" },
    { icon: <Contact />, label: "Connect with me", id: "connect" },
    { icon: <AppWindow />, label: "Look at my work", id: "work" },
    { 
      icon: <Users />, 
      label: "What colleagues are saying about me",
      fullWidth: true,
      id: "testimonials"
    },
    { icon: <Newspaper />, label: "Read my articles", id: "articles" },
    { icon: <Layers />, label: "My skills", id: "skills" }
  ];

  const containerVariants = {
    expanded: {
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: initialDelay
      }
    },
    collapsed: {
      height: "56px",
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    expanded: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    collapsed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  const ActionButton = ({ icon, label, fullWidth, onClick }: any) => (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex items-center gap-2.5 px-5 py-3.5",
        "bg-[rgb(242,242,247)] hover:bg-[rgb(232,232,237)]",
        "rounded-[16px] border-[1px] border-[#E7E7E7] cursor-pointer transition-all duration-200",
        fullWidth ? "w-full" : "flex-1 min-w-[140px]"
      )}
      onClick={onClick}
    >
      <div className="w-6 h-6 text-black">
        {icon}
      </div>
      <span className="text-base font-semibold text-black whitespace-nowrap">
        {label}
      </span>
    </motion.button>
  );

  // Handle button click with collapse animation
  const handleButtonClick = (id: string) => {
    setIsCollapsed(true);
    // Slight delay before triggering content change to allow collapse animation
    setTimeout(() => {
      onActionClick(id);
    }, 100); // Match this with animation duration
  };

  return (
    <motion.div
      className={cn(
        "w-full max-w-[420px] cursor-pointer",
        "fixed bottom-0 left-1/2 -translate-x-1/2",
        "rounded-t-[16px]",
        "border-t border-gray-200",
        "bg-[#FCFCFC]"
      )}
      variants={containerVariants}
      initial="expanded"
      animate={isCollapsedState ? "collapsed" : "expanded"}
      onClick={() => setIsCollapsed(!isCollapsedState)}
    >
      <motion.div
        className="w-full max-w-[420px] flex flex-col gap-3.5 pt-5 px-5 pb-8 rounded-t-[16px] font-['SF_Pro_Text',-apple-system,BlinkMacSystemFont,sans-serif]"
      >
        <div className="flex items-center justify-between pb-3">
          <h2 className="text-md text-black">
            What do you want to know about?
          </h2>
          <motion.div
            animate={{ rotate: isCollapsedState ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronUp size={20} className="text-[rgba(60,60,67,0.6)]" />
          </motion.div>
        </div>
        
        <AnimatePresence mode="wait">
          {!isCollapsedState && (
            <motion.div 
              className="flex flex-col gap-3 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex gap-3">
                <motion.div className="flex-1" variants={itemVariants}>
                  <ActionButton
                    icon={actions[0].icon}
                    label={actions[0].label}
                    onClick={() => handleButtonClick(actions[0].id)}
                  />
                </motion.div>
                <motion.div className="flex-1" variants={itemVariants}>
                  <ActionButton
                    icon={actions[1].icon}
                    label={actions[1].label}
                    onClick={() => handleButtonClick(actions[1].id)}
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <ActionButton
                  icon={actions[2].icon}
                  label={actions[2].label}
                  onClick={() => handleButtonClick(actions[2].id)}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <ActionButton
                  icon={actions[3].icon}
                  label={actions[3].label}
                  fullWidth
                  onClick={() => handleButtonClick(actions[3].id)}
                />
              </motion.div>

              <div className="flex gap-3">
                <motion.div className="flex-1" variants={itemVariants}>
                  <ActionButton
                    icon={actions[4].icon}
                    label={actions[4].label}
                    onClick={() => handleButtonClick(actions[4].id)}
                  />
                </motion.div>
                <motion.div className="flex-1" variants={itemVariants}>
                  <ActionButton
                    icon={actions[5].icon}
                    label={actions[5].label}
                    onClick={() => handleButtonClick(actions[5].id)}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
} 

