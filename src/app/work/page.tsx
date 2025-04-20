"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Work_Sans } from 'next/font/google';
import ClientOnly from '../components/ClientOnly';

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