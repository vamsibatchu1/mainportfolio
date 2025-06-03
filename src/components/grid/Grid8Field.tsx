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

const Grid8Field: React.FC<GridProps> = ({ 
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
          className="grid grid-cols-2 grid-rows-4 w-full h-full"
          style={{ gap: `${gap}px` }}
        >
          {/* Field 1 - Main Header */}
          <Field rowStart={1} colStart={1}>
            <h1 className={`${tekoFont.className} text-4xl font-bold text-gray-900`}>
              Design Portfolio
            </h1>
          </Field>

          {/* Field 2 - Intro Text */}
          <Field rowStart={1} colStart={2}>
            <p className={`${loraFont.className} text-gray-700 leading-relaxed`}>
              A comprehensive showcase of design thinking, user experience, and creative problem-solving across various digital platforms and mediums.
            </p>
          </Field>

          {/* Field 3 - Services */}
          <Field rowStart={2} colStart={1}>
            <div>
              <h3 className={`${tekoFont.className} text-2xl font-bold text-gray-900 mb-4`}>
                Services
              </h3>
              <ul className={`${loraFont.className} text-gray-700 space-y-2`}>
                <li>• Product Design</li>
                <li>• Brand Identity</li>
                <li>• Web Development</li>
              </ul>
            </div>
          </Field>

          {/* Field 4 - Statistics */}
          <Field rowStart={2} colStart={2} className="bg-blue-50 rounded-lg p-4">
            <div>
              <h3 className={`${tekoFont.className} text-xl font-bold text-blue-900 mb-3`}>
                Project Impact
              </h3>
              <div className={`${loraFont.className} text-blue-800 space-y-1 text-sm`}>
                <p>50+ Projects Completed</p>
                <p>95% Client Satisfaction</p>
                <p>3+ Years Experience</p>
              </div>
            </div>
          </Field>

          {/* Field 5 - Featured Work */}
          <Field rowStart={3} colStart={1} className="bg-gray-100 rounded-lg p-4">
            <div>
              <h3 className={`${tekoFont.className} text-lg font-bold text-gray-900 mb-2`}>
                Mobile App Design
              </h3>
              <p className={`${loraFont.className} text-gray-600 text-sm mb-3`}>
                Fitness tracking app with intuitive UX
              </p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Featured
              </span>
            </div>
          </Field>

          {/* Field 6 - Another Project */}
          <Field rowStart={3} colStart={2} className="bg-gray-100 rounded-lg p-4">
            <div>
              <h3 className={`${tekoFont.className} text-lg font-bold text-gray-900 mb-2`}>
                E-commerce Platform
              </h3>
              <p className={`${loraFont.className} text-gray-600 text-sm mb-3`}>
                Complete redesign boosting sales
              </p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                Recent
              </span>
            </div>
          </Field>

          {/* Field 7 - Image Gallery */}
          <Field rowStart={4} colStart={1} className="bg-gray-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className={`${loraFont.className} text-xs`}>Design Gallery</p>
              </div>
            </div>
          </Field>

          {/* Field 8 - Contact */}
          <Field rowStart={4} colStart={2}>
            <div className="h-full flex flex-col justify-center">
              <h3 className={`${tekoFont.className} text-xl font-bold text-gray-900 mb-2`}>
                Start Your Project
              </h3>
              <p className={`${loraFont.className} text-gray-700 text-sm mb-3`}>
                Ready to create something amazing together?
              </p>
              <button className={`${tekoFont.className} bg-gray-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors w-fit`}>
                Contact Me
              </button>
            </div>
          </Field>
        </div>
      </GridContainer>
    </div>
  );
};

export default Grid8Field;
export { Field }; 