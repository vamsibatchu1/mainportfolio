"use client";

import React from 'react';
import { IBM_Plex_Mono } from 'next/font/google';
import type { MenuContentProps } from './types';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

// Sample experiment data
const experiments = [
  {
    id: 1,
    title: 'Goodflicks',
    description: 'An AI powered movie recommendation and social media app',
    image: '/images/experiments/goodflicks.jpg',
    link: '/home/experiments/goodflicks'
  },
  {
    id: 2,
    title: 'Soundscape',
    description: 'Interactive audio visualization experiment with Three.js',
    image: '/images/experiments/soundscape.jpg',
    link: '/home/experiments/soundscape'
  },
  {
    id: 3,
    title: 'Old Home',
    description: 'Archive of the previous home page design and components',
    image: '/images/experiments/old-home.jpg',
    link: '/experiments/old-home'
  }
];

export function ExperimentsContent({ isActive, onClose }: MenuContentProps) {
  return (
    <div className="p-6 h-full">  
      <div className="grid grid-cols-2 gap-4">
        {experiments.map((experiment) => (
          <a 
            key={experiment.id}
            href={experiment.link}
            className="block group"
          >
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300">
              <div className="p-4">
                <h4 className="font-medium mb-1">{experiment.title}</h4>
                <p className={`${ibmPlexMono.className} text-sm text-gray-600`}>
                  {experiment.description}
                </p>
              </div>
              <div className="bg-gray-200 h-32 w-full">
                {/* Image placeholder - in production, use next/image */}
                {/* <Image src={experiment.image} alt={experiment.title} width={300} height={128} /> */}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 