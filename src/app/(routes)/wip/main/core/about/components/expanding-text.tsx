'use client';

import React, { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { ebGaramondFont } from '@/app/fonts';

// Type definitions for the recursive data structure
export type TextSegment = string | ExpandableSegment;

export interface ExpandableSegment {
  id: string;
  triggerText: string;
  hiddenContent: TextSegment[];
}

interface ExpandingTextProps {
  segments: TextSegment[] | TextSegment[][];
  className?: string;
}

// Component to render a single segment
const SegmentRenderer: React.FC<{
  segment: TextSegment;
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
  parentId?: string;
}> = ({ segment, expandedIds, onToggle, parentId }) => {
  // If it's a plain string, render it directly
  if (typeof segment === 'string') {
    return <span>{segment}</span>;
  }

  // If it's an expandable segment
  const isExpanded = expandedIds.has(segment.id);
  const uniqueId = parentId ? `${parentId}-${segment.id}` : segment.id;

  return (
    <span className="inline">
      {/* Trigger word with underline */}
      <motion.button
        onClick={() => onToggle(segment.id)}
        className="cursor-pointer hover:opacity-70 transition-opacity inline text-black"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ 
          textDecoration: 'underline', 
          textDecorationStyle: 'dotted',
          textDecorationColor: '#9CA3AF',
          textDecorationThickness: '3px',
          textUnderlineOffset: '4px'
        }}
      >
        {segment.triggerText}
      </motion.button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.span
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="inline ml-1"
          >
            {' '}
            <span className="inline">
              {segment.hiddenContent.map((subSegment, index) => (
                <SegmentRenderer
                  key={`${uniqueId}-${index}`}
                  segment={subSegment}
                  expandedIds={expandedIds}
                  onToggle={onToggle}
                  parentId={uniqueId}
                />
              ))}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default function ExpandingText({ segments, className = '' }: ExpandingTextProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Normalize segments to always be an array of paragraphs
  const paragraphs: TextSegment[][] = Array.isArray(segments[0]) 
    ? (segments as TextSegment[][])
    : [segments as TextSegment[]];

  return (
    <motion.div
      layout
      className={`${ebGaramondFont.className} text-black text-[24px] sm:text-[32px] md:text-[40px] lg:text-[64px] leading-[110%] ${className}`}
    >
      <LayoutGroup>
        <div className="flex flex-col gap-6">
          {paragraphs.map((paragraphSegments, paragraphIndex) => (
            <motion.div key={paragraphIndex} layout className="inline">
              {paragraphSegments.map((segment, index) => (
                <SegmentRenderer
                  key={`p${paragraphIndex}-${index}`}
                  segment={segment}
                  expandedIds={expandedIds}
                  onToggle={handleToggle}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
    </motion.div>
  );
}

// About text data - split into three paragraphs
export const aboutTextData: TextSegment[][] = [
  // First paragraph
  [
    'Originally from India, I am a designer currently living in Atlanta with my wife and dog. I like to call myself a ',
    {
      id: 'product-builder',
      triggerText: 'product builder',
      hiddenContent: [
        'Someone who designs, builds, and ships products end-to-end. Beyond just designing interfaces, I work across design, product strategy, and engineering to bring ideas to life.',
      ],
    },
    ' and a ',
    {
      id: 'software-tinkerer',
      triggerText: 'software tinkerer',
      hiddenContent: [
        'I enjoy experimenting with code, building prototypes, and exploring new technologies. This technical curiosity helps me communicate effectively with engineering teams and create more feasible designs.',
      ],
    },
    '. With a background in computer science, I found my calling in it\'s intersection with art and curiosity.',
  ],
  // Second paragraph
  [
    'With a proven track record leading cross-functional initiatives to shape product strategy, I specialize in defining the vision for ',
    {
      id: 'zero-to-one',
      triggerText: 'zero-to-one',
      hiddenContent: [
        'Building products from scratch. This means identifying market opportunities, defining the initial vision, and creating something that didn\'t exist before—moving from zero users to the first user and beyond.',
      ],
    },
    ', ',
    {
      id: 'ai-native',
      triggerText: 'AI-native',
      hiddenContent: [
        'Products built with AI as a core capability from the ground up, not as an add-on feature. These products leverage AI to create new value propositions and user experiences that weren\'t possible before.',
      ],
    },
    ' products and evolving ',
    {
      id: 'data-informed-design-systems',
      triggerText: 'data-informed design systems',
      hiddenContent: [
        'Design systems that evolve based on user behavior data, usage patterns, and performance metrics. Rather than static style guides, these systems continuously improve through quantitative insights.',
      ],
    },
    '. I thrive on collaborating with product and business partners to drive innovation and deliver measurable impact.',
  ],
  // Third paragraph
  [
    'Beyond designing products, I\'m actively advancing AI fluency at Rocket through multiple initiatives and serving on the ',
    {
      id: 'ai-leadership-council',
      triggerText: 'AI Leadership Council',
      hiddenContent: [
        'A strategic group that shapes AI tool strategy, training programs, and adoption across Rocket Mortgage. We help teams understand how to effectively leverage AI in their work and make informed decisions about AI investments.',
      ],
    },
    ' to shape tool strategy, training programs, and adoption.',
  ],
];

