"use client";

import dynamic from 'next/dynamic';
import ClientOnly from '../components/ClientOnly';

// Import AboutContent dynamically with no SSR
const AboutContent = dynamic(() => import('./components/AboutContent'), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <ClientOnly
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <div className="animate-pulse text-xl text-gray-600">Loading...</div>
        </div>
      }
    >
      <AboutContent />
    </ClientOnly>
  );
} 