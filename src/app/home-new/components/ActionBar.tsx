"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import { MENU_CONTENT_MAP } from './menu-content';
import type { LottieRefCurrentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type MenuItem = {
  icon: (lottieRef: React.RefObject<LottieRefCurrentProps>, animation: AnimationData | null) => React.ReactNode;
  label: string;
  path: string;
}

interface AnimationData {
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

export default function ActionBar() {
  const [showInfo, setShowInfo] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [animations, setAnimations] = useState<(AnimationData | null)[]>([null, null, null, null, null, null]);
  const menuRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const router = useRouter();
  const lottieRefs = useRef(Array(6).fill(null).map(() => React.createRef<LottieRefCurrentProps>())).current;

  useEffect(() => {
    // Load animations on client side
    Promise.all([
      import('@/animations/home.json'),
      import('@/animations/work.json'),
      import('@/animations/blog.json'),
      import('@/animations/experiments.json'),
      import('@/animations/about.json'),
      import('@/animations/ask.json')
    ]).then(([home, work, blog, experiments, about, ask]) => {
      setAnimations([
        home.default,
        work.default,
        blog.default,
        experiments.default,
        about.default,
        ask.default
      ]);
    });
  }, []);

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
    <motion.div 
      className="fixed bottom-4 left-0 right-0 flex items-end justify-center z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        delay: 2.0,
        duration: 0.6,
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
    >
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
        <motion.div
          className="relative z-[2] flex w-[720px] items-center justify-center gap-2 bg-white rounded-xl py-2"
          style={{ borderRadius: 16 }}
        >
          {menuItems.map((item, index) => (
            <motion.button
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
              <motion.div 
                className="relative"
                animate={{ 
                  scale: activeIndex === index ? 1.1 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                {item.icon(lottieRefs[index], animations[index])}
              </motion.div>
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
              width: activeIndex !== null ? ['730px', '730px', '730px', '730px', '730px', '730px'][activeIndex] : '720px',
              height: activeIndex !== null 
                ? ['280px', '320px', '240px', '380px', '300px', '400px'][activeIndex]
                : '48px',
              y: activeIndex !== null ? 17 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 40,
              mass: 1,
              restDelta: 0.001
            }}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence>
              {activeIndex !== null && (
                <motion.div
                  key={activeIndex}
                  className="absolute w-full pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
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
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showInfo ? (
          <div className="absolute inset-0 z-10">
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
              <motion.div
                className="w-[400px] overflow-hidden bg-white/50 p-4 backdrop-blur-2xl"
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
                  className="absolute right-4 top-4 z-10"
                >
                  <X size={24} />
                </motion.button>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <p className="text-gray-600">
                    Additional information about the selected project would go here...
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
} 