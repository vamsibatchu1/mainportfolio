'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ebGaramondFont, interFont, jakartaFont } from '@/app/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronLeft, ChevronRight, Home, PenTool, FlaskConical, Briefcase } from 'lucide-react';
import { ExpandingText, aboutTextData } from '../(routes)/wip/main/core/about/components';

export default function HomePage() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    { src: '/images/port/high1.svg', alt: 'Portfolio highlight 1' },
    { src: '/images/port/high2.svg', alt: 'Portfolio highlight 2' },
    { src: '/images/port/high3.svg', alt: 'Portfolio highlight 3' },
    { src: '/images/port/high4.svg', alt: 'Portfolio highlight 4' },
  ];

  const handlePrevious = () => {
    setCarouselIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

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
      

      {/* Section 1: About paragraph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
        className="text-left w-full flex flex-col [&>div]:text-[18px] md:[&>div]:text-[28px] lg:[&>div]:text-[32px]"
      >
        <ExpandingText segments={aboutTextData} />
      </motion.div>

      {/* Section 2: Portrait of Vamsi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-left w-full gap-6 md:gap-[48px]"
      >
        <div className="flex flex-col w-full md:w-[40%]">
          <Image src="/images/wip/about/vamsi.jpg" alt="Vamsi" width={640} height={600} className="w-full h-auto object-cover"/>
        </div>
        
        
        <div className="flex flex-col w-full md:w-[70%] gap-4">
        <img
          src="/images/port/hero2.webp"
          alt="Hero"
          className="h-auto"
        />
        </div>
        
      </motion.div>


      {/* Section 3: Work Highlights */}
      <motion.div 
        className="w-full flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      >
        {/* Mobile Carousel */}
        <div className="md:hidden w-full">
          <div className="w-full overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <img
                  src={carouselImages[carouselIndex].src}
                  alt={carouselImages[carouselIndex].alt}
                  className="w-full h-auto"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Carousel Navigation Arrows */}
          <div className="flex justify-between w-full mt-6">
            <button
              onClick={handlePrevious}
              className="w-8 h-8 border-2 border-dotted border-black flex items-center justify-center hover:opacity-70 transition-opacity bg-transparent"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-black" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 border-2 border-dotted border-black flex items-center justify-center hover:opacity-70 transition-opacity bg-transparent"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:flex md:flex-row gap-6 w-full">
          {carouselImages.map((image, index) => (
            <div key={index} className="w-1/4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </motion.div>


      {/* Section 4: Worktypes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
        className="w-full flex flex-col md:flex-row gap-6 md:gap-[40px]"
      >
        {/* Left column - Text */}
        <div className="w-full md:w-[580px]">
          <p className={`${ebGaramondFont.className} text-black text-[18px] md:text-[40px] leading-[100%] tracking-[-0.02em] text-left`}>
            Throughout the past decade, I had the opportunity to lead and work on a variety of projects including ...
          </p>
        </div>
        {/* Right column - Image */}
        <div className="w-full md:w-[580px]">
          <img
            src="/images/port/worktypes2.webp"
            alt="Work Types"
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      </div>
    </div>
  );
}
