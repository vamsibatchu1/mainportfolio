'use client';

import React, { useState, useRef, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { BrowserTab } from './browser-tab';
import { InlineDetailPanel } from './inline-detail-panel';

export interface CanvasCard {
  id: string;
  x: number;
  y: number;
  width?: number; // Optional width, defaults to 200
  height?: number; // Optional height, defaults to 260
  image: string;
  title: string;
  author?: string;
  year?: string;
  source?: string;
  keyStrength?: string;
  type?: string;
  kind?: string;
  description?: string;
}

interface InfiniteCanvasProps {
  cards: CanvasCard[];
  onCardSelect: (card: CanvasCard | null) => void;
  selectedCardId: string | null;
  selectedCard: CanvasCard | null;
}

export interface InfiniteCanvasHandle {
  zoomIn: () => void;
  zoomOut: () => void;
}

const InfiniteCanvas = forwardRef<InfiniteCanvasHandle, InfiniteCanvasProps>(
  ({ cards, onCardSelect, selectedCardId, selectedCard }, ref) => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
    const mouseDownPos = useRef({ x: 0, y: 0 });

    // Expose zoom functions via ref
    useImperativeHandle(ref, () => ({
      zoomIn: () => setScale((prev) => Math.min(3, prev + 0.1)),
      zoomOut: () => setScale((prev) => Math.max(0.5, prev - 0.1)),
    }));


    // Handle pan
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      if (e.button !== 0) return; // Only left mouse button
      mouseDownPos.current = { x: e.clientX, y: e.clientY };
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }, [position]);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }, [isDragging, dragStart]);

    const handleCardClick = (card: CanvasCard, e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent canvas click from firing
      onCardSelect(card);
    };

    const handleCanvasClick = (e: React.MouseEvent) => {
      // Only close if it was a click (not a drag) - check if mouse moved less than 5px
      const mouseMoveDistance = Math.sqrt(
        Math.pow(e.clientX - mouseDownPos.current.x, 2) + 
        Math.pow(e.clientY - mouseDownPos.current.y, 2)
      );
      
      // Close panel when clicking on canvas background (not on cards or panel)
      // Cards and panel will stop propagation, so this only fires for canvas background
      if (selectedCard && mouseMoveDistance < 5) {
        onCardSelect(null);
      }
    };

    return (
      <div
        ref={canvasRef}
        className="relative w-full h-full overflow-hidden bg-[#F7F6F3] cursor-grab active:cursor-grabbing canvas-background"
        onMouseDown={handleMouseDown}
        onClick={handleCanvasClick}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0',
        }}
      >
        {/* Canvas content */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: '0 0',
          }}
        >
          {/* Cards */}
          {cards.map((card) => {
            const isHovered = hoveredCardId === card.id;
            const isSelected = selectedCardId === card.id;
            
            // Use source as URL if available, otherwise generate one
            const url = card.source || `example.com/${card.title.toLowerCase().replace(/\s+/g, '/')}.html?t=20`;
            
            // Use title for header text, truncate if too long
            const headerText = card.title.length > 20 
              ? card.title.substring(0, 17) + '...'
              : card.title;
            
            const cardWidth = card.width || 200;
            const cardHeight = card.height || 260;
            
            return (
              <div
                key={card.id}
                className="absolute"
                style={{
                  left: `${card.x}px`,
                  top: `${card.y}px`,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                }}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <BrowserTab
                  headerText={headerText}
                  url={url}
                  image={card.image}
                  imageAlt={card.title}
                  isHovered={isHovered}
                  isSelected={isSelected}
                  onClick={(e) => handleCardClick(card, e)}
                />
              </div>
            );
          })}

          {/* Inline Detail Panel - positioned next to selected card */}
          {selectedCard && (
            <InlineDetailPanel
              card={selectedCard}
              onClose={() => onCardSelect(null)}
              cardX={selectedCard.x}
              cardY={selectedCard.y}
              cardWidth={selectedCard.width || 200}
              cardHeight={selectedCard.height || 260}
            />
          )}
        </div>
      </div>
    );
  }
);

InfiniteCanvas.displayName = 'InfiniteCanvas';

export default InfiniteCanvas;
