'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { jakartaFont, fiveFont } from '../../fonts';

export default function LeftColumn() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [animationFrame, setAnimationFrame] = useState(0);

  // Pixel configurations for each navigation item with multiple animation frames
  const pixelConfigs = {
    home: {
      default: [
        [1, 1, 1, 0],
        [0, 0, 0, 1]
      ],
      frames: [
        [
          [1, 0, 0, 0],
          [1, 1, 1, 1]
        ],
        [
          [0, 1, 0, 0],
          [1, 0, 1, 1]
        ],
        [
          [0, 0, 1, 0],
          [1, 1, 0, 1]
        ],
        [
          [0, 0, 0, 1],
          [1, 1, 1, 0]
        ]
      ]
    },
    work: {
      default: [
        [1, 0, 0, 1],
        [1, 1, 1, 1]
      ],
      frames: [
        [
          [0, 1, 1, 0],
          [1, 0, 0, 1]
        ],
        [
          [1, 0, 1, 0],
          [0, 1, 0, 1]
        ],
        [
          [0, 1, 0, 1],
          [1, 0, 1, 0]
        ],
        [
          [1, 1, 0, 0],
          [0, 0, 1, 1]
        ]
      ]
    },
    experiments: {
      default: [
        [1, 1, 1, 0],
        [1, 0, 1, 0]
      ],
      frames: [
        [
          [0, 1, 0, 0],
          [1, 1, 1, 1]
        ],
        [
          [1, 0, 1, 0],
          [0, 1, 0, 1]
        ],
        [
          [0, 0, 1, 1],
          [1, 1, 0, 0]
        ],
        [
          [1, 0, 0, 1],
          [0, 1, 1, 0]
        ]
      ]
    },
    writing: {
      default: [
        [1, 0, 0, 0],
        [0, 1, 0, 0]
      ],
      frames: [
        [
          [0, 0, 0, 1],
          [1, 1, 1, 0]
        ],
        [
          [0, 0, 1, 0],
          [1, 1, 0, 1]
        ],
        [
          [0, 1, 0, 0],
          [1, 0, 1, 1]
        ],
        [
          [1, 0, 0, 0],
          [0, 1, 1, 1]
        ]
      ]
    },
    about: {
      default: [
        [1, 0, 0, 1],
        [1, 1, 1, 1]
      ],
      frames: [
        [
          [0, 1, 1, 0],
          [0, 1, 1, 0]
        ],
        [
          [1, 0, 0, 1],
          [0, 1, 1, 0]
        ],
        [
          [0, 1, 1, 0],
          [1, 0, 0, 1]
        ],
        [
          [1, 1, 0, 0],
          [0, 0, 1, 1]
        ]
      ]
    }
  };

  const colors = ['#16B364', '#2973DE', '#FDB022', '#A48AFB', '#EF6820'];

  // Animation loop effect
  useEffect(() => {
    if (hoveredItem !== null) {
      const interval = setInterval(() => {
        setAnimationFrame((prev) => (prev + 1) % 4);
      }, 400); // Change frame every 400ms

      return () => clearInterval(interval);
    } else {
      setAnimationFrame(0);
    }
  }, [hoveredItem]);

  const renderPixelIcon = (config: number[][], color: string) => (
    <div className="flex flex-col">
      {config.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.map((pixel, colIndex) => (
            <div
              key={colIndex}
              className={`w-5 h-5 transition-all duration-200 ease-out ${
                pixel ? `bg-[${color}]` : ''
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col">
      {/* Navigation Section */}
      <div className="flex flex-col gap-8 scale-[0.7] origin-top-left">
        {/* Home */}
        <div 
          className="flex flex-row items-center gap-3 cursor-pointer"
          onMouseEnter={() => setHoveredItem(0)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {renderPixelIcon(
            hoveredItem === 0 ? pixelConfigs.home.frames[animationFrame] : pixelConfigs.home.default,
            colors[0]
          )}
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>Home</span>
        </div>
        
        {/* Work */}
        <div 
          className="flex flex-row items-center gap-3 cursor-pointer"
          onMouseEnter={() => setHoveredItem(1)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {renderPixelIcon(
            hoveredItem === 1 ? pixelConfigs.work.frames[animationFrame] : pixelConfigs.work.default,
            colors[1]
          )}
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>Work</span>
        </div>
        
        {/* Experiments */}
        <div 
          className="flex flex-row items-center gap-3 cursor-pointer"
          onMouseEnter={() => setHoveredItem(2)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {renderPixelIcon(
            hoveredItem === 2 ? pixelConfigs.experiments.frames[animationFrame] : pixelConfigs.experiments.default,
            colors[2]
          )}
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>Experiments</span>
        </div>
        
        {/* Writing */}
        <div 
          className="flex flex-row items-center gap-3 cursor-pointer"
          onMouseEnter={() => setHoveredItem(3)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {renderPixelIcon(
            hoveredItem === 3 ? pixelConfigs.writing.frames[animationFrame] : pixelConfigs.writing.default,
            colors[3]
          )}
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>Writing</span>
        </div>
        
        {/* About me */}
        <div 
          className="flex flex-row items-center gap-3 cursor-pointer"
          onMouseEnter={() => setHoveredItem(4)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {renderPixelIcon(
            hoveredItem === 4 ? pixelConfigs.about.frames[animationFrame] : pixelConfigs.about.default,
            colors[4]
          )}
          <span className={`${jakartaFont.className} text-white text-[48px] font-bold leading-[100%] tracking-[-0.04em]`}>About me</span>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="mt-auto">
        {/* First row - 3 columns with 20px gap */}
        <div className="flex flex-row gap-5 items-end mb-4">
                      {/* First column - Image */}
            <div className="w-[103px] h-[40px]">
              <Image
                src="/images/refresh-images/v-b.svg"
                alt="Profile Image"
                width={103}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          
          {/* Second column - White cursor block */}
          <div className="w-6 h-10 bg-white"></div>
          
          {/* Third column - Text block with Instrument Serif */}
          <div className="flex-1">
            <div className={`${fiveFont.className} text-white text-[32px] leading-[100%] tracking-[0%]`}>
              product designer &
              creative technologist
              crafting possibilities with
              craft & code.
            </div>
          </div>
        </div>
        
        {/* Second row - Text with Plus Jakarta Sans */}
        <div className={`${jakartaFont.className} text-gray-400 text-[20px] leading-[120%] tracking-[-0.04em]`}>
          <p>Design is not what we make, design is what we make</p>
          <p>possible. We are here to show what can be.</p>
        </div>
      </div>
    </div>
  );
} 