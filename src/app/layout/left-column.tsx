'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { jakartaFont, fiveFont } from '../fonts';

interface LeftColumnProps {
  activeItem: number;
  setActiveItem: (index: number) => void;
}

export default function LeftColumn({ activeItem, setActiveItem }: LeftColumnProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [animationFrame, setAnimationFrame] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Pixel configurations for each navigation item with multiple animation frames
  const pixelConfigs = {
    home: {
      default: [
        [1, 1, 1, 1],
        [0, 0, 0, 1]
      ],
      frames: [
        [
          [1, 0, 0, 0],
          [1, 1, 1, 1]
        ],
        [
          [0, 1, 0, 0],
          [1, 0, 1, 1]
        ],
        [
          [0, 0, 1, 0],
          [1, 1, 0, 1]
        ],
        [
          [0, 0, 0, 1],
          [1, 1, 1, 0]
        ]
      ]
    },
    work: {
      default: [
        [1, 0, 0, 1],
        [1, 1, 1, 1]
      ],
      frames: [
        [
          [0, 1, 1, 0],
          [1, 0, 0, 1]
        ],
        [
          [1, 0, 1, 0],
          [0, 1, 0, 1]
        ],
        [
          [0, 1, 0, 1],
          [1, 0, 1, 0]
        ],
        [
          [1, 1, 0, 0],
          [0, 0, 1, 1]
        ]
      ]
    },
    experiments: {
      default: [
        [1, 1, 1, 1],
        [1, 0, 1, 0]
      ],
      frames: [
        [
          [0, 1, 0, 0],
          [1, 1, 1, 1]
        ],
        [
          [1, 0, 1, 0],
          [0, 1, 0, 1]
        ],
        [
          [0, 0, 1, 1],
          [1, 1, 0, 0]
        ],
        [
          [1, 0, 0, 1],
          [0, 1, 1, 0]
        ]
      ]
    },
    writing: {
      default: [
        [1, 0, 1, 0],
        [0, 1, 0, 1]
      ],
      frames: [
        [
          [0, 0, 0, 1],
          [1, 1, 1, 0]
        ],
        [
          [0, 0, 1, 0],
          [1, 1, 0, 1]
        ],
        [
          [0, 1, 0, 0],
          [1, 0, 1, 1]
        ],
        [
          [1, 0, 0, 0],
          [0, 1, 1, 1]
        ]
      ]
    },
    about: {
      default: [
        [1, 1, 0, 1],
        [0, 0, 1, 1]
      ],
      frames: [
        [
          [0, 1, 1, 0],
          [0, 1, 1, 0]
        ],
        [
          [1, 0, 0, 1],
          [0, 1, 1, 0]
        ],
        [
          [0, 1, 1, 0],
          [1, 0, 0, 1]
        ],
        [
          [1, 1, 0, 0],
          [0, 0, 1, 1]
        ]
      ]
    }
  };

  const colors = ['#16B364', '#2973DE', '#FDB022', '#A48AFB', '#EF6820'];
  const navItems = ['Home', 'Work', 'Play', 'Writing', 'About'];





  // Text scramble effect - progressive character reveal
  const [scrambledTexts, setScrambledTexts] = useState<{ [key: string]: string }>({});
  const [scrambleProgress, setScrambleProgress] = useState(0);
  
  const scrambleText = (text: string, key: string) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    
    if (!scrambledTexts[key]) {
      // Initialize with fully scrambled text
      const initialScrambled = text.split('').map(char => 
        char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]
      ).join('');
      setScrambledTexts(prev => ({ ...prev, [key]: initialScrambled }));
      return initialScrambled;
    }
    
    // Progressive reveal based on scrambleProgress
    let result = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        result += ' ';
        continue;
      }
      
      if (scrambleProgress * text.length > i) {
        result += text[i]; // Reveal correct character
      } else {
        result += chars[Math.floor(Math.random() * chars.length)]; // Keep scrambled
      }
    }
    
    return result;
  };

  const handleItemClick = (index: number) => {
    if (index === activeItem) return; // Don't scramble if clicking the same item
    
    setIsScrambling(true);
    
    // Progressive scramble animation for click
    const steps = 30; // Number of animation steps (faster than initial load)
    let step = 0;
    
    const interval = setInterval(() => {
      step++;
      setScrambleProgress(step / steps);
      
      if (step >= steps) {
        clearInterval(interval);
        setActiveItem(index);
        setIsScrambling(false);
        setScrambleProgress(0);
      }
    }, 15); // 15ms per step = 450ms total
    
    return () => clearInterval(interval);
  };

  // Initial load text scramble effect
  useEffect(() => {
    if (isInitialLoad) {
      setIsScrambling(true);
      
      // Progressive scramble animation
      const steps = 40; // Number of animation steps
      let step = 0;
      
      const interval = setInterval(() => {
        step++;
        setScrambleProgress(step / steps);
        
        if (step >= steps) {
          clearInterval(interval);
          setIsScrambling(false);
          setIsInitialLoad(false);
          setScrambleProgress(0);
        }
      }, 20); // 20ms per step = 800ms total
      
      return () => clearInterval(interval);
    }
  }, [isInitialLoad]);

  // Animation loop effect
  useEffect(() => {
    if (hoveredItem !== null) {
      const interval = setInterval(() => {
        setAnimationFrame((prev) => (prev + 1) % 4);
      }, 400); // Change frame every 400ms

      return () => clearInterval(interval);
    } else {
      setAnimationFrame(0);
    }
  }, [hoveredItem]);

  const renderPixelIcon = (config: number[][], color: string) => (
    <div className="flex flex-col">
      {config.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.map((pixel, colIndex) => (
            <div
              key={colIndex}
              className="w-5 h-5 transition-all duration-200 ease-out"
              style={{
                backgroundColor: pixel ? color : 'transparent'
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col">
      {/* Navigation Section */}
      <div className="flex flex-col gap-8 scale-[0.7] origin-top-left">
        {/* Active Item - Large */}
        <motion.div 
          className="flex flex-row items-center gap-3 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onMouseEnter={() => setHoveredItem(activeItem)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => handleItemClick(activeItem)}
        >
          {renderPixelIcon(
            hoveredItem === activeItem ? pixelConfigs[Object.keys(pixelConfigs)[activeItem] as keyof typeof pixelConfigs].frames[animationFrame] : pixelConfigs[Object.keys(pixelConfigs)[activeItem] as keyof typeof pixelConfigs].default,
            colors[activeItem]
          )}
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em] transition-all duration-300`}>
            {(isScrambling || isInitialLoad) ? scrambleText(navItems[activeItem], `active-${activeItem}`) : navItems[activeItem]}
          </span>
        </motion.div>
        
        {/* Inactive Items - Fixed Width Grid */}
        <motion.div 
          className="flex flex-col gap-6 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {/* First Row - Always 3 items */}
          <div className="flex flex-row gap-6">
            {navItems
              .filter((_, index) => index !== activeItem) // Remove active item
              .slice(0, 3) // Take first 3 inactive items
              .map((item, arrayIndex) => {
                const originalIndex = navItems.findIndex((_, index) => index !== activeItem && navItems.slice(0, index + 1).filter((_, i) => i !== activeItem).length === arrayIndex + 1);
                
                return (
                  <div 
                    key={originalIndex}
                    className="w-[160px] flex flex-row items-center gap-2 cursor-pointer"
                    onMouseEnter={() => setHoveredItem(originalIndex)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => handleItemClick(originalIndex)}
                  >
                    {renderPixelIcon(
                      hoveredItem === originalIndex ? pixelConfigs[Object.keys(pixelConfigs)[originalIndex] as keyof typeof pixelConfigs].frames[animationFrame] : pixelConfigs[Object.keys(pixelConfigs)[originalIndex] as keyof typeof pixelConfigs].default,
                      colors[originalIndex]
                    )}
                    <span className={`${jakartaFont.className} text-white text-[20px] font-bold leading-[100%] tracking-[-0.04em] transition-all duration-300 flex-1`}>
                      {(isScrambling || isInitialLoad) ? scrambleText(item, `inactive-${originalIndex}`) : item}
                    </span>
                  </div>
                );
              })}
          </div>
          
          {/* Second Row - Remaining items */}
          <div className="flex flex-row gap-6">
            {navItems
              .filter((_, index) => index !== activeItem) // Remove active item
              .slice(3) // Take remaining inactive items
              .map((item, arrayIndex) => {
                const originalIndex = navItems.findIndex((_, index) => index !== activeItem && navItems.slice(0, index + 1).filter((_, i) => i !== activeItem).length === arrayIndex + 4);
                
                return (
                  <div 
                    key={originalIndex}
                    className="w-[160px] flex flex-row items-center gap-2 cursor-pointer"
                    onMouseEnter={() => setHoveredItem(originalIndex)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => handleItemClick(originalIndex)}
                  >
                    {renderPixelIcon(
                      hoveredItem === originalIndex ? pixelConfigs[Object.keys(pixelConfigs)[originalIndex] as keyof typeof pixelConfigs].frames[animationFrame] : pixelConfigs[Object.keys(pixelConfigs)[originalIndex] as keyof typeof pixelConfigs].default,
                      colors[originalIndex]
                    )}
                    <span className={`${jakartaFont.className} text-white text-[20px] font-bold leading-[100%] tracking-[-0.04em] transition-all duration-300 flex-1`}>
                      {(isScrambling || isInitialLoad) ? scrambleText(item, `inactive-${originalIndex}`) : item}
                    </span>
                  </div>
                );
              })}
          </div>
        </motion.div>
      </div>
      
      {/* Footer Section */}
      {/* ////////////////////////////////////////////////////////////// */}
      <motion.div 
        className="mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        {/* First row - 3 columns with 20px gap */}
        <div className="flex flex-row gap-5 items-end mb-4">
                      {/* First column - Image */}
            <div className="w-[103px] h-[40px]">
              <Image
                src="/images/refresh-images/v-b.svg"
                alt="Profile Image"
                width={80}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          
          {/* Second column - White cursor block */}
          <div className="w-6 h-10 bg-white"></div>
          
          {/* Third column - Text block with Instrument Serif */}
          <div className="flex-1">
            <div className={`${fiveFont.className} text-white text-[18px] leading-[100%] tracking-[0%]`}>
              product designer &
              creative technologist
              crafting possibilities with
              craft & code.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 