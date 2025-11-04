'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ebGaramondFont } from '@/app/fonts';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  image: string;
  text: string;
}

export default function HomeHighlightCarouselCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Six combinations of images and text
  const carouselItems: CarouselItem[] = [
    {
      image: "/images/wip/home/thumb_carousel1.webp",
      text: "Led the design and strategy for emerging AI initiatives, including the development of Rocket Logic Synopsis, a native AI-powered mortgage communication intelligence platform"
    },
    {
      image: "/images/wip/home/thumb_carousel2.webp",
      text: "This project transformed compliance oversight from a fragmented, manual process into an intelligent system—reducing investigation time by 85% and impacting 3,244+ team members"
    },
    {
      image: "/images/wip/home/thumb_carousel3.webp",
      text: "Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with bankers, coming up with new design patterns and flows"
    },
    {
      image: "/images/wip/home/thumb_carousel4.webp",
      text: "Creating intuitive and user-centered product experiences that drive engagement and business value across enterprise platforms"
    },
    {
      image: "/images/wip/home/thumb_carousel5.webp",
      text: "Designing beautiful interfaces and seamless user experiences that delight and convert users while maintaining accessibility standards"
    },
    {
      image: "/images/wip/home/thumb_carousel6.webp",
      text: "Building cohesive brand identities and visual systems that communicate values and connect with audiences through thoughtful design"
    }
  ];

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const currentItem = carouselItems[activeIndex];

  return (
    <div className="w-full max-w-[1440px] mx-auto flex gap-[32px] items-start">
      {/* Image Section */}
      <div className="flex-1 bg-[#f2f2f2] h-[480px] rounded-[14px] overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            <Image
              src={currentItem.image}
              alt={`Carousel item ${activeIndex + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Component */}
      <div className="h-[480px] w-[80px] flex flex-col gap-[16px] items-left justify-start">
        {carouselItems.map((_, index) => {
          const isActive = index === activeIndex;
          const width = isActive ? 48 : 20;
          const color = isActive ? '#000000' : '#BFBFBF'; // Black for active, green for inactive
          
          return (
            <motion.div
              key={index}
              className="bg-current rounded-full transition-all duration-300"
              style={{
                width: `${width}px`,
                height: '4px',
                backgroundColor: color
              }}
              initial={false}
              animate={{
                width: `${width}px`,
                backgroundColor: color
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </div>

      {/* Text Section */}
      <div className="w-[400px] flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[24px] text-black`}
          >
            {currentItem.text}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

