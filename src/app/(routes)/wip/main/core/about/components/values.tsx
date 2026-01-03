'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { interFont } from '@/app/fonts';

interface Card {
  id: string;
  text: string;
}

interface Cluster {
  id: string;
  cards: Card[];
  gridPosition: { row: number; col: number }; // Grid position (0-2 for 3x3)
  dimensions: { width: number; height: number };
}

const clusters: Cluster[] = [
  {
    id: 'A',
    gridPosition: { row: 0, col: 0 },
    dimensions: { width: 240, height: 140 }, // Landscape (wider)
    cards: [
      { id: 'c1-1', text: 'Less paperwork,\nmore teamwork' },
      { id: 'c1-2', text: 'Collaboration\nmatters most' },
      { id: 'c1-3', text: 'Teamwork makes\nthe dream work' },
      { id: 'c1-4', text: 'Together we\nachieve more' },
      { id: 'c1-5', text: 'Unity in\naction' },
    ],
  },
  {
    id: 'B',
    gridPosition: { row: 1, col: 0 },
    dimensions: { width: 160, height: 160 }, // Square
    cards: [
      { id: 'c2-1', text: 'Printed By\nSomerset.' },
      { id: 'c2-2', text: 'Quality print\nservices' },
    ],
  },
  {
    id: 'C',
    gridPosition: { row: 2, col: 0 },
    dimensions: { width: 140, height: 180 }, // Portrait (taller)
    cards: [
      { id: 'c3-1', text: 'Gallery' },
      { id: 'c3-2', text: 'Showcase of\nour work' },
      { id: 'c3-3', text: 'Visual portfolio\ncollection' },
      { id: 'c3-4', text: 'Creative\ndisplay' },
    ],
  },
  {
    id: 'D',
    gridPosition: { row: 0, col: 1 },
    dimensions: { width: 200, height: 200 }, // Square
    cards: [
      { id: 'c4-1', text: 'Who is\nSomerset?' },
      { id: 'c4-2', text: 'About our\ncompany' },
      { id: 'c4-3', text: 'Our story\nand mission' },
      { id: 'c4-4', text: 'Team behind\nthe brand' },
      { id: 'c4-5', text: 'Company\nvalues' },
      { id: 'c4-6', text: 'Our journey\nso far' },
    ],
  },
  {
    id: 'E',
    gridPosition: { row: 1, col: 1 },
    dimensions: { width: 180, height: 100 }, // Landscape (wider)
    cards: [
      { id: 'c5-1', text: 'Video' },
      { id: 'c5-2', text: 'Video content\nand media' },
      { id: 'c5-3', text: 'Multimedia\npresentation' },
    ],
  },
  {
    id: 'F',
    gridPosition: { row: 2, col: 1 },
    dimensions: { width: 150, height: 200 }, // Portrait (taller)
    cards: [
      { id: 'c6-1', text: 'What is\nDie-Cutting?' },
      { id: 'c6-2', text: 'Precision cutting\ntechniques' },
      { id: 'c6-3', text: 'Custom shapes\nand designs' },
      { id: 'c6-4', text: 'Specialty\nfinishing' },
    ],
  },
  {
    id: 'G',
    gridPosition: { row: 0, col: 2 },
    dimensions: { width: 260, height: 160 }, // Landscape (wider)
    cards: [
      { id: 'c7-1', text: 'This paper stack\nis out of order.' },
      { id: 'c7-2', text: 'Creative chaos\nin design' },
      { id: 'c7-3', text: 'Organized\nmessiness' },
      { id: 'c7-4', text: 'Beautiful\nimperfection' },
      { id: 'c7-5', text: 'Artistic\narrangement' },
    ],
  },
  {
    id: 'H',
    gridPosition: { row: 1, col: 2 },
    dimensions: { width: 140, height: 190 }, // Portrait (taller)
    cards: [
      { id: 'c8-1', text: 'Our better\nis better' },
      { id: 'c8-2', text: 'Excellence in\nevery detail' },
    ],
  },
  {
    id: 'I',
    gridPosition: { row: 2, col: 2 },
    dimensions: { width: 170, height: 170 }, // Square
    cards: [
      { id: 'c9-1', text: 'Print with us' },
      { id: 'c9-2', text: 'Get started\ntoday' },
      { id: 'c9-3', text: 'Contact us\nfor quotes' },
    ],
  },
];

