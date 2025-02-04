"use client";
import { Contact, AppWindow, Users, Newspaper, Layers, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ActionGridProps {
  show: boolean;
  onActionClick: (content: string) => void;
  isCollapsed: boolean;
}

export function ActionGrid({ show = false, onActionClick, isCollapsed }: ActionGridProps) {
  const [isCollapsedState, setIsCollapsed] = useState(isCollapsed);
  
  const actions = [
    { icon: <Contact />, label: "My story", id: "story" },
    { icon: <Contact />, label: "Connect with me", id: "connect" },
    { icon: <AppWindow />, label: "Look at my work", id: "work" },
    { 
      icon: <Users />, 
      label: "What colleagues are saying about me",
      fullWidth: true,
      id: "colleagues"
    },
    { icon: <Newspaper />, label: "Read my articles", id: "articles" },
    { icon: <Layers />, label: "My skills", id: "skills" }
  ];

  const containerVariants = {
    expanded: {
      height: "auto",
      backgroundColor: "transparent",
    },
    collapsed: {
      height: "56px",
      backgroundColor: "black",
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
        "rounded-[14px] border-none cursor-pointer transition-all duration-200",
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

  return (
    <motion.div
      className={cn(
        "w-full max-w-[367px] rounded-[14px] cursor-pointer",
        "fixed bottom-12 left-1/2 -translate-x-1/2",
        isCollapsedState ? "bg-black hover:bg-black/90" : "bg-transparent"
      )}
      variants={containerVariants}
      initial="expanded"
      animate={isCollapsedState ? "collapsed" : "expanded"}
      transition={{ duration: 0.3 }}
      onClick={() => setIsCollapsed(!isCollapsedState)}
    >
      <AnimatePresence mode="wait">
        {isCollapsedState ? (
          <motion.div
            className="flex items-center justify-between px-5 py-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium">What do you want to know about?</span>
            <Menu size={20} />
          </motion.div>
        ) : (
          <motion.div
            className="w-full max-w-[367px] p-0 flex flex-col gap-3.5 font-['SF_Pro_Text',-apple-system,BlinkMacSystemFont,sans-serif]"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-[rgba(60,60,67,0.6)] tracking-[-0.4px]"
            >
              What do you want to know about?
            </motion.h2>
            <div className="flex flex-wrap gap-3 w-full">
              {actions.map((action, index) => (
                <motion.div 
                  key={index}
                  className={action.fullWidth ? "w-full" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1 
                  }}
                >
                  <ActionButton
                    icon={action.icon}
                    label={action.label}
                    fullWidth={action.fullWidth}
                    onClick={() => onActionClick(action.id)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 

