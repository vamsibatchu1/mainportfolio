"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { redditSans } from '../../app/fonts';
import { CodeXml, Link, X } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';

type MenuItem = {
  icon: React.ReactNode
  label: string
}

type SubMenuItem = {
  image?: string
  icon?: React.ReactNode
  title: string
  description?: string
  tag?: string
  date?: string
}

type MenuItemContent = {
  items: SubMenuItem[]
}

const menuItems: MenuItem[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    label: 'Work',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    label: 'Blog',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: 'About',
  },
]

const menuItemsContent: MenuItemContent[] = [
  {
    items: [
      {
        image: '/work/project1.jpg',
        title: 'Project One',
        description: 'Design System',
        tag: 'UX Design',
      },
      {
        image: '/work/project2.jpg',
        title: 'Project Two',
        description: 'Mobile App',
        tag: 'Product',
      },
    ],
  },
  {
    items: [
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
      },
    ],
  },
  {
    items: [
      {
        title: 'Experience',
        date: '10+ years',
        icon: <Link size={20} />,
      },
      {
        title: 'Leadership',
        date: '5+ years',
        icon: <Link size={20} />,
      },
    ],
  },
]

function LocationCard() {
  return (
    <motion.div 
      className="bg-[#fff] rounded-xl p-6 flex items-center gap-2 w-full max-w-[1200px]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        delay: 2.5,
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z" 
          stroke="black" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M10 17.5C13.3333 14.1667 16.6667 11.3012 16.6667 8.33333C16.6667 5.36548 13.6819 2.5 10 2.5C6.31811 2.5 3.33334 5.36548 3.33334 8.33333C3.33334 11.3012 6.66668 14.1667 10 17.5Z" 
          stroke="black" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className={`${redditSans.className} text-sm`}>Currently based out of Atlanta</span>
    </motion.div>
  );
}

function ImageCard({ delay }: { delay: number }) {
  return (
    <motion.div 
      className="bg-[#F5F5F4] rounded-2xl w-full h-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut"
      }}
    />
  );
}

function MainCard() {
  return (
    <motion.div 
      className="bg-white text-white rounded-3xl p-12 w-full max-w-[1200px] h-[400px] border border-[#D7D3D0]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex gap-4 h-full">
        <div className="flex-1 flex flex-col justify-between">
          <motion.h1 
            className="font-['Kilimanjaro_Sans'] text-[92px] leading-[84%] tracking-[2px] text-[#000]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            vamsi<br/>batchu<span className="text-[#ffa94d]">.</span>
          </motion.h1>
          
          <motion.p
            className={`${redditSans.className} text-[22px] leading-[120%] tracking-[0px] text-[#767676]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            hands-on product design leader with 10+ years of experience in designing and leading teams developing highly impactful products at scale.
          </motion.p>
        </div>

        <div className="w-[300px] h-full">
          <ImageCard delay={1.2} />
        </div>

        <div className="w-[300px] h-full flex flex-col gap-4">
          <div className="flex-1">
            <ImageCard delay={1.6} />
          </div>
          <div className="flex-1">
            <ImageCard delay={2.0} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ActionBar() {
  const [showInfo, setShowInfo] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setShowInfo(false));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowInfo(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget as Node)) {
      setActiveIndex(null);
    }
  };

  return (
    <div className="absolute inset-0 flex items-end justify-center pb-8">
      <motion.div
        className="absolute z-[2] flex w-[410px] items-center justify-center gap-2 bg-white rounded-2xl"
        style={{ borderRadius: 16 }}
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={index}
            className="flex items-center justify-center gap-2 px-4 py-3 transition-colors duration-300 hover:bg-black/5"
            style={{ borderRadius: 16 }}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {item.icon}
            <span className="font-medium text-[#2D1D2C]">{item.label}</span>
          </motion.button>
        ))}
      </motion.div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <motion.div
          ref={menuRef}
          className="overflow-hidden bg-white backdrop-blur-xl border border-[#D7D3D0]"
          style={{ borderRadius: 16 }}
          animate={{
            width: activeIndex !== null ? ['500px', '460px', '480px'][activeIndex] : '410px',
            height: activeIndex !== null ? ['290px', '284px', '226px'][activeIndex] : '48px',
            y: activeIndex !== null ? 17 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                className="absolute bottom-16 flex w-full flex-col items-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuItemsContent[activeIndex].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex w-[95%] cursor-pointer items-center gap-1.5 py-3 duration-300 hover:bg-black/5 hover:px-3"
                    onClick={() => setShowInfo(true)}
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
                    {item.icon && <div className="mr-1.5">{item.icon}</div>}
                    <div className="flex w-full flex-col items-start">
                      <p className="font-medium">{item.title}</p>
                      {item.description && (
                        <p className="opacity-80">{item.description}</p>
                      )}
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
                <div className="mt-4 h-[2px] w-[95%] bg-black/10"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {showInfo ? (
          <div className="absolute inset-0 z-10">
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
              <motion.div
                className="h-[400px] w-[600px] overflow-hidden bg-white/50 p-4 backdrop-blur-2xl"
                style={{ borderRadius: 18 }}
                ref={ref}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                <motion.button
                  layout
                  onClick={() => setShowInfo(false)}
                  className="absolute right-4 top-4"
                >
                  <X size={24} />
                </motion.button>
                {/* Content for info modal */}
              </motion.div>
            </div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function Current() {
  return (
    <div className="min-h-[100svh] px-24 pt-16 flex flex-col items-center gap-4 bg-[#EAE7E0]">
      <MainCard />
      <LocationCard />
      <div className="relative w-full h-[200px] mt-8">
        <ActionBar />
      </div>
    </div>
  );
} 