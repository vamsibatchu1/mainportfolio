import React from 'react';
import MainLayout from '../../layout/MainLayout';
import { HomeHero, HomeHighlights, HomeCaseStudy2, HomeCaseStudy1, HomeCaseStudy3,} from './components';

export default function HomePage() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-[96px]">
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
    </MainLayout>
  );
}