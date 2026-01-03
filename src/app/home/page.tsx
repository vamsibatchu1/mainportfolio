'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ebGaramondFont, interFont, jakartaFont } from '@/app/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Home, PenTool, FlaskConical, Briefcase } from 'lucide-react';
import { ExpandingText, aboutTextData } from '../(routes)/wip/main/core/about/components';

export default function HomePage() {
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
  const heroHeader = "With a proven track record leading cross-functional initiatives to shape product strategy, I specialize in defining the vision for zero-to-one, AI-native products and evolving data-informed design systems.";

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
      {/* Section 1: Originally from India paragraph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
        className="text-left w-full flex flex-col [&>div]:text-[18px] md:[&>div]:text-[28px] lg:[&>div]:text-[32px]"
      >
        <ExpandingText segments={aboutTextData} />
      </motion.div>

      {/* Section 5: Images section from about */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-left w-full gap-6 md:gap-[48px]"
      >
        <div className="flex flex-col w-full md:w-[60%] gap-4">
          <Image src="/images/wip/about/about_design.jpeg" alt="About Me" width={960} height={600} className="w-full h-auto"/>
          <p className={`${interFont.variable} font-inter text-[18px] md:text-[16px] text-gray-500 leading-relaxed max-w-full md:max-w-[600px] hidden md:block`}>
            Design is not just about what exists, but about unlocking the possibility of transformative experiences that reshape how we interact with the world.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-[40%]">
          <Image src="/images/wip/about/vamsi.jpg" alt="Vamsi" width={640} height={600} className="w-full h-auto object-cover"/>
        </div>
      </motion.div>

      {/* Section 2: Clarity paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="text-left w-full flex flex-col gap-6 md:gap-12"
      >
        <p className={`${ebGaramondFont.className} text-black text-[18px] md:text-5xl lg:text-[64px] leading-[100%] tracking-[-0.02em]`}>
          Design to me is fundamentally about providing clarity in complexity. It&apos;s about seeing beyond immediate feature requests to uncover the deeper patterns and opportunities that can transform how people work and live.
        </p>
      </motion.div>

      {/* Section 3: Proven track record section with image */}
      <motion.div 
        className="w-full flex flex-col md:flex-row gap-6 md:gap-[33px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      >
        {/* Image Section - Left */}
        <div className="w-full md:w-[583px] relative shrink-0">
          <img
            src="/new/port2.svg"
            alt="Hero"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section - Right */}
        <div className="w-full md:w-[583px] h-auto flex flex-col gap-4 md:gap-[20px] items-start justify-start md:justify-end">
          <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[18px] md:text-[33px] text-black w-full`}>
            {heroHeader}
          </p>
        </div>
      </motion.div>

      {/* Section 5.5: Port1 SVG */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
        className="flex justify-center items-center w-full"
      >
        <img 
          src="/new/port1.svg" 
          alt="Portfolio" 
          className="w-full max-w-full h-auto"
        />
      </motion.div>

      </div>
    </div>
  );
}
