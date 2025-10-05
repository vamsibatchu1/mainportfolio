'use client';

import React from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  tags: string[];
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

  // Determine layout based on viewMode
  const itemsPerRow = viewMode === 'tiny' ? 4 : viewMode === 'compact' ? 3 : 2;
  // Container width is fixed at 1080px in page.tsx, gap-6 = 24px between cards
  const gapPx = 24;
  const sizeCss = `calc((1080px - ${(itemsPerRow - 1) * gapPx}px) / ${itemsPerRow})`;

  // Group images into rows
  const imageRows = [];
  for (let i = 0; i < filteredImages.length; i += itemsPerRow) {
    imageRows.push(filteredImages.slice(i, i + itemsPerRow));
  }

  return (
    <div className="flex flex-col gap-6">
      {imageRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-6" style={{ width: '1080px' }}>
          {row.map((image) => (
            <div
              key={image.id}
              className="bg-gray-200 rounded-[14px] flex-shrink-0 overflow-hidden"
              style={{ width: sizeCss, height: sizeCss }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Fill remaining slots in the row if less than itemsPerRow images */}
          {Array.from({ length: itemsPerRow - row.length }).map((_, index) => (
            <div
              key={`empty-${rowIndex}-${index}`}
              className="flex-shrink-0"
              style={{ width: sizeCss, height: sizeCss }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
