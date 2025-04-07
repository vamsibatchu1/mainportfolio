"use client";

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import { MENU_CONTENT_MAP } from '../../../app/home/components/menu-content';
import type { LottieRefCurrentProps } from "lottie-react";

// Import Lottie directly without dynamic loading to avoid delay
import Lottie from "lottie-react";

// Preload all animation files
import homeAnimation from '@/animations/home.json';
import workAnimation from '@/animations/work.json';
import blogAnimation from '@/animations/blog.json';
import experimentsAnimation from '@/animations/experiments.json';
import aboutAnimation from '@/animations/about.json';
import askAnimation from '@/animations/ask.json';

type MenuItem = {
  icon: (lottieRef: React.RefObject<LottieRefCurrentProps>, animation: AnimationData | null) => React.ReactNode;
  label: string;
  path: string;
}

interface LottieAsset {
  id: string;
  nm: string;
  layers: LottieLayer[];
  [key: string]: unknown;
}

interface LottieLayer {
  ddd: number;
  ind: number;
  ty: number;
  nm: string;
  sr: number;
  ks: unknown;
  ao: number;
  ip: number;
  op: number;
  st: number;
  bm: number;
  [key: string]: unknown;
}

interface Marker {
  tm: number;
  cm: string;
  dr: number;
  [key: string]: unknown;
}

type AnimationData = {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: LottieAsset[];
  layers: LottieLayer[];
  markers?: Marker[];
}

export default function ImmediateActionBar() {
  const [showInfo, setShowInfo] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Initialize animations array with preloaded animations
  const [animations] = useState<(AnimationData)[]>([
    homeAnimation,
    workAnimation,
    blogAnimation,
    experimentsAnimation,
    aboutAnimation,
    askAnimation
  ]);
  const menuRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const router = useRouter();
  const lottieRefs = useRef(Array(6).fill(null).map(() => React.createRef<LottieRefCurrentProps>())).current;

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
    const lottieInstance = lottieRefs[index].current;
    if (lottieInstance) {
      lottieInstance.goToAndPlay(0);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget as Node)) {
      setActiveIndex(null);
      lottieRefs.forEach(ref => {
        if (ref.current) {
          ref.current.goToAndStop(0);
        }
      });
    }
  };

  const handleNavigation = (path: string) => {
    setActiveIndex(null);
    
    // Update paths for the moved pages
    if (path === 'about' || path === 'blog' || path === 'work') {
      router.push(`/${path.toLowerCase()}`);
    } else {
      router.push(`/home/${path.toLowerCase()}`);
    }
  };

  const menuItems: MenuItem[] = [
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {animation && (
            <Lottie
              lottieRef={lottieRef}
              animationData={animation}
              loop={false}
              autoplay={false}
              className="w-full h-full"
              onComplete={() => {
                if (lottieRef.current) {
                  lottieRef.current.goToAndStop(0, true);
                }
              }}
            />
          )}
        </div>
      ),
      label: 'Home',
      path: ''
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {animation && (
            <Lottie
              lottieRef={lottieRef}
              animationData={animation}
              loop={false}
              autoplay={false}
              className="w-full h-full"
              onComplete={() => {
                if (lottieRef.current) {
                  lottieRef.current.goToAndStop(0, true);
                }
              }}
            />
          )}
        </div>
      ),
      label: 'Work',
      path: 'work'
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {animation && (
            <Lottie
              lottieRef={lottieRef}
              animationData={animation}
              loop={false}
              autoplay={false}
              className="w-full h-full"
              onComplete={() => {
                if (lottieRef.current) {
                  lottieRef.current.goToAndStop(0, true);
                }
              }}
            />
          )}
        </div>
      ),
      label: 'Blog',
      path: 'blog'
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {animation && (
            <Lottie
              lottieRef={lottieRef}
              animationData={animation}
              loop={false}
              autoplay={false}
              className="w-full h-full"
              onComplete={() => {
                if (lottieRef.current) {
                  lottieRef.current.goToAndStop(0, true);
                }
              }}
            />
          )}
        </div>
      ),
      label: 'Experiments',
      path: 'experiments'
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {animation && (
            <Lottie
              lottieRef={lottieRef}
              animationData={animation}
              loop={false}
              autoplay={false}
              className="w-full h-full"
              onComplete={() => {
                if (lottieRef.current) {
                  lottieRef.current.goToAndStop(0, true);
                }
              }}
            />
          )}
        </div>
      ),
      label: 'About',
      path: 'about'
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {animation && (
            <Lottie
              lottieRef={lottieRef}
              animationData={animation}
              loop={false}
              autoplay={false}
              className="w-full h-full"
              onComplete={() => {
                if (lottieRef.current) {
                  lottieRef.current.goToAndStop(0, true);
                }
              }}
            />
          )}
        </div>
      ),
      label: 'Ask',
      path: 'ask'
    },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 flex items-end justify-center z-50">
      <div 
        className="flex items-end justify-center w-full"
        onMouseLeave={() => {
          setActiveIndex(null);
          lottieRefs.forEach(ref => {
            if (ref.current) {
              ref.current.goToAndStop(0);
            }
          });
        }}
      >
        <div
          className="relative z-[2] flex w-[720px] items-center justify-center gap-2 bg-white rounded-xl py-2"
          style={{ borderRadius: 16 }}
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="relative flex items-center justify-center gap-2 px-4 py-4 transition-colors duration-300 hover:bg-black/5"
              style={{ borderRadius: 16 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => {
                if (activeIndex === index) {
                  handleNavigation(item.path);
                } else {
                  handleMouseEnter(index);
                }
              }}
            >
              <div 
                className="relative"
                style={{ 
                  transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.2s'
                }}
              >
                {item.icon(lottieRefs[index], animations[index])}
              </div>
              <span className="font-medium text-[#2D1D2C]">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <div
            ref={menuRef}
            className="overflow-hidden bg-white backdrop-blur-xl border border-[#D7D3D0]"
            style={{ 
              borderRadius: 16,
              width: activeIndex !== null ? ['730px', '730px', '730px', '730px', '730px', '730px'][activeIndex] : '720px',
              height: activeIndex !== null 
                ? ['280px', '320px', '240px', '380px', '300px', '400px'][activeIndex]
                : '48px',
              transform: `translateY(${activeIndex !== null ? 17 : 0}px)`,
              transition: 'all 0.3s'
            }}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence>
              {activeIndex !== null && (
                <div
                  key={activeIndex}
                  className="absolute w-full pt-4"
                  style={{ opacity: 1 }}
                >
                  {(() => {
                    const ContentComponent = MENU_CONTENT_MAP[menuItems[activeIndex].path];
                    return ContentComponent ? (
                      <ContentComponent 
                        isActive={true} 
                        onClose={() => setActiveIndex(null)} 
                      />
                    ) : null;
                  })()}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showInfo ? (
          <div className="absolute inset-0 z-10">
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
              <div
                className="w-[400px] overflow-hidden bg-white/50 p-4 backdrop-blur-2xl"
                style={{ 
                  borderRadius: 18,
                  opacity: 1,
                  transform: 'translateY(0) scale(1)'
                }}
                ref={ref}
              >
                <button
                  onClick={() => setShowInfo(false)}
                  className="absolute right-4 top-4 z-10"
                >
                  <X size={24} />
                </button>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <p className="text-gray-600">
                    Additional information about the selected project would go here...
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
} 