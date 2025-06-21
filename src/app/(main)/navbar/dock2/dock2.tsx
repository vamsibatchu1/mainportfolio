'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Sparkles,
  Edit3,
  User,
  Beaker,
  X,
  LucideIcon
} from 'lucide-react';

// Ring Spinner Component
const RingSpinner = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 44 44"
    stroke="currentColor"
  >
    <title>Loading...</title>
    <g fill="none" fillRule="evenodd" strokeWidth="2">
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="0s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="-0.9s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="-0.9s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

interface DockItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface Dock2Props {
  onClose?: () => void;
}

const dockItems: DockItem[] = [
  { id: 'home', title: 'Home', icon: Home },
  { id: 'work', title: 'Work', icon: Sparkles },
  { id: 'writing', title: 'Writing', icon: Edit3 },
  { id: 'about', title: 'About', icon: User },
  { id: 'experiments', title: 'Experiments', icon: Beaker },
];

const Dock2: React.FC<Dock2Props> = ({ onClose }) => {
  const [selectedId, setSelectedId] = useState<string>('home');

  const handleItemClick = (id: string) => {
    setSelectedId(id);
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Ring Spinner at the top */}
      <div className="text-white">
        <RingSpinner size={32} />
      </div>
      
      <div className="flex items-center gap-2">
        {/* Main dock container */}
      <div className="flex items-center gap-2 bg-gradient-to-b from-[#2C2C2E] to-[#1C1C1E] border border-[#3C3C3E] rounded-[20px] p-1.5 shadow-2xl backdrop-blur-sm">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedId === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`
                relative flex items-center rounded-[16px] transition-all duration-300 ease-out group
                ${isSelected 
                  ? 'bg-gradient-to-b from-white to-[#F5F5F7] text-black px-4 py-2.5 shadow-md' 
                  : 'bg-gradient-to-b from-[#1C1C1E] to-[#0C0C0C] text-[#8E8E93] hover:text-white p-2.5 border border-[#2C2C2E] group-hover:border-transparent'
                }
              `}
              layout
              initial={false}
              whileHover={{
                scale: isSelected ? 1 : 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                duration: 0.2
              }}
            >
              {/* Animated gradient border for inactive tabs on hover */}
              {!isSelected && (
                <div className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-400 to-black p-[1px] rounded-[16px]" style={{ animation: 'spin 3s linear infinite' }}>
                    <div className="w-full h-full bg-gradient-to-b from-[#1C1C1E] to-[#0C0C0C] rounded-[15px]" />
                  </div>
                </div>
              )}
              
              <Icon size={18} className="flex-shrink-0 relative z-10" />
              
              <AnimatePresence initial={false}>
                {isSelected && (
                  <motion.span
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: 'auto', opacity: 1, marginLeft: 8 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      duration: 0.3
                    }}
                    className="text-sm font-semibold whitespace-nowrap overflow-hidden relative z-10"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="
          flex items-center justify-center w-10 h-10 
          bg-gradient-to-b from-[#2C2C2E] to-[#1C1C1E] 
          border border-[#3C3C3E] rounded-[16px] 
          text-[#8E8E93] hover:text-white 
          hover:bg-gradient-to-b hover:from-[#3C3C3E] hover:to-[#2C2C2E]
          transition-all duration-300 shadow-2xl backdrop-blur-sm
          hover:scale-105 active:scale-95
        "
        aria-label="Close dock"
      >
        <X size={18} />
      </button>
      </div>
    </div>
  );
};

export default Dock2; 