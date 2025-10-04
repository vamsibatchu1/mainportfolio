'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface HomepageAnimationContextType {
  hasAnimated: boolean;
  setHasAnimated: (value: boolean) => void;
  isInitialized: boolean;
  resetAnimation: () => void;
}

const HomepageAnimationContext = createContext<HomepageAnimationContextType | undefined>(undefined);

export function HomepageAnimationProvider({ children }: { children: React.ReactNode }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Check localStorage on mount to see if animation has been shown before
  useEffect(() => {
    const stored = localStorage.getItem('homepage-animation-shown');
    if (stored === 'true') {
      setHasAnimated(true);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage when animation is marked as shown
  const handleSetHasAnimated = (value: boolean) => {
    setHasAnimated(value);
    if (value) {
      localStorage.setItem('homepage-animation-shown', 'true');
    } else {
      localStorage.removeItem('homepage-animation-shown');
    }
  };

  // Reset animation state (useful for testing)
  const resetAnimation = () => {
    setHasAnimated(false);
    localStorage.removeItem('homepage-animation-shown');
  };

  return (
    <HomepageAnimationContext.Provider value={{ hasAnimated, setHasAnimated: handleSetHasAnimated, isInitialized, resetAnimation }}>
      {children}
    </HomepageAnimationContext.Provider>
  );
}

export function useHomepageAnimation() {
  const context = useContext(HomepageAnimationContext);
  if (context === undefined) {
    throw new Error('useHomepageAnimation must be used within a HomepageAnimationProvider');
  }
  return context;
}
