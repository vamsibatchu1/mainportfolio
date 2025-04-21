"use client";

import React from 'react';
// import { motion } from 'framer-motion'; // Keep commented out for now
// import { IBM_Plex_Mono } from 'next/font/google'; // Commented out font
// import { doto } from '../../fonts'; // Commented out font

// const ibmPlexMono = IBM_Plex_Mono({
//   weight: ['400', '500', '600'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const cards = [
  { color: 'bg-[#7FB3D5]', title: 'Nike X\nCorteiz', textColor: 'text-[#FFE59D]', image: '/images/card1.png' },
  { color: 'bg-[#E09DBC]', title: 'Nike X\nCorteiz', textColor: 'text-[#4B0E0B]', image: '/images/card2.png' },
  { color: 'bg-[#A9CCE3]', title: 'Nike X\nCorteiz', textColor: 'text-[#3E5972]', image: '/images/card3.png' },
  { color: 'bg-[#2C3E50]', title: 'Nike X\nCorteiz', textColor: 'text-white', image: '/images/card4.png' },
  { color: 'bg-[#935116]', title: 'Nike X\nCorteiz', textColor: 'text-[#D6A779]', image: '/images/card5.png' }
];

export default function AboutContent() {
  // Removed hasMounted state and useEffect

  // Render content directly
  return (
    <div className="w-full max-w-[1100px] mx-auto pt-52">
      {/* Floating Cards */}
      <div className="relative h-[200px] overflow-visible">
        <div className="absolute w-[1400px] left-1/2 -translate-x-1/2 flex justify-center items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-[180px] h-[240px] ${card.color} rounded-[12px] p-4 flex flex-col justify-between shadow-lg`}
              style={{
                transform: `translateX(${index === 0 ? '-400px' : index === 1 ? '-200px' : index === 2 ? '0px' : index === 3 ? '200px' : '400px'}) 
                            rotate(${index === 0 ? -15.64 : index === 1 ? -5.54 : index === 2 ? -1.1 : index === 3 ? +14.72 : +3.97}deg) 
                            translateY(${index === 0 ? '20%' : index === 1 ? '10%' : index === 2 ? '0%' : index === 3 ? '10%' : '20%'})`,
                transformOrigin: 'center center',
                zIndex: index === 2 ? 5 : 
                       index === 1 || index === 3 ? 4 : 3
              }}
            >
              <div className={`font-bold text-[35.99px] tracking-[0.05em] leading-[1] ${card.textColor || 'text-black'} whitespace-pre-line`}>
                {card.title}
              </div>
              <div className="w-full h-[120px] rounded-lg overflow-hidden mt-auto">
                <img 
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Content Container */}
      <div className="w-full bg-[#fff] rounded-[12px] mt-[-80px] px-24 pt-32 pb-24">
        {/* Main Content */}
        <div
          className="w-full"
        >
          <div className="flex flex-col gap-12">
            {/* Header */}
            <h1 className="text-[44px] tracking-[2px] text-left">
              VAMSI BATCHU
            </h1>

            {/* Content */}
            <div className="grid grid-cols-2 gap-12">
              <div>
                <p className="text-[14px] leading-[1.8] text-[#333]">
                  I guide teams while staying deeply involved in the process—designing intuitive interactions, building scalable systems, and refining user flows. By blending strategic vision with attention to detail, I ensure every product reflects thoughtfulness, usability, and high-quality execution.
                </p>
              </div>

              <div>
                <p className="text-[14px] leading-[1.8] text-[#333]">
                  I specialize in turning ambiguity into clarity, transforming big ideas into impactful solutions. Whether crafting zero-to-one products or refining existing systems, I bring vision, strategy, and alignment to help teams navigate complexity.
                  <br /><br />
                  My focus is on building meaningful, scalable experiences that solve real problems while empowering teams to deliver their best work. With a strong ability to connect design, product, and engineering, I foster collaboration and alignment across disciplines. My technical fluency and strategic approach ensure every decision is rooted in both creative and practical feasibility. By combining innovation, quality, and user value, I aim to leave a lasting impact on every product I help bring to life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Content */}
        <div className="mt-24 grid grid-cols-3 gap-12">
          {/* Column 1 */}
          <div
            className="flex flex-col gap-6"
          >
            <div className="w-8 h-8">
              <img 
                src="/images/about-circle.png"
                alt="Circle Icon"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-[24px] tracking-[0.02em] leading-tight">
              MY THOUGHTS ON DESIGN
            </h2>
            <p className="text-[14px] leading-[1.8] text-[#333]">
              I guide teams while staying deeply involved in the process—designing intuitive interactions, building scalable systems, and refining user flows. By blending strategic vision with attention to detail, I ensure every product reflects thoughtfulness, usability, and high-quality execution.
            </p>
          </div>

          {/* Column 2 */}
          <div
            className="flex flex-col gap-6"
          >
            <div className="w-8 h-8">
              <img 
                src="/images/about-rhombus.png"
                alt="Diamond Icon"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-[24px] tracking-[0.02em] leading-tight">
              WHAT DO I SPECIALIZE IN?
            </h2>
            <p className="text-[14px] leading-[1.8] text-[#333]">
              I guide teams while staying deeply involved in the process—designing intuitive interactions, building scalable systems, and refining user flows. By blending strategic vision with attention to detail, I ensure every product reflects thoughtfulness, usability, and high-quality execution.
            </p>
          </div>

          {/* Column 3 */}
          <div
            className="flex flex-col gap-6"
          >
            <div className="w-8 h-8">
              <img 
                src="/images/about-square.png"
                alt="Square Icon"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-[24px] tracking-[0.02em] leading-tight">
              WHAT DO I CURRENTLY DO?
            </h2>
            <p className="text-[14px] leading-[1.8] text-[#333]">
              I guide teams while staying deeply involved in the process—designing intuitive interactions, building scalable systems, and refining user flows. By blending strategic vision with attention to detail, I ensure every product reflects thoughtfulness, usability, and high-quality execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 