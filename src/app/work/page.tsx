'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, ebGaramondFont, interFont } from '@/app/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, ChevronDown, Home, PenTool, FlaskConical, Briefcase } from 'lucide-react';

export default function WorkPage() {
  const pathname = usePathname();
  const email = 'vamsibatchuk@gmail.com';
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

      <div className="w-full min-h-screen bg-white flex flex-col items-start md:items-center justify-start md:justify-center max-w-[1200px] mx-auto px-6 md:px-4 pt-6 md:pt-[40px] pb-6 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start md:items-center gap-3 md:gap-12 text-left md:text-center max-w-2xl"
        >
          {/* Message */}
          <p className={`${ebGaramondFont.className} text-black text-[24px] md:text-[32px] lg:text-[40px] leading-tight md:leading-[1.2] tracking-[-0.02em]`}>
            For access to work samples, please send an email to:
          </p>

          {/* Email Address */}
          <p className={`${interFont.variable} font-inter text-black text-[14px] md:text-[24px] font-medium`}>
            {email}
          </p>

          {/* Email Button */}
          <motion.a
            href={`mailto:${email}`}
            className={`${jakartaFont.variable} font-jakarta flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-black text-white hover:opacity-80 transition-opacity text-[16px] md:text-[18px]`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
