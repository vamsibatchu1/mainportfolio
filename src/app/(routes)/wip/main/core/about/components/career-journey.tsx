'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { interFont } from '@/app/fonts';

interface WorkExperience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  icon?: string;
  iconColor?: string;
  iconBgColor?: string;
  logoImage?: string;
  cardStyle: 'compact' | 'expanded';
  startYear: number;
  endYear: number;
  details: string;
}

const workExperiences: WorkExperience[] = [
  {
    id: 'rocket',
    role: 'Product Designer',
    company: 'Rocket',
    startDate: 'APR 21',
    endDate: 'PRESENT',
    logoImage: '/images/wip/about/rocket-bw.png',
    cardStyle: 'expanded',
    startYear: 2021,
    endYear: 2026, // Current year
    details: 'Leading product design initiatives at Rocket, focusing on creating innovative digital experiences and user-centered design solutions.',
  },
  {
    id: 'suntrust',
    role: 'Product Designer',
    company: 'SunTrust',
    startDate: '2018',
    endDate: 'APR 21',
    logoImage: '/images/wip/about/truist-bw.png',
    cardStyle: 'expanded',
    startYear: 2018,
    endYear: 2021,
    details: 'Designed and delivered user experiences for SunTrust\'s digital banking platform, working on complex financial products and services.',
  },
  {
    id: 'unisys',
    role: 'Product Designer',
    company: 'Unisys',
    startDate: 'DEC 14',
    endDate: 'AUG 17',
    logoImage: '/images/wip/about/unisys-bw.png',
    cardStyle: 'expanded',
    startYear: 2014,
    endYear: 2017,
    details: 'Worked on product design initiatives at Unisys, creating user experiences for enterprise software solutions.',
  },
];

const years = Array.from({ length: 13 }, (_, i) => 2026 - i); // 2026 down to 2014

