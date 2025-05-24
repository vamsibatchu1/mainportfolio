'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Import next/image
import { motion } from 'framer-motion';

// const GRID_SIZE = 6; // gridSize prop will be used directly
// const TOTAL_PIXELS = GRID_SIZE * GRID_SIZE; // Replaced by numPixels logic
const SHAPE_PIXEL_COLOR = '#FFFFFF';
const POST_FILL_READY_DELAY = 50; // ms, delay after fill animation before signaling ready

// Constants for continuous random animation
const CONTINUOUS_ANIM_INTERVAL = 1000; // ms, how often the random pattern changes
const NUM_RANDOM_ACTIVE_PIXELS = 12; // Number of pixels to be white in the random pattern (increased from 6 to 12)
const CONTINUOUS_PIXEL_STAGGER = 50; // ms, stagger for each pixel in the continuous random sequence

const INITIAL_PIXEL_COLOR = '#1A1A1A'; // Dark gray, initial state of pixels

interface PixelGridBlockProps {
  id: string; // Unique ID for this block instance
  baseColor: string;
  trigger: boolean;
  gridSize?: number;
  // shapeIndices?: number[]; // Prop remains for now, but won't be used for shape animation
  onReadyForContinuous?: (id: string) => void; // Callback when ready for continuous animation
  isContinuouslyActive?: boolean; // Whether this block should be performing continuous animation
  svgSrc?: string; // New prop for SVG source path
}

type AnimationPhase = 'idle' | 'initialFill' | 'continuousRandom';

