'use client';

import { useState, useEffect } from 'react';

type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

interface ScreenSize {
  equals: (breakpoint: BreakpointKey) => boolean;
  lessThan: (breakpoint: BreakpointKey) => boolean;
  greaterThan: (breakpoint: BreakpointKey) => boolean;
  toString: () => BreakpointKey;
}

function getCurrentBreakpoint(width: number): BreakpointKey {
  if (width >= breakpoints['2xl']) return '2xl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
}

export function useScreenSize(): ScreenSize {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentBreakpoint = getCurrentBreakpoint(windowWidth);

  return {
    equals: (breakpoint: BreakpointKey) => currentBreakpoint === breakpoint,
    
    lessThan: (breakpoint: BreakpointKey) => {
      return windowWidth < breakpoints[breakpoint];
    },
    
    greaterThan: (breakpoint: BreakpointKey) => {
      return windowWidth > breakpoints[breakpoint];
    },
    
    toString: () => currentBreakpoint,
  };
} 