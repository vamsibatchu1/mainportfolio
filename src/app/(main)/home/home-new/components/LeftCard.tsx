'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TextScramble } from '@/components/ui/text-scramble';
import { motion, AnimationDefinition } from 'framer-motion';
import { priFont, fiveFont } from '@/app/fonts';
import { PixelGridBlock } from './PixelGridBlock';

// Brand colors (ensure these match your design system)
const brandColors = {
  white: "#FFFFFF",
  black: "#000000",
  zenith: "#FBAF1D",      // Orange/Yellow for MiscMisc6 (symbol1)
  nebula: "#E29FC8",      // Pink for Flower (symbol3)
  juniper: "#4F7834",     // Green for Vector (symbol6) - large square
  breeze: "#90D9E0",      // Light Blue for Triangle (symbol5)
  paprika: "#F25A3F",     // Red-Orange for EllipseEllipse6 (symbol4)
  lavenderBlush: "#C2B8FF", // Purple-ish for Rectangle (symbol2)
  darkGray: "#000000",   // Dark gray for empty blocks, matching image
};

// Icon component for the large square (Vector) is still needed.
const Vector: React.FC<{ className?: string }> = ({ className }) => (
  <Image src="/images/symbol6.svg" alt="Vector Symbol" width={80} height={80} className={className} />
);

interface UnitBlockProps {
  bgColor?: string;
  content?: React.ReactNode;
  className?: string;
  gridSpanCol?: number;
  gridSpanRow?: number;
}

const UnitBlock: React.FC<UnitBlockProps> = ({
  bgColor = brandColors.white,
  content,
  className = "",
  gridSpanCol,
  gridSpanRow,
}) => {
  const style: React.CSSProperties = { backgroundColor: bgColor };
  const combinedClassName = `w-full h-full flex items-center justify-center ${className}`;
  if (gridSpanCol) style.gridColumn = `span ${gridSpanCol} / span ${gridSpanCol}`;
  if (gridSpanRow) style.gridRow = `span ${gridSpanRow} / span ${gridSpanRow}`;
  
  if (className.includes('items-start')) {
    // For text block, ensure text align start is preserved 
    // No need to set display flex here as combinedClassName already does
  } else {
    // Default to centering for other blocks
    // display, alignItems, justifyContent are handled by combinedClassName
  }

  return (
    <div style={style} className={combinedClassName}>
      {content}
    </div>
  );
};

// Updated animation variants for fade-in only
const blockAnimationVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

const INITIAL_DELAY = 1500; // 1.5 seconds
const STAGGER_DELAY = 75; // ms
// const CONTINUOUS_SCRAMBLE_DURATION = 60000; // No longer used here, TextScramble has its own default

// New constant for PixelGridBlock switching
const CONTINUOUS_BLOCK_SWITCH_INTERVAL = 5000; // ms (5 seconds)

// Placeholder Shapes for 6x6 PixelGridBlock (36 pixels, indices 0-35)
// const shapeForZenith: number[] = [8, 14, 13, 15, 20]; // Small Plus - REMOVED
// const shapeForPaprika: number[] = [8, 10, 14, 18, 20]; // Small X - REMOVED
// const shapeForLavenderBlush: number[] = [7, 8, 9, 13, 15, 19, 20, 21]; // Hollow Square 3x3 - REMOVED
// const shapeForNebula: number[] = [2, 8, 14, 20, 10, 16]; // Small Diamond - REMOVED
// const shapeForBreeze: number[] = [13, 14, 15, 16]; // Horizontal Line - REMOVED

// Define unique IDs for all 22 blocks
const allBlockIds = [
  'r1c1-v', 'r1c2-a', 'r1c3-m', 'r1c4-s', 'r1c5-icon', 'r1c6-i', 'r1c7-dark', 'r1c8-dark', 'r1c9-dark',
  'r2c1-dark', 'r2c2-text', 'r2c5-ellipse', 'r2c6-rectangle', 'r2c7-dark',
  'r3c1-dark', 'r3c2-dark', 'r3c3-dark', 'r3c4-flower', 'r3c5-batchu', 'r3c6-triangle', 'r3c7-breeze',
  'large-square'
];

