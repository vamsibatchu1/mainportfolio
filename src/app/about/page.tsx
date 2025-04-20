"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import ClientOnly from '../components/ClientOnly';

// Define LoadingComponent or use null
const LoadingComponent = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-pulse text-xl text-gray-600">Loading...</div>
  </div>
);

// Dynamically import AboutContent only when needed
const DynamicallyLoadedAboutContent = dynamic(() => import('./components/AboutContent'), {
  ssr: false,
  loading: () => <LoadingComponent />, // Optional: show loading component during import
});

export default function AboutPage() {
  return (
    <ClientOnly fallback={<LoadingComponent />}>
      {/* Render the dynamically imported component only after ClientOnly mounts */}
      <DynamicallyLoadedAboutContent />
    </ClientOnly>
  );
} 