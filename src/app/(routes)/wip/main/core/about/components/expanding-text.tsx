'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
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

// Component to animate text appearing character by character
const AnimatedText: React.FC<{
  content: TextSegment[];
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
  parentId: string;
}> = ({ content, expandedIds, onToggle, parentId }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  
  // Calculate total character count
  const getTextLength = (segments: TextSegment[]): number => {
    return segments.reduce((sum, seg) => {
      if (typeof seg === 'string') return sum + seg.length;
      return sum + seg.triggerText.length;
    }, 0);
  };

  const totalChars = getTextLength(content);

  useEffect(() => {
    if (visibleChars < totalChars) {
      const timer = setTimeout(() => {
        setVisibleChars((prev) => Math.min(prev + 3, totalChars));
      }, 20); // Adjust speed: lower = faster
      return () => clearTimeout(timer);
    }
  }, [visibleChars, totalChars]);

  // Build visible content up to visibleChars
  let charCount = 0;
  const visibleContent: (TextSegment | string)[] = [];
  
  for (const seg of content) {
    const segLength = typeof seg === 'string' ? seg.length : seg.triggerText.length;
    
    if (charCount + segLength <= visibleChars) {
      visibleContent.push(seg);
      charCount += segLength;
    } else if (charCount < visibleChars) {
      // Partial segment - only for strings
      if (typeof seg === 'string') {
        const remaining = visibleChars - charCount;
        visibleContent.push(seg.substring(0, remaining));
      } else {
        // For expandable segments, show full trigger text if we've started
        visibleContent.push(seg);
      }
      break;
    } else {
      break;
    }
  }

  return (
    <span className="inline ml-1">
      {' '}
      <span className="inline">
        {visibleContent.map((subSegment, index) => {
          if (typeof subSegment === 'string') {
            return <span key={`${parentId}-text-${index}`}>{subSegment}</span>;
          }
          return (
            <SegmentRenderer
              key={`${parentId}-${index}`}
              segment={subSegment}
              expandedIds={expandedIds}
              onToggle={onToggle}
              parentId={parentId}
            />
          );
        })}
      </span>
    </span>
  );
};

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
        className="cursor-pointer hover:opacity-70 transition-opacity inline-flex items-center gap-1.5 text-black"
        whileHover={{ scale: 1.02 }}
        style={{ 
          textDecoration: 'underline', 
          textDecorationStyle: 'dotted',
          textDecorationColor: '#9CA3AF',
          textDecorationThickness: '3px',
          textUnderlineOffset: '4px'
        }}
      >
        <span>{segment.triggerText}</span>
        <span 
          className="inline-flex items-center justify-center rounded-full border border-black flex-shrink-0"
          style={{
            width: '1em',
            height: '1em',
            minWidth: '1em',
            minHeight: '1em',
          }}
        >
          {isExpanded ? (
            <Minus size="0.6em" strokeWidth={2.5} style={{ width: '0.6em', height: '0.6em' }} />
          ) : (
            <Plus size="0.6em" strokeWidth={2.5} style={{ width: '0.6em', height: '0.6em' }} />
          )}
        </span>
      </motion.button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <AnimatedText
            content={segment.hiddenContent}
            expandedIds={expandedIds}
            onToggle={onToggle}
            parentId={uniqueId}
          />
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

  // Helper function to calculate character count of visible text
  const getCharacterCount = (segment: TextSegment): number => {
    if (typeof segment === 'string') {
      return segment.length;
    }
    return segment.triggerText.length;
  };

  // Normalize segments to always be an array of paragraphs
  const paragraphs: TextSegment[][] = Array.isArray(segments[0]) 
    ? (segments as TextSegment[][])
    : [segments as TextSegment[]];

  // Combine all paragraphs into one continuous array
  const allSegments: TextSegment[] = paragraphs.flat();

  // Calculate total character count
  const totalChars = allSegments.reduce((sum, segment) => sum + getCharacterCount(segment), 0);
  const targetChars = Math.floor(totalChars / 2);

  // Find the split point
  let currentChars = 0;
  let splitIndex = 0;
  for (let i = 0; i < allSegments.length; i++) {
    currentChars += getCharacterCount(allSegments[i]);
    if (currentChars >= targetChars) {
      splitIndex = i + 1;
      break;
    }
  }

  // Split into two columns
  const leftColumn = allSegments.slice(0, splitIndex);
  const rightColumn = allSegments.slice(splitIndex);

  return (
    <div
      className={`${ebGaramondFont.className} text-black text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[130%] ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Column */}
        <div className="inline">
          {leftColumn.map((segment, index) => (
            <SegmentRenderer
              key={`left-${index}`}
              segment={segment}
              expandedIds={expandedIds}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="inline">
          {rightColumn.map((segment, index) => (
            <SegmentRenderer
              key={`right-${index}`}
              segment={segment}
              expandedIds={expandedIds}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
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

