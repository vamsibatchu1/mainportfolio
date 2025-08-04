'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fiveFont, jakartaFont } from '../../fonts';
import { CustomScrollbar } from '../components/custom-scrollbar';
import { motion } from 'framer-motion';

export default function WelcomeScreen() {
  const [currentSymbol, setCurrentSymbol] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const symbols = ['/images/refresh-images/symbol1.svg', 
    '/images/refresh-images/symbol2.svg', 
    '/images/refresh-images/symbol4.svg',
    '/images/refresh-images/symbol5.svg',
    '/images/refresh-images/symbol3.svg', 
    '/images/refresh-images/symbol6.svg',
    '/images/refresh-images/symbol7.svg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSymbol((prev) => (prev + 1) % symbols.length);
    }, 250);

    return () => clearInterval(interval);
  }, [symbols.length]);

  const handleScrollChange = (progress: number) => {
    setScrollProgress(progress);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };





  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center relative">
      <div className="w-[800px] flex flex-col gap-4">
        {/* First flex row */}
        <motion.div 
          className="flex flex-row gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* First column - 160px width */}
          <motion.div className="w-[160px]" variants={itemVariants}>
            <div className="w-[160px] flex items-end">
              <Image
                src={symbols[currentSymbol]}
                alt={`Symbol ${currentSymbol + 1}`}
                width={160}
                height={160}
                className="w-[160px] h-auto transition-opacity duration-300"
              />
            </div>
          </motion.div>
          
          {/* Second column - 400px width */}
          <motion.div className="w-[400px]" variants={itemVariants}>
            <div className="w-full h-full lex items-end">
              <Image
                src="/images/refresh-images/vamsibatchu.svg"
                alt="Vamsi Batchu"
                width={400}
                height={400}
                className="w-full h-full"
              />
            </div>
          </motion.div>
          
          {/* Third column - 200px width */}
          <motion.div className="w-[200px]" variants={itemVariants}>
            <div className="w-full h-full flex items-end">
              {/* Text block */}
              <p className={`${fiveFont.className} text-white text-[32px] leading-[92%] tracking-[-0.04em]`}>
                product designer &amp; creative technologist crafting possibilities with craft &amp; code.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        
        {/* Second flex row - Movie reel */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <motion.div 
          className="w-[800px] h-[200px] bg-[#232323] p-[12px] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
        >
          <div 
            className="flex flex-row gap-3 transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(${scrollProgress * -400}px)`
            }}
          >
            {/* First column - Text */}
            <div className="flex-shrink-0 w-[220px] h-[176px] flex items-start">
              <div className={`${jakartaFont.className} text-white font-bold text-[26px] leading-[130%] tracking-[-0.05em]`}>
                <p>Currently at rocket mortgage, leading 0 to 1 AI product experiences for enterprise users.</p>
              </div>
            </div>
            
            {/* Second column - Image */}
            <div className="flex-shrink-0 w-[295px] h-[176px] flex">
                <Image
                    src="/images/refresh-images/productshot1.svg"
                    alt="Rocket Mortgage"
                    width={340}
                    height={176}
                    className="w-full h-full"
                />
            </div>
            
            {/* Third column - Image */}
            <div className="flex-shrink-0 w-[295px] h-[176px] flex">
                <Image
                    src="/images/refresh-images/productshot2.svg"
                    alt="Rocket Mortgage"
                    width={340}
                    height={176}
                    className="w-full h-full"
                />
            </div>
            
            {/* Fourth column - Text */}
            <div className="flex-shrink-0 w-[180px] h-[176px] flex items-start">
              <div className={`${jakartaFont.className} text-white font-bold text-[26px] leading-[130%] tracking-[-0.05em]`}>
                <p>Creating next generation financial tools.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Third row - Horizontal scrollbar */}
        <motion.div 
          className="flex justify-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
        >
          <CustomScrollbar onScrollChange={handleScrollChange} />
        </motion.div>
      </div>
    </div>
  );
} 