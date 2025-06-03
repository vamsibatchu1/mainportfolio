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

const Grid6Field: React.FC<GridProps> = ({ 
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
          className="grid grid-cols-2 grid-rows-3 w-full h-full"
          style={{ gap: `${gap}px` }}
        >
          {/* Field 1 - Main Header */}
          <Field rowStart={1} colStart={1}>
            <h1 className={`${tekoFont.className} text-4xl font-bold text-gray-900`}>
              Portfolio Overview
            </h1>
          </Field>

          {/* Field 2 - Introduction Text */}
          <Field rowStart={1} colStart={2}>
            <p className={`${loraFont.className} text-gray-700 leading-relaxed`}>
              Welcome to my creative workspace. Here you&apos;ll find a carefully curated collection of projects that showcase my expertise in design, development, and user experience.
            </p>
          </Field>

          {/* Field 3 - Skills Section */}
          <Field rowStart={2} colStart={1}>
            <div>
              <h3 className={`${tekoFont.className} text-2xl font-bold text-gray-900 mb-4`}>
                Core Skills
              </h3>
              <ul className={`${loraFont.className} text-gray-700 space-y-2`}>
                <li>• UI/UX Design</li>
                <li>• Frontend Development</li>
                <li>• Design Systems</li>
                <li>• User Research</li>
              </ul>
            </div>
          </Field>

          {/* Field 4 - Featured Project */}
          <Field rowStart={2} colStart={2} className="bg-gray-100 rounded-lg p-6">
            <div>
              <h3 className={`${tekoFont.className} text-xl font-bold text-gray-900 mb-3`}>
                Featured Project
              </h3>
              <p className={`${loraFont.className} text-gray-600 text-sm mb-4`}>
                E-commerce platform redesign that increased conversion rates by 40%
              </p>
              <button className={`${loraFont.className} text-blue-600 hover:text-blue-800 text-sm font-medium`}>
                View Case Study →
              </button>
            </div>
          </Field>

          {/* Field 5 - Image Placeholder */}
          <Field rowStart={3} colStart={1} className="bg-gray-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-300 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className={`${loraFont.className} text-sm`}>Project Gallery</p>
              </div>
            </div>
          </Field>

          {/* Field 6 - Contact CTA */}
          <Field rowStart={3} colStart={2}>
            <div className="h-full flex flex-col justify-center">
              <h3 className={`${tekoFont.className} text-2xl font-bold text-gray-900 mb-3`}>
                Let&apos;s Work Together
              </h3>
              <p className={`${loraFont.className} text-gray-700 mb-4`}>
                Ready to bring your ideas to life? I&apos;d love to hear about your project.
              </p>
              <button className={`${tekoFont.className} bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-fit`}>
                Get In Touch
              </button>
            </div>
          </Field>
        </div>
      </GridContainer>
    </div>
  );
};

export default Grid6Field;
export { Field }; 