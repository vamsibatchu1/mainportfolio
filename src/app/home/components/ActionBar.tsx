"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, X } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { IBM_Plex_Mono } from 'next/font/google';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

type MenuItem = {
  icon: (lottieRef: React.RefObject<LottieRefCurrentProps>, animation: AnimationData | null) => React.ReactNode;
  label: string;
  path: string;
}

type SubMenuItem = {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  tag?: string;
  date?: string;
}

type MenuItemContent = {
  items: SubMenuItem[];
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
    router.push(`/home/${path.toLowerCase()}`);
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

  const menuItemsContent: MenuItemContent[] = [
    {
      items: [
        {
          title: 'Welcome',
          description: 'Return to the home page',
          icon: <Link size={20} />,
        },
        {
          title: 'Portfolio',
          description: 'Explore my work and projects',
          icon: <Link size={20} />,
        },
      ],
    },
    {
      items: [
        {
          image: '/images/project_rocket.png',
          title: 'Home Buying Plan',
          description: 'Led design for a 0-1 nurturing product to help first time home buyers',
        },
        {
          image: '/images/project_truist.png',
          title: 'Billpay Redesign',
          description: 'Redesigned a billpay system for 6 million users of a major bank',
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
          title: 'Interactive Demos',
          description: 'Explore interactive design experiments',
          icon: <Link size={20} />,
        },
        {
          title: 'Prototypes',
          description: 'View design prototypes and concepts',
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
    {
      items: [
        {
          title: 'Ask me anything',
          description: 'Questions about design, leadership, or career',
          icon: <Link size={20} />,
        },
        {
          title: 'Schedule a chat',
          description: 'Book a 30-minute consultation',
          icon: <Link size={20} />,
        },
      ],
    },
  ];

  return (
    <motion.div 
      className="fixed bottom-8 left-0 right-0 flex items-end justify-center z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        delay: 2.0, // Start after MainCard animations (1.8s) + small gap
        duration: 0.6,
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
    >
      <motion.div
        className="absolute z-[2] flex w-[720px] items-center justify-center gap-2 bg-white rounded-xl"
        style={{ borderRadius: 16 }}
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={index}
            className="relative flex items-center justify-center gap-2 px-4 py-4 transition-colors duration-300 hover:bg-black/5"
            style={{ borderRadius: 16 }}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleNavigation(item.path)}
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
            width: activeIndex !== null ? ['500px', '460px', '480px', '460px'][activeIndex] : '440px',
            height: activeIndex !== null ? ['290px', '244px', '226px', '280px'][activeIndex] : '48px',
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
                className="absolute bottom-20 flex w-full flex-col items-center p-4"
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
                      <p className={`font-medium`}>{item.title}</p>
                      {item.description && (
                        <p className={`${ibmPlexMono.className} text-sm opacity-80`}>{item.description}</p>
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