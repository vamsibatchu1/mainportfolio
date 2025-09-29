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
}

export default function ImageGallery({ images, activeFilters }: ImageGalleryProps) {
  // Filter images based on active filters
  const filteredImages = images.filter(image => {
    if (activeFilters.length === 0) return true;
    return image.tags.some(tag => activeFilters.includes(tag));
  });

  // Group images into rows of 4
  const imageRows = [];
  for (let i = 0; i < filteredImages.length; i += 4) {
    imageRows.push(filteredImages.slice(i, i + 4));
  }

  return (
    <div className="flex flex-col gap-6">
      {imageRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-6">
          {row.map((image) => (
            <div
              key={image.id}
              className="bg-gray-200 rounded-[14px] w-[250px] h-[250px] flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={250}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Fill remaining slots in the row if less than 4 images */}
          {Array.from({ length: 4 - row.length }).map((_, index) => (
            <div
              key={`empty-${rowIndex}-${index}`}
              className="w-[250px] h-[250px] flex-shrink-0"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
