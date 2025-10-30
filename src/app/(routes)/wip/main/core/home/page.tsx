'use client';

import React from 'react';
import { HomeHero, HomeHighlights, HomeCaseStudy2, HomeCaseStudy1, HomeCaseStudy3 } from './components';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-[96px] p-10 pt-10">
      {/* Home Hero Section */}
      <HomeHero />
      
      {/* Home Highlights Section */}
      <HomeHighlights />
      
      {/* Home Case Study 1 Section */}
      <HomeCaseStudy1 />

      {/* Home Case Study 2 Section */}
      <HomeCaseStudy2 />

      {/* Home Case Study 3 Section */}
      <HomeCaseStudy3 />

      {/* Additional sections will be added here as components */}
    </div>
  );
}
