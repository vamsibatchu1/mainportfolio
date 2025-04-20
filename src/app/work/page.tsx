"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Import WorkContent dynamically with no SSR
const WorkContent = dynamic(() => import('./components/WorkContent'), {
  ssr: false,
});

export default function WorkPage() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
        <WorkContent />
      </Suspense>
    </main>
  );
} 