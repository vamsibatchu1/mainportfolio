'use client';

import React from 'react';
import { motion } from 'framer-motion';
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

  // Calculate columns per row based on viewMode for delay calculation
  const getColumnsPerRow = (mode: 'tiny' | 'compact' | 'relaxed'): number => {
    // Using a reasonable default for desktop - will be responsive
    switch (mode) {
      case 'tiny':
        return 4; // Default for desktop
      case 'compact':
        return 3; // Default for desktop
      case 'relaxed':
        return 2; // Default for desktop
      default:
        return 4;
    }
  };

  // Calculate delay for each card based on Z-pattern
  const calculateDelay = (index: number, columnsPerRow: number): number => {
    const row = Math.floor(index / columnsPerRow);
    const col = index % columnsPerRow;
    
    // Base delay: 0.2s after filter sidebar
    // Row delay: 0.3s per row
    // Column delay: 0.2s per column
    const baseDelay = 0.5;
    const rowDelay = row * 0.4;
    const colDelay = col * 0.095;
    
    return baseDelay + rowDelay + colDelay;
  };

  const columnsPerRow = getColumnsPerRow(viewMode);

  return (
    <div className={`w-full max-w-[1440px] mx-auto grid ${getGridColumns(viewMode)} gap-6`}>
      {filteredImages.map((image, index) => {
        const delay = calculateDelay(index, columnsPerRow);
        
        return (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
            className="rounded-[14px] overflow-hidden aspect-square"
          >
            <FlipImage src={image.src} alt={image.alt} backText={image.description ?? image.alt} />
          </motion.div>
        );
      })}
    </div>
  );
}
