'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Sparkles, Triangle, Square, Circle, Hexagon } from 'lucide-react';
import { interFont } from '@/app/fonts';
import type { CanvasCard } from './infinite-canvas';

interface InlineDetailPanelProps {
  card: CanvasCard | null;
  onClose: () => void;
  cardX: number;
  cardY: number;
  cardWidth: number;
  cardHeight: number;
}

interface AccordionSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

export function InlineDetailPanel({
  card,
  onClose,
  cardX,
  cardY,
  cardWidth,
  cardHeight,
}: InlineDetailPanelProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['index']));

  if (!card) return null;

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  // Position the panel to the right of the card with some spacing
  const panelX = cardX + cardWidth + 20;
  const panelY = cardY;
  const panelWidth = 360; // Fixed width for the detail panel

  // Define sections based on card data
  const sections: AccordionSection[] = [
    {
      id: 'index',
      title: 'INDEX',
      icon: <Sparkles size={16} className="text-[#FF6B35]" fill="#FF6B35" />,
      defaultOpen: true,
      content: (
        <div className="pt-2">
          <p className={`${interFont.variable} font-inter text-sm text-black leading-relaxed`}>
            {card.author || 'Designer'} is a {card.type?.toLowerCase() || 'creative'} {card.kind?.toLowerCase() || 'practitioner'}. {card.description ? card.description.substring(0, 100) : 'Their work explores the intersection of design, technology, and human experience.'} —{' '}
            <a href="#" className="underline text-black hover:text-gray-700">
              more information.
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 'initiatives',
      title: 'INITIATIVES',
      icon: <Triangle size={12} className="text-black" fill="black" />,
      content: (
        <div className="pt-2">
          <p className={`${interFont.variable} font-inter text-sm text-black leading-relaxed`}>
            {card.keyStrength || 'Key initiatives and projects that demonstrate innovative approaches to design and technology.'}
          </p>
        </div>
      ),
    },
    {
      id: 'research',
      title: 'RESEARCH',
      icon: <Square size={12} className="text-black" fill="black" />,
      content: (
        <div className="pt-2">
          <p className={`${interFont.variable} font-inter text-sm text-black leading-relaxed`}>
            Research areas and methodologies that inform the practice, including {card.type?.toLowerCase() || 'design'} research and {card.kind?.toLowerCase() || 'creative'} exploration.
          </p>
        </div>
      ),
    },
    {
      id: 'artifacts',
      title: 'ARTIFACTS',
      icon: <Circle size={12} className="text-black" fill="black" />,
      content: (
        <div className="pt-2">
          <p className={`${interFont.variable} font-inter text-sm text-black leading-relaxed`}>
            Physical and digital artifacts created through various projects, including installations, digital products, and experimental works.
          </p>
        </div>
      ),
    },
    {
      id: 'paths',
      title: 'PATHS',
      icon: <Hexagon size={12} className="text-black" fill="black" />,
      content: (
        <div className="pt-2">
          <p className={`${interFont.variable} font-inter text-sm text-black leading-relaxed`}>
            Career trajectory and professional journey, including key milestones, collaborations, and evolving practice areas from {card.year || 'recent years'}.
          </p>
        </div>
      ),
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className={`absolute bg-[#f5f5f5] rounded-lg shadow-lg overflow-hidden z-50 ${interFont.variable} font-inter`}
        style={{
          left: `${panelX}px`,
          top: `${panelY}px`,
          width: `${panelWidth}px`,
          maxHeight: '700px',
        }}
      >
        <div className="p-6" onClick={(e) => e.stopPropagation()}>
          {/* Accordion Sections */}
          <div className="space-y-0">
            {sections.map((section, index) => {
              const isOpen = openSections.has(section.id);
              const isLast = index === sections.length - 1;

              return (
                <div key={section.id}>
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center gap-3 py-3 text-left hover:bg-gray-100/50 transition-colors rounded px-1 -mx-1"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">{section.icon}</div>

                    {/* Title */}
                    <span className={`${interFont.variable} font-inter flex-1 font-bold text-black uppercase text-sm tracking-wide`}>
                      {section.title}
                    </span>

                    {/* Expand/Collapse Icon */}
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <Minus size={16} className="text-black" strokeWidth={2.5} />
                      ) : (
                        <Plus size={16} className="text-black" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {/* Divider */}
                  {!isLast && (
                    <div className="border-t border-dashed border-gray-400 my-1" />
                  )}

                  {/* Section Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3">
                          {section.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
