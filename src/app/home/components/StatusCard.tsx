"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IBM_Plex_Mono } from 'next/font/google';
import { doto } from '../../fonts';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function StatusCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="fixed top-4 right-0 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        className={`${ibmPlexMono.className} overflow-hidden bg-black text-white`}
        style={{ 
          borderRadius: '16px 0 0 16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
        animate={{
          width: isExpanded ? 400 : 60,
          height: isExpanded ? 500 : 60,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 40,
          mass: 1,
        }}
      >
        {/* Collapsed state is just a small tab */}
        {!isExpanded && (
          <div className="h-full w-[40px] flex items-center justify-center">     
            <div className="h-[30px] w-[2px] bg-white/70"></div>
          </div>
        )}

        {/* Expanded state shows the full content */}
        {isExpanded && (
          <div className="p-6 h-full flex flex-col">
            <div className="mt-4">
              <h2 className={`${doto.className} text-xl tracking-wider uppercase`}>
                VAMSI BATCHU&apos;S<br />
                SNAPSHOT
              </h2>
              
              <div className="mt-4 flex items-center">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <span className={`${doto.className} tracking-wider`}>CURRENTLY OFFLINE</span>
              </div>

              <div className="my-6 border-t border-white/20"></div>

              <div className="flex items-center">
                <img 
                  src="/images/icon-music.png" 
                  alt="Music" 
                  className="w-6 h-6 mr-3"
                />
                <span className={`${ibmPlexMono.className} tracking-wider`}>CURRENTLY LISTENING TO</span>
              </div>

              <div className={`${doto.className} mt-4 tracking-wider text-xl`}>
                Kendrick Lamar&apos;s<br />
                Peekaboo
              </div>

              <div className="mt-4 flex items-center space-x-1">
                {Array(15).fill(0).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-8 w-${i % 3 === 0 ? '1' : '2'} bg-white rounded-full`}
                  ></div>
                ))}
              </div>

              <div className="my-6 border-t border-white/20"></div>

              <div className="flex items-center">
                <img 
                  src="/images/icon-code.png" 
                  alt="Code" 
                  className="w-6 h-6 mr-3"
                />
                <span className={`${ibmPlexMono.className} tracking-wider`}>COMMITS TO FUN PROJECTS</span>
              </div>

              <div className={`${doto.className} mt-4 tracking-wider text-xl`}>
                Total Apps: 13
              </div>

              <div className="mt-4 grid grid-cols-16 gap-1">
                {Array(112).fill(0).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-4 w-4 rounded-sm ${
                      Math.random() > 0.6 ? 'bg-green-400' : 'bg-white/20'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
} 