"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CardXs } from '@/app/design-system/dualcard/dualcard';
import { motion } from 'framer-motion';
import { priFont } from '@/lib/config/fonts';

// --- Configuration ---
const GRID_SIZE = 5;
const PIXEL_SIZE = 16;
const TOTAL_PIXELS = GRID_SIZE * GRID_SIZE;
// Removed ANIMATION_INTERVAL
const SHAPE_FORMATION_DELAY = 100; // ms after bg color change before shape starts forming
const PIXEL_STAGGER_DELAY = 60;  // ms between each pixel turning white

// Brand colors (Keep all for potential use)
const brandColors = {
  white: "#FFFFFF",
  zenith: "#FBAF1D",
  nebula: "#E29FC8",
  juniper: "#4F7834",
  breeze: "#90D9E0",
  paprika: "#F25A3F"
};

// Sequence: Nebula -> Juniper -> Breeze -> Paprika -> Zenith -> back to Nebula
const colorSequence = [
  brandColors.nebula,
  brandColors.juniper,
  brandColors.breeze,
  brandColors.paprika,
  brandColors.zenith
];

// Shapes aligned with the color sequence - NEW CREATIVE SHAPES
const shapes = [
  // Nebula (Pink): Swirl
  [1, 2, 8, 13, 18, 17, 16, 10, 6],       // 9 pixels
  // Juniper (Green): Sprout
  [2, 7, 11, 12, 13, 17, 22],              // 7 pixels
  // Breeze (Blue): Ripple
  [1, 3, 6, 8, 11, 13, 16, 18, 21, 23],   // 10 pixels
  // Paprika (Red-Orange): Bolt
  [4, 8, 7, 11, 15, 16],                   // 6 pixels
  // Zenith (Yellow-Orange): Burst
  [2, 6, 7, 8, 10, 12, 14, 16, 17, 18, 22] // 11 pixels
];

// Calculate the time needed for a shape to fully form
const calculateFormationDuration = (shapeIndices: number[]) => {
    if (!shapeIndices || shapeIndices.length === 0) return SHAPE_FORMATION_DELAY;
    return SHAPE_FORMATION_DELAY + (shapeIndices.length - 1) * PIXEL_STAGGER_DELAY;
};

// --- Simplified PixelGrid Component (Remains the same) ---
interface PixelGridProps {
  pixelColors: string[];
  gridSize: number;
  pixelSize: number;
  className?: string;
}

const PixelGrid: React.FC<PixelGridProps> = ({ 
  pixelColors,
  gridSize,
  pixelSize,
  className = ''
}) => {
  return (
    <div 
      className={`pixel-grid grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${gridSize}, ${pixelSize}px)`,
        gridTemplateRows: `repeat(${gridSize}, ${pixelSize}px)`,
        width: `${gridSize * pixelSize}px`,
        height: `${gridSize * pixelSize}px`,
        gap: 0, 
        margin: 'auto' 
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

// --- IntroAnimation Component ---
export function IntroAnimation() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  
  // Pixel Grid Animation State
  const [currentStep, setCurrentStep] = useState(0); // Starts at Nebula/Star
  const [gridState, setGridState] = useState<string[]>(() => 
    Array(TOTAL_PIXELS).fill(colorSequence[0])
  );
  const shapeFormationTimers = useRef<NodeJS.Timeout[]>([]);
  const nextStepTimeout = useRef<NodeJS.Timeout | null>(null); // Ref for the main cycle timeout

  // Cleanup function
  const cleanupTimers = () => {
    shapeFormationTimers.current.forEach(clearTimeout);
    shapeFormationTimers.current = [];
    if (nextStepTimeout.current) {
      clearTimeout(nextStepTimeout.current);
      nextStepTimeout.current = null;
    }
  };

  // Clear timers on unmount
  useEffect(() => cleanupTimers, []);

  // Effect to handle animation steps
  useEffect(() => {
    cleanupTimers(); // Clear previous timers before starting new step

    const currentBgColor = colorSequence[currentStep];
    const currentShapeIndices = shapes[currentStep];
    const formationDuration = calculateFormationDuration(currentShapeIndices);

    // 1. Instantly set background color for the *current* step
    const backgroundGrid = Array(TOTAL_PIXELS).fill(currentBgColor);
    setGridState(backgroundGrid);

    // 2. Schedule gradual shape formation for the *current* step
    if (currentShapeIndices) {
      currentShapeIndices.forEach((pixelIndex, i) => {
        const timer = setTimeout(() => {
          setGridState(prevGrid => {
            // Check if the grid still has the expected background color
            if (prevGrid[pixelIndex] === currentBgColor) {
              const newGrid = [...prevGrid];
              newGrid[pixelIndex] = brandColors.white;
              return newGrid;
            }
            return prevGrid; 
          });
        }, SHAPE_FORMATION_DELAY + i * PIXEL_STAGGER_DELAY);
        shapeFormationTimers.current.push(timer);
      });
    } else {
      console.warn(`No shape defined for step ${currentStep}`);
    }

    // 3. Schedule the transition to the *next* step after current shape forms
    nextStepTimeout.current = setTimeout(() => {
      setCurrentStep(prevStep => (prevStep + 1) % colorSequence.length);
    }, formationDuration + 50 + 400); // Add 200ms pause

    // Return the cleanup function for this effect instance
    return cleanupTimers;

  }, [currentStep]); // Rerun this whole effect when currentStep changes

  // --- Original Loading & Text Animation Logic --- 
  useEffect(() => {
    if (loadingProgress < 100 && subtitleVisible) {
      const timer = setTimeout(() => {
        setLoadingProgress(prev => Math.min(prev + 1, 100));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress, subtitleVisible]);
  
  useEffect(() => {
    const titleTimer = setTimeout(() => setTitleVisible(true), 800);
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 1600);
    return () => { clearTimeout(titleTimer); clearTimeout(subtitleTimer); };
  }, []);
  // --- End Original Logic ---
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-2xl"
    >
      <CardXs 
        primaryContent={
           <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: titleVisible ? 1 : 0, y: titleVisible ? 0 : 20 }}
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
          </>
        }
        secondaryContent={
          <div className="flex items-center justify-center w-full h-full">
            <PixelGrid 
              pixelColors={gridState}
              gridSize={GRID_SIZE}
              pixelSize={PIXEL_SIZE}
            />
          </div>
        }
      />
    </motion.div>
  );
}

export default IntroAnimation; 