export const PixelGridBlock: React.FC<PixelGridBlockProps> = ({
  id,
  baseColor,
  trigger,
  gridSize = 6, // Default gridSize
  onReadyForContinuous,
  isContinuouslyActive,
  svgSrc, // Destructure new prop
}) => {
  const numPixels = gridSize * gridSize;
  const [pixelTargetColors, setPixelTargetColors] = useState<string[]>(
    Array(numPixels).fill(INITIAL_PIXEL_COLOR)
  );
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('idle');
  const staggerTimeoutsRef = useRef<NodeJS.Timeout[]>([]); // Moved useRef to the top level

  useEffect(() => {
    if (trigger && animationPhase === 'idle') {
      setAnimationPhase('initialFill');
      setPixelTargetColors(Array(numPixels).fill(baseColor));
      const fillAnimationDuration = 400; 
      setTimeout(() => {
        // Directly transition to continuousRandom and signal readiness
        setAnimationPhase('continuousRandom');
        onReadyForContinuous?.(id);
      }, fillAnimationDuration + POST_FILL_READY_DELAY);
    } else if (!trigger && animationPhase !== 'idle') {
      setPixelTargetColors(Array(numPixels).fill(INITIAL_PIXEL_COLOR));
      setAnimationPhase('idle');
    }
    // Removed shapeIndices and SHAPE_FORMATION_DELAY_AFTER_FILL from dependencies
  }, [trigger, baseColor, numPixels, animationPhase, id, onReadyForContinuous /* POST_FILL_READY_DELAY is constant */]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    // staggerTimeoutsRef is already defined in the component scope by useRef

    if (animationPhase === 'continuousRandom' && isContinuouslyActive) {
      intervalId = setInterval(() => {
        // 1. Clear previous stagger timeouts from the last interval run
        staggerTimeoutsRef.current.forEach(clearTimeout);
        staggerTimeoutsRef.current = [];

        // 2. Determine the sequence of pixels to turn white using a random walk starting from an edge
        const finalPixelsToAnimateWhite: number[] = [];
        if (numPixels > 0) {
            const edgePixelIndices: number[] = [];
            for (let r = 0; r < gridSize; r++) {
                for (let c = 0; c < gridSize; c++) {
                    if (r === 0 || r === gridSize - 1 || c === 0 || c === gridSize - 1) {
                        edgePixelIndices.push(r * gridSize + c);
                    }
                }
            }

            if (edgePixelIndices.length > 0) {
                const visited = new Set<number>();
                const startNode = edgePixelIndices[Math.floor(Math.random() * edgePixelIndices.length)];
                finalPixelsToAnimateWhite.push(startNode);
                visited.add(startNode);

                for (let i = 1; i < NUM_RANDOM_ACTIVE_PIXELS; i++) {
                    const lastPixel = finalPixelsToAnimateWhite[finalPixelsToAnimateWhite.length - 1];
                    const x = lastPixel % gridSize;
                    const y = Math.floor(lastPixel / gridSize);
                    
                    const potentialNeighbors: number[] = [];
                    // Right
                    if (x + 1 < gridSize) potentialNeighbors.push(lastPixel + 1);
                    // Left
                    if (x - 1 >= 0) potentialNeighbors.push(lastPixel - 1);    
                    // Down
                    if (y + 1 < gridSize) potentialNeighbors.push(lastPixel + gridSize); 
                    // Up
                    if (y - 1 >= 0) potentialNeighbors.push(lastPixel - gridSize); 

                    const unvisitedNeighbors = potentialNeighbors.filter(n => !visited.has(n));

                    if (unvisitedNeighbors.length > 0) {
                        const nextPixel = unvisitedNeighbors[Math.floor(Math.random() * unvisitedNeighbors.length)];
                        finalPixelsToAnimateWhite.push(nextPixel);
                        visited.add(nextPixel);
                    } else {
                        break; // No unvisited neighbors for the sequence
                    }
                }
            } else if (numPixels > 0) { // Handle gridSize 1x1 case, treat the single pixel as edge
                finalPixelsToAnimateWhite.push(0);
            }
        }

        // 3. Set the target for all pixels to baseColor initially for this cycle
        setPixelTargetColors(Array(numPixels).fill(baseColor));

        // 4. Staggered animation for the newly selected white pixels
        finalPixelsToAnimateWhite.forEach((pixelIndex, arrIndex) => {
          const timer = setTimeout(() => {
            setPixelTargetColors(prevTargets => {
              const newTargets = [...prevTargets]; 
              newTargets[pixelIndex] = SHAPE_PIXEL_COLOR;
              return newTargets;
            });
          }, (arrIndex + 1) * CONTINUOUS_PIXEL_STAGGER); 
          staggerTimeoutsRef.current.push(timer);
        });

      }, CONTINUOUS_ANIM_INTERVAL);
    } else {
      // If not active or not in continuousRandom phase, ensure interval is cleared
      // This will be caught by the cleanup function of this useEffect when deps change.
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      // Clear any pending staggers when the effect cleans up or isContinuouslyActive becomes false
      staggerTimeoutsRef.current.forEach(clearTimeout);
      staggerTimeoutsRef.current = [];
    };
  }, [animationPhase, isContinuouslyActive, numPixels, baseColor, gridSize, CONTINUOUS_ANIM_INTERVAL, NUM_RANDOM_ACTIVE_PIXELS, CONTINUOUS_PIXEL_STAGGER]);

  // Effect to revert to base color if deselected during continuous animation
  useEffect(() => {
    if (animationPhase === 'continuousRandom' && !isContinuouslyActive) {
      // Already covered by the cleanup of the interval useEffect, but being explicit here for clarity
      // and to ensure pixel state is reset if the interval effect's conditions change rapidly.
      staggerTimeoutsRef.current.forEach(clearTimeout); 
      staggerTimeoutsRef.current = [];
      setPixelTargetColors(Array(numPixels).fill(baseColor));
    }
  }, [animationPhase, isContinuouslyActive, numPixels, baseColor]);

  // Conditional rendering logic
  if (animationPhase === 'continuousRandom' && !isContinuouslyActive && svgSrc) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={svgSrc} alt="Symbol" width={48} height={48} />
      </div>
    );
  }

  return (
    <div
      className="pixel-grid-block grid"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, ${16}px)`,
        gridTemplateRows: `repeat(${gridSize}, ${16}px)`,
        width: `${gridSize * 16}px`,
        height: `${gridSize * 16}px`,
        gap: 0,
      }}
    >
      {/* Render pixels based on pixelTargetColors. Each pixel animates to its target color. */}
      {Array.from({ length: numPixels }).map((_, index) => (
        <motion.div
          key={index}
          style={{
            width: `16px`,
            height: `16px`,
          }}
          initial={{ backgroundColor: INITIAL_PIXEL_COLOR }} // Always start from initial
          animate={{ backgroundColor: pixelTargetColors[index] }} // Animate to the current target color
          transition={{ duration: 0.4, ease: "easeOut" }} // Smooth color transition
        />
      ))}
    </div>
  );
}; 