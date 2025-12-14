'use client';

import React, { useState, useRef, useEffect, useCallback, useImperativeHandle, forwardRef, useMemo } from 'react';
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
    
    // Store original card positions
    const originalPositions = useRef<Map<string, { x: number; y: number }>>(new Map());

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

    // Generate deterministic random side for panel based on card ID
    const getPanelSide = useCallback((cardId: string): 'left' | 'right' => {
      // Simple hash function to get consistent side for each card
      let hash = 0;
      for (let i = 0; i < cardId.length; i++) {
        hash = ((hash << 5) - hash) + cardId.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
      }
      return hash % 2 === 0 ? 'right' : 'left';
    }, []);

    // Calculate combined bounds of expanded card (2x) and panel for collision detection
    const combinedSelectionBounds = useMemo(() => {
      if (!selectedCard) return null;
      
      const cardWidth = selectedCard.width || 200;
      const cardHeight = selectedCard.height || 260;
      const panelSide = getPanelSide(selectedCard.id);
      const panelWidth = 360;
      const gap = 12;
      
      // When card scales 2x from center, calculate the scaled card's position
      // Center stays at: (x + width/2, y + height/2)
      // Scaled card top-left: (centerX - scaledWidth/2, centerY - scaledHeight/2)
      const scaledCardX = selectedCard.x - cardWidth / 2;
      const scaledCardY = selectedCard.y - cardHeight / 2;
      const scaledCardWidth = cardWidth * 2;
      const scaledCardHeight = cardHeight * 2;
      
      const panelX = panelSide === 'right' 
        ? scaledCardX + scaledCardWidth + gap
        : scaledCardX - panelWidth - gap;
      const panelY = scaledCardY; // Top aligned with scaled card
      const panelHeight = 700; // max height
      
      // Calculate combined bounds (expanded card + panel)
      const combinedLeft = Math.min(scaledCardX, panelX);
      const combinedTop = scaledCardY;
      const combinedRight = Math.max(
        scaledCardX + scaledCardWidth,
        panelX + panelWidth
      );
      const combinedBottom = Math.max(
        scaledCardY + scaledCardHeight,
        panelY + panelHeight
      );
      
      return {
        // Panel bounds (for positioning)
        panel: {
          x: panelX,
          y: panelY,
          width: panelWidth,
          height: panelHeight,
        },
        // Combined bounds (for collision detection)
        combined: {
          x: combinedLeft,
          y: combinedTop,
          width: combinedRight - combinedLeft,
          height: combinedBottom - combinedTop,
        },
      };
    }, [selectedCard, getPanelSide]);
    
    // Panel bounds for positioning
    const panelBounds = useMemo(() => {
      return combinedSelectionBounds?.panel || null;
    }, [combinedSelectionBounds]);
    
    // Combined bounds for collision detection
    const collisionBounds = useMemo(() => {
      return combinedSelectionBounds?.combined || null;
    }, [combinedSelectionBounds]);

    // Check if two rectangles overlap
    const rectanglesOverlap = useCallback((
      rect1: { x: number; y: number; width: number; height: number },
      rect2: { x: number; y: number; width: number; height: number }
    ): boolean => {
      return !(
        rect1.x + rect1.width < rect2.x ||
        rect2.x + rect2.width < rect1.x ||
        rect1.y + rect1.height < rect2.y ||
        rect2.y + rect2.height < rect1.y
      );
    }, []);

    // Calculate adjusted position for a card to avoid combined selection area (expanded card + panel)
    const calculateAdjustedPosition = useCallback((
      card: CanvasCard,
      collisionBounds: { x: number; y: number; width: number; height: number }
    ): { x: number; y: number } => {
      const cardWidth = card.width || 200;
      const cardHeight = card.height || 260;
      
      const cardRect = {
        x: card.x,
        y: card.y,
        width: cardWidth,
        height: cardHeight,
      };

      // Check if card overlaps with combined selection area (expanded card + panel)
      if (!rectanglesOverlap(cardRect, collisionBounds)) {
        return { x: card.x, y: card.y };
      }

      // Calculate distances to move in each direction
      const overlapRight = card.x + cardWidth - collisionBounds.x;
      const overlapLeft = collisionBounds.x + collisionBounds.width - card.x;
      const overlapBottom = card.y + cardHeight - collisionBounds.y;
      const overlapTop = collisionBounds.y + collisionBounds.height - card.y;

      // Find the minimum overlap direction and move card away
      const overlaps = [
        { dir: 'right', dist: overlapRight },
        { dir: 'left', dist: overlapLeft },
        { dir: 'bottom', dist: overlapBottom },
        { dir: 'top', dist: overlapTop },
      ].filter(o => o.dist > 0);

      if (overlaps.length === 0) return { x: card.x, y: card.y };

      // Find minimum overlap
      const minOverlap = Math.min(...overlaps.map(o => o.dist));
      const direction = overlaps.find(o => o.dist === minOverlap)?.dir;

      let newX = card.x;
      let newY = card.y;
      const padding = 40; // Space to add between card and panel

      switch (direction) {
        case 'right':
          newX = collisionBounds.x - cardWidth - padding;
          break;
        case 'left':
          newX = collisionBounds.x + collisionBounds.width + padding;
          break;
        case 'bottom':
          newY = collisionBounds.y - cardHeight - padding;
          break;
        case 'top':
          newY = collisionBounds.y + collisionBounds.height + padding;
          break;
      }

      return { x: newX, y: newY };
    }, [rectanglesOverlap]);

    // Calculate adjusted positions for all cards, ensuring 40px gap between cards
    const cardPositions = useMemo(() => {
      const positions = new Map<string, { x: number; y: number }>();
      const cardGap = 40; // Minimum gap between cards
      
      // Helper function to check if two rectangles are too close (less than gap apart)
      const rectanglesTooClose = (
        rect1: { x: number; y: number; width: number; height: number },
        rect2: { x: number; y: number; width: number; height: number },
        gap: number
      ): boolean => {
        // Check horizontal distance
        const horizontalGap = Math.max(
          rect2.x - (rect1.x + rect1.width),
          rect1.x - (rect2.x + rect2.width)
        );
        
        // Check vertical distance
        const verticalGap = Math.max(
          rect2.y - (rect1.y + rect1.height),
          rect1.y - (rect2.y + rect2.height)
        );
        
        // If both gaps are negative or less than required, they're too close
        if (horizontalGap < 0 && verticalGap < 0) {
          // They overlap, definitely too close
          return true;
        }
        
        // If one gap is negative, they overlap in that dimension
        if (horizontalGap < 0) {
          return verticalGap < gap;
        }
        if (verticalGap < 0) {
          return horizontalGap < gap;
        }
        
        // Both gaps are positive, check if either is less than required gap
        return horizontalGap < gap || verticalGap < gap;
      };
      
      // Helper function to get card position (from positions map or original)
      const getCardPosition = (card: CanvasCard): { x: number; y: number } => {
        return positions.get(card.id) || originalPositions.current.get(card.id) || { x: card.x, y: card.y };
      };
      
      cards.forEach((card) => {
        // Store original position if not already stored
        if (!originalPositions.current.has(card.id)) {
          originalPositions.current.set(card.id, { x: card.x, y: card.y });
        }

        let finalPosition: { x: number; y: number };
        
        if (collisionBounds && selectedCard && card.id !== selectedCard.id) {
          // First, adjust position to avoid combined selection area (expanded card + panel)
          finalPosition = calculateAdjustedPosition(card, collisionBounds);
          
          const cardWidth = card.width || 200;
          const cardHeight = card.height || 260;
          
          // Iterate multiple times to resolve all collisions
          let hasCollision = true;
          let iterations = 0;
          const maxIterations = 10; // Prevent infinite loops
          
          while (hasCollision && iterations < maxIterations) {
            hasCollision = false;
            iterations++;
            
            const cardRect = {
              x: finalPosition.x,
              y: finalPosition.y,
              width: cardWidth,
              height: cardHeight,
            };
            
            // Check against all other cards
            cards.forEach((otherCard) => {
              if (otherCard.id === card.id || otherCard.id === selectedCard.id) return;
              
              const otherPosition = getCardPosition(otherCard);
              const otherWidth = otherCard.width || 200;
              const otherHeight = otherCard.height || 260;
              
              const otherRect = {
                x: otherPosition.x,
                y: otherPosition.y,
                width: otherWidth,
                height: otherHeight,
              };
              
              // Check if cards are too close (less than gap apart)
              if (rectanglesTooClose(cardRect, otherRect, cardGap)) {
                hasCollision = true;
                
                // Calculate distances to move in each direction to achieve gap
                const horizontalGap = otherRect.x - (cardRect.x + cardRect.width);
                const verticalGap = otherRect.y - (cardRect.y + cardHeight);
                
                // Determine which direction needs adjustment
                const needsRightMove = horizontalGap < cardGap && horizontalGap >= 0;
                const needsLeftMove = (cardRect.x - (otherRect.x + otherRect.width)) < cardGap && (cardRect.x - (otherRect.x + otherRect.width)) >= 0;
                const needsBottomMove = verticalGap < cardGap && verticalGap >= 0;
                const needsTopMove = (cardRect.y - (otherRect.y + otherRect.height)) < cardGap && (cardRect.y - (otherRect.y + otherRect.height)) >= 0;
                
                // If cards overlap, calculate overlap amounts
                const overlapRight = cardRect.x + cardRect.width - otherRect.x;
                const overlapLeft = otherRect.x + otherRect.width - cardRect.x;
                const overlapBottom = cardRect.y + cardHeight - otherRect.y;
                const overlapTop = otherRect.y + otherRect.height - cardRect.y;
                
                // Determine best direction to move
                const moves = [];
                if (overlapRight > 0) moves.push({ dir: 'right', dist: overlapRight });
                if (overlapLeft > 0) moves.push({ dir: 'left', dist: overlapLeft });
                if (overlapBottom > 0) moves.push({ dir: 'bottom', dist: overlapBottom });
                if (overlapTop > 0) moves.push({ dir: 'top', dist: overlapTop });
                if (needsRightMove) moves.push({ dir: 'right', dist: cardGap - horizontalGap });
                if (needsLeftMove) moves.push({ dir: 'left', dist: cardGap - (cardRect.x - (otherRect.x + otherRect.width)) });
                if (needsBottomMove) moves.push({ dir: 'bottom', dist: cardGap - verticalGap });
                if (needsTopMove) moves.push({ dir: 'top', dist: cardGap - (cardRect.y - (otherRect.y + otherRect.height)) });
                
                if (moves.length > 0) {
                  const minMove = Math.min(...moves.map(m => m.dist));
                  const direction = moves.find(m => m.dist === minMove)?.dir;
                  
                  switch (direction) {
                    case 'right':
                      finalPosition.x = otherRect.x - cardWidth - cardGap;
                      break;
                    case 'left':
                      finalPosition.x = otherRect.x + otherRect.width + cardGap;
                      break;
                    case 'bottom':
                      finalPosition.y = otherRect.y - cardHeight - cardGap;
                      break;
                    case 'top':
                      finalPosition.y = otherRect.y + otherRect.height + cardGap;
                      break;
                  }
                }
              }
            });
            
            // Also check against combined selection area (expanded card + panel)
            if (selectedCard && collisionBounds) {
              // Use the combined collision bounds which includes the expanded card and panel
              if (rectanglesTooClose(cardRect, collisionBounds, cardGap)) {
                hasCollision = true;
                
                const horizontalGap = collisionBounds.x - (cardRect.x + cardRect.width);
                const verticalGap = collisionBounds.y - (cardRect.y + cardHeight);
                
                const needsRightMove = horizontalGap < cardGap && horizontalGap >= 0;
                const needsLeftMove = (cardRect.x - (collisionBounds.x + collisionBounds.width)) < cardGap && (cardRect.x - (collisionBounds.x + collisionBounds.width)) >= 0;
                const needsBottomMove = verticalGap < cardGap && verticalGap >= 0;
                const needsTopMove = (cardRect.y - (collisionBounds.y + collisionBounds.height)) < cardGap && (cardRect.y - (collisionBounds.y + collisionBounds.height)) >= 0;
                
                const overlapRight = cardRect.x + cardRect.width - collisionBounds.x;
                const overlapLeft = collisionBounds.x + collisionBounds.width - cardRect.x;
                const overlapBottom = cardRect.y + cardHeight - collisionBounds.y;
                const overlapTop = collisionBounds.y + collisionBounds.height - cardRect.y;
                
                const moves = [];
                if (overlapRight > 0) moves.push({ dir: 'right', dist: overlapRight });
                if (overlapLeft > 0) moves.push({ dir: 'left', dist: overlapLeft });
                if (overlapBottom > 0) moves.push({ dir: 'bottom', dist: overlapBottom });
                if (overlapTop > 0) moves.push({ dir: 'top', dist: overlapTop });
                if (needsRightMove) moves.push({ dir: 'right', dist: cardGap - horizontalGap });
                if (needsLeftMove) moves.push({ dir: 'left', dist: cardGap - (cardRect.x - (collisionBounds.x + collisionBounds.width)) });
                if (needsBottomMove) moves.push({ dir: 'bottom', dist: cardGap - verticalGap });
                if (needsTopMove) moves.push({ dir: 'top', dist: cardGap - (cardRect.y - (collisionBounds.y + collisionBounds.height)) });
                
                if (moves.length > 0) {
                  const minMove = Math.min(...moves.map(m => m.dist));
                  const direction = moves.find(m => m.dist === minMove)?.dir;
                  
                  switch (direction) {
                    case 'right':
                      finalPosition.x = collisionBounds.x - cardWidth - cardGap;
                      break;
                    case 'left':
                      finalPosition.x = collisionBounds.x + collisionBounds.width + cardGap;
                      break;
                    case 'bottom':
                      finalPosition.y = collisionBounds.y - cardHeight - cardGap;
                      break;
                    case 'top':
                      finalPosition.y = collisionBounds.y + collisionBounds.height + cardGap;
                      break;
                  }
                }
              }
            }
          }
          
          positions.set(card.id, finalPosition);
        } else {
          // Use original position
          const original = originalPositions.current.get(card.id) || { x: card.x, y: card.y };
          positions.set(card.id, original);
        }
      });

      return positions;
    }, [cards, collisionBounds, selectedCard, calculateAdjustedPosition, rectanglesOverlap]);

    // Clear original positions when panel closes
    useEffect(() => {
      if (!selectedCard) {
        originalPositions.current.clear();
      }
    }, [selectedCard]);

    // Auto-adjust canvas to show selected card and panel
    useEffect(() => {
      if (!selectedCard || !canvasRef.current || !collisionBounds) return;

      const canvas = canvasRef.current;
      const viewportWidth = canvas.clientWidth;
      const viewportHeight = canvas.clientHeight;

      // Use pre-calculated combined bounds
      const combinedWidth = collisionBounds.width;
      const combinedHeight = collisionBounds.height;

      // Add padding around the content
      const padding = 40;
      const targetWidth = combinedWidth + padding * 2;
      const targetHeight = combinedHeight + padding * 2;

      // Calculate required scale to fit in viewport
      const scaleX = viewportWidth / targetWidth;
      const scaleY = viewportHeight / targetHeight;
      const requiredScale = Math.max(
        Math.min(scaleX, scaleY, 1), // Don't zoom in beyond 1x
        0.5 // Don't zoom out beyond 0.5x
      );

      // Calculate center of combined bounds
      const centerX = collisionBounds.x + collisionBounds.width / 2;
      const centerY = collisionBounds.y + collisionBounds.height / 2;

      // Calculate position to center the content in viewport
      // Account for current scale
      const newScale = requiredScale;
      const newPositionX = viewportWidth / 2 - centerX * newScale;
      const newPositionY = viewportHeight / 2 - centerY * newScale;

      // Smoothly animate to new position and scale
      setPosition({ x: newPositionX, y: newPositionY });
      setScale(newScale);
    }, [selectedCard, collisionBounds]);

    return (
      <div
        ref={canvasRef}
        className="relative w-full h-full overflow-hidden bg-[#F7F6F3] cursor-grab active:cursor-grabbing canvas-background"
        onMouseDown={handleMouseDown}
        onClick={handleCanvasClick}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          maxHeight: '100vh',
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0',
        }}
      >
        {/* Canvas content - extends beyond viewport for infinite canvas */}
        <motion.div
          className="absolute"
          animate={{
            x: position.x,
            y: position.y,
            scale: scale,
          }}
          transition={
            isDragging
              ? { duration: 0 } // Immediate during drag
              : {
                  type: 'spring',
                  damping: 30,
                  stiffness: 200,
                  mass: 0.5,
                }
          }
          style={{
            transformOrigin: '0 0',
            // Make container large enough to hold all cards
            minWidth: '5000px',
            minHeight: '5000px',
            width: '5000px',
            height: '5000px',
            top: 0,
            left: 0,
            // Extend background pattern to content area
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0',
            backgroundColor: '#F7F6F3',
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
            
            // Get the position (adjusted if panel is open, otherwise original)
            const cardPosition = cardPositions.get(card.id) || { x: card.x, y: card.y };
            
            return (
              <motion.div
                key={card.id}
                className="absolute"
                initial={{
                  left: card.x,
                  top: card.y,
                  scale: 1,
                }}
                animate={{
                  left: cardPosition.x,
                  top: cardPosition.y,
                  scale: isSelected ? 2 : 1,
                }}
                transition={{
                  type: 'spring',
                  damping: 25,
                  stiffness: 200,
                  mass: 0.8,
                }}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transformOrigin: 'center center',
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
              </motion.div>
            );
          })}

          {/* Inline Detail Panel - positioned next to selected card */}
          {selectedCard && (() => {
            // Calculate scaled card position (2x scale from center)
            const cardWidth = selectedCard.width || 200;
            const cardHeight = selectedCard.height || 260;
            const scaledCardX = selectedCard.x - cardWidth / 2;
            const scaledCardY = selectedCard.y - cardHeight / 2;
            const scaledCardWidth = cardWidth * 2;
            
            return (
              <InlineDetailPanel
                card={selectedCard}
                onClose={() => onCardSelect(null)}
                cardX={scaledCardX}
                cardY={scaledCardY}
                cardWidth={scaledCardWidth}
                cardHeight={cardHeight * 2}
                panelSide={getPanelSide(selectedCard.id)}
              />
            );
          })()}
        </motion.div>
      </div>
    );
  }
);

InfiniteCanvas.displayName = 'InfiniteCanvas';

export default InfiniteCanvas;
