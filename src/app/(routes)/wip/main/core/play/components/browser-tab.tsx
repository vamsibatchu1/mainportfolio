'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

interface BrowserTabProps {
  headerText: string;
  url: string;
  image: string;
  imageAlt?: string;
  isHovered?: boolean;
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function BrowserTab({
  headerText,
  url,
  image,
  imageAlt,
  isHovered = false,
  isSelected = false,
  onClick,
  className = '',
  style,
}: BrowserTabProps) {
  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      animate={{
        scale: isHovered || isSelected ? 1.05 : 1,
        zIndex: isHovered || isSelected ? 10 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-white" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
        {/* Header Bar */}
        <div className="bg-[#e5e5e5] rounded-t-lg px-2.5 py-1.5 flex items-center gap-2">
          {/* Window Controls */}
          <div className="flex gap-1.5 items-center flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
          </div>
          
          {/* Header Text */}
          <div className="flex-1 text-center min-w-0">
            <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider block truncate">
              {headerText}
            </span>
          </div>
        </div>

        {/* URL Bar */}
        <div className="bg-white px-2.5 py-1 flex items-center gap-1.5 border-t border-gray-300/50">
          <Lock className="w-2.5 h-2.5 text-gray-600 flex-shrink-0" strokeWidth={2} />
          <span className="text-[9px] font-mono text-gray-700 truncate flex-1 leading-tight">
            {url}
          </span>
        </div>

        {/* Image Content */}
        <div className="relative w-full bg-gray-100 flex-1">
          <div className="w-full h-full relative" style={{ minHeight: '150px' }}>
            <Image
              src={image}
              alt={imageAlt || headerText}
              fill
              className="object-cover"
              sizes="(max-width: 400px) 200px, 400px"
            />
          </div>
          
          {/* Selection/Hover Indicator */}
          {(isHovered || isSelected) && (
            <motion.div
              className="absolute inset-0 border-4 border-yellow-400 pointer-events-none rounded-b-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
