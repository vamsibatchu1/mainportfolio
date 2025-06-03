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

const Grid36Field: React.FC<GridProps> = ({ 
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
          className="grid grid-cols-6 grid-rows-6 w-full h-full"
          style={{ gap: `${gap}px` }}
        >
          {/* Row 1 - Header */}
          <Field rowStart={1} colStart={1}>
            <h1 className={`${tekoFont.className} text-lg font-bold text-gray-900`}>
              Dashboard
            </h1>
          </Field>

          <Field rowStart={1} colStart={2} className="bg-blue-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-sm font-bold text-blue-900`}>42</div>
              <div className={`${loraFont.className} text-xs text-blue-700`}>Active</div>
            </div>
          </Field>

          <Field rowStart={1} colStart={3} className="bg-green-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-sm font-bold text-green-900`}>98%</div>
              <div className={`${loraFont.className} text-xs text-green-700`}>Uptime</div>
            </div>
          </Field>

          <Field rowStart={1} colStart={4} className="bg-yellow-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-sm font-bold text-yellow-900`}>12K</div>
              <div className={`${loraFont.className} text-xs text-yellow-700`}>Users</div>
            </div>
          </Field>

          <Field rowStart={1} colStart={5} className="bg-purple-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-sm font-bold text-purple-900`}>$89K</div>
              <div className={`${loraFont.className} text-xs text-purple-700`}>Revenue</div>
            </div>
          </Field>

          <Field rowStart={1} colStart={6} className="bg-red-50 rounded p-2">
            <div className="text-center">
              <div className={`${tekoFont.className} text-sm font-bold text-red-900`}>3</div>
              <div className={`${loraFont.className} text-xs text-red-700`}>Issues</div>
            </div>
          </Field>

          {/* Row 2 - Navigation/Menu */}
          <Field rowStart={2} colStart={1} className="bg-gray-100 rounded p-1">
            <div className={`${loraFont.className} text-xs text-gray-700 text-center`}>Home</div>
          </Field>

          <Field rowStart={2} colStart={2} className="bg-gray-100 rounded p-1">
            <div className={`${loraFont.className} text-xs text-gray-700 text-center`}>Projects</div>
          </Field>

          <Field rowStart={2} colStart={3} className="bg-gray-100 rounded p-1">
            <div className={`${loraFont.className} text-xs text-gray-700 text-center`}>Analytics</div>
          </Field>

          <Field rowStart={2} colStart={4} className="bg-gray-100 rounded p-1">
            <div className={`${loraFont.className} text-xs text-gray-700 text-center`}>Settings</div>
          </Field>

          <Field rowStart={2} colStart={5} className="bg-gray-100 rounded p-1">
            <div className={`${loraFont.className} text-xs text-gray-700 text-center`}>Help</div>
          </Field>

          <Field rowStart={2} colStart={6} className="bg-gray-900 rounded p-1">
            <div className={`${loraFont.className} text-xs text-white text-center`}>Profile</div>
          </Field>

          {/* Row 3 - Charts/Data */}
          <Field rowStart={3} colStart={1} className="bg-white rounded shadow p-2">
            <div className={`${tekoFont.className} text-xs font-bold mb-1`}>Chart A</div>
            <div className="bg-blue-200 h-4 w-full rounded"></div>
          </Field>

          <Field rowStart={3} colStart={2} className="bg-white rounded shadow p-2">
            <div className={`${tekoFont.className} text-xs font-bold mb-1`}>Chart B</div>
            <div className="bg-green-200 h-4 w-full rounded"></div>
          </Field>

          <Field rowStart={3} colStart={3} className="bg-white rounded shadow p-2">
            <div className={`${tekoFont.className} text-xs font-bold mb-1`}>Chart C</div>
            <div className="bg-purple-200 h-4 w-full rounded"></div>
          </Field>

          <Field rowStart={3} colStart={4} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </Field>

          <Field rowStart={3} colStart={5} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
            </div>
          </Field>

          <Field rowStart={3} colStart={6} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
            </div>
          </Field>

          {/* Row 4 - Project Cards */}
          <Field rowStart={4} colStart={1} className="bg-white rounded shadow p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-gray-900`}>Project Alpha</div>
            <div className={`${loraFont.className} text-xs text-gray-600`}>In Progress</div>
          </Field>

          <Field rowStart={4} colStart={2} className="bg-white rounded shadow p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-gray-900`}>Project Beta</div>
            <div className={`${loraFont.className} text-xs text-gray-600`}>Review</div>
          </Field>

          <Field rowStart={4} colStart={3} className="bg-white rounded shadow p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-gray-900`}>Project Gamma</div>
            <div className={`${loraFont.className} text-xs text-gray-600`}>Complete</div>
          </Field>

          <Field rowStart={4} colStart={4} className="bg-blue-50 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-blue-900`}>New Task</div>
            <div className={`${loraFont.className} text-xs text-blue-700`}>Create</div>
          </Field>

          <Field rowStart={4} colStart={5} className="bg-green-50 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-green-900`}>Completed</div>
            <div className={`${loraFont.className} text-xs text-green-700`}>27 tasks</div>
          </Field>

          <Field rowStart={4} colStart={6} className="bg-orange-50 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-orange-900`}>Pending</div>
            <div className={`${loraFont.className} text-xs text-orange-700`}>5 tasks</div>
          </Field>

          {/* Row 5 - Team/Activity */}
          <Field rowStart={5} colStart={1} className="bg-indigo-50 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-indigo-900`}>Team</div>
            <div className={`${loraFont.className} text-xs text-indigo-700`}>8 members</div>
          </Field>

          <Field rowStart={5} colStart={2} className="bg-pink-50 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-pink-900`}>Activity</div>
            <div className={`${loraFont.className} text-xs text-pink-700`}>12 updates</div>
          </Field>

          <Field rowStart={5} colStart={3} className="bg-cyan-50 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-cyan-900`}>Messages</div>
            <div className={`${loraFont.className} text-xs text-cyan-700`}>3 new</div>
          </Field>

          <Field rowStart={5} colStart={4} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-400 rounded"></div>
            </div>
          </Field>

          <Field rowStart={5} colStart={5} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </Field>

          <Field rowStart={5} colStart={6} className="bg-gray-200 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-3 h-4 bg-gray-400 rounded"></div>
            </div>
          </Field>

          {/* Row 6 - Footer Actions */}
          <Field rowStart={6} colStart={1} className="bg-gray-800 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-white`}>Export</div>
          </Field>

          <Field rowStart={6} colStart={2} className="bg-blue-600 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-white`}>Save</div>
          </Field>

          <Field rowStart={6} colStart={3} className="bg-green-600 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-white`}>Sync</div>
          </Field>

          <Field rowStart={6} colStart={4} className="bg-yellow-100 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-yellow-900`}>Archive</div>
          </Field>

          <Field rowStart={6} colStart={5} className="bg-red-100 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-red-900`}>Delete</div>
          </Field>

          <Field rowStart={6} colStart={6} className="bg-gradient-to-r from-purple-100 to-blue-100 rounded p-2">
            <div className={`${tekoFont.className} text-xs font-bold text-gray-900`}>More</div>
          </Field>
        </div>
      </GridContainer>
    </div>
  );
};

export default Grid36Field;
export { Field }; 