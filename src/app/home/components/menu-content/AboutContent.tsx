"use client";

import { Link } from 'lucide-react';
import { IBM_Plex_Mono } from 'next/font/google';
import { MenuContentProps } from './types';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export function AboutContent({ isActive }: MenuContentProps) {
  const items = [
   /* {
      title: 'Experience',
      description: '10+ years of design and development',
      date: '10+ years',
    },
    {
      title: 'Leadership',
      description: 'Leading design teams and initiatives',
      date: '5+ years',
    }*/
  ];

  return (
    <div className="flex w-[full] flex-col items-center p-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex w-[95%] cursor-pointer items-center gap-1.5 py-3 duration-300 hover:bg-black/5 hover:px-3"
          style={{ borderRadius: 16 }}
        >
          <div className="flex w-full flex-col items-start">
            <p className="font-medium">{item.title}</p>
            {item.description && (
              <p className={`${ibmPlexMono.className} text-sm opacity-80`}>{item.description}</p>
            )}
          </div>
          {item.date && (
            <span className="text-md block shrink-0 px-2 py-1 opacity-80">
              {item.date}
            </span>
          )}
        </div>
      ))}
    </div>
  );
} 