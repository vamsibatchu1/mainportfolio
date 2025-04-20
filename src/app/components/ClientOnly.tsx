'use client';

import { useEffect, useState } from 'react';

export default function ClientOnly({ 
  children,
  fallback = null 
}: { 
  children: React.ReactNode,
  fallback?: React.ReactNode
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If not mounted yet, return fallback or null to avoid hydration errors
  if (!hasMounted) {
    return fallback;
  }

  // When mounted, render children
  return <>{children}</>;
} 