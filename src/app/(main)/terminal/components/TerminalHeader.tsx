import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, ActivityIcon, MoreVertical, HelpCircle, Folder, Check, X, Pencil, Settings, Trash2, Copy, Cloud, Zap, ArrowUpDown, Star, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { useOnClickOutside } from 'usehooks-ts';
import SystemMonitor from './system-monitor';

interface TerminalHeaderProps {
  onMouseDown: (e: React.MouseEvent) => void;
  onRefresh: () => void;
  onMinimize: () => void;
  currentTopic?: string;
  messageCount?: number;
}

export default function TerminalHeader({ onMouseDown, onRefresh, onMinimize, currentTopic, messageCount }: TerminalHeaderProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSystemMonitor, setShowSystemMonitor] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [editing, setEditing] = useState(false);
  const [holding, setHolding] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const maxTime = 1000;
  const ref = useRef<HTMLInputElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const systemMonitorRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(tooltipRef, () => {
    setShowTooltip(false);
  });

  useOnClickOutside(systemMonitorRef, () => {
    setShowSystemMonitor(false);
  });

  useOnClickOutside(dropdownRef, () => {
    setShowDropdown(false);
  });

  const handleStart = () => {
    setHolding(true);
  };

  const handleEnd = () => {
    setHolding(false);
    setElapsedTime(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (holding) {
      timer = setInterval(() => {
        setElapsedTime((prev) => Math.min(prev + 100, maxTime));
      }, 100);
    } else if (!holding && elapsedTime > 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [holding, elapsedTime]);

  const widthPercentage = (elapsedTime / maxTime) * 100;

  // Generate dynamic folder name based on conversation topic
  const getDynamicFolderName = () => {
    if (!currentTopic) return 'Terminal';
    
    // Extract key words and create a folder name
    const words = currentTopic.toLowerCase().split(' ').slice(0, 3);
    const folderName = words.join('-');
    const fullName = folderName;
    
    // Limit to 6 characters and add ellipsis if longer
    if (fullName.length > 6) {
      return fullName.substring(0, 5) + '...';
    }
    
    return fullName;
  };



  return (
    <div 
      className="bg-[#f6f6f6] rounded-t-lg border-b border-gray-300 px-4 py-3 flex items-center justify-between cursor-move"
      onMouseDown={onMouseDown}
    >
      {/* Traffic Lights */}
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-[#ff5f57] rounded-full cursor-pointer"></div>
        <div className="w-3 h-3 bg-[#ffbd2e] rounded-full cursor-pointer" onClick={onMinimize}></div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-3 ml-auto">
        <div className="bg-gray-200 text-black px-2 py-1 rounded text-xs font-medium flex items-center space-x-1 font-sf-pro">
          <Folder className="w-3 h-3" />
          <span>{getDynamicFolderName()}</span>
        </div>
        {messageCount && messageCount > 0 && (
          <div className="bg-gray-200 text-black px-2 py-1 rounded text-xs font-medium flex items-center space-x-1 font-sf-pro">
            <MessageSquare className="w-3 h-3" />
            <span>{messageCount}</span>
          </div>
        )}
        <RotateCcw className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" onClick={onRefresh} />
        <div className="relative" ref={systemMonitorRef}>
          <ActivityIcon
            className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" 
            onClick={() => setShowSystemMonitor(!showSystemMonitor)}
          />
          {showSystemMonitor && (
            <div className="absolute top-6 right-0 z-50">
              <SystemMonitor />
            </div>
          )}
        </div>
        
        <div className="relative" ref={tooltipRef}>
          <HelpCircle 
            className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" 
            onClick={() => setShowTooltip(!showTooltip)}
          />
          {showTooltip && (
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#f6f6f6] border border-gray-300 rounded-lg shadow-lg p-3 w-48">
              <p className="text-xs text-gray-700 font-sf-pro leading-relaxed">
                This is a tiny project built out of love for experimentation and craft using Cursor and Gemini API, carefully crafted for delight and interactions.
              </p>
              <div className="flex items-center justify-start mb-2">
                <img 
                  src="/images/gemini.png"
                  alt="Gemini AI"
                  className="w-16 h-8 object-contain"
                />
              </div>
              
            </div>
          )}
        </div>
        <div className="relative" ref={dropdownRef}>
          <MoreVertical 
            className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" 
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div 
              className="absolute top-6 right-0 z-50 bg-[#f6f6f6] border border-gray-300 rounded-lg shadow-lg p-1 w-52"
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                fontWeight: '400'
              }}
            >
              <button
                className="relative flex w-full items-center justify-end overflow-hidden rounded px-2 py-1.5 text-xs hover:bg-gray-200"
                onClick={() => {
                  setFavorite((favorite) => !favorite);
                }}
              >
                <AnimatePresence>
                  {favorite ? (
                    <motion.span
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      key={0}
                      className="absolute left-0 ml-2"
                    >
                      Remove Favorite
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      key={1}
                      className="absolute left-0 ml-2"
                    >
                      Add Favorite
                    </motion.span>
                  )}
                </AnimatePresence>
                <Star className={`w-4 h-4 ${favorite ? 'fill-gray-700 text-gray-700' : 'text-gray-700'}`} />
              </button>
              <div className="group relative flex h-7 w-full cursor-pointer items-center overflow-hidden rounded text-xs">
                <AnimatePresence>
                  {editing ? (
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ staggerChildren: 0.1 }}
                      key={0}
                      className="absolute left-0 flex w-full items-center justify-between"
                    >
                      <input defaultValue="Terminal" className="ml-2 w-4/6 cursor-pointer bg-transparent outline-none" ref={ref} />
                      <div className="absolute right-0 mr-2 flex items-center gap-x-1">
                        <button
                          className="rounded bg-gray-300 p-[3px] text-gray-700 hover:bg-gray-400/50"
                          onClick={() => setEditing(false)}
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          className="rounded bg-gray-300 p-[3px] text-gray-700 hover:bg-gray-400/50"
                          onClick={() => setEditing(false)}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      key={1}
                      className="flex w-full items-center justify-between px-2 py-1.5 text-xs hover:bg-gray-200"
                      onClick={() => {
                        setEditing(true);
                        setTimeout(() => ref.current?.focus(), 100);
                      }}
                    >
                      <span>Edit Name</span>
                      <Pencil className="w-4 h-4" />
                    </motion.button>
                  )}
                </AnimatePresence>
                <div
                  className={clsx(
                    'pointer-events-none absolute left-0 h-full w-full bg-gray-200/50 transition-colors',
                    editing ? 'block' : 'hidden group-hover:block'
                  )}
                />
              </div>
              <hr className="w-full border-gray-300" />
              <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-gray-200">
                New Chat
                <Cloud className="w-4 h-4" />
              </button>
              <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-gray-200">
                Duplicate
                <Copy className="w-4 h-4" />
              </button>
              <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-gray-200">
                Analytics
                <Zap className="w-4 h-4" />
              </button>
              <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-gray-200">
                Transfer
                <ArrowUpDown className="w-4 h-4" />
              </button>
              <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-gray-200">
                Settings
                <Settings className="w-4 h-4" />
              </button>
              <hr className="w-full border-gray-300" />
              <button
                className="group relative flex h-7 w-full select-none items-center justify-end overflow-hidden rounded px-2 text-xs text-red-400 hover:bg-red-500/5"
                onMouseDown={handleStart}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchEnd={handleEnd}
              >
                <AnimatePresence>
                  {holding ? (
                    <motion.span
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      key={0}
                      className="absolute left-0 ml-2 select-none"
                    >
                      Hold to Confirm
                    </motion.span>
                  ) : (
                    <motion.span
                      className="absolute left-0 ml-2 select-none"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      key={1}
                    >
                      Delete Chat
                    </motion.span>
                  )}
                </AnimatePresence>
                <Trash2 className="w-4 h-4" />
                <div className="absolute left-0 hidden h-full w-full bg-red-500/10 transition-colors group-hover:block">
                  <motion.div
                    className="h-full bg-red-500/25"
                    initial={{ width: 0 }}
                    animate={{ width: `${widthPercentage}%` }}
                  />
                </div>
              </button>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}