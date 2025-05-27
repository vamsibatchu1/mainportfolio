'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Tablet, Laptop } from "lucide-react"
import { useScreenSize } from "@/components/hooks/use-screen-size"
import { Card } from "@/components/ui/card"
import { interFont } from '@/app/fonts';

const contentSpring = { type: "spring", stiffness: 200, damping: 25 };

function ScreenSizeDemo() {
  const screenSize = useScreenSize()
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  } as const

  const getDeviceIcon = (size: string) => {
    if (screenSize.equals(size as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl')) {
      switch (size) {
        case 'xs': return <Smartphone className="h-6 w-6 text-primary" />
        case 'sm': return <Smartphone className="h-6 w-6 text-primary" />
        case 'md': return <Tablet className="h-6 w-6 text-primary" />
        case 'lg': return <Laptop className="h-6 w-6 text-primary" />
        case 'xl': 
        case '2xl': return <Monitor className="h-6 w-6 text-primary" />
        default: return null
      }
    }
    return null
  }

  const getBreakpointRange = (size: string, width: number) => {
    const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    const currentIndex = breakpointOrder.indexOf(size);
    const nextBreakpoint = breakpointOrder[currentIndex + 1];
    
    if (size === '2xl') {
      return `${width}px+`;
    } else if (nextBreakpoint) {
      const nextWidth = breakpoints[nextBreakpoint as keyof typeof breakpoints];
      return `${width}px - ${nextWidth - 1}px`;
    }
    return `${width}px`;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-0">
      {/* Interactive Demo */}
      <Card className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Current Screen Size</h3>
            <p className="text-sm text-muted-foreground">
              Resize your browser window to see changes
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl font-bold flex items-center gap-4">
              {screenSize.toString()}
              {getDeviceIcon(screenSize.toString())}
            </div>
            <div className="text-sm text-muted-foreground">
              Window width: {windowWidth}px
            </div>
          </div>

          <div className="space-y-2">
            {Object.entries(breakpoints).map(([size, width]) => (
              <div
                key={size}
                className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
              >
                <span className="font-mono">{size}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {getBreakpointRange(size, width)}
                  </span>
                  {screenSize.equals(size as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') && (
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Documentation */}
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">About useScreenSize</h3>
            <p className="text-sm text-muted-foreground">
              A hook for responsive breakpoint detection with TypeScript support
            </p>
          </div>

          <div className="space-y-4">
            <pre className="bg-muted p-3 rounded-md text-xs overflow-x-auto">
              {`const screenSize = useScreenSize()

// Comparison methods
screenSize.equals("md")     // true/false
screenSize.lessThan("lg")   // true/false
screenSize.greaterThan("sm")// true/false
screenSize.toString()       // "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`}
            </pre>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Features</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Type-safe breakpoint comparisons</li>
                  <li>Automatic window resize handling</li>
                  <li>Tailwind CSS breakpoint alignment</li>
                  <li>Comparable size utilities</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Common Use Cases</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Responsive layouts</li>
                  <li>Conditional rendering</li>
                  <li>Mobile/desktop detection</li>
                  <li>Adaptive components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

const WritingContent = () => {
  return (
    <motion.div
      key="writing-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      style={{ fontFamily: interFont.style.fontFamily }}
      className="p-4"
    >
      <ScreenSizeDemo />
    </motion.div>
  );
};

export default WritingContent; 