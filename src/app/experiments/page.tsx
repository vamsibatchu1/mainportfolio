'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, ebGaramondFont, interFont } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Home, PenTool, FlaskConical, Briefcase } from 'lucide-react';

const experiments = [
  {
    title: 'Gridscape',
    description: 'Dive into any kind of rabbit hole that you are curious about. Explore conceptual schematics and visual knowledge graphs.',
    images: [
      '/new/experiments/gridscape1.png',
      '/new/experiments/gridscape2.png',
      '/new/experiments/gridscape3.png'
    ]
  },
  {
    title: 'Worldwide',
    description: 'Built this interactive game last night called \'worldwide\', a geolocation guessing game powered by the Google Gemini API. It uses tactical intelligence clues to challenge users to identify global territories.',
    images: [
      '/new/experiments/worldwide1.png',
      '/new/experiments/worldwide2.png',
      '/new/experiments/worldwide3.png'
    ]
  },
  {
    title: 'Elsewhere',
    description: 'Where you can transport yourself anywhere with sounds for deep work.',
    images: [
      '/new/experiments/elsewhere1.png',
      '/new/experiments/elsewhere2.png',
      '/new/experiments/elsewhere3.png'
    ]
  }
];

export default function ExperimentsPage() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: '/home', label: 'Home', icon: Home },
    { href: '/writing', label: 'Writing', icon: PenTool },
    { href: '/experiments', label: 'Experiments', icon: FlaskConical },
    { href: '/work', label: 'Work', icon: Briefcase },
  ];

  const currentNavItem = navItems.find(item => item.href === pathname) || navItems[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileNavOpen(false);
      }
    };

    if (isMobileNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileNavOpen]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto">
      {/* Navigation */}
      <nav className={`${jakartaFont.variable} font-jakarta w-full max-w-[1200px] mx-auto px-6 md:px-4 pt-6 md:pt-8 pb-4 md:pb-6`}>
        {/* Mobile Dropdown Navigation */}
        <div className="md:hidden relative" ref={dropdownRef}>
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="flex items-center gap-2 text-black text-[16px] border-b-2 pb-1 border-dotted border-black"
          >
            {(() => {
              const Icon = currentNavItem.icon;
              return <Icon className="w-4 h-4 text-gray-500" />;
            })()}
            {currentNavItem.label}
            <ChevronDown className={`w-4 h-4 transition-transform ${isMobileNavOpen ? 'rotate-180' : ''}`} />
          </button>
          {isMobileNavOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-black shadow-lg z-50 min-w-[120px]">
              {navItems.filter(item => item.href !== pathname).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileNavOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-[16px] text-black hover:bg-gray-50 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gray-500" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        
        {/* Desktop Horizontal Navigation */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === item.href ? 'border-dotted border-black' : 'border-transparent'}`}
              >
                <Icon className="w-4 h-4 text-gray-500" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="w-full min-h-screen bg-white flex flex-col gap-[40px] md:gap-[80px] pt-6 md:pt-[40px] max-w-[1200px] mx-auto px-6 md:px-4 pb-6 md:pb-12">
        {experiments.map((experiment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {/* Title */}
            <h2 className={`${ebGaramondFont.className} text-[24px] md:text-[48px] font-normal text-black leading-[1.1]`}>
              {experiment.title}
            </h2>
            
            {/* Description and Button Row */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6 w-full">
              {/* First Column - Description Text */}
              <div className="w-[80%] md:w-[840px]">
                <p className={`${interFont.variable} font-inter text-[14px] md:text-[16px] text-gray-500 leading-tight`}>
                  {experiment.description}
                </p>
              </div>
              
              {/* Second Column - Button */}
              <div className="w-full md:w-[260px] flex md:justify-end items-start">
                <button className={`${jakartaFont.variable} font-jakarta bg-white border-2 border-dotted border-black text-black px-4 py-2 text-[14px] md:text-[16px] hover:opacity-70 transition-opacity rounded-none`}>
                  checkout experiment
                </button>
              </div>
            </div>
            
            {/* 3 Images in a row */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-[40px] w-full">
              {experiment.images.map((imageSrc, imgIndex) => (
                <div key={imgIndex} className="w-full md:w-1/3">
                  <Image
                    src={imageSrc}
                    alt={`${experiment.title} ${imgIndex + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
