"use client";

import { Link } from 'lucide-react';
import { IBM_Plex_Mono } from 'next/font/google';
import { MenuContentProps } from './types';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export function ExperimentsContent({ isActive }: MenuContentProps) {
  const items = [
    {
      title: 'Interactive Demos',
      description: 'Explore interactive design experiments',
      icon: <Link size={20} />,
      link: '/experiments/demos'
    },
    {
      title: 'Prototypes',
      description: 'View design prototypes and concepts',
      icon: <Link size={20} />,
      link: '/experiments/prototypes'
    }
  ];

  return (
    <div className="flex w-full flex-col items-center p-4">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="flex w-[95%] cursor-pointer items-center gap-1.5 py-3 duration-300 hover:bg-black/5 hover:px-3"
          style={{ borderRadius: 16 }}
        >
          {item.icon && <div className="mr-1.5">{item.icon}</div>}
          <div className="flex w-full flex-col items-start">
            <p className="font-medium">{item.title}</p>
            {item.description && (
              <p className={`${ibmPlexMono.className} text-sm opacity-80`}>{item.description}</p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
} 