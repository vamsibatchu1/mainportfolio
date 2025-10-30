'use client';

import React, { useState } from 'react';
import { FilterSidebar, ImageGallery } from './components';

// Combined highlights image data (45 images total)
const sampleImages = [
  // Syn Highlights (20 images) - Rows 1-5
  { id: '1', src: '/images/syn-highlights/Highlight-1.svg', alt: 'Adding a bunch of random text here to make sure this is properly tested in the HTML page.', tags: ['0-1-products', 'enterprise'] },
  { id: '2', src: '/images/syn-highlights/Highlight-2.svg', alt: 'Syn Highlight 2', tags: ['0-1-products', 'mobile'] },
  { id: '3', src: '/images/syn-highlights/Highlight-3.svg', alt: 'Syn Highlight 3', tags: ['0-1-products', 'consumer'] },
  { id: '4', src: '/images/syn-highlights/Highlight-4.svg', alt: 'Syn Highlight 4', tags: ['0-1-products', 'big-bets'] },
  
  { id: '5', src: '/images/syn-highlights/Highlight-5.svg', alt: 'Syn Highlight 5', tags: ['enterprise', 'mobile'] },
  { id: '6', src: '/images/syn-highlights/Highlight-6.svg', alt: 'Syn Highlight 6', tags: ['enterprise', 'consumer'] },
  { id: '7', src: '/images/syn-highlights/Highlight-7.svg', alt: 'Syn Highlight 7', tags: ['enterprise', 'big-bets'] },
  { id: '8', src: '/images/syn-highlights/Highlight-8.svg', alt: 'Syn Highlight 8', tags: ['mobile', 'consumer'] },
  
  { id: '9', src: '/images/syn-highlights/Highlight-9.svg', alt: 'Syn Highlight 9', tags: ['mobile', 'big-bets'] },
  { id: '10', src: '/images/syn-highlights/Highlight-10.svg', alt: 'Syn Highlight 10', tags: ['consumer', 'big-bets'] },
  { id: '11', src: '/images/syn-highlights/Highlight-11.svg', alt: 'Syn Highlight 11', tags: ['0-1-products', 'enterprise'] },
  { id: '12', src: '/images/syn-highlights/Highlight-12.svg', alt: 'Syn Highlight 12', tags: ['0-1-products', 'mobile'] },
  
  { id: '13', src: '/images/syn-highlights/Highlight-13.svg', alt: 'Syn Highlight 13', tags: ['0-1-products', 'consumer'] },
  { id: '14', src: '/images/syn-highlights/Highlight-14.svg', alt: 'Syn Highlight 14', tags: ['0-1-products', 'big-bets'] },
  { id: '15', src: '/images/syn-highlights/Highlight-15.svg', alt: 'Syn Highlight 15', tags: ['enterprise', 'mobile'] },
  { id: '16', src: '/images/syn-highlights/Highlight-16.svg', alt: 'Syn Highlight 16', tags: ['enterprise', 'consumer'] },
  
  { id: '17', src: '/images/syn-highlights/Highlight-17.svg', alt: 'Syn Highlight 17', tags: ['enterprise', 'big-bets'] },
  { id: '18', src: '/images/syn-highlights/Highlight-18.svg', alt: 'Syn Highlight 18', tags: ['mobile', 'consumer'] },
  { id: '19', src: '/images/syn-highlights/Highlight-19.svg', alt: 'Syn Highlight 19', tags: ['mobile', 'big-bets'] },
  { id: '20', src: '/images/syn-highlights/Highlight.svg', alt: 'Syn Highlight', tags: ['consumer', 'big-bets'] },
  
  // Nav Highlights (25 images) - Rows 6-11
  { id: '21', src: '/images/nav-highlights/Highlight-1.svg', alt: 'Nav Highlight 1', tags: ['0-1-products', 'enterprise'] },
  { id: '22', src: '/images/nav-highlights/Highlight-2.svg', alt: 'Nav Highlight 2', tags: ['0-1-products', 'mobile'] },
  { id: '23', src: '/images/nav-highlights/Highlight-3.svg', alt: 'Nav Highlight 3', tags: ['0-1-products', 'consumer'] },
  { id: '24', src: '/images/nav-highlights/Highlight-4.svg', alt: 'Nav Highlight 4', tags: ['0-1-products', 'big-bets'] },
  
  { id: '25', src: '/images/nav-highlights/Highlight-5.svg', alt: 'Nav Highlight 5', tags: ['enterprise', 'mobile'] },
  { id: '26', src: '/images/nav-highlights/Highlight-6.svg', alt: 'Nav Highlight 6', tags: ['enterprise', 'consumer'] },
  { id: '27', src: '/images/nav-highlights/Highlight-7.svg', alt: 'Nav Highlight 7', tags: ['enterprise', 'big-bets'] },
  { id: '28', src: '/images/nav-highlights/Highlight-8.svg', alt: 'Nav Highlight 8', tags: ['mobile', 'consumer'] },
  
  { id: '29', src: '/images/nav-highlights/Highlight-9.svg', alt: 'Nav Highlight 9', tags: ['mobile', 'big-bets'] },
  { id: '30', src: '/images/nav-highlights/Highlight-10.svg', alt: 'Nav Highlight 10', tags: ['consumer', 'big-bets'] },
  { id: '31', src: '/images/nav-highlights/Highlight-11.svg', alt: 'Nav Highlight 11', tags: ['0-1-products', 'enterprise'] },
  { id: '32', src: '/images/nav-highlights/Highlight-12.svg', alt: 'Nav Highlight 12', tags: ['0-1-products', 'mobile'] },
  
  { id: '33', src: '/images/nav-highlights/Highlight-13.svg', alt: 'Nav Highlight 13', tags: ['0-1-products', 'consumer'] },
  { id: '34', src: '/images/nav-highlights/Highlight-14.svg', alt: 'Nav Highlight 14', tags: ['0-1-products', 'big-bets'] },
  { id: '35', src: '/images/nav-highlights/Highlight-15.svg', alt: 'Nav Highlight 15', tags: ['enterprise', 'mobile'] },
  { id: '36', src: '/images/nav-highlights/Highlight-16.svg', alt: 'Nav Highlight 16', tags: ['enterprise', 'consumer'] },
  
  { id: '37', src: '/images/nav-highlights/Highlight-17.svg', alt: 'Nav Highlight 17', tags: ['enterprise', 'big-bets'] },
  { id: '38', src: '/images/nav-highlights/Highlight-18.svg', alt: 'Nav Highlight 18', tags: ['mobile', 'consumer'] },
  { id: '39', src: '/images/nav-highlights/Highlight-19.svg', alt: 'Nav Highlight 19', tags: ['mobile', 'big-bets'] },
  { id: '40', src: '/images/nav-highlights/Highlight-20.svg', alt: 'Nav Highlight 20', tags: ['consumer', 'big-bets'] },
  
  { id: '41', src: '/images/nav-highlights/Highlight-21.svg', alt: 'Nav Highlight 21', tags: ['0-1-products', 'enterprise'] },
  { id: '42', src: '/images/nav-highlights/Highlight-22.svg', alt: 'Nav Highlight 22', tags: ['0-1-products', 'mobile'] },
  { id: '43', src: '/images/nav-highlights/Highlight-23.svg', alt: 'Nav Highlight 23', tags: ['0-1-products', 'consumer'] },
  { id: '44', src: '/images/nav-highlights/Highlight-24.svg', alt: 'Nav Highlight 24', tags: ['0-1-products', 'big-bets'] },
  
  { id: '45', src: '/images/nav-highlights/Highlight.svg', alt: 'Nav Highlight', tags: ['enterprise', 'mobile'] },
];

// Provide a default description for each image using its alt text.
const sampleImagesWithDesc = sampleImages.map(img => ({ ...img, description: img.alt }));

export default function HighlightsPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'tiny' | 'compact' | 'relaxed'>('tiny');

  const handleFiltersChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  return (
    <div className="w-full flex flex-col gap-6 p-10 pt-10">
      {/* Filter Sidebar - Sticky at top */}
      <div className="sticky top-0 z-10 bg-white pb-4 pt-2 border-b border-gray-200">
        <FilterSidebar onFiltersChange={handleFiltersChange} onViewModeChange={setViewMode} />
      </div>
      
      {/* Image Gallery */}
      <div className="w-full">
        <ImageGallery images={sampleImagesWithDesc} activeFilters={activeFilters} viewMode={viewMode} />
      </div>
    </div>
  );
}