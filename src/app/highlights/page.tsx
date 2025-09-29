'use client';

import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { FilterSidebar, ImageGallery } from './components';

// Sample image data - replace with your actual images
const sampleImages = [
  // Row 1
  { id: '1', src: '/images/placeholder-1.jpg', alt: 'Design 1', tags: ['recents', 'home'] },
  { id: '2', src: '/images/placeholder-2.jpg', alt: 'Design 2', tags: ['recents', 'applications'] },
  { id: '3', src: '/images/placeholder-3.jpg', alt: 'Design 3', tags: ['recents', 'desktop'] },
  { id: '4', src: '/images/placeholder-4.jpg', alt: 'Design 4', tags: ['recents', 'downloads'] },
  
  // Row 2
  { id: '5', src: '/images/placeholder-5.jpg', alt: 'Design 5', tags: ['home', 'applications'] },
  { id: '6', src: '/images/placeholder-6.jpg', alt: 'Design 6', tags: ['home', 'desktop'] },
  { id: '7', src: '/images/placeholder-7.jpg', alt: 'Design 7', tags: ['home', 'downloads'] },
  { id: '8', src: '/images/placeholder-8.jpg', alt: 'Design 8', tags: ['home', 'documents'] },
  
  // Row 3
  { id: '9', src: '/images/placeholder-9.jpg', alt: 'Design 9', tags: ['applications', 'desktop'] },
  { id: '10', src: '/images/placeholder-10.jpg', alt: 'Design 10', tags: ['applications', 'downloads'] },
  { id: '11', src: '/images/placeholder-11.jpg', alt: 'Design 11', tags: ['applications', 'documents'] },
  { id: '12', src: '/images/placeholder-12.jpg', alt: 'Design 12', tags: ['desktop', 'downloads'] },
  
  // Row 4
  { id: '13', src: '/images/placeholder-13.jpg', alt: 'Design 13', tags: ['desktop', 'documents'] },
  { id: '14', src: '/images/placeholder-14.jpg', alt: 'Design 14', tags: ['downloads', 'documents'] },
  { id: '15', src: '/images/placeholder-15.jpg', alt: 'Design 15', tags: ['recents', 'applications'] },
  { id: '16', src: '/images/placeholder-16.jpg', alt: 'Design 16', tags: ['recents', 'desktop'] },
  
  // Row 5
  { id: '17', src: '/images/placeholder-17.jpg', alt: 'Design 17', tags: ['recents', 'downloads'] },
  { id: '18', src: '/images/placeholder-18.jpg', alt: 'Design 18', tags: ['recents', 'documents'] },
  { id: '19', src: '/images/placeholder-19.jpg', alt: 'Design 19', tags: ['home', 'applications'] },
  { id: '20', src: '/images/placeholder-20.jpg', alt: 'Design 20', tags: ['home', 'desktop'] },
  
  // Row 6
  { id: '21', src: '/images/placeholder-21.jpg', alt: 'Design 21', tags: ['home', 'downloads'] },
  { id: '22', src: '/images/placeholder-22.jpg', alt: 'Design 22', tags: ['home', 'documents'] },
  { id: '23', src: '/images/placeholder-23.jpg', alt: 'Design 23', tags: ['applications', 'desktop'] },
  { id: '24', src: '/images/placeholder-24.jpg', alt: 'Design 24', tags: ['applications', 'downloads'] },
  
  // Row 7
  { id: '25', src: '/images/placeholder-25.jpg', alt: 'Design 25', tags: ['applications', 'documents'] },
  { id: '26', src: '/images/placeholder-26.jpg', alt: 'Design 26', tags: ['desktop', 'downloads'] },
  { id: '27', src: '/images/placeholder-27.jpg', alt: 'Design 27', tags: ['desktop', 'documents'] },
  { id: '28', src: '/images/placeholder-28.jpg', alt: 'Design 28', tags: ['downloads', 'documents'] },
];

export default function HighlightsPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['recents', 'home']);

  const handleFiltersChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-[96px]">
        <div className="flex gap-10 items-start justify-start w-full">
          {/* Filter Sidebar */}
          <div className="flex-1 flex flex-col gap-10 items-start justify-start min-w-0">
            <FilterSidebar onFiltersChange={handleFiltersChange} />
          </div>
          
          {/* Image Gallery */}
          <div className="flex flex-col gap-6 items-start justify-start flex-shrink-0">
            <ImageGallery images={sampleImages} activeFilters={activeFilters} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
