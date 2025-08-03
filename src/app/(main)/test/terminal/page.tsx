import React from 'react';
import Terminal from './components/Terminal';
import { FlickeringGrid } from './components/flickerbg';

export default function TerminalTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
      <FlickeringGrid 
        className="absolute inset-0"
        color="rgb(0, 0, 0)"
        maxOpacity={0.1}
        flickerChance={0.2}
      />
      <Terminal initialPosition={{ x: 50, y: 100 }} />
    </div>
  );
} 