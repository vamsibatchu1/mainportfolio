'use client';

import React, { useState, useEffect, useRef } from 'react';
import { jakartaFont, ebGaramondFont } from '@/app/fonts';
import { motion } from 'framer-motion';

interface CrosswordCell {
  row: number;
  col: number;
  letter: string;
  number?: number;
  isBlocked: boolean;
  isHorizontal?: boolean;
  isVertical?: boolean;
}

interface CrosswordClue {
  number: number;
  direction: 'horizontal' | 'vertical';
  clue: string;
  answer: string;
  startRow: number;
  startCol: number;
}

// 10x10 Crossword Grid
// Skills and Expertise intersecting to create meaningful work
const crosswordClues: CrosswordClue[] = [
  // Expertise (Horizontal) - what you work on
  { number: 1, direction: 'horizontal', clue: 'Platforms for large organizations with complex workflows and enterprise solutions', answer: 'ENTERPRISE', startRow: 0, startCol: 0 },
  { number: 2, direction: 'horizontal', clue: 'Touch-based applications for smartphones and tablets with intuitive interfaces', answer: 'MOBILE', startRow: 2, startCol: 0 },
  { number: 3, direction: 'horizontal', clue: 'User-facing products that engage consumers with delightful experiences', answer: 'CONSUMER', startRow: 4, startCol: 0 },
  { number: 4, direction: 'horizontal', clue: 'Reusable component libraries and design systems for consistency and scalability', answer: 'SYSTEMS', startRow: 5, startCol: 0 },
  { number: 5, direction: 'horizontal', clue: 'High-impact initiatives and moonshot projects that drive innovation', answer: 'BIGBETS', startRow: 8, startCol: 0 },
  
  // Skills (Vertical) - capabilities you bring
  { number: 1, direction: 'vertical', clue: 'Artificial intelligence products and machine learning interfaces that make AI accessible', answer: 'AI', startRow: 0, startCol: 1 },
  { number: 2, direction: 'vertical', clue: 'Visual design craft and aesthetic excellence for beautiful interfaces', answer: 'DESIGN', startRow: 0, startCol: 4 },
  { number: 3, direction: 'vertical', clue: 'User experience focus and interaction design prioritizing usability', answer: 'UX', startRow: 0, startCol: 7 },
  { number: 4, direction: 'vertical', clue: 'Product strategy and vision aligning design with business goals', answer: 'STRATEGY', startRow: 1, startCol: 9 },
  { number: 5, direction: 'vertical', clue: 'Research and user insights to inform design decisions', answer: 'RESEARCH', startRow: 2, startCol: 3 },
  { number: 6, direction: 'vertical', clue: 'Prototyping and rapid iteration to validate concepts', answer: 'PROTOTYPE', startRow: 1, startCol: 6 },
];

// Initialize 10x10 grid
const initializeGrid = (): CrosswordCell[][] => {
  const grid: CrosswordCell[][] = [];
  
  for (let row = 0; row < 10; row++) {
    grid[row] = [];
    for (let col = 0; col < 10; col++) {
      grid[row][col] = {
        row,
        col,
        letter: '',
        isBlocked: false,
      };
    }
  }
  
  // Place words on grid
  crosswordClues.forEach(clue => {
    const answer = clue.answer.toUpperCase();
    for (let i = 0; i < answer.length; i++) {
      if (clue.direction === 'horizontal') {
        if (clue.startRow < 10 && clue.startCol + i < 10) {
          if (!grid[clue.startRow][clue.startCol + i].letter) {
            grid[clue.startRow][clue.startCol + i].letter = answer[i];
          }
          grid[clue.startRow][clue.startCol + i].isHorizontal = true;
          if (i === 0 && !grid[clue.startRow][clue.startCol + i].number) {
            grid[clue.startRow][clue.startCol + i].number = clue.number;
          }
        }
      } else {
        if (clue.startRow + i < 10 && clue.startCol < 10) {
          if (!grid[clue.startRow + i][clue.startCol].letter) {
            grid[clue.startRow + i][clue.startCol].letter = answer[i];
          }
          grid[clue.startRow + i][clue.startCol].isVertical = true;
          if (i === 0 && !grid[clue.startRow + i][clue.startCol].number) {
            grid[clue.startRow + i][clue.startCol].number = clue.number;
          }
        }
      }
    }
  });
  
  // Mark cells without letters as blocked
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (!grid[row][col].letter) {
        grid[row][col].isBlocked = true;
      }
    }
  }
  
  return grid;
};

