'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import useScreenSize from "../../../../../hooks/use-screen-size";
import {loraFont } from '@/app/fonts';
import DragElements from "../components/dragelements";

const urls = [
  "https://images.unsplash.com/photo-1683746531526-3bca2bc901b8?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1631561729243-9b3291efceae?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1635434002329-8ab192fe01e1?q=80&w=2828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719586799413-3f42bb2a132d?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720561467986-ca3d408ca30b?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1724403124996-64115f38cd3f?q=80&w=3082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Text reveal animation component
const AnimatedText = ({ text, className }: { text: string; className: string }) => {
  const characters = text.split('');
  
  return (
    <p className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8 + (index * 0.02), // Wait for content card animation + character stagger
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

const DragElementsDemo: React.FC = () => {
  const screenSize = useScreenSize();
  return (
    <div className="w-full h-full relative bg-gray-100 overflow-hidden">
      <DragElements dragMomentum={false} className="p-2 md:p-4 flex items-center justify-center">
        {urls.map((url, index) => {
          const rotation = index === 0 ? randomInt(-40, 76) : randomInt(-80, 45);
          const width = screenSize.lessThan(`md`)
            ? randomInt(70, 90)
            : randomInt(90, 110);
          const height = screenSize.lessThan(`md`)
            ? randomInt(80, 110)
            : randomInt(110, 140);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 3.6 + (index * 0.3), // Wait for content card + text + gray box + stagger
                duration: 3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className={`flex items-start justify-center bg-white shadow-2xl p-1`}
              style={{
                transform: `rotate(${rotation}deg)`,
                width: `${width}px`,
                height: `${height}px`,
              }}
            >
              <div
                className={`relative overflow-hidden`}
                style={{
                  width: `${width - (screenSize.lessThan('md') ? 2 : 4)}px`,
                  height: `${height - (screenSize.lessThan('md') ? 8 : 16)}px`,
                }}
              >
                <Image
                  src={url}
                  fill
                  alt={`Analog photo ${index + 1}`}
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>
          );
        })}
      </DragElements>
    </div>
  );
};

const contentSpring = { type: "spring", stiffness: 150, damping: 25 };

const AboutContent = () => {
  return (
    <motion.div
      key="about-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="flex items-start gap-2 w-full h-[320px]"
    >
      <div id="about-content-1" className="flex flex-col items-start justify-start gap-4 w-[30%] h-full">
        <div id="about-text" className="flex items-start justify-center gap-1.5 text-white w-full h-full overflow-hidden">
          <AnimatedText 
            text="Based in Atlanta, I have been designing for 11+ years in the digital design industry."
            className={`${loraFont.className} text-[16px] leading-[18px]`}
          />
        </div>
      </div>

      <motion.div 
        id="about-dragelements" 
        className="flex flex-col bg-gray-100 rounded-sm items-center justify-center gap-1.5 w-[70%] h-full overflow-hidden"
        initial={{ opacity: 0, y: 120, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 2.6, // Wait for content card (0.8s) + text animation (1.6s) + buffer (0.2s)
          type: "spring",
          stiffness: 80,
          damping: 12,
          mass: 1.2
        }}
      >
        <DragElementsDemo />
      </motion.div>
    </motion.div>
  );
};

export default AboutContent; 