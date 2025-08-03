import React from 'react';
import Terminal from './components/Terminal';

export default function TerminalTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <Terminal initialPosition={{ x: 50, y: 100 }} />
    </div>
  );
} 