export default function CrosswordSection() {
  const [grid, setGrid] = useState<CrosswordCell[][]>(initializeGrid());
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [hoveredClue, setHoveredClue] = useState<{ number: number; direction: 'horizontal' | 'vertical' } | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoHighlightIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const verticalClues = crosswordClues.filter(c => c.direction === 'vertical').sort((a, b) => a.number - b.number);
  const horizontalClues = crosswordClues.filter(c => c.direction === 'horizontal').sort((a, b) => a.number - b.number);

  const handleCellClick = (row: number, col: number) => {
    if (!grid[row][col].isBlocked) {
      setSelectedCell({ row, col });
    }
  };

  const highlightClue = (clue: CrosswordClue) => {
    const cells: { row: number; col: number }[] = [];
    const answer = clue.answer.toUpperCase();
    
    for (let i = 0; i < answer.length; i++) {
      if (clue.direction === 'horizontal') {
        if (clue.startRow < 10 && clue.startCol + i < 10) {
          cells.push({ row: clue.startRow, col: clue.startCol + i });
        }
      } else {
        if (clue.startRow + i < 10 && clue.startCol < 10) {
          cells.push({ row: clue.startRow + i, col: clue.startCol });
        }
      }
    }
    
    return cells;
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-highlighting logic
  useEffect(() => {
    // Clear any existing interval
    if (autoHighlightIntervalRef.current) {
      clearInterval(autoHighlightIntervalRef.current);
    }

    // Only auto-highlight if section is in view and user is not manually hovering
    if (isInView && !isUserHovering) {
      // Start with a random clue
      const randomClue = crosswordClues[Math.floor(Math.random() * crosswordClues.length)];
      setHoveredClue({ number: randomClue.number, direction: randomClue.direction });

      // Set up interval to randomly highlight clues
      autoHighlightIntervalRef.current = setInterval(() => {
        const randomClue = crosswordClues[Math.floor(Math.random() * crosswordClues.length)];
        setHoveredClue({ number: randomClue.number, direction: randomClue.direction });
      }, 800); // Change clue every 0.8 seconds
    } else {
      // Clear highlight when section is out of view or user is hovering
      if (!isUserHovering) {
        setHoveredClue(null);
      }
    }

    return () => {
      if (autoHighlightIntervalRef.current) {
        clearInterval(autoHighlightIntervalRef.current);
      }
    };
  }, [isInView, isUserHovering]);

  return (
    <div ref={sectionRef} className="w-full flex flex-col lg:flex-row gap-[40px] lg:gap-[40px] max-w-[1440px] mx-auto">
      {/* Column 1: Skills (Vertical) */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className={`${jakartaFont.className} font-jakarta font-semibold text-xl text-black mb-2`}>
          Skills
        </div>
        <div className={`${ebGaramondFont.className} font-eb-garamond text-base sm:text-lg text-black leading-relaxed`}>
          {verticalClues.map((clue, index) => {
            const isHovered = hoveredClue?.number === clue.number && hoveredClue?.direction === 'vertical';
            return (
              <React.Fragment key={`vertical-${clue.number}`}>
                <span
                  className={`cursor-pointer transition-colors ${isHovered ? 'px-1' : ''}`}
                  style={isHovered ? { backgroundColor: '#FFE500' } : {}}
                  onMouseEnter={() => {
                    setIsUserHovering(true);
                    setHoveredClue({ number: clue.number, direction: 'vertical' });
                  }}
                  onMouseLeave={() => {
                    setIsUserHovering(false);
                    setHoveredClue(null);
                  }}
                >
                  <span className="font-semibold">{clue.number}.</span> {clue.clue}
                </span>
                {index < verticalClues.length - 1 && '  '}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Column 2: Expertise (Horizontal) */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className={`${jakartaFont.className} font-jakarta font-semibold text-xl text-black mb-2`}>
          Expertise
        </div>
        <div className={`${ebGaramondFont.className} font-eb-garamond text-base sm:text-lg text-black leading-relaxed`}>
          {horizontalClues.map((clue, index) => {
            const isHovered = hoveredClue?.number === clue.number && hoveredClue?.direction === 'horizontal';
            return (
              <React.Fragment key={`horizontal-${clue.number}`}>
                <span
                  className={`cursor-pointer transition-colors ${isHovered ? 'px-1' : ''}`}
                  style={isHovered ? { backgroundColor: '#FFE500' } : {}}
                  onMouseEnter={() => {
                    setIsUserHovering(true);
                    setHoveredClue({ number: clue.number, direction: 'horizontal' });
                  }}
                  onMouseLeave={() => {
                    setIsUserHovering(false);
                    setHoveredClue(null);
                  }}
                >
                  <span className="font-semibold">{clue.number}.</span> {clue.clue}
                </span>
                {index < horizontalClues.length - 1 && '  '}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Columns 3 & 4: Crossword Grid */}
      <div className="flex flex-col gap-4 flex-[2] min-w-0">
        <div className="flex justify-center w-full overflow-x-auto">
          <div className="grid grid-cols-10 gap-0 border-2 border-black" style={{ minWidth: '400px' }}>
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => {
                const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
                const highlightedCells = hoveredClue !== null 
                  ? highlightClue(crosswordClues.find(c => c.number === hoveredClue.number && c.direction === hoveredClue.direction)!)
                  : [];
                const isHighlighted = highlightedCells.some(c => c.row === rowIndex && c.col === colIndex);

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`
                      w-10 h-10 border border-gray-300 flex items-center justify-center relative
                      ${cell.isBlocked ? 'bg-black' : 'bg-white'}
                      ${isSelected ? 'ring-2 ring-blue-500 z-10' : ''}
                      ${!cell.isBlocked ? 'cursor-pointer hover:bg-gray-100' : ''}
                      transition-colors
                    `}
                    style={isHighlighted ? { backgroundColor: '#FFE500' } : {}}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {cell.number && (
                      <span className={`${jakartaFont.className} font-jakarta absolute top-0 left-1 text-[10px] font-semibold leading-none`}>
                        {cell.number}
                      </span>
                    )}
                    {!cell.isBlocked && (
                      <span className={`${ebGaramondFont.className} font-eb-garamond text-base sm:text-lg font-semibold`}>
                        {cell.letter}
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

