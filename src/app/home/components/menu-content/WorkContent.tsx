"use client";

import { IBM_Plex_Mono } from 'next/font/google';
import { MenuContentProps } from './types';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export function WorkContent({ isActive }: MenuContentProps) {
  const items = [
    {
      title: 'Home Buying Plan',
      description: 'Led design for a 0-1 nurturing product to help first time home buyers',
      image: '/images/project_rocket.png'
    },
    {
      title: 'Billpay Redesign',
      description: 'Redesigned a billpay system for 6 million users of a major bank',
      image: '/images/project_truist.png'
    }
  ];

  return (
    <div className="flex w-full flex-col items-center p-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex w-[95%] cursor-pointer items-center gap-1.5 py-3 duration-300 hover:bg-black/5 hover:px-3"
          style={{ borderRadius: 16 }}
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="mr-1.5 h-16 w-16 shrink-0 object-cover"
              style={{ borderRadius: 12 }}
            />
          )}
          <div className="flex w-full flex-col items-start">
            <p className="font-medium">{item.title}</p>
            {item.description && (
              <p className={`${ibmPlexMono.className} text-sm opacity-80`}>{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 