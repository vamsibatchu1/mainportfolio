'use client';

import React, { useState, useRef } from 'react';
import { InfiniteCanvas, CanvasControls } from './components';
import type { CanvasCard, InfiniteCanvasHandle } from './components/infinite-canvas';

// Sample card data - replace with your actual data
const sampleCards: CanvasCard[] = [
  {
    id: '1',
    x: 100,
    y: 100,
    width: 240,
    height: 300,
    image: '/images/wip/about/about_design.jpeg',
    title: 'YOU',
    author: 'Olssøn Barbieri',
    year: '2015',
    source: 'whenwe.love/moving/you.html?t=20',
    keyStrength: 'Inquisitiveness',
    type: 'Installation',
    kind: 'Practice',
    description: 'The Territoriet Sound Machine is an installation that translates the taste of wine into sound stories using an analogue machine that processes punch-cards. This innovative approach allows users to experience wine in a multi-sensory manner, enhancing their understanding and appreciation of both wine and sound through creative technological integration.',
  },
  {
    id: '2',
    x: 500,
    y: 200,
    width: 280,
    height: 320,
    image: '/images/wip/about/about_design.jpeg',
    title: 'MOVING',
    author: 'Designer Name',
    year: '2020',
    source: 'whenwe.love/moving/only/M...',
    keyStrength: 'Innovation',
    type: 'Digital',
    kind: 'Experiment',
    description: 'A fascinating project that explores the boundaries of digital interaction.',
  },
  {
    id: '3',
    x: 300,
    y: 500,
    width: 220,
    height: 280,
    image: '/images/wip/about/about_design.jpeg',
    title: 'ME',
    author: 'Another Designer',
    year: '2018',
    source: 'whenwe.love/moving/me.html?t=20',
    keyStrength: 'Creativity',
    type: 'Physical',
    kind: 'Installation',
    description: 'An immersive installation that challenges perceptions.',
  },
  {
    id: '4',
    x: 800,
    y: 400,
    width: 260,
    height: 310,
    image: '/images/wip/about/about_design.jpeg',
    title: 'EXPLORE',
    author: 'Creative Team',
    year: '2022',
    source: 'whenwe.love/explore/index.html',
    keyStrength: 'Experimentation',
    type: 'Hybrid',
    kind: 'Research',
    description: 'A research project exploring new forms of interaction.',
  },
  {
    id: '5',
    x: 200,
    y: 800,
    width: 200,
    height: 260,
    image: '/images/wip/about/about_design.jpeg',
    title: 'CREATE',
    author: 'Studio Name',
    year: '2019',
    source: 'whenwe.love/create/studio.html?t=20',
    keyStrength: 'Vision',
    type: 'Digital',
    kind: 'Product',
    description: 'A visionary product that reimagines user experience.',
  },
];

export default function PlayPage() {
  const [selectedCard, setSelectedCard] = useState<CanvasCard | null>(null);
  const canvasRef = useRef<InfiniteCanvasHandle>(null);

  const handleZoomIn = () => {
    canvasRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    canvasRef.current?.zoomOut();
  };

  return (
    <div className="w-full h-screen relative overflow-hidden" style={{ height: '100vh', minHeight: '100vh' }}>
      {/* Main canvas area - full width */}
      <div className="absolute inset-0 w-full h-full">
        <InfiniteCanvas
          ref={canvasRef}
          cards={sampleCards}
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
