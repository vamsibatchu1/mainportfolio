'use client';

import { useEffect, useState } from 'react';

/**
 * ClientOnly component that ensures its children are only rendered on the client side
 * This prevents "document is not defined" errors during static generation
 * 
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children Content to render only on client-side
 * @param {React.ReactNode} [props.fallback=null] Optional fallback content to show during SSR
 * @returns {React.ReactNode} The wrapped component that renders only on client-side
 */
export default function ClientOnly({ 
  children,
  fallback = null
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Set mounted state when component mounts in the browser
    setHasMounted(true);
  }, []);

  // During SSR or static generation, return fallback or null
  if (!hasMounted) {
    return fallback;
  }

  // On the client, render children
  return children;
} 