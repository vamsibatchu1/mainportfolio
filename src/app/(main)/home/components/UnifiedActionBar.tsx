"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { MENU_CONTENT_MAP } from './actionbar-content';
import type { LottieRefCurrentProps } from "lottie-react";
import styles from './styles.module.css';
import { fourFont } from '@/app/fonts';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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

interface UnifiedActionBarProps {
  alwaysVisible?: boolean;
}

export default function UnifiedActionBar({ alwaysVisible = false }: UnifiedActionBarProps) {
  // For toggling visibility with spacebar (from CustomActionBar)
  const [isVisible, setIsVisible] = useState(alwaysVisible);
  
  // For handling menu content (from ActionBar/ImmediateActionBar)
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
  const actionBarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const lottieRefs = useRef(Array(6).fill(null).map(() => React.createRef<LottieRefCurrentProps>())).current;

  useOnClickOutside(ref, () => setShowInfo(false));

  // Function to handle keyboard events
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      // Toggle ActionBar visibility on spacebar press (only if not alwaysVisible)
      if (!alwaysVisible && (event.key === " " || event.code === "Space")) {
        event.preventDefault(); // Prevent page scrolling
        setIsVisible(prev => !prev);
      }
      
      // Hide ActionBar on Escape (only if not alwaysVisible)
      if (!alwaysVisible && event.key === "Escape") {
        setIsVisible(false);
      }
      
      // Hide info on Escape (always)
      if (event.key === 'Escape') {
        setShowInfo(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [alwaysVisible]);

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

  const renderActionBar = () => (
    <div className="w-full flex items-end justify-center unified-action-bar-container">
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
          id="action-bar-button-container"
          className="relative z-[2] flex w-[750px] items-center justify-center gap-2 bg-white rounded-xl py-2"
          style={{ borderRadius: 16 }}
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              className="relative flex items-center justify-center gap-2 px-4 py-4 transition-all duration-300 hover:bg-black/5"
              style={{ borderRadius: 16 }}
              whileHover={{ 
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                y: -2,
                transition: { y: { duration: 0.15 } }
              }}
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
                transition={{ 
                  duration: 0.2, 
                  ease: "easeOut",
                  scale: { type: "spring", stiffness: 400, damping: 15 }
                }}
              >
                {item.icon(lottieRefs[index], animations[index])}
              </motion.div>
              <span className={`font-[8px] text-[#2D1D2C] ${fourFont.className}`}>{item.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <motion.div
            id="action-bar-expanding-content-container"
            ref={menuRef}
            className="overflow-hidden bg-white backdrop-blur-xl border border-[#D7D3D0]"
            style={{ borderRadius: 16 }}
            animate={{
              width: activeIndex !== null ? '750px' : '740px',
              height: activeIndex !== null 
                ? ['280px', '309px', '330px', '300px', '300px', '400px'][activeIndex]
                : '48px',
              y: activeIndex !== null ? 17 : 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.32, 0.72, 0, 1], // Custom easing for smoother expansion
              height: { duration: 0.4 },
              width: { duration: 0.3 }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait">
              {activeIndex !== null && (
                <motion.div
                  key={activeIndex}
                  className="absolute w-full pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ 
                    duration: 0.25,
                    opacity: { duration: 0.2 },
                    ease: "easeOut"
                  }}
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
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ 
                  duration: 0.35, 
                  ease: [0.22, 1, 0.36, 1]
                }}
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
    </div>
  );

  return (
    <>
      {/* Background blur overlay with enter/exit animations - only if not always visible */}
      {!alwaysVisible && (
        <AnimatePresence>
          {isVisible && (
            <motion.div 
              className={styles.blurOverlay}
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.1, 0.25, 1.0],
                backdropFilter: { duration: 0.7 } 
              }}
            />
          )}
        </AnimatePresence>
      )}
      
      {/* ActionBar with enter/exit animations */}
      {alwaysVisible ? (
        <div className="fixed bottom-0 left-0 right-0 flex items-end justify-center z-[999] overflow-visible pointer-events-none pb-10">
          <div className="pointer-events-auto">
            {renderActionBar()}
          </div>
        </div>
      ) : (
        <AnimatePresence>
          {isVisible && (
            <div className="fixed bottom-0 left-0 right-0 flex items-end justify-center z-[999] overflow-visible pointer-events-none pb-10">
              <motion.div 
                ref={actionBarRef}
                className="pointer-events-auto w-full"
                initial={{ y: 80, opacity: 0, scale: 0.97 }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.45 },
                    // Stagger children animations
                    staggerChildren: 0.05,
                    delayChildren: 0.1
                  }
                }}
                exit={{ 
                  y: 80, 
                  opacity: 0, 
                  scale: 0.97,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
              >
                {renderActionBar()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      )}
      
      {/* Keyboard instruction hint - only show if not always visible */}
      {!alwaysVisible && (
        <motion.div 
          className={styles.keyboardHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: 2,
            opacity: { duration: 0.5, delay: 2 }
          }}
        >
          Press Space to open menu
        </motion.div>
      )}
    </>
  );
} 