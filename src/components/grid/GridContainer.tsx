'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { GridContainerProps } from './types';

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  className,
  style,
  margin = 80, // Default uniform margin
  marginHorizontal,
  marginVertical,
}) => {
  // Calculate final margin values
  // If specific horizontal/vertical margins are provided, use them
  // Otherwise, fall back to the uniform margin value
  const finalMarginHorizontal = marginHorizontal ?? margin;
  const finalMarginVertical = marginVertical ?? margin;

  return (
    <div
      className={cn(
        // Full width and height
        'w-full h-full',
        // Ensure proper box sizing
        'box-border',
        className
      )}
      style={{
        paddingLeft: `${finalMarginHorizontal}px`,
        paddingRight: `${finalMarginHorizontal}px`,
        paddingTop: `${finalMarginVertical}px`,
        paddingBottom: `${finalMarginVertical}px`,
        ...style,
      }}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}; 