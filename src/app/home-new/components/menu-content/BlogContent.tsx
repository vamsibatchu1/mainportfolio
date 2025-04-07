"use client";

import { Link } from 'lucide-react';
import { IBM_Plex_Mono } from 'next/font/google';
import { MenuContentProps } from './types';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export function BlogContent({ isActive }: MenuContentProps) {
  const items = [
    {
      title: 'Design Systems',
      tag: 'Process',
      date: 'Jun 2024',
      icon: <Link size={20} />,
    },
    {
      title: 'Product Strategy',
      tag: 'Leadership',
      date: 'May 2024',
      icon: <Link size={20} />,
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
          {item.icon && <div className="mr-1.5">{item.icon}</div>}
          <div className="flex w-full flex-col items-start">
            <p className="font-medium">{item.title}</p>
          </div>
          {item.tag && (
            <span
              className="block shrink-0 border border-black/50 px-2 py-1 text-sm opacity-80"
              style={{ borderRadius: 8 }}
            >
              {item.tag}
            </span>
          )}
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