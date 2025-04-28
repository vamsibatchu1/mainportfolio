"use client";

import React, { useState, useEffect } from 'react';
import { CardXs } from '@/app/design-system/dualcard/dualcard';
import { motion } from 'framer-motion';
import { priFont } from '@/lib/config/fonts';

// Brand colors from the design system
const brandColors = {
  black: "#000000",
  white: "#FFFFFF",
  zenith: "#FBAF1D",  // Vibrant yellow-orange
  nebula: "#E29FC8",  // Soft pink
  juniper: "#4F7834", // Deep green
  breeze: "#90D9E0",  // Light blue
  paprika: "#F25A3F"  // Bright red-orange
};

// Creating our own PixelGrid component since it's not properly exported from dualcard.tsx
interface PixelGridProps {
  gridSize?: number;
  pixelSize?: number;
  colors?: string[];
  className?: string;
  animated?: boolean;
}

const PixelGrid: React.FC<PixelGridProps> = ({ 
  gridSize = 5, 
  pixelSize = 16, 
  colors = ['#F7F6F4'], 
  className = '',
  animated = false
}) => {
  const [pixelColors, setPixelColors] = useState<string[]>([]);
  
  // Initialize or update pixel colors
  useEffect(() => {
    const totalPixels = gridSize * gridSize;
    const newColors = Array(totalPixels).fill('').map(() => {
      return colors[Math.floor(Math.random() * colors.length)];
    });
    setPixelColors(newColors);
  }, [colors, gridSize]);
  
  // Animation effect - randomly change colors if animated
  useEffect(() => {
    if (!animated) return;
    
    const interval = setInterval(() => {
      setPixelColors(prev => {
        const newColors = [...prev];
        // Change a random pixel's color
        const randomIndex = Math.floor(Math.random() * prev.length);
        newColors[randomIndex] = colors[Math.floor(Math.random() * colors.length)];
        return newColors;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, [animated, colors]);
  
  return (
    <div 
      className={`pixel-grid ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize}, ${pixelSize}px)`,
        gridTemplateRows: `repeat(${gridSize}, ${pixelSize}px)`,
        width: `${gridSize * pixelSize}px`,
        height: `${gridSize * pixelSize}px`
      }}
    >
      {pixelColors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: `${pixelSize}px`,
            height: `${pixelSize}px`
          }}
        />
      ))}
    </div>
  );
};

export function IntroAnimation() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [pixelColors, setPixelColors] = useState([brandColors.white]);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  
  // Animate loading progress
  useEffect(() => {
    if (loadingProgress < 100 && subtitleVisible) {
      const timer = setTimeout(() => {
        setLoadingProgress(prev => Math.min(prev + 1, 100));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress, subtitleVisible]);
  
  // Update colors based on loading progress using brand colors
  useEffect(() => {
    if (loadingProgress < 20) {
      setPixelColors([brandColors.white]);
    } else if (loadingProgress < 40) {
      setPixelColors([brandColors.white, brandColors.zenith]);
    } else if (loadingProgress < 60) {
      setPixelColors([brandColors.white, brandColors.zenith, brandColors.nebula]);
    } else if (loadingProgress < 80) {
      setPixelColors([brandColors.white, brandColors.zenith, brandColors.nebula, brandColors.juniper]);
    } else {
      setPixelColors([
        brandColors.white,
        brandColors.zenith,
        brandColors.nebula, 
        brandColors.juniper,
        brandColors.breeze,
        brandColors.paprika
      ]);
    }
  }, [loadingProgress]);
  
  // Staggered animation timing
  useEffect(() => {
    // Show title after card appears
    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 800);
    
    // Show subtitle after title appears
    const subtitleTimer = setTimeout(() => {
      setSubtitleVisible(true);
    }, 1600);
    
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        ease: "easeOut"
      }}
      className="w-full max-w-2xl"
    >
      <CardXs 
        primaryContent={
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: titleVisible ? 1 : 0,
                y: titleVisible ? 0 : 20 
              }}
              transition={{ duration: 0.5 }}
            >
              <div className={priFont.className} style={{
                color: '#f7f6f4',
                fontSize: '40px',
                fontWeight: '400',
                letterSpacing: '-0.8px',
                lineHeight: 'normal',
                whiteSpace: 'nowrap',
                width: 'fit-content'
              }}>
                Welcome to my portfolio
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: subtitleVisible ? 1 : 0,
                y: subtitleVisible ? 0 : 20 
              }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="relative">
                <div className={priFont.className} style={{
                  color: 'rgba(247, 246, 244, 0.7)',
                  fontSize: '14px',
                  fontWeight: '400',
                  letterSpacing: '-0.28px',
                  lineHeight: 'normal'
                }}>
                  Loading experience {loadingProgress}%
                </div>
                <div className="h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#f7f6f4]" 
                    initial={{ width: "0%" }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </>
        }
        secondaryContent={
          <PixelGrid 
            colors={pixelColors}
            animated={true}
            gridSize={5}
            pixelSize={16}
            className="flex items-center justify-center w-full h-full"
          />
        }
      />
    </motion.div>
  );
}

export default IntroAnimation; 