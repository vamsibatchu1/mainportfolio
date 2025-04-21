"use client";

// import { motion } from 'framer-motion'; // Removed unused import
import { Link } from 'lucide-react';
import type { MenuContentProps } from './types';
import { louize, inter } from '@/app/fonts';

export function HomeContent({ /* isActive */ }: MenuContentProps) {
  const items = [
    {
      title: 'Welcome',
      description: 'Return to the main landing page',
      icon: <Link size={20} />,
      link: '/'
    },
    {
      title: 'My Work',
      description: 'Explore selected projects and case studies',
      icon: <Link size={20} />,
      link: '/work'
    }
  ];

  return (
    <div className="flex w-full flex-col items-center p-4">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="flex w-[95%] cursor-pointer items-center gap-1.5 py-3 duration-300 hover:bg-black/5 hover:px-3 no-underline text-inherit"
          style={{ borderRadius: 16 }}
        >
          {item.icon && <div className="mr-1.5">{item.icon}</div>}
          <div className="flex w-full flex-col items-start">
            <p className={`${louize.className} font-medium text-xl`}>{item.title}</p>
            {item.description && (
              <p className={`${inter.className} text-sm text-gray-600`}>{item.description}</p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
} 