"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import { MENU_CONTENT_MAP } from './menu-content';
import type { LottieRefCurrentProps } from "lottie-react";
import styles from './styles.module.css';
import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR turned off
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Preload all animation files
import homeAnimation from '@/animations/home.json';
import workAnimation from '@/animations/work.json';
import blogAnimation from '@/animations/blog.json';
import experimentsAnimation from '@/animations/experiments.json';
import aboutAnimation from '@/animations/about.json';
import askAnimation from '@/animations/ask.json';

// Global variable to track if an instance is already rendered
const globalInstanceTracker = {
  instances: new Set<string>(),
  pathname: '',
  activeInstance: null as string | null
};

// Generate a unique ID
function generateUniqueId() {
  return Math.random().toString(36).substring(2, 9);
}

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
  const instanceId = useRef(generateUniqueId());
  // State to track if this instance should render
  const [shouldRender, setShouldRender] = useState(false);
  
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

  // Check for duplicate instances on mount
  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Get current pathname
      const currentPath = window.location.pathname;
      
      // If this is a new page, reset the tracker
      if (globalInstanceTracker.pathname !== currentPath) {
        globalInstanceTracker.instances.clear();
        globalInstanceTracker.activeInstance = null;
        globalInstanceTracker.pathname = currentPath;
      }
      
      // Register this instance
      globalInstanceTracker.instances.add(instanceId.current);
      
      // Enhanced detection: Check if we already have a visible ActionBar in the DOM
      const existingActionBar = document.querySelector('.unified-action-bar-container');
      
      // If no active instance is set and no DOM element exists, make this one active
      if (!globalInstanceTracker.activeInstance && !existingActionBar) {
        globalInstanceTracker.activeInstance = instanceId.current;
        setShouldRender(true);
      } else if (globalInstanceTracker.activeInstance === instanceId.current) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
        console.warn('Multiple UnifiedActionBar instances detected. Only rendering one.');
      }
    }
    
    // Cleanup on unmount (this part is safe as it only manipulates the tracker object)
    return () => {
      globalInstanceTracker.instances.delete(instanceId.current);
      if (globalInstanceTracker.activeInstance === instanceId.current) {
        globalInstanceTracker.activeInstance = null;
        if (globalInstanceTracker.instances.size > 0) {
          globalInstanceTracker.activeInstance = Array.from(globalInstanceTracker.instances)[0];
        }
      }
    };
  }, []); // Empty dependency array means this runs once on mount
  
  // Function to handle keyboard events
  useEffect(() => {
    // Define the event handler function outside the conditional block
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
    
    // Ensure this runs only on the client before adding the listener
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', onKeyDown);
      
      // Return cleanup function that also checks for window existence
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('keydown', onKeyDown);
        }
      };
    }
    
    // If not on client, return undefined or an empty function for cleanup
    return undefined;
  }, [alwaysVisible]); // Dependency array includes alwaysVisible

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
          {/* Wrap Lottie in Suspense if needed, though dynamic import might suffice */}
          {/* <Suspense fallback={<div className="h-6 w-6 bg-gray-200 rounded" />}> */}
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
          {/* </Suspense> */}
        </div>
      ),
      label: 'Home',
      path: ''
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {/* <Suspense fallback={<div className="h-6 w-6 bg-gray-200 rounded" />}> */}
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
          {/* </Suspense> */}
        </div>
      ),
      label: 'Work',
      path: 'work'
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {/* <Suspense fallback={<div className="h-6 w-6 bg-gray-200 rounded" />}> */}
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
          {/* </Suspense> */}
        </div>
      ),
      label: 'Blog',
      path: 'blog'
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {/* <Suspense fallback={<div className="h-6 w-6 bg-gray-200 rounded" />}> */}
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
          {/* </Suspense> */}
        </div>
      ),
      label: 'Experiments',
      path: 'experiments'
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {/* <Suspense fallback={<div className="h-6 w-6 bg-gray-200 rounded" />}> */}
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
          {/* </Suspense> */}
        </div>
      ),
      label: 'About',
      path: 'about'
    },
    {
      icon: (lottieRef, animation) => (
        <div className="h-6 w-6">
          {/* <Suspense fallback={<div className="h-6 w-6 bg-gray-200 rounded" />}> */}
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
          {/* </Suspense> */}
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
          className="relative z-[2] flex w-[720px] items-center justify-center gap-2 bg-white rounded-xl py-2"
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

  // Render null if this instance shouldn't be active
  if (!shouldRender) {
    return null;
  }

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