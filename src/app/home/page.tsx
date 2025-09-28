import React from 'react';
import MainLayout from '../layout/MainLayout';
import { HomeHero, HomeHighlights, HomeCaseStudy2, HomeCaseStudy1 } from './components';

export default function HomePage() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-[64px]">
        {/* Home Hero Section */}
        <HomeHero />
        
        {/* Home Highlights Section */}
        <HomeHighlights />
        
        {/* Home Case Study 2 Section */}
        <HomeCaseStudy1 />
        
        {/* Home Case Study 1 Section */}
        <HomeCaseStudy2 />

        {/* Additional sections will be added here as components */}
      </div>
    </MainLayout>
  );
}