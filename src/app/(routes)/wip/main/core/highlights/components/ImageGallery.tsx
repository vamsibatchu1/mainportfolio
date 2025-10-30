'use client';

import React from 'react';
import Image from 'next/image';
import { FlipImage } from './flipimage';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  tags: string[];
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  activeFilters: string[];
  viewMode: 'tiny' | 'compact' | 'relaxed';
}

export default function ImageGallery({ images, activeFilters, viewMode }: ImageGalleryProps) {
  // Filter images based on active filters
  const filteredImages = images.filter(image => {
    if (activeFilters.length === 0) return true;
    return image.tags.some(tag => activeFilters.includes(tag));
  });

  // Determine items per row based on viewMode
  // For responsive design, we'll use CSS Grid with grid-template-columns
  const getGridColumns = (mode: 'tiny' | 'compact' | 'relaxed') => {
    switch (mode) {
      case 'tiny':
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4';
      case 'compact':
        return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3';
      case 'relaxed':
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2';
      default:
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4';
    }
  };

  return (
    <div className={`w-full grid ${getGridColumns(viewMode)} gap-6`}>
      {filteredImages.map((image) => (
        <div
          key={image.id}
          className="rounded-[14px] overflow-hidden aspect-square"
        >
          <FlipImage src={image.src} alt={image.alt} backText={image.description ?? image.alt} />
        </div>
      ))}
    </div>
  );
}
