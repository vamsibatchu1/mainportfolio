"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

// Import WorkContent dynamically with no SSR
const WorkContent = dynamic(() => import('./components/WorkContent'), {
  ssr: false,
});

export default function WorkPage() {
  return (
    <main className={`min-h-screen ${workSans.className}`}>
      <div className="max-w-[1120px] mx-auto px-8">
        <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
          <WorkContent />
        </Suspense>
      </div>
    </main>
  );
} 