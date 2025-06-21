'use client';

import React from 'react';
import Dock2 from './dock2';

const Dock2Demo: React.FC = () => {
  const handleClose = () => {
    console.log('Dock closed');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-white text-2xl font-bold mb-8">Dock2 Component Demo</h1>
        
        {/* Demo dock */}
        <Dock2 onClose={handleClose} />
        
        <div className="text-gray-400 text-sm text-center max-w-md">
          <p>This dock component matches the Figma design exactly:</p>
          <ul className="mt-2 space-y-1">
            <li>• Rounded pill-shaped container with dark background</li>
            <li>• Selected state shows white background with text</li>
            <li>• Smooth animations for state transitions</li>
            <li>• Separate close button with consistent styling</li>
            <li>• Pixel-perfect colors and spacing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dock2Demo; 