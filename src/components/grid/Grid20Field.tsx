'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { GridContainer } from './GridContainer';
import { GridProps, FieldProps } from './types';
import { tekoFont, loraFont } from '@/app/fonts';

// Matrix-based Field component with flexible grid positioning
const Field: React.FC<FieldProps> = ({ 
  rowStart, 
  rowEnd = rowStart + 1, 
  colStart, 
  colEnd = colStart + 1, 
  children, 
  className = ""
}) => {
  return (
    <div 
      style={{
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
      }}
      className={cn(
        'flex flex-col items-start justify-start',
        className
      )}
    >
      {children}
    </div>
  );
};

const Grid20Field: React.FC<GridProps> = ({ 
  className, 
  style, 
  margin = 80, 
  marginHorizontal = 400,
  marginVertical = 80,
  gap = 20 
}) => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <GridContainer 
        className={className} 
        style={style} 
        margin={margin}
        marginHorizontal={marginHorizontal}
        marginVertical={marginVertical}
      >
        <div 
          className="grid grid-cols-4 grid-rows-5 w-full h-full"
          style={{ gap: `${gap}px` }}
        >
          {/* Row 1 - Header Section */}
          <Field rowStart={1} colStart={1}>
            <h1 className={`${tekoFont.className} text-2xl font-bold text-gray-900`}>
              Project Gallery
            </h1>
          </Field>

          <Field rowStart={1} colStart={2}>
            <p className={`${loraFont.className} text-sm text-gray-700`}>
              A curated selection of recent work
            </p>
          </Field>

          <Field rowStart={1} colStart={3} className="bg-blue-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-lg font-bold text-blue-900`}>20+</div>
              <div className={`${loraFont.className} text-xs text-blue-700`}>Projects</div>
            </div>
          </Field>

          <Field rowStart={1} colStart={4} className="bg-green-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-lg font-bold text-green-900`}>100%</div>
              <div className={`${loraFont.className} text-xs text-green-700`}>Success Rate</div>
            </div>
          </Field>

          {/* Row 2 - Featured Projects */}
          <Field rowStart={2} colStart={1} className="bg-white rounded shadow-sm p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold mb-1`}>E-commerce App</h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>Mobile shopping experience</p>
          </Field>

          <Field rowStart={2} colStart={2} className="bg-white rounded shadow-sm p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold mb-1`}>Banking Dashboard</h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>Financial data visualization</p>
          </Field>

          <Field rowStart={2} colStart={3} className="bg-white rounded shadow-sm p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold mb-1`}>Social Platform</h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>Community-driven design</p>
          </Field>

          <Field rowStart={2} colStart={4} className="bg-white rounded shadow-sm p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold mb-1`}>Learning App</h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>Educational platform UI</p>
          </Field>

          {/* Row 3 - Project Images */}
          <Field rowStart={3} colStart={1} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </div>
          </Field>

          <Field rowStart={3} colStart={2} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </div>
          </Field>

          <Field rowStart={3} colStart={3} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-6 h-4 bg-gray-400 rounded"></div>
            </div>
          </Field>

          <Field rowStart={3} colStart={4} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-4 h-6 bg-gray-400 rounded"></div>
            </div>
          </Field>

          {/* Row 4 - Technologies */}
          <Field rowStart={4} colStart={1} className="bg-purple-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-xs font-bold text-purple-900`}>React</div>
            </div>
          </Field>

          <Field rowStart={4} colStart={2} className="bg-blue-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-xs font-bold text-blue-900`}>TypeScript</div>
            </div>
          </Field>

          <Field rowStart={4} colStart={3} className="bg-green-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-xs font-bold text-green-900`}>Node.js</div>
            </div>
          </Field>

          <Field rowStart={4} colStart={4} className="bg-yellow-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-xs font-bold text-yellow-900`}>Figma</div>
            </div>
          </Field>

          {/* Row 5 - Contact and More */}
          <Field rowStart={5} colStart={1} className="bg-gray-900 rounded p-3">
            <div>
              <div className={`${tekoFont.className} text-xs font-bold text-white mb-1`}>Contact</div>
              <div className={`${loraFont.className} text-xs text-gray-300`}>Let&apos;s talk</div>
            </div>
          </Field>

          <Field rowStart={5} colStart={2} className="bg-indigo-100 rounded p-3">
            <div>
              <div className={`${tekoFont.className} text-xs font-bold text-indigo-900 mb-1`}>Process</div>
              <div className={`${loraFont.className} text-xs text-indigo-700`}>How I work</div>
            </div>
          </Field>

          <Field rowStart={5} colStart={3} className="bg-pink-100 rounded p-3">
            <div>
              <div className={`${tekoFont.className} text-xs font-bold text-pink-900 mb-1`}>Testimonials</div>
              <div className={`${loraFont.className} text-xs text-pink-700`}>Client feedback</div>
            </div>
          </Field>

          <Field rowStart={5} colStart={4} className="bg-gradient-to-r from-blue-100 to-purple-100 rounded p-3">
            <div>
              <div className={`${tekoFont.className} text-xs font-bold text-gray-900 mb-1`}>More Work</div>
              <div className={`${loraFont.className} text-xs text-gray-700`}>View all projects</div>
            </div>
          </Field>
        </div>
      </GridContainer>
    </div>
  );
};

export default Grid20Field;
export { Field }; 