export default function Values() {
  const [hoveredClusters, setHoveredClusters] = useState<Set<string>>(new Set());
  const [cardOrders, setCardOrders] = useState<Record<string, number[]>>(() => {
    const orders: Record<string, number[]> = {};
    clusters.forEach((cluster) => {
      orders[cluster.id] = cluster.cards.map((_, index) => index);
    });
    return orders;
  });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  // Update container size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleClusterHover = (clusterId: string) => {
    if (hoveredClusters.has(clusterId)) return; // Prevent multiple rotations on same hover
    
    setHoveredClusters((prev) => new Set(prev).add(clusterId));
    
    // Rotate the card order: move top card (last in order array) to the beginning
    setCardOrders((prev) => {
      const currentOrder = prev[clusterId] || [];
      if (currentOrder.length > 1) {
        // Move top card (last in order) to the back (first position)
        const newOrder = [currentOrder[currentOrder.length - 1], ...currentOrder.slice(0, -1)];
        return { ...prev, [clusterId]: newOrder };
      }
      return prev;
    });
  };

  const handleClusterLeave = (clusterId: string) => {
    setHoveredClusters((prev) => {
      const newSet = new Set(prev);
      newSet.delete(clusterId);
      return newSet;
    });
  };

  const getCardZIndex = (clusterId: string, cardIndex: number) => {
    const order = cardOrders[clusterId] || [];
    const positionInStack = order.indexOf(cardIndex);
    return positionInStack; // Higher z-index for cards later in order (on top)
  };

  const getCardOffset = (clusterId: string, cardIndex: number) => {
    const order = cardOrders[clusterId] || [];
    const positionInStack = order.indexOf(cardIndex);
    
    // Special handling for cluster G (out of order stack)
    if (clusterId === 'G') {
      const offsets = [
        { x: 0, y: 0 },
        { x: 6, y: 8 },
        { x: -4, y: 12 },
        { x: 8, y: 16 },
        { x: -2, y: 20 },
      ];
      return offsets[positionInStack] || { x: positionInStack * 4, y: positionInStack * 6 };
    }
    
    // Uniform fanning for other clusters - cards further back have more offset
    // Increased gap: 4px horizontal, 6px vertical per card
    return {
      x: positionInStack * 4,
      y: positionInStack * 6,
    };
  };

  // Calculate absolute position based on grid position with irregular gaps, centered
  const getClusterPositions = React.useMemo(() => {
    // Irregular gaps: different spacing between columns and rows
    const colGaps = [24, 40]; // Gaps between columns (after col 0, after col 1)
    const rowGaps = [28, 36]; // Gaps between rows (after row 0, after row 1)
    
    // Calculate max dimensions for each column and row
    const colMaxWidths = [0, 0, 0];
    const rowMaxHeights = [0, 0, 0];
    
    clusters.forEach((c) => {
      const col = c.gridPosition.col;
      const row = c.gridPosition.row;
      if (c.dimensions.width > colMaxWidths[col]) {
        colMaxWidths[col] = c.dimensions.width;
      }
      if (c.dimensions.height > rowMaxHeights[row]) {
        rowMaxHeights[row] = c.dimensions.height;
      }
    });
    
    // Calculate total grid width and height
    const totalGridWidth = colMaxWidths[0] + colGaps[0] + colMaxWidths[1] + colGaps[1] + colMaxWidths[2];
    const totalGridHeight = rowMaxHeights[0] + rowGaps[0] + rowMaxHeights[1] + rowGaps[1] + rowMaxHeights[2];
    
    // Calculate column left positions (starting from 0, will be centered later)
    const colLefts = [0];
    for (let i = 1; i < 3; i++) {
      colLefts[i] = colLefts[i - 1] + colMaxWidths[i - 1] + colGaps[i - 1];
    }
    
    // Calculate row top positions (starting from 0, will be centered later)
    const rowTops = [0];
    for (let i = 1; i < 3; i++) {
      rowTops[i] = rowTops[i - 1] + rowMaxHeights[i - 1] + rowGaps[i - 1];
    }
    
    // Calculate centering offsets (will be applied when container dimensions are known)
    return {
      colLefts,
      rowTops,
      totalGridWidth,
      totalGridHeight,
    };
  }, []);

  const getClusterPosition = (cluster: Cluster) => {
    if (containerSize.width === 0 || containerSize.height === 0) {
      // Fallback if container not yet measured
      return { left: 0, top: 0 };
    }
    
    // Calculate centering offsets
    const offsetX = (containerSize.width - getClusterPositions.totalGridWidth) / 2;
    const offsetY = (containerSize.height - getClusterPositions.totalGridHeight) / 2;
    
    // Special positioning adjustments for specific clusters
    let topOffset = 0;
    let leftOffset = 0;
    
    if (cluster.id === 'D') {
      topOffset = 40; // Move cluster D up by 40px
    }
    
    if (cluster.id === 'B') {
      leftOffset = 64; // Move cluster B to the right by 64px
      topOffset = -40; // Move cluster B up by 40px
    }

    if (cluster.id === 'F') {
      topOffset = -20; // Move cluster B up by 40px
    }

    if (cluster.id === 'A') {
      topOffset = -10; // Move cluster B up by 40px
      leftOffset = -24; // Move cluster B to the right by 64px

    }

    if (cluster.id === 'I') {
      topOffset = -20; // Move cluster B up by 40px
      leftOffset = -44; // Move cluster B to the right by 64px

    }

    if (cluster.id === 'H') {
      topOffset = -10; // Move cluster B up by 40px
      leftOffset = -4; // Move cluster B to the right by 64px

    }

    if (cluster.id === 'G') {
      topOffset = 20; // Move cluster B up by 40px
    }
    
    if (cluster.id === 'C') {
      leftOffset = 64; // Move cluster C to the right by 24px
      topOffset = -64; // Move cluster C up by 64px
    }
    
    if (cluster.id === 'E') {
      topOffset = 64; // Move cluster E down by 64px
    }
    
    // Position cluster with centering offset
    return {
      left: getClusterPositions.colLefts[cluster.gridPosition.col] + offsetX + leftOffset,
      top: getClusterPositions.rowTops[cluster.gridPosition.row] + offsetY + topOffset,
    };
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto mb-32">
      <div 
        className="rounded-lg p-16 relative overflow-hidden" 
        style={{ 
          minHeight: '600px',
          backgroundImage: 'url(/images/wip/about/values2.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div ref={containerRef} className="relative w-full h-full" style={{ minHeight: '600px' }}>
          {clusters.map((cluster) => {
            const isHovered = hoveredClusters.has(cluster.id);
            const order = cardOrders[cluster.id] || [];
            const position = getClusterPosition(cluster);
            
            return (
              <div
                key={cluster.id}
                className="absolute"
                style={{
                  left: `${position.left}px`,
                  top: `${position.top}px`,
                }}
                onMouseEnter={() => handleClusterHover(cluster.id)}
                onMouseLeave={() => handleClusterLeave(cluster.id)}
              >
                <div className="relative">
                  {cluster.cards.map((card, originalIndex) => {
                    const positionInStack = order.indexOf(originalIndex);
                    const offset = getCardOffset(cluster.id, originalIndex);
                    const zIndex = getCardZIndex(cluster.id, originalIndex);
                    
                    return (
                      <motion.div
                        key={card.id}
                        className="absolute bg-white cursor-pointer"
                        style={{
                          width: `${cluster.dimensions.width}px`,
                          minHeight: `${cluster.dimensions.height}px`,
                          padding: '16px',
                          border: '2px solid black',
                        }}
                        initial={false}
                        animate={{
                          x: offset.x,
                          y: offset.y,
                          zIndex: zIndex,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <p
                          className={`${interFont.variable} font-inter text-black leading-relaxed whitespace-pre-line`}
                          style={{ textAlign: 'left', fontSize: '18px' }}
                        >
                          {card.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
