'use client';

import React, { useState, useRef, useMemo } from 'react';
import { InfiniteCanvas, CanvasControls } from './components';
import type { CanvasCard, InfiniteCanvasHandle } from './components/infinite-canvas';

// Highlights image data (45 images total)
const highlightsImages = [
  // Syn Highlights (20 images)
  { id: '1', src: '/images/syn-highlights/Highlight-1.svg', alt: 'Adding a bunch of random text here to make sure this is properly tested in the HTML page.', tags: ['0-1-products', 'enterprise'] },
  { id: '2', src: '/images/syn-highlights/Highlight-2.svg', alt: 'Syn Highlight 2', tags: ['0-1-products', 'mobile'] },
  { id: '3', src: '/images/syn-highlights/Highlight-3.svg', alt: 'Syn Highlight 3', tags: ['0-1-products', 'consumer'] },
  { id: '4', src: '/images/syn-highlights/Highlight-4.svg', alt: 'Syn Highlight 4', tags: ['0-1-products', 'big-bets'] },
  { id: '5', src: '/images/syn-highlights/Highlight-5.svg', alt: 'Syn Highlight 5', tags: ['enterprise', 'mobile'] },
  { id: '6', src: '/images/syn-highlights/Highlight-6.svg', alt: 'Syn Highlight 6', tags: ['enterprise', 'consumer'] },
  { id: '7', src: '/images/syn-highlights/Highlight-7.svg', alt: 'Syn Highlight 7', tags: ['enterprise', 'big-bets'] },
  { id: '8', src: '/images/syn-highlights/Highlight-8.svg', alt: 'Syn Highlight 8', tags: ['mobile', 'consumer'] },
  { id: '9', src: '/images/syn-highlights/Highlight-9.svg', alt: 'Syn Highlight 9', tags: ['mobile', 'big-bets'] },
  { id: '10', src: '/images/syn-highlights/Highlight-10.svg', alt: 'Syn Highlight 10', tags: ['consumer', 'big-bets'] },
  { id: '11', src: '/images/syn-highlights/Highlight-11.svg', alt: 'Syn Highlight 11', tags: ['0-1-products', 'enterprise'] },
  { id: '12', src: '/images/syn-highlights/Highlight-12.svg', alt: 'Syn Highlight 12', tags: ['0-1-products', 'mobile'] },
  { id: '13', src: '/images/syn-highlights/Highlight-13.svg', alt: 'Syn Highlight 13', tags: ['0-1-products', 'consumer'] },
  { id: '14', src: '/images/syn-highlights/Highlight-14.svg', alt: 'Syn Highlight 14', tags: ['0-1-products', 'big-bets'] },
  { id: '15', src: '/images/syn-highlights/Highlight-15.svg', alt: 'Syn Highlight 15', tags: ['enterprise', 'mobile'] },
  { id: '16', src: '/images/syn-highlights/Highlight-16.svg', alt: 'Syn Highlight 16', tags: ['enterprise', 'consumer'] },
  { id: '17', src: '/images/syn-highlights/Highlight-17.svg', alt: 'Syn Highlight 17', tags: ['enterprise', 'big-bets'] },
  { id: '18', src: '/images/syn-highlights/Highlight-18.svg', alt: 'Syn Highlight 18', tags: ['mobile', 'consumer'] },
  { id: '19', src: '/images/syn-highlights/Highlight-19.svg', alt: 'Syn Highlight 19', tags: ['mobile', 'big-bets'] },
  { id: '20', src: '/images/syn-highlights/Highlight.svg', alt: 'Syn Highlight', tags: ['consumer', 'big-bets'] },
  // Nav Highlights (25 images)
  { id: '21', src: '/images/nav-highlights/Highlight-1.svg', alt: 'Nav Highlight 1', tags: ['0-1-products', 'enterprise'] },
  { id: '22', src: '/images/nav-highlights/Highlight-2.svg', alt: 'Nav Highlight 2', tags: ['0-1-products', 'mobile'] },
  { id: '23', src: '/images/nav-highlights/Highlight-3.svg', alt: 'Nav Highlight 3', tags: ['0-1-products', 'consumer'] },
  { id: '24', src: '/images/nav-highlights/Highlight-4.svg', alt: 'Nav Highlight 4', tags: ['0-1-products', 'big-bets'] },
  { id: '25', src: '/images/nav-highlights/Highlight-5.svg', alt: 'Nav Highlight 5', tags: ['enterprise', 'mobile'] },
  { id: '26', src: '/images/nav-highlights/Highlight-6.svg', alt: 'Nav Highlight 6', tags: ['enterprise', 'consumer'] },
  { id: '27', src: '/images/nav-highlights/Highlight-7.svg', alt: 'Nav Highlight 7', tags: ['enterprise', 'big-bets'] },
  { id: '28', src: '/images/nav-highlights/Highlight-8.svg', alt: 'Nav Highlight 8', tags: ['mobile', 'consumer'] },
  { id: '29', src: '/images/nav-highlights/Highlight-9.svg', alt: 'Nav Highlight 9', tags: ['mobile', 'big-bets'] },
  { id: '30', src: '/images/nav-highlights/Highlight-10.svg', alt: 'Nav Highlight 10', tags: ['consumer', 'big-bets'] },
  { id: '31', src: '/images/nav-highlights/Highlight-11.svg', alt: 'Nav Highlight 11', tags: ['0-1-products', 'enterprise'] },
  { id: '32', src: '/images/nav-highlights/Highlight-12.svg', alt: 'Nav Highlight 12', tags: ['0-1-products', 'mobile'] },
  { id: '33', src: '/images/nav-highlights/Highlight-13.svg', alt: 'Nav Highlight 13', tags: ['0-1-products', 'consumer'] },
  { id: '34', src: '/images/nav-highlights/Highlight-14.svg', alt: 'Nav Highlight 14', tags: ['0-1-products', 'big-bets'] },
  { id: '35', src: '/images/nav-highlights/Highlight-15.svg', alt: 'Nav Highlight 15', tags: ['enterprise', 'mobile'] },
  { id: '36', src: '/images/nav-highlights/Highlight-16.svg', alt: 'Nav Highlight 16', tags: ['enterprise', 'consumer'] },
  { id: '37', src: '/images/nav-highlights/Highlight-17.svg', alt: 'Nav Highlight 17', tags: ['enterprise', 'big-bets'] },
  { id: '38', src: '/images/nav-highlights/Highlight-18.svg', alt: 'Nav Highlight 18', tags: ['mobile', 'consumer'] },
  { id: '39', src: '/images/nav-highlights/Highlight-19.svg', alt: 'Nav Highlight 19', tags: ['mobile', 'big-bets'] },
  { id: '40', src: '/images/nav-highlights/Highlight-20.svg', alt: 'Nav Highlight 20', tags: ['consumer', 'big-bets'] },
  { id: '41', src: '/images/nav-highlights/Highlight-21.svg', alt: 'Nav Highlight 21', tags: ['0-1-products', 'enterprise'] },
  { id: '42', src: '/images/nav-highlights/Highlight-22.svg', alt: 'Nav Highlight 22', tags: ['0-1-products', 'mobile'] },
  { id: '43', src: '/images/nav-highlights/Highlight-23.svg', alt: 'Nav Highlight 23', tags: ['0-1-products', 'consumer'] },
  { id: '44', src: '/images/nav-highlights/Highlight-24.svg', alt: 'Nav Highlight 24', tags: ['0-1-products', 'big-bets'] },
  { id: '45', src: '/images/nav-highlights/Highlight.svg', alt: 'Nav Highlight', tags: ['enterprise', 'mobile'] },
];

