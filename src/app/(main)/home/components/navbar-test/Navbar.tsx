/* src/app/(main)/home/components/navbar-test/Navbar.tsx */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';
import styles from '../styles.module.css';
import { useRouter } from 'next/navigation';
import { fourFont } from '@/app/fonts';

// Import the new content components
import NavHomeContent from './NavHomeContent';
import NavWorkContent from './NavWorkContent';
import NavBlogContent from './NavBlogContent';
import NavExperimentsContent from './NavExperimentsContent';
import NavAskContent from './NavAskContent';

// --- PixelGrid Component ---
interface PixelGridProps {
  baseColor: string;
  blackPixelCount: number;
  gridSize: number;
  pixelSize: number;
  gap: string;
  className?: string;
  isHovered?: boolean;
}

// Helper function to generate one random grid state with BLACK pixels
const generateRandomGridState = (gridSize: number, baseColor: string, blackPixelCount: number): string[] => {
  const totalPixels = gridSize * gridSize;
  const grid = Array(totalPixels).fill(baseColor);
  const blackIndices = new Set<number>();
  while (blackIndices.size < blackPixelCount && blackIndices.size < totalPixels) {
    const randomIndex = Math.floor(Math.random() * totalPixels);
    blackIndices.add(randomIndex);
  }
  // Set random indices to BLACK
  blackIndices.forEach(index => { grid[index] = brandColors.black; }); 
  return grid;
};

const PixelGrid: React.FC<PixelGridProps> = ({
  baseColor,
  blackPixelCount,
  gridSize,
  pixelSize,
  gap,
  className = '',
  isHovered = false
}) => {
  const [displayedColors, setDisplayedColors] = useState<string[]>(() => 
    generateRandomGridState(gridSize, baseColor, blackPixelCount)
  );
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isHovered) {
      // Start interval when hovered
      intervalRef.current = setInterval(() => {
        setDisplayedColors(
          generateRandomGridState(gridSize, baseColor, blackPixelCount)
        );
      }, 300); // Adjust interval speed (e.g., 300ms)
    } else {
      // Reset to initial state when not hovered
      // Generate a new random initial state to avoid static look on unhover
      setDisplayedColors(
        generateRandomGridState(gridSize, baseColor, blackPixelCount)
      ); 
    }

    // Cleanup function to clear interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, gridSize, baseColor, blackPixelCount]); // Updated dependency

  const gapValue = parseInt(gap) || 0;
  const totalSize = gridSize * pixelSize + Math.max(0, gridSize - 1) * gapValue;

  return (
    <div
      className={`grid flex-shrink-0 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${gridSize}, ${pixelSize}px)`,
        gridTemplateRows: `repeat(${gridSize}, ${pixelSize}px)`,
        width: `${totalSize}px`,
        height: `${totalSize}px`,
        gap: gap,
      }}
    >
      {/* Render based on the displayedColors state */}
      {displayedColors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: `${pixelSize}px`,
            height: `${pixelSize}px`,
            transition: 'background-color 0.1s ease-in-out'
          }}
        />
      ))}
    </div>
  );
};

// --- Placeholder Data ---
const brandColors = {
  white: "#FFFFFF",
  black: "#000000",
  zenith: "#FBAF1D", // Example Color 1
  nebula: "#E29FC8", // Example Color 2
  juniper: "#4F7834", // Example Color 3
  breeze: "#90D9E0", // Example Color 4
  paprika: "#F25A3F"  // Example Color 5
};

// Rename constant
const BLACK_PIXEL_COUNT = 3;

// Update menuItemsData property name
const menuItemsData = [
  { label: 'Home', path: '/home', baseColor: brandColors.juniper, blackPixelCount: BLACK_PIXEL_COUNT, contentComponent: NavHomeContent },
  { label: 'Work', path: '/work', baseColor: brandColors.nebula, blackPixelCount: BLACK_PIXEL_COUNT, contentComponent: NavWorkContent },
  { label: 'Blog', path: '/blog', baseColor: brandColors.zenith, blackPixelCount: BLACK_PIXEL_COUNT, contentComponent: NavBlogContent },
  { label: 'Experiments', path: '/experiments', baseColor: brandColors.paprika, blackPixelCount: BLACK_PIXEL_COUNT, contentComponent: NavExperimentsContent },
  { label: 'Ask', path: '/ask', baseColor: brandColors.breeze, blackPixelCount: BLACK_PIXEL_COUNT, contentComponent: NavAskContent },
];

// --- Navbar Component ---
export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useOnClickOutside(navbarRef, () => {
    setIsVisible(false); 
    setHoveredIndex(null);
  });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === " " || event.code === "Space") {
        event.preventDefault();
        setIsVisible(prev => !prev);
        if (!isVisible) setHoveredIndex(null);
      }
      if (event.key === "Escape") {
        setIsVisible(false);
        setHoveredIndex(null);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isVisible]);

  // Navigation handler
  const handleNavigation = (path: string) => {
    setHoveredIndex(null); // Close detail view
    setIsVisible(false);   // Hide navbar
    router.push(path);
  };

  const BASE_HEIGHT = '102px';
  const EXPANDED_HEIGHT = '438px';
  const ActiveContentComponent = hoveredIndex !== null ? menuItemsData[hoveredIndex]?.contentComponent : null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className={styles.blurOverlay}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center z-50 pointer-events-none">
            <motion.div
              ref={navbarRef}
              className="w-[1248px] p-8 bg-black text-white overflow-hidden flex flex-col justify-end pointer-events-auto"
              initial={{ y: 150, opacity: 0 }}
              animate={{
                y: 0, 
                opacity: 1,
                height: hoveredIndex !== null ? EXPANDED_HEIGHT : BASE_HEIGHT,
              }}
              exit={{
                y: 150, 
                opacity: 0,
                height: BASE_HEIGHT, 
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence mode="wait">
                {hoveredIndex !== null && ActiveContentComponent && (
                  <motion.div
                    className="h-[280px] mb-12"
                    key="details-row-container" 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.div 
                      key={hoveredIndex} 
                      className="w-[1152px]"
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ActiveContentComponent />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-row items-center justify-start gap-10">
                {menuItemsData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-3 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => handleNavigation(item.path)}
                  >
                    <PixelGrid
                      baseColor={item.baseColor}
                      blackPixelCount={item.blackPixelCount}
                      gridSize={5}
                      pixelSize={6}
                      gap="2px"
                      isHovered={hoveredIndex === index} 
                    />
                    <span className={`text-lg font-medium transition-colors duration-200 ${fourFont.className} ${ 
                      hoveredIndex === index ? 'text-white' : 'text-[#808080]' 
                    }`}> 
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      
    </>
  );
} 