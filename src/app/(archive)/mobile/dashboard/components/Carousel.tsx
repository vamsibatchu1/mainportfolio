'use client';

import React, { useState, useRef, useEffect } from 'react';

interface CarouselSlide {
  mainText: string;
  secondaryText: string;
}

const carouselData: CarouselSlide[] = [
  {
    mainText: "After all, a designer just doesn't just solve problems;",
    secondaryText: "they create possibilities."
  },
  {
    mainText: "Great design is not just what it looks like and feels like;",
    secondaryText: "it's how it works."
  },
  {
    mainText: "Design is thinking made visual,",
    secondaryText: "turning complexity into clarity."
  },
  {
    mainText: "Every pixel has a purpose,",
    secondaryText: "every interaction tells a story."
  }
];

export const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < carouselData.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }

    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const nextSlide = () => {
    if (isTransitioning || currentSlide >= carouselData.length - 1) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning || currentSlide <= 0) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full px-6">
      <div className="flex flex-col gap-6 items-start justify-start relative w-full">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="bg-stone-100 relative rounded-[20px] w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col items-center relative w-full">
            <div className="flex flex-col gap-4 items-center justify-start p-[20px] relative w-full">
              {/* Content Container */}
              <div className="flex flex-row gap-2 items-center justify-start relative w-full">
                <div className="flex-1 flex flex-col gap-1 items-start justify-center min-h-px min-w-px relative">
                  {/* Main Text */}
                  <div 
                    className={`font-jakarta font-semibold text-[18px] leading-[24px] text-[#111111] text-left w-full transition-opacity duration-300 ${
                      isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <p className="block leading-[24px]">
                      {carouselData[currentSlide].mainText}
                    </p>
                  </div>
                  
                  {/* Secondary Text */}
                  <div className="flex flex-row gap-1 items-start justify-start relative w-full">
                    <div 
                      className={`font-jakarta font-medium text-[14px] leading-[20px] text-[#545454] text-left transition-opacity duration-300 ${
                        isTransitioning ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      <p className="block leading-[20px] whitespace-pre">
                        {carouselData[currentSlide].secondaryText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pagination Dots - Exact Figma Match */}
              <div className="h-[29.658px] relative w-[64.632px]">
                <div className="flex items-center justify-center gap-[6px] h-full w-full">
                  {carouselData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-[6px] h-[6px] rounded-full transition-all duration-200 ${
                        currentSlide === index 
                          ? 'bg-[#000000]' 
                          : 'bg-[#CCCCCC]'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 