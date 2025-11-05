'use client';

import { useEffect, useState, useRef } from 'react';

/**
 * Hook to calculate scale factor based on container width
 * Base width: 1440px (design width)
 * Returns scale factor (0.5-1) where 1 = 1440px or wider
 */
export function useContainerScale() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      
      // clientWidth excludes padding, so it's already the content width
      const availableWidth = containerRef.current.clientWidth;
      const baseWidth = 1440;
      
      // Calculate scale: availableWidth / baseWidth
      // Clamp between 0.5 (minimum) and 1 (maximum)
      const calculatedScale = availableWidth > 0 
        ? Math.max(0.5, Math.min(1, availableWidth / baseWidth))
        : 1;
      
      // Debug in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[ContainerScale] Scale: ${calculatedScale.toFixed(3)} (${(calculatedScale * 100).toFixed(1)}%)`, {
          availableWidth,
          baseWidth,
          offsetWidth: containerRef.current.offsetWidth,
          clientWidth: containerRef.current.clientWidth,
          padding: containerRef.current.offsetWidth - containerRef.current.clientWidth,
        });
      }
      
      setScale(calculatedScale);
    };

    // Initial calculation
    updateScale();

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(updateScale);
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Fallback to window resize
    window.addEventListener('resize', updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  return { scale, containerRef };
}
