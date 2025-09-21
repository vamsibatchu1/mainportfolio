'use client';

import { GridContainer } from '@/components/grid';
import { tekoFont, loraFont } from '@/app/fonts';

// Individual field component with flexible grid positioning
interface FieldProps {
  rowStart: number;
  rowEnd?: number;
  colStart: number;
  colEnd?: number;
  children: React.ReactNode;
  className?: string;
}

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
      className={`flex flex-col items-start justify-start ${className}`}
    >
      {children}
    </div>
  );
};

export default function ContactPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <GridContainer 
        marginHorizontal={400} 
        marginVertical={80}
      >
        <div 
          className="grid grid-cols-2 grid-rows-4 w-full h-full"
          style={{ gap: '20px' }}
        >
          {/* Field 1 - Header */}
          <Field rowStart={1} colStart={1}>
            <h1 className={`${tekoFont.className} text-4xl font-bold text-gray-900`}>
              WELCOME TO THE CONTACT PAGE
            </h1>
          </Field>

          {/* Field 2 - Combined with Field 4 (spans 2 rows) */}
          <Field rowStart={1} rowEnd={3} colStart={2}>
            <p className={`${loraFont.className} text-gray-700 leading-relaxed`}>
              This is the combined content of Field 2 and Field 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.voluptate velit esse cillum dolore eu fugiat nulla pariatur.voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </Field>

          {/* Field 3 - Text Content */}
          <Field rowStart={2} colStart={1}>
            <p className={`${loraFont.className} text-gray-700 leading-relaxed`}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Field>

          {/* Field 5 - Image Placeholder */}
          <Field rowStart={3} colStart={1} className="bg-gray-200 rounded-lg">
            <div className="text-gray-500">
              <div className="w-16 h-16 mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className={`${loraFont.className} text-sm`}>Image Placeholder</p>
            </div>
          </Field>

          {/* Field 6 - Text Content */}
          <Field rowStart={3} colStart={2}>
            <p className={`${loraFont.className} text-gray-700 leading-relaxed`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </Field>

          {/* Field 7 - Image Placeholder */}
          <Field rowStart={4} colStart={1} className="bg-gray-200 rounded-lg">
            <div className="text-gray-500">
              <div className="w-16 h-16 mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className={`${loraFont.className} text-sm`}>Image Placeholder</p>
            </div>
          </Field>

          {/* Field 8 - Image Placeholder */}
          <Field rowStart={4} colStart={2} className="bg-gray-200 rounded-lg">
            <div className="text-gray-500">
              <div className="w-16 h-16 mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className={`${loraFont.className} text-sm`}>Image Placeholder</p>
            </div>
          </Field>
        </div>
      </GridContainer>
    </div>
  );
} 