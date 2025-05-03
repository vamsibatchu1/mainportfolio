"use client";

import { Suspense } from 'react';
import { Work_Sans } from 'next/font/google';
import WorkCard from './components/WorkCard';

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

// Example data for the card
const exampleWork = {
  title: "Project Alpha",
  subtitle: "Leading the design for a new enterprise platform.",
  gridColor: "#FBAF1D" // Example color (Zenith)
};

export default function WorkPage() {
  return (
    <main className={`min-h-screen bg-gray-100 dark:bg-gray-900 p-8 ${workSans.className}`}>
      {/* Centering the single card */}
      <div className="flex justify-center items-start pt-16">
        <Suspense fallback={<div className="text-center text-lg">Loading Card...</div>}>
          <WorkCard 
            title={exampleWork.title}
            subtitle={exampleWork.subtitle}
            gridColor={exampleWork.gridColor}
          />
        </Suspense>
      </div>
    </main>
  );
} 