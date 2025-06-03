'use client';

import React, { useState } from 'react';
import Grid6Field from './Grid6Field';
import Grid8Field from './Grid8Field';
import Grid18Field from './Grid18Field';
import Grid20Field from './Grid20Field';
import Grid36Field from './Grid36Field';

type GridType = '6-field' | '8-field' | '18-field' | '36-field' | '20-field';

export const GridDemo: React.FC = () => {
  const [selectedGrid, setSelectedGrid] = useState<GridType>('6-field');
  const [margin, setMargin] = useState(80);
  const [marginHorizontal, setMarginHorizontal] = useState<number | undefined>(undefined);
  const [marginVertical, setMarginVertical] = useState<number | undefined>(undefined);
  const [gap, setGap] = useState(20);
  const [useIndividualMargins, setUseIndividualMargins] = useState(false);

  const renderGrid = () => {
    const props = useIndividualMargins 
      ? { marginHorizontal, marginVertical, gap }
      : { margin, gap };
    
    switch (selectedGrid) {
      case '6-field':
        return <Grid6Field {...props} />;
      case '8-field':
        return <Grid8Field {...props} />;
      case '18-field':
        return <Grid18Field {...props} />;
      case '36-field':
        return <Grid36Field {...props} />;
      case '20-field':
        return <Grid20Field {...props} />;
      default:
        return <Grid6Field {...props} />;
    }
  };

  const getDisplayMargins = () => {
    if (useIndividualMargins) {
      return `H:${marginHorizontal ?? 80}px V:${marginVertical ?? 80}px`;
    }
    return `${margin}px`;
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Controls */}
      <div className="p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold mb-4">Advanced Customizable Grid System</h1>
        
        {/* Grid Type Selector */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Grid Type</h3>
          <div className="flex gap-2 flex-wrap">
            {(['6-field', '8-field', '18-field', '36-field', '20-field'] as GridType[]).map((grid) => (
              <button
                key={grid}
                onClick={() => setSelectedGrid(grid)}
                className={`px-4 py-2 rounded transition-colors ${
                  selectedGrid === grid
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
                }`}
              >
                {grid.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Margin Mode Toggle */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Margin Mode</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setUseIndividualMargins(false)}
              className={`px-4 py-2 rounded transition-colors ${
                !useIndividualMargins
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
              }`}
            >
              Uniform Margin
            </button>
            <button
              onClick={() => setUseIndividualMargins(true)}
              className={`px-4 py-2 rounded transition-colors ${
                useIndividualMargins
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
              }`}
            >
              Individual H/V Margins
            </button>
          </div>
        </div>

        {/* Uniform Margin Control */}
        {!useIndividualMargins && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Uniform Margin: {margin}px</h3>
            <div className="flex gap-4 items-center">
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
                className="flex-1"
              />
              <div className="flex gap-2">
                <button 
                  onClick={() => setMargin(0)}
                  className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                >
                  0px
                </button>
                <button 
                  onClick={() => setMargin(40)}
                  className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                >
                  40px
                </button>
                <button 
                  onClick={() => setMargin(80)}
                  className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                >
                  80px
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Individual Margin Controls */}
        {useIndividualMargins && (
          <>
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2">Horizontal Margin: {marginHorizontal ?? 80}px</h3>
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="10"
                  value={marginHorizontal ?? 80}
                  onChange={(e) => setMarginHorizontal(Number(e.target.value))}
                  className="flex-1"
                />
                <div className="flex gap-2">
                  <button 
                    onClick={() => setMarginHorizontal(0)}
                    className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                  >
                    0px
                  </button>
                  <button 
                    onClick={() => setMarginHorizontal(40)}
                    className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                  >
                    40px
                  </button>
                  <button 
                    onClick={() => setMarginHorizontal(80)}
                    className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                  >
                    80px
                  </button>
                  <button 
                    onClick={() => setMarginHorizontal(120)}
                    className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                  >
                    120px
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2">Vertical Margin: {marginVertical ?? 80}px</h3>
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="10"
                  value={marginVertical ?? 80}
                  onChange={(e) => setMarginVertical(Number(e.target.value))}
                  className="flex-1"
                />
                <div className="flex gap-2">
                  <button 
                    onClick={() => setMarginVertical(0)}
                    className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                  >
                    0px
                  </button>
                  <button 
                    onClick={() => setMarginVertical(20)}
                    className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                  >
                    20px
                  </button>
                  <button 
                    onClick={() => setMarginVertical(80)}
                    className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                  >
                    80px
                  </button>
                  <button 
                    onClick={() => setMarginVertical(120)}
                    className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                  >
                    120px
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Gap Control */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Gap: {gap}px</h3>
          <div className="flex gap-4 items-center">
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              className="flex-1"
            />
            <div className="flex gap-2">
              <button 
                onClick={() => setGap(0)}
                className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
              >
                0px
              </button>
              <button 
                onClick={() => setGap(10)}
                className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
              >
                10px
              </button>
              <button 
                onClick={() => setGap(20)}
                className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
              >
                20px
              </button>
              <button 
                onClick={() => setGap(40)}
                className="px-2 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
              >
                40px
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-300">
          Current: {selectedGrid} | Margins: {getDisplayMargins()} | Gap: {gap}px
        </div>
      </div>

      {/* Grid display area */}
      <div className="flex-1 bg-green-200 relative">
        <div className="w-full h-full">
          {renderGrid()}
        </div>
      </div>
    </div>
  );
}; 