'use client';

import { useState, useEffect, useCallback } from 'react';

interface ScreenSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  lessThan: (breakpoint: keyof typeof breakpoints | number) => boolean;
  greaterThanOrEqual: (
    breakpoint: keyof typeof breakpoints | number
  ) => boolean;
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const getScreenSize = (width: number, height: number): ScreenSize => {
  const lessThan = (breakpoint: keyof typeof breakpoints | number): boolean => {
    const bpValue = typeof breakpoint === 'number' ? breakpoint : breakpoints[breakpoint];
    return width < bpValue;
  };

  const greaterThanOrEqual = (
    breakpoint: keyof typeof breakpoints | number
  ): boolean => {
    const bpValue = typeof breakpoint === 'number' ? breakpoint : breakpoints[breakpoint];
    return width >= bpValue;
  };

  return {
    width,
    height,
    isMobile: lessThan('md'),
    isTablet: greaterThanOrEqual('md') && lessThan('lg'),
    isDesktop: greaterThanOrEqual('lg'),
    lessThan,
    greaterThanOrEqual,
  };
};

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    if (typeof window !== 'undefined') {
      return getScreenSize(window.innerWidth, window.innerHeight);
    }
    // Default for SSR or environments without window
    return getScreenSize(breakpoints.lg, 768); // Default to a common desktop size
  });

  const handleResize = useCallback(() => {
    setScreenSize(getScreenSize(window.innerWidth, window.innerHeight));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('resize', handleResize);
    // Initial call to set size correctly
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return screenSize;
};

export default useScreenSize; 