"use client";

import { Suspense } from 'react';
import nextDynamic from 'next/dynamic';
import ClientOnly from '../components/ClientOnly';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Import WorkContent dynamically with no SSR using renamed import
const WorkContent = nextDynamic(() => import('./components/WorkContent'), {
  ssr: false,
});

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <ClientOnly
        fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="animate-pulse text-xl text-gray-600">Loading...</div>
          </div>
        }
      >
        <Suspense fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="animate-pulse text-xl text-gray-600">Loading...</div>
          </div>
        }>
          <WorkContent />
        </Suspense>
      </ClientOnly>
    </div>
  );
} 