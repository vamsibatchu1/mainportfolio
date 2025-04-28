"use client";

import React from 'react';
import { DualCard } from '@/app/design-system/dualcard/dualcard';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black p-8 md:p-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">DualCard Test Page</h1>
        
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Card XS</h2>
            <DualCard variant="xs" />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Card SM</h2>
            <DualCard variant="sm" />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Card MD</h2>
            <DualCard variant="md" />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Custom Card</h2>
            <DualCard 
              variant="sm"
              config={{
                cardWidth: '720px',
                primaryBgColor: '#151515',
                secondaryBgColor: '#FF531A',
                titleFontSize: '56px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 