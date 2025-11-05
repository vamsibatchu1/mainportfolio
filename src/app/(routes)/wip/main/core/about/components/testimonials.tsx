'use client';

import React, { useState } from 'react';
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
    text: 'Just like a crossword puzzle, design is about finding the connections between the words (features) to create a meaningful whole. like a crossword puzzle, design is about finding the connections between the words (features) to create a meaningful whole.',
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

  return (
    <div className="w-full max-w-[1440px] mx-auto flex gap-[40px] items-start">
      {/* Left Column: Header + Buttons */}
      <div className="flex flex-col gap-[40px] flex-1 items-start">
        {/* Header */}
        <div className="flex flex-col gap-[20px] items-start w-full">
          <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[40px] text-black`}>
            Here&apos;s what people who worked with me are saying
          </p>
        </div>

        {/* Buttons Column */}
        <div className="flex flex-col gap-[40px] items-start justify-between w-full">
          {/* Button 1: Marie */}
          <div className="flex flex-col gap-[40px] items-center justify-center w-full">
            <button
              onClick={() => setSelectedTestimonial(testimonials[0])}
              className={`bg-white border border-black box-border flex gap-[16.976px] items-center justify-center p-[32px] rounded-br-[64px] rounded-tl-[64px] rounded-tr-[64px] transition-all ${
                selectedTestimonial.id === 'marie'
                  ? 'opacity-100'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[51px] text-black whitespace-nowrap`}>
                {testimonials[0].name}
              </p>
            </button>
          </div>

          {/* Button 2: James */}
          <div className="flex flex-col gap-[40px] items-start justify-center">
            <button
              onClick={() => setSelectedTestimonial(testimonials[1])}
              className={`bg-white border border-black box-border flex gap-[16.976px] items-center justify-end p-[32px] rounded-bl-[64px] rounded-tl-[64px] rounded-tr-[64px] transition-all ${
                selectedTestimonial.id === 'james'
                  ? 'opacity-100'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[51px] text-black whitespace-nowrap`}>
                {testimonials[1].name}
              </p>
            </button>
          </div>

          {/* Button 3: Fred */}
          <div className="flex flex-col gap-[40px] items-start justify-center">
            <button
              onClick={() => setSelectedTestimonial(testimonials[2])}
              className={`bg-white border border-black box-border flex gap-[16.976px] items-center justify-center p-[32px] rounded-br-[64px] rounded-tl-[64px] rounded-tr-[64px] transition-all ${
                selectedTestimonial.id === 'fred'
                  ? 'opacity-100'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <p className={`${ebGaramondFont.className} font-normal leading-[1.1] text-[51px] text-black whitespace-nowrap`}>
                {testimonials[2].name}
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Image with Text Overlay */}
      <div className="relative shrink-0 w-[640px] h-[640px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/wip/about/testimonial_bg.png"
            alt="Testimonial background"
            width={640}
            height={640}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Overlay */}
        <div
          className="absolute"
          style={{
            left: '130px',
            top: '160px',
            width: '380px',
            height: '440px',
          }}
        >
          <p className={`${jakartaFont.className} font-normal leading-[1.23] text-[29px] text-[#515151]`}>
            {selectedTestimonial.text}
          </p>
        </div>
      </div>
    </div>
  );
}

