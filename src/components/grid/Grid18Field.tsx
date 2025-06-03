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

const Grid18Field: React.FC<GridProps> = ({ 
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
          className="grid grid-cols-2 grid-rows-9 w-full h-full"
          style={{ gap: `${gap}px` }}
        >
          {/* Field 1 - Main Title */}
          <Field rowStart={1} colStart={1}>
            <h1 className={`${tekoFont.className} text-3xl font-bold text-gray-900`}>
              Creative Journal
            </h1>
          </Field>

          {/* Field 2 - Subtitle */}
          <Field rowStart={1} colStart={2}>
            <p className={`${loraFont.className} text-lg text-gray-700`}>
              Daily insights, experiments, and discoveries in design and technology.
            </p>
          </Field>

          {/* Field 3 - Article 1 */}
          <Field rowStart={2} colStart={1} className="bg-white rounded-lg p-3 shadow-sm">
            <h3 className={`${tekoFont.className} text-sm font-bold text-gray-900 mb-1`}>
              Design Principles
            </h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>
              Core principles that guide effective visual communication.
            </p>
          </Field>

          {/* Field 4 - Article 2 */}
          <Field rowStart={2} colStart={2} className="bg-white rounded-lg p-3 shadow-sm">
            <h3 className={`${tekoFont.className} text-sm font-bold text-gray-900 mb-1`}>
              User Research
            </h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>
              Methods for understanding user needs and behaviors.
            </p>
          </Field>

          {/* Field 5 - Image */}
          <Field rowStart={3} colStart={1} className="bg-gray-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
            </div>
          </Field>

          {/* Field 6 - Quote */}
          <Field rowStart={3} colStart={2} className="bg-blue-50 rounded-lg p-3">
            <blockquote className={`${loraFont.className} text-xs italic text-blue-800`}>
              &quot;Good design is invisible&quot;
            </blockquote>
          </Field>

          {/* Field 7 - Tech Article */}
          <Field rowStart={4} colStart={1} className="bg-white rounded-lg p-3 shadow-sm">
            <h3 className={`${tekoFont.className} text-sm font-bold text-gray-900 mb-1`}>
              React Patterns
            </h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>
              Modern patterns for building scalable React applications.
            </p>
          </Field>

          {/* Field 8 - Tools */}
          <Field rowStart={4} colStart={2} className="bg-gray-100 rounded-lg p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold text-gray-900 mb-1`}>
              Favorite Tools
            </h3>
            <div className={`${loraFont.className} text-xs text-gray-600 space-y-1`}>
              <p>• Figma</p>
              <p>• VS Code</p>
            </div>
          </Field>

          {/* Field 9 - Case Study */}
          <Field rowStart={5} colStart={1} className="bg-green-50 rounded-lg p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold text-green-900 mb-1`}>
              Case Study
            </h3>
            <p className={`${loraFont.className} text-xs text-green-700`}>
              Mobile app redesign that improved user engagement by 60%.
            </p>
          </Field>

          {/* Field 10 - Image */}
          <Field rowStart={5} colStart={2} className="bg-gray-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </Field>

          {/* Field 11 - Process */}
          <Field rowStart={6} colStart={1} className="bg-white rounded-lg p-3 shadow-sm">
            <h3 className={`${tekoFont.className} text-sm font-bold text-gray-900 mb-1`}>
              Design Process
            </h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>
              Research → Ideate → Prototype → Test → Iterate
            </p>
          </Field>

          {/* Field 12 - Inspiration */}
          <Field rowStart={6} colStart={2} className="bg-purple-50 rounded-lg p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold text-purple-900 mb-1`}>
              Inspiration
            </h3>
            <p className={`${loraFont.className} text-xs text-purple-700`}>
              Nature, architecture, and human behavior.
            </p>
          </Field>

          {/* Field 13 - Metrics */}
          <Field rowStart={7} colStart={1} className="bg-yellow-50 rounded-lg p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold text-yellow-900 mb-1`}>
              Success Metrics
            </h3>
            <p className={`${loraFont.className} text-xs text-yellow-700`}>
              User satisfaction, task completion, engagement rates.
            </p>
          </Field>

          {/* Field 14 - Trends */}
          <Field rowStart={7} colStart={2} className="bg-white rounded-lg p-3 shadow-sm">
            <h3 className={`${tekoFont.className} text-sm font-bold text-gray-900 mb-1`}>
              2024 Trends
            </h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>
              AI integration, micro-interactions, sustainable design.
            </p>
          </Field>

          {/* Field 15 - Resources */}
          <Field rowStart={8} colStart={1} className="bg-indigo-50 rounded-lg p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold text-indigo-900 mb-1`}>
              Learning Resources
            </h3>
            <p className={`${loraFont.className} text-xs text-indigo-700`}>
              Books, courses, and communities that inspire growth.
            </p>
          </Field>

          {/* Field 16 - Community */}
          <Field rowStart={8} colStart={2} className="bg-white rounded-lg p-3 shadow-sm">
            <h3 className={`${tekoFont.className} text-sm font-bold text-gray-900 mb-1`}>
              Design Community
            </h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>
              Connecting with fellow designers and developers.
            </p>
          </Field>

          {/* Field 17 - Contact */}
          <Field rowStart={9} colStart={1} className="bg-gray-900 rounded-lg p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold text-white mb-1`}>
              Get In Touch
            </h3>
            <p className={`${loraFont.className} text-xs text-gray-300`}>
              Let&apos;s collaborate on your next project.
            </p>
          </Field>

          {/* Field 18 - Newsletter */}
          <Field rowStart={9} colStart={2} className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg p-3">
            <h3 className={`${tekoFont.className} text-sm font-bold text-gray-900 mb-1`}>
              Weekly Newsletter
            </h3>
            <p className={`${loraFont.className} text-xs text-gray-600`}>
              Design tips and insights delivered weekly.
            </p>
          </Field>
        </div>
      </GridContainer>
    </div>
  );
};

export default Grid18Field;
export { Field }; 