const textScrambleBlockIds = ['r1c1-v', 'r1c2-a', 'r1c3-m', 'r1c4-s', 'r1c6-i'];
const pixelGridBlockIds = ['r1c5-icon', 'r2c5-ellipse', 'r2c6-rectangle', 'r3c5-batchu', 'r3c7-breeze'];

// SVG path mapping for PixelGridBlocks
const pixelGridSVGs: Record<string, string> = {
  'r1c5-icon': "/images/symbol1.svg",
  'r2c5-ellipse': "/images/symbol4.svg",
  'r2c6-rectangle': "/images/symbol2.svg",
  'r3c5-batchu': "/images/symbol3.svg",
  'r3c7-breeze': "/images/symbol5.svg",
};

const LeftCard: React.FC = () => {
  const [blockVisibility, setBlockVisibility] = useState<Record<string, boolean>>({});
  const [isScramblingActive, setIsScramblingActive] = useState<Record<string, boolean>>({});
  const [pixelGridTrigger, setPixelGridTrigger] = useState<Record<string, boolean>>({});
  const lastBlockIdRef = useRef<string | null>(null);
  const scrambleTimeoutsRef = useRef<Record<string, NodeJS.Timeout>>({});

  // New state for managing active PixelGridBlock
  const [readyForContinuousAnimIds, setReadyForContinuousAnimIds] = useState<Set<string>>(new Set());
  const [activeContinuousPixelBlockId, setActiveContinuousPixelBlockId] = useState<string | null>(null);

  useEffect(() => {
    const shuffledIds = [...allBlockIds].sort(() => Math.random() - 0.5);
    if (shuffledIds.length > 0) {
      lastBlockIdRef.current = shuffledIds[shuffledIds.length - 1];
    }

    shuffledIds.forEach((id, index) => {
      setTimeout(() => {
        setBlockVisibility(prev => ({ ...prev, [id]: true }));
      }, INITIAL_DELAY + index * STAGGER_DELAY);
    });
    
    // Cleanup timeouts on unmount
    return () => {
      // Clear all scramble timeouts
      Object.values(scrambleTimeoutsRef.current).forEach(clearTimeout);
    };
  }, []);

  // New useEffect to manage switching the active PixelGridBlock
  useEffect(() => {
    let switchInterval: NodeJS.Timeout | undefined;

    if (readyForContinuousAnimIds.size > 0) {
      switchInterval = setInterval(() => {
        const readyIdsArray = Array.from(readyForContinuousAnimIds);
        if (readyIdsArray.length > 0) {
          // If there's an active block, try not to pick it again immediately
          let newActiveId = activeContinuousPixelBlockId;
          if (readyIdsArray.length === 1) {
            newActiveId = readyIdsArray[0];
          } else {
            const availableIds = readyIdsArray.filter(id => id !== activeContinuousPixelBlockId);
            newActiveId = availableIds[Math.floor(Math.random() * availableIds.length)];
            // Fallback if filter results in empty (e.g. only one was active and it's still the only one ready)
            if (!newActiveId && readyIdsArray.length > 0) {
                newActiveId = readyIdsArray[Math.floor(Math.random() * readyIdsArray.length)];
            }
          }
          setActiveContinuousPixelBlockId(newActiveId);
        } else {
          setActiveContinuousPixelBlockId(null);
        }
      }, CONTINUOUS_BLOCK_SWITCH_INTERVAL);
    } else {
      setActiveContinuousPixelBlockId(null); // No blocks ready, so no active block
    }

    return () => {
      if (switchInterval) {
        clearInterval(switchInterval);
      }
    };
  }, [readyForContinuousAnimIds, activeContinuousPixelBlockId]); // Re-run if ready set changes or active block changes

  const handlePixelGridReadyForContinuous = (id: string) => {
    setReadyForContinuousAnimIds(prev => new Set(prev).add(id));
  };

  const handleAnimationComplete = (id: string) => (definition: AnimationDefinition) => {
    if (definition === "visible") {
      if (textScrambleBlockIds.includes(id)) {
        setIsScramblingActive(prev => ({ ...prev, [id]: true })); // Start this block's scramble

        // Clear any existing timeout for this block before setting a new one
        if (scrambleTimeoutsRef.current[id]) {
          clearTimeout(scrambleTimeoutsRef.current[id]);
        }
        // Set a 5-second timeout to stop scrambling for this block
        scrambleTimeoutsRef.current[id] = setTimeout(() => {
          setIsScramblingActive(prev => ({ ...prev, [id]: false }));
        }, 5000); 
      }
      if (pixelGridBlockIds.includes(id)) {
        setPixelGridTrigger(prev => ({ ...prev, [id]: true }));
      }
      if (id === lastBlockIdRef.current) {
        // setAllBlocksFadedIn(true); // This line is removed as allBlocksFadedIn state is removed
      }
    }
  };

  return (
    <div 
      className="grid gap-4 bg-black p-0 m-0"
      style={{
        gridTemplateColumns: 'repeat(9, 96px)',
        gridTemplateRows: 'repeat(3, 96px)',
        width: '992px',
        height: '320px'
      }}
    >
      {/* Row 1 */}
      <motion.div 
        key="r1c1-v" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r1c1-v'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r1c1-v')}
      >
        <UnitBlock content={ 
          <div className={`${priFont.className} text-[80px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>
            <TextScramble speed={0.08} characterSet="abcdefghijklmnopqrstuvwxyz" trigger={isScramblingActive['r1c1-v'] || false}>
              v
            </TextScramble>
          </div>} 
        />
      </motion.div>
      <motion.div 
        key="r1c2-a" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r1c2-a'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r1c2-a')}
      >
        <UnitBlock content={ 
          <div className={`${priFont.className} text-[80px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>
            <TextScramble speed={0.08} characterSet="abcdefghijklmnopqrstuvwxyz" trigger={isScramblingActive['r1c2-a'] || false}>
              a
            </TextScramble>
          </div>} 
        />
      </motion.div>
      <motion.div 
        key="r1c3-m" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r1c3-m'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r1c3-m')}
      >
        <UnitBlock content={ 
          <div className={`${priFont.className} text-[80px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>
            <TextScramble speed={0.08} characterSet="abcdefghijklmnopqrstuvwxyz" trigger={isScramblingActive['r1c3-m'] || false}>
              m
            </TextScramble>
          </div>} 
        />
      </motion.div>
      <motion.div 
        key="r1c5-icon" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r1c5-icon'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r1c5-icon')}
      >
        <UnitBlock bgColor={brandColors.black} content={<PixelGridBlock id="r1c5-icon" baseColor={brandColors.zenith} trigger={pixelGridTrigger['r1c5-icon'] || false} onReadyForContinuous={handlePixelGridReadyForContinuous} isContinuouslyActive={activeContinuousPixelBlockId === 'r1c5-icon'} svgSrc={pixelGridSVGs['r1c5-icon']} />} />
      </motion.div>
      <motion.div 
        key="r1c4-s" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r1c4-s'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r1c4-s')}
      >
        <UnitBlock content={ 
          <div className={`${priFont.className} text-[80px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>
            <TextScramble speed={0.08} characterSet="abcdefghijklmnopqrstuvwxyz" trigger={isScramblingActive['r1c4-s'] || false}>
              s
            </TextScramble>
          </div>} 
        />
      </motion.div>
      <motion.div 
        key="r2c5-ellipse" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r2c5-ellipse'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r2c5-ellipse')}
      >
        <UnitBlock bgColor={brandColors.black} content={<PixelGridBlock id="r2c5-ellipse" baseColor={brandColors.paprika} trigger={pixelGridTrigger['r2c5-ellipse'] || false} onReadyForContinuous={handlePixelGridReadyForContinuous} isContinuouslyActive={activeContinuousPixelBlockId === 'r2c5-ellipse'} svgSrc={pixelGridSVGs['r2c5-ellipse']} />} />
      </motion.div>
      <motion.div 
        key="r1c7-dark" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r1c7-dark'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r1c7-dark')}
      >
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div 
        key="r1c8-dark" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r1c8-dark'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r1c8-dark')}
      >
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div 
        key="r1c9-dark" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r1c9-dark'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r1c9-dark')}
      >
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>

      {/* Row 2 */}
      <motion.div 
        key="r2c1-dark" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r2c1-dark'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r2c1-dark')}
      >
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div 
        key="r2c2-text" 
        style={{ gridColumn: 'span 3 / span 3' }} 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r2c2-text'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r2c2-text')}
      >
        <UnitBlock 
          bgColor={brandColors.black}
          className={`${fiveFont.className} text-[#dedede] text-[20px] leading-[24px] p-3 text-right items-start justify-end`}
          content="hands on product design leader with 10+ years of experience in designing & leading teams developing highly impactful products at scale."
        />
      </motion.div>
      <motion.div 
        key="r2c6-rectangle" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r2c6-rectangle'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r2c6-rectangle')}
      >
        <UnitBlock bgColor={brandColors.black} content={<PixelGridBlock id="r2c6-rectangle" baseColor={brandColors.lavenderBlush} trigger={pixelGridTrigger['r2c6-rectangle'] || false} onReadyForContinuous={handlePixelGridReadyForContinuous} isContinuouslyActive={activeContinuousPixelBlockId === 'r2c6-rectangle'} svgSrc={pixelGridSVGs['r2c6-rectangle']} />} />
      </motion.div>
      <motion.div 
        key="r1c6-i" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r1c6-i'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r1c6-i')}
      >
        <UnitBlock content={ 
          <div className={`${priFont.className} text-[72px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>
            <TextScramble speed={0.08} characterSet="abcdefghijklmnopqrstuvwxyz" trigger={isScramblingActive['r1c6-i'] || false}>
              i
            </TextScramble>
          </div>} 
        />
      </motion.div>
      
      <motion.div 
        key="r2c7-dark" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r2c7-dark'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r2c7-dark')}
      >
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>

      {/* Row 3 */}
      <motion.div 
        key="r3c1-dark" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r3c1-dark'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r3c1-dark')}
      >
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div 
        key="r3c2-dark" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r3c2-dark'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r3c2-dark')}
      >
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div 
        key="r3c3-dark" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r3c3-dark'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r3c3-dark')}
      >
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div 
        key="r3c4-flower" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r3c4-flower'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r3c4-flower')}
      >
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div 
        key="r3c5-batchu" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r3c5-batchu'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r3c5-batchu')}
      >
        <UnitBlock bgColor={brandColors.black} content={<PixelGridBlock id="r3c5-batchu" baseColor={brandColors.nebula} trigger={pixelGridTrigger['r3c5-batchu'] || false} onReadyForContinuous={handlePixelGridReadyForContinuous} isContinuouslyActive={activeContinuousPixelBlockId === 'r3c5-batchu'} svgSrc={pixelGridSVGs['r3c5-batchu']} />} />
      </motion.div>
      <motion.div 
        key="r3c6-triangle" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r3c6-triangle'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r3c6-triangle')}
      >
        <UnitBlock content={ 
          <div className={`${priFont.className} text-[32px] leading-[32px] text-center text-black`}>
            <div>
              bat
            </div>
            <div>
              chu
            </div>
          </div>} 
        />
      </motion.div>
      <motion.div 
        key="r3c7-breeze" 
        variants={blockAnimationVariants} 
        initial="hidden" 
        animate={blockVisibility['r3c7-breeze'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('r3c7-breeze')}
      >
        <UnitBlock bgColor={brandColors.black} content={<PixelGridBlock id="r3c7-breeze" baseColor={brandColors.breeze} trigger={pixelGridTrigger['r3c7-breeze'] || false} onReadyForContinuous={handlePixelGridReadyForContinuous} isContinuouslyActive={activeContinuousPixelBlockId === 'r3c7-breeze'} svgSrc={pixelGridSVGs['r3c7-breeze']} />} />
      </motion.div>
      
      {/* Large 2x2 Square */}
      <motion.div 
        key="large-square"
        className="flex items-center justify-center"
        style={{
          gridColumn: '8 / span 2',
          gridRow: '2 / span 2',
          backgroundColor: brandColors.juniper,
          width: '208px',
          height: '208px'
        }}
        variants={blockAnimationVariants}
        initial="hidden"
        animate={blockVisibility['large-square'] ? "visible" : "hidden"}
        onAnimationComplete={handleAnimationComplete('large-square')}
      >
        <Vector />
      </motion.div>
    </div>
  );
};

export default LeftCard; 