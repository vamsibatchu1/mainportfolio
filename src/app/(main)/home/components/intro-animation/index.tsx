"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CardXs } from '@/app/design-system/dualcard/dualcard';
import { motion, AnimatePresence } from 'framer-motion';
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

// Sequence: Extended to 20 steps, repeating colors 4 times
const colorSequence = [
  // Cycle 1
  brandColors.nebula,  // 0
  brandColors.juniper, // 1
  brandColors.breeze,  // 2
  brandColors.paprika, // 3
  brandColors.zenith,  // 4
  // Cycle 2
  brandColors.nebula,  // 5
  brandColors.juniper, // 6
  brandColors.breeze,  // 7
  brandColors.paprika, // 8
  brandColors.zenith,   // 9
  // Cycle 3
  brandColors.nebula,  // 10
  brandColors.juniper, // 11
  brandColors.breeze,  // 12
  brandColors.paprika, // 13
  brandColors.zenith,  // 14
   // Cycle 4
  brandColors.nebula,  // 15
  brandColors.juniper, // 16
  brandColors.breeze,  // 17
  brandColors.paprika, // 18
  brandColors.zenith   // 19
];

// Shapes aligned with the color sequence - 20 shapes total
const shapes = [
  // --- Original 10 ---
  // Step 0: Nebula (Pink): Swirl
  [1, 2, 8, 13, 18, 17, 16, 10, 6],
  // Step 1: Juniper (Green): Sprout
  [2, 7, 11, 12, 13, 17, 22],
  // Step 2: Breeze (Blue): Ripple
  [1, 3, 6, 8, 11, 13, 16, 18, 21, 23],
  // Step 3: Paprika (Red-Orange): Bolt
  [4, 8, 7, 11, 15, 16],
  // Step 4: Zenith (Yellow-Orange): Burst
  [2, 6, 7, 8, 10, 12, 14, 16, 17, 18, 22],
  // Step 5: Nebula (Pink): Small Box (3x3 centered)
  [6, 7, 8, 11, 12, 13, 16, 17, 18],
  // Step 6: Juniper (Green): Letter 'V'
  [0, 4, 6, 8, 12],
  // Step 7: Breeze (Blue): Smiley Eyes
  [6, 8],
  // Step 8: Paprika (Red-Orange): Diamond
  [2, 6, 8, 10, 14, 16, 18, 22],
  // Step 9: Zenith (Yellow-Orange): Ghost Eyes
  [6, 8, 11, 13],
  // --- Added Shapes (10-19) ---
  // Step 10: Nebula (Pink): Solid Square (3x3)
  [6, 7, 8, 11, 12, 13, 16, 17, 18],
  // Step 11: Juniper (Green): Inverted V
  [10, 14, 16, 18, 22],
  // Step 12: Breeze (Blue): Question Mark
  [1, 2, 3, 8, 12, 17],
  // Step 13: Paprika (Red-Orange): Heart
  [1, 3, 5, 7, 9, 12, 16, 18],
  // Step 14: Zenith (Yellow-Orange): Hourglass
  [0, 1, 2, 3, 4, 7, 12, 17, 20, 21, 22, 23, 24],
  // Step 15: Nebula (Pink): Letter 'Z'
  [0, 1, 2, 3, 4, 8, 12, 16, 20, 21, 22, 23, 24],
  // Step 16: Juniper (Green): Four Corners
  [0, 4, 20, 24],
  // Step 17: Breeze (Blue): Hash/Pound Sign
  [6, 8, 10, 11, 12, 13, 14, 16, 18],
  // Step 18: Paprika (Red-Orange): Check Mark
  [8, 12, 16, 17, 20],
  // Step 19: Zenith (Yellow-Orange): Small Cross
  [2, 7, 10, 11, 12, 13, 14, 17, 22],
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

// --- New Rotating Text --- 
const rotatingTexts = [
  "loading frames",
  "adjusting pixels",
  "creating journeys",
  "setting up prototypes"
];
const TEXT_ROTATION_INTERVAL = 1800; // ms (e.g., 2s display + 0.5s transition)

// --- IntroAnimation Component ---
export function IntroAnimation() {
  const [canStartPixelAnimation, setCanStartPixelAnimation] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // State for rotating text index
  
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

  // Effect to handle pixel grid animation steps (conditionally run)
  useEffect(() => {
    if (!canStartPixelAnimation) return; 
    
    cleanupTimers(); 

    const currentBgColor = colorSequence[currentStep];
    const currentShapeIndices = shapes[currentStep];
    const formationDuration = calculateFormationDuration(currentShapeIndices);

    const backgroundGrid = Array(TOTAL_PIXELS).fill(currentBgColor);
    setGridState(backgroundGrid);

    if (currentShapeIndices) {
      currentShapeIndices.forEach((pixelIndex, i) => {
        const timer = setTimeout(() => {
          setGridState(prevGrid => {
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

    nextStepTimeout.current = setTimeout(() => {
      setCurrentStep(prevStep => (prevStep + 1) % colorSequence.length);
    }, formationDuration + 50 + 400); 

    return cleanupTimers;

  }, [currentStep, canStartPixelAnimation]); 

  // --- Text Rotation and Initial Animation Trigger --- 
  useEffect(() => {
    // Timer to allow card animation before starting text/pixel animations
    const startTimer = setTimeout(() => {
        setCanStartPixelAnimation(true);
    }, 800); // Start text/pixel animation slightly after card reveal

    let textInterval: NodeJS.Timeout | null = null;

    if (canStartPixelAnimation) {
        // Start text rotation interval ONLY after the initial delay
        textInterval = setInterval(() => {
            setCurrentTextIndex(prevIndex => (prevIndex + 1) % rotatingTexts.length);
        }, TEXT_ROTATION_INTERVAL);
    }

    return () => { 
        clearTimeout(startTimer); 
        if (textInterval) clearInterval(textInterval); // Clear interval on cleanup
    }; 
    // Add canStartPixelAnimation as dependency to re-run when it turns true
  }, [canStartPixelAnimation]);
  
  return (
    <motion.div
      className="min-h-screen w-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="w-auto"
      >
        <CardXs 
          primaryContent={
             // Container to ensure AnimatePresence has consistent size and text is centered
             <div style={{
                 height: '48px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center', // Center the text horizontally
                 minWidth: '450px' // Set a minimum width
                }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTextIndex} // Important for AnimatePresence
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: canStartPixelAnimation ? 1 : 0, y: canStartPixelAnimation ? 0 : 10 }} // Fade in only when allowed
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className={`${priFont.className}`}
                    style={{
                        color: '#f7f6f4',
                        fontSize: '36px', // Adjusted size slightly
                        fontWeight: '400',
                        letterSpacing: '-0.8px',
                        lineHeight: 'normal',
                        whiteSpace: 'nowrap',
                        width: 'fit-content'
                    }}
                  >
                    {rotatingTexts[currentTextIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
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
    </motion.div>
  );
}

export default IntroAnimation; 