export default function CareerJourney() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);
  const [hoverCardElement, setHoverCardElement] = useState<HTMLElement | null>(null);
  const hideTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    e.stopPropagation();
    
    // Clear any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    
    const cardElement = e.currentTarget;
    const containerElement = containerRef.current;
    
    if (!containerElement) {
      setHoveredCard(cardId);
      setHoverCardElement(cardElement);
      return;
    }
    
    const cardRect = cardElement.getBoundingClientRect();
    const containerRect = containerElement.getBoundingClientRect();
    
    // Calculate position relative to container
    const cardLeftRelative = cardRect.left - containerRect.left;
    const cardTopRelative = cardRect.top - containerRect.top;
    const cardWidth = 400; // Known card width
    
    const calloutWidth = 320;
    const gap = 16;
    
    // Position to the right of the card with gap
    let x = cardLeftRelative + cardWidth + gap;
    const containerWidth = containerElement.clientWidth;
    
    // Check if there's enough space on the right
    if (x + calloutWidth > containerWidth - 20) {
      // Not enough space on right, position to the left of the card
      x = cardLeftRelative - calloutWidth - gap;
    }
    
    setHoverPosition({
      x: Math.max(20, x), // Ensure it doesn't go off the left edge
      y: cardTopRelative,
    });
    setHoveredCard(cardId);
    setHoverCardElement(cardElement);
  };

  const handleMouseLeave = () => {
    // Add a small delay before hiding to allow moving to callout
    hideTimeoutRef.current = setTimeout(() => {
      setHoveredCard(null);
      setHoverPosition(null);
    }, 100);
  };
  
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const getCardTopPosition = (startYear: number, endYear: number) => {
    // Calculate position based on years
    // Each year takes 60px of vertical space
    const yearHeight = 60;
    // Position from top: cards align to the year they end
    // For multi-year cards, we calculate from the start year
    const topOffset = (2026 - endYear) * yearHeight;
    const duration = endYear - startYear + 1;
    const height = Math.max(duration * yearHeight, yearHeight); // At least one year height
    
    return {
      top: `${topOffset}px`,
      height: `${height}px`,
    };
  };

  const hoveredExperience = workExperiences.find(exp => exp.id === hoveredCard);

  return (
    <div className="w-full max-w-[1440px] mx-auto mb-32">
      <div ref={containerRef} className="bg-[#F6F6F6] rounded-lg p-8 relative overflow-hidden">
        {/* Timeline Container */}
        <div className="relative flex" style={{ minHeight: `${years.length * 60}px` }}>
          {/* Dotted Horizontal Lines - Aligned to each year */}
          {years.map((year, index) => (
            <div
              key={`line-${year}`}
              className="absolute left-0 right-0 border-t border-dotted border-gray-300"
              style={{
                top: `${index * 60 + 4}px`, // Align with year text (4px paddingTop)
                height: '2px',
              }}
            />
          ))}

          {/* Left Side: Years, Timeline, and Freelance Bar */}
          <div className="relative flex-shrink-0" style={{ minHeight: `${years.length * 60}px`, width: '140px' }}>
            {/* Years List - Leftmost */}
            <div className="relative flex flex-col h-full" style={{ width: '32px' }}>
              {years.map((year, index) => (
                <div 
                  key={year}
                  className={`${interFont.variable} font-inter text-xs text-gray-500`}
                  style={{
                    height: '60px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    paddingTop: '4px',
                  }}
                >
                  {year}
                </div>
              ))}
            </div>

            {/* Timeline Line - After years with 8px gap */}
            <div className="absolute top-0 bottom-0 w-px bg-gray-300" style={{ left: '40px' }} />

            {/* Freelance & Side Projects Bar - Masters at GSU (Aug 2017 - May 2018) */}
            <div 
              className="absolute bg-[#DCF0C8] rounded-sm"
              style={{
                left: '56px', // 32px (years) + 8px gap + 16px (timeline line area) = 56px
                width: '240px', // Horizontal text width
                // Position: Aug 2017 to May 2018 spans from end of 2017 to mid 2018
                // Top of 2018: (2026 - 2018) * 60 = 480px
                // Height: covers Aug 2017 to May 2018 (about 1.75 years, but we'll use 2 years for visual clarity)
                top: `${(2026 - 2018) * 60}px`, // Start at beginning of 2018
                height: `${2 * 60}px`, // Span 2 years (2017-2018)
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.05) 4px, rgba(0,0,0,0.05) 8px)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center px-3">
                <span 
                  className={`${interFont.variable} font-inter text-xs font-medium text-black`}
                >
                  Masters at Georgia State University
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Work Experience Cards */}
          <div className="flex-1 relative" style={{ minHeight: `${years.length * 60}px`, marginLeft: '180px' }}>
            {(() => {
              // Calculate adjusted positions with uniform 8px gaps
              const gap = 8;
              const adjustedPositions: Array<{ top: number; height: number }> = [];
              
              workExperiences.forEach((experience, index) => {
                const position = getCardTopPosition(experience.startYear, experience.endYear);
                const originalTop = parseFloat(position.top);
                const height = parseFloat(position.height);
                
                if (index === 0) {
                  // First card: use original position
                  adjustedPositions.push({ top: originalTop, height });
                } else {
                  // Subsequent cards: position 8px below previous card's bottom
                  const prevPosition = adjustedPositions[index - 1];
                  const prevBottom = prevPosition.top + prevPosition.height;
                  adjustedPositions.push({ top: prevBottom + gap, height });
                }
              });
              
              return workExperiences.map((experience, index) => {
                const adjustedPosition = adjustedPositions[index];
              
                return (
                  <div
                  key={experience.id}
                  className="absolute left-0"
                  style={{
                    top: `${adjustedPosition.top}px`,
                    width: '400px',
                    height: experience.cardStyle === 'expanded' ? `${adjustedPosition.height}px` : 'auto',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow ${
                      experience.cardStyle === 'compact' 
                        ? 'flex items-center gap-3 w-fit p-3' 
                        : 'flex flex-col gap-3 p-4 h-full'
                    }`}
                    style={{ 
                      ...(experience.cardStyle === 'expanded' ? { width: '400px' } : {}),
                      pointerEvents: 'auto',
                    }}
                    onMouseEnter={(e) => handleMouseEnter(e, experience.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Logo */}
                    {experience.logoImage ? (
                      <div className="flex-shrink-0 w-6 h-6 relative">
                        <Image
                          src={experience.logoImage}
                          alt={`${experience.company} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center border-2"
                        style={{
                          backgroundColor: experience.iconBgColor,
                          borderColor: experience.iconColor,
                        }}
                      >
                        <span
                          className={`${interFont.variable} font-inter text-lg font-semibold`}
                          style={{ color: experience.iconColor }}
                        >
                          {experience.icon}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-col gap-1">
                      <h3 className={`${interFont.variable} font-inter text-lg font-semibold text-gray-800`}>
                        {experience.role} • {experience.company}
                      </h3>
                      <p className={`${interFont.variable} font-inter text-sm text-gray-500`}>
                        {experience.startDate} – {experience.endDate}
                      </p>
                    </div>
                  </motion.div>
                  </div>
                );
              });
            })()}
          </div>
        </div>

        {/* Hover Callout */}
        <AnimatePresence>
          {hoveredCard && hoveredExperience && hoverPosition && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-6 max-w-sm"
              style={{
                left: `${hoverPosition.x}px`,
                top: `${hoverPosition.y}px`,
              }}
              onMouseEnter={(e) => {
                e.stopPropagation();
                // Clear hide timeout when hovering over callout
                if (hideTimeoutRef.current) {
                  clearTimeout(hideTimeoutRef.current);
                  hideTimeoutRef.current = null;
                }
              }} // Keep open on hover
              onMouseLeave={(e) => {
                e.stopPropagation();
                handleMouseLeave();
              }}
            >
              <p className={`${interFont.variable} font-inter text-sm text-gray-600 leading-relaxed`}>
                {hoveredExperience.details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
