'use client';

import React, { useState, useRef, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import { motion } from 'framer-motion';

export interface CanvasCard {
  id: string;
  x: number;
  y: number;
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
}

export interface InfiniteCanvasHandle {
  zoomIn: () => void;
  zoomOut: () => void;
}

const InfiniteCanvas = forwardRef<InfiniteCanvasHandle, InfiniteCanvasProps>(
  ({ cards, onCardSelect, selectedCardId }, ref) => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [scopePosition, setScopePosition] = useState({ x: 0, y: 0 });
    const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

    // Expose zoom functions via ref
    useImperativeHandle(ref, () => ({
      zoomIn: () => setScale((prev) => Math.min(3, prev + 0.1)),
      zoomOut: () => setScale((prev) => Math.max(0.5, prev - 0.1)),
    }));

    // Handle mouse move for scope
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!canvasRef.current || isDragging) return;
        const rect = canvasRef.current.getBoundingClientRect();
        setScopePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      };

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.addEventListener('mousemove', handleMouseMove);
        return () => canvas.removeEventListener('mousemove', handleMouseMove);
      }
    }, [isDragging]);

    // Handle pan
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      if (e.button !== 0) return; // Only left mouse button
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

    // Check if card is under scope (circle collision detection)
    const isCardUnderScope = useCallback((card: CanvasCard) => {
      if (!canvasRef.current) return false;
      
      const cardSize = 200; // Card size in canvas coordinates
      const scopeRadius = 150; // Scope circle radius
      
      // Card center in canvas coordinates
      const cardCenterX = card.x + cardSize / 2;
      const cardCenterY = card.y + cardSize / 2;
      
      // Card center in screen coordinates
      const cardScreenX = position.x + cardCenterX * scale;
      const cardScreenY = position.y + cardCenterY * scale;
      
      // Card half-size in screen coordinates
      const cardHalfSize = (cardSize / 2) * scale;
      
      // Distance from scope center to card center
      const dx = scopePosition.x - cardScreenX;
      const dy = scopePosition.y - cardScreenY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Check if scope circle overlaps with card (circle-rectangle collision)
      const closestX = Math.max(cardScreenX - cardHalfSize, Math.min(scopePosition.x, cardScreenX + cardHalfSize));
      const closestY = Math.max(cardScreenY - cardHalfSize, Math.min(scopePosition.y, cardScreenY + cardHalfSize));
      const closestDistance = Math.sqrt(
        Math.pow(scopePosition.x - closestX, 2) + Math.pow(scopePosition.y - closestY, 2)
      );
      
      return closestDistance <= scopeRadius;
    }, [position, scale, scopePosition]);

    // Update hovered card based on scope position
    useEffect(() => {
      const cardUnderScope = cards.find(card => isCardUnderScope(card));
      setHoveredCardId(cardUnderScope?.id || null);
    }, [cards, isCardUnderScope, scopePosition]);

    const handleCardClick = (card: CanvasCard) => {
      if (hoveredCardId === card.id || selectedCardId === card.id) {
        onCardSelect(card);
      }
    };

    return (
      <div
        ref={canvasRef}
        className="relative w-full h-full overflow-hidden bg-[#1a1a1a] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
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
            
            return (
              <motion.div
                key={card.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${card.x}px`,
                  top: `${card.y}px`,
                  width: '200px',
                  height: '200px',
                }}
                onClick={() => handleCardClick(card)}
                animate={{
                  scale: isHovered || isSelected ? 1.05 : 1,
                  zIndex: isHovered || isSelected ? 10 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  {(isHovered || isSelected) && (
                    <motion.div
                      className="absolute inset-0 border-4 border-yellow-400 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scope highlight */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: scopePosition.x - 150,
            top: scopePosition.y - 150,
            width: '300px',
            height: '300px',
          }}
          animate={{
            x: scopePosition.x - 150,
            y: scopePosition.y - 150,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        >
          <div className="w-full h-full rounded-full border-4 border-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.5)]" />
        </motion.div>
      </div>
    );
  }
);

InfiniteCanvas.displayName = 'InfiniteCanvas';

export default InfiniteCanvas;