// Check if two rectangles are too close (less than gap apart)
const rectanglesTooClose = (
  rect1: { x: number; y: number; width: number; height: number },
  rect2: { x: number; y: number; width: number; height: number },
  gap: number
): boolean => {
  // Calculate horizontal distance
  const horizontalGap = Math.max(
    rect2.x - (rect1.x + rect1.width),
    rect1.x - (rect2.x + rect2.width)
  );
  
  // Calculate vertical distance
  const verticalGap = Math.max(
    rect2.y - (rect1.y + rect1.height),
    rect1.y - (rect2.y + rect2.height)
  );
  
  // If both gaps are negative, they overlap
  if (horizontalGap < 0 && verticalGap < 0) {
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

// Generate random position within canvas bounds, ensuring 80px gap from other cards
const generateRandomPosition = (
  index: number,
  existingCards: Array<{ x: number; y: number; width: number; height: number }>
) => {
  // Use a seeded random based on index for consistent positioning
  const seed = index * 12345;
  const random = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  
  // Canvas bounds - spread cards across a large area
  const minX = 50;
  const maxX = 2500;
  const minY = 50;
  const maxY = 4000;
  
  // Vary card sizes slightly for visual interest
  const baseWidth = 200;
  const baseHeight = 260;
  const widthVariation = 80; // ±40px
  const heightVariation = 60; // ±30px
  
  const gap = 80; // Minimum gap between cards
  const maxAttempts = 100; // Prevent infinite loops
  
  let attempts = 0;
  let position: { x: number; y: number; width: number; height: number };
  
  do {
    position = {
      x: Math.floor(minX + random(seed + attempts * 100) * (maxX - minX)),
      y: Math.floor(minY + random(seed + attempts * 100 + 1) * (maxY - minY)),
      width: baseWidth + Math.floor((random(seed + attempts * 100 + 2) - 0.5) * widthVariation),
      height: baseHeight + Math.floor((random(seed + attempts * 100 + 3) - 0.5) * heightVariation),
    };
    
    attempts++;
    
    // Check if this position is valid (80px away from all existing cards)
    const isValid = existingCards.every(existingCard => 
      !rectanglesTooClose(position, existingCard, gap)
    );
    
    if (isValid || attempts >= maxAttempts) {
      break;
    }
  } while (attempts < maxAttempts);
  
  return position;
};

// Convert highlights images to canvas cards with random positions
const generateCanvasCards = (): CanvasCard[] => {
  const cards: CanvasCard[] = [];
  const existingPositions: Array<{ x: number; y: number; width: number; height: number }> = [];
  
  highlightsImages.forEach((img, index) => {
    const position = generateRandomPosition(index, existingPositions);
    existingPositions.push(position);
    
    const year = 2015 + (index % 10); // Vary years between 2015-2024
    
    // Extract type and kind from tags
    const typeMap: Record<string, string> = {
      'enterprise': 'Enterprise',
      'mobile': 'Mobile',
      'consumer': 'Consumer',
      'big-bets': 'Big Bets',
      '0-1-products': '0-1 Products',
    };
    
    const type = img.tags.find(t => typeMap[t]) ? typeMap[img.tags.find(t => typeMap[t])!] : 'Digital';
    const kind = img.tags.length > 1 ? typeMap[img.tags[1]] || 'Product' : 'Design';
    
    cards.push({
      id: img.id,
      x: position.x,
      y: position.y,
      width: position.width,
      height: position.height,
      image: img.src,
      title: img.alt.length > 30 ? img.alt.substring(0, 27) + '...' : img.alt,
      author: 'Design Team',
      year: year.toString(),
      source: `whenwe.love/highlights/${img.id}.html`,
      keyStrength: type,
      type: type,
      kind: kind,
      description: img.alt,
    });
  });
  
  return cards;
};

export default function PlayPage() {
  const [selectedCard, setSelectedCard] = useState<CanvasCard | null>(null);
  const canvasRef = useRef<InfiniteCanvasHandle>(null);
  
  // Generate canvas cards from highlights images with random positions
  const canvasCards = useMemo(() => generateCanvasCards(), []);

  const handleZoomIn = () => {
    canvasRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    canvasRef.current?.zoomOut();
  };

  return (
    <div 
      className="fixed"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 9999,
      }}
    >
      {/* Main canvas area - full width and height */}
      <div 
        className="absolute"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
        }}
      >
        <InfiniteCanvas
          ref={canvasRef}
          cards={canvasCards}
          onCardSelect={setSelectedCard}
          selectedCardId={selectedCard?.id || null}
          selectedCard={selectedCard}
        />
      </div>

      {/* Controls */}
      <CanvasControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />
    </div>
  );
}
