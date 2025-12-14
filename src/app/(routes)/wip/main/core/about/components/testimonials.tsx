'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ebGaramondFont, jakartaFont } from '@/app/fonts';

interface Testimonial {
  id: string;
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'marie',
    name: 'Marie, Senior Researcher',
    text: 'Visioning and creativity are where Vamsi truly shines. He has an incredible knack for thinking big-picture, setting bold, aspirational goals that align with Rocket Mortgage’s innovative spirit. This is evident in his advocation for user journeys, benchmark measurements, and design changes to include specific banker goals',
  },
  {
    id: 'james',
    name: 'James, Senior Director of Product',
    text: 'Vamsi brings exceptional design thinking and strategic vision to every project. His ability to translate complex requirements into elegant solutions is unmatched.',
  },
  {
    id: 'fred',
    name: 'Fred, Director of Engineering',
    text: 'Working with Vamsi has been transformative. His attention to detail and user-centered approach consistently delivers products that exceed expectations.',
  },
];

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial>(testimonials[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current || !leftColumnRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const imageWidth = 640;
      const gap = 40;
      const availableWidth = containerWidth - imageWidth - gap;

      // Get the natural width of the left column content
      leftColumnRef.current.style.transform = 'scale(1)';
      const naturalWidth = leftColumnRef.current.scrollWidth;
      
      if (naturalWidth > availableWidth && availableWidth > 0) {
        const calculatedScale = availableWidth / naturalWidth;
        setScale(Math.min(1, Math.max(0.5, calculatedScale))); // Clamp between 0.5 and 1
      } else {
        setScale(1);
      }
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-[1440px] mx-auto flex gap-[40px] items-start mt-16 mb-32 min-w-0">
      {/* Left Column: Header + Buttons */}
      <div 
        ref={leftColumnRef}
        className="flex flex-col gap-[40px] flex-1 min-w-0 items-start origin-top-left"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {/* Header */}
        <div className="flex flex-col gap-[20px] items-start w-full min-w-0">
          <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[48px] text-black`}>
            Here&apos;s what people who worked with me are saying
          </p>
        </div>

        {/* Buttons Column */}
        <div className="flex flex-col gap-[40px] items-start justify-between w-full">
          {/* Button 1: Marie */}
          <div className="flex flex-col gap-[40px] items-center justify-center w-full">
            <button
              onClick={() => setSelectedTestimonial(testimonials[0])}
              className={`border border-black box-border flex gap-[16.976px] items-center justify-center p-[32px] rounded-br-[64px] rounded-tl-[64px] rounded-tr-[64px] transition-all ${
                selectedTestimonial.id === 'marie'
                  ? 'bg-black'
                  : 'bg-white opacity-70 hover:opacity-100'
              }`}
            >
              <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[51px] whitespace-nowrap ${
                selectedTestimonial.id === 'marie'
                  ? 'text-white'
                  : 'text-black'
              }`}>
                {testimonials[0].name}
              </p>
            </button>
          </div>

          {/* Button 2: James */}
          <div className="flex flex-col gap-[40px] items-start justify-center">
            <button
              onClick={() => setSelectedTestimonial(testimonials[1])}
              className={`border border-black box-border flex gap-[16.976px] items-center justify-end p-[32px] rounded-bl-[64px] rounded-tl-[64px] rounded-tr-[64px] transition-all ${
                selectedTestimonial.id === 'james'
                  ? 'bg-black'
                  : 'bg-white opacity-70 hover:opacity-100'
              }`}
            >
              <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[51px] whitespace-nowrap ${
                selectedTestimonial.id === 'james'
                  ? 'text-white'
                  : 'text-black'
              }`}>
                {testimonials[1].name}
              </p>
            </button>
          </div>

          {/* Button 3: Fred */}
          <div className="flex flex-col gap-[40px] items-start justify-center">
            <button
              onClick={() => setSelectedTestimonial(testimonials[2])}
              className={`border border-black box-border flex gap-[16.976px] items-center justify-center p-[32px] rounded-br-[64px] rounded-tl-[64px] rounded-tr-[64px] transition-all ${
                selectedTestimonial.id === 'fred'
                  ? 'bg-black'
                  : 'bg-white opacity-70 hover:opacity-100'
              }`}
            >
              <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[51px] whitespace-nowrap ${
                selectedTestimonial.id === 'fred'
                  ? 'text-white'
                  : 'text-black'
              }`}>
                {testimonials[2].name}
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Image with Text Overlay */}
      <div className="relative shrink-0 w-[640px] h-[640px]">
        {/* Background Image */}
        <Image
          src="/images/wip/about/testimonial_bg.png"
          alt="Testimonial background"
          fill
          className="object-cover"
          sizes="640px"
        />

        {/* Text Overlay */}
        <div
          className="absolute z-10"
          style={{
            left: '130px',
            top: '160px',
            width: '380px',
            height: '440px',
          }}
        >
          <p className={`${jakartaFont.className} font-normal text-[24px] leading-[150%] text-[#515151]`}>
            {selectedTestimonial.text}
          </p>
        </div>
      </div>
    </div>
  );
}

