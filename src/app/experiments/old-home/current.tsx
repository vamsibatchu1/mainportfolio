"use client";

import React, { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { IBM_Plex_Mono } from 'next/font/google';
import { doto } from '@/app/fonts';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TextScramble } from "@/components/ui/text-scramble";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

function ImageCard({ delay }: { delay: number }) {
  return (
    <motion.div 
      className="bg-[#f1f1f1] rounded-2xl w-full h-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut"
      }}
    />
  );
}

function MainCard() {
  return (
    <motion.div 
      className="bg-[#fff] text-white rounded-[12px] p-12 w-full max-w-[1200px] flex flex-col gap-8 border border-[#E7E5E4]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex gap-4 h-[400px]">
        <div className="flex-1 flex flex-col justify-between">
          <div className={`${doto.className} text-[92px] leading-[84%] tracking-[2px] text-[#000]`}>
            <TextScramble
              duration={1.2}
              speed={0.05}
              characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              className="block"
            >
              VAMSI
            </TextScramble>
            <TextScramble
              duration={1.0}
              speed={0.05}
              characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              className="block"
              trigger={true}
            >
              BATCHU.
            </TextScramble>
          </div>
          
          <motion.p
            className={`${ibmPlexMono.className} text-[18px] leading-[120%] tracking-[0px] text-[#767676]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            hands-on product design leader with 11+ years of experience in designing and leading teams developing highly impactful products at scale.
          </motion.p>
        </div>

        <div className="w-[300px] h-full">
          <ImageCard delay={0.9} />
        </div>

        <div className="w-[300px] h-full flex flex-col gap-4">
          <div className="flex-1">
            <ImageCard delay={1.2} />
          </div>
          <div className="flex-1">
            <ImageCard delay={1.4} />
          </div>
        </div>
      </div>

      <motion.div 
        className="flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className={`${ibmPlexMono.className} text-[#767676]`}>
          Currently leading a team of designers focused on{' '}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="font-medium underline decoration-dotted underline-offset-4">
                  enterprise tools
                </button>
              </TooltipTrigger>
              <TooltipContent 
                className="py-3 bg-white"
                sideOffset={5}
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  >
                    <div className="space-y-2">
                      <img
                        className="w-full rounded"
                        src="/images/tooltip_enterprise.png"
                        width={382}
                        height={216}
                        alt="Enterprise Tools"
                      />
                      <div className="space-y-1">
                        <p className="text-[13px] font-medium">Enterprise Design Systems</p>
                        <p className="text-xs text-muted-foreground">
                          Building scalable design systems and tools that power enterprise applications,
                          focusing on consistency, accessibility, and performance.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {' '}and{' '}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="font-medium underline decoration-dotted underline-offset-4">
                  AI products
                </button>
              </TooltipTrigger>
              <TooltipContent 
                className="py-3 bg-white"
                sideOffset={5}
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  >
                    <div className="space-y-2">
                      <img
                        className="w-full rounded"
                        src="/images/tooltip_ai.png"
                        width={382}
                        height={216}
                        alt="AI Products"
                      />
                      <div className="space-y-1">
                        <p className="text-[13px] font-medium">AI-Powered Design Tools</p>
                        <p className="text-xs text-muted-foreground">
                          Creating next-generation design tools that leverage artificial intelligence 
                          to enhance creativity, automate workflows, and improve design outcomes.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          .
        </span>
        <img 
          src="/images/Rocket.png" 
          alt="Rocket" 
          className="w-[130px] h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

function SubstackCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const articles = [
    {
      title: "From personal computing to personal software",
      link: "https://google.com",
      views: "2.4k views"
    },
    {
      title: "The next era of design is intent-driven",
      link: "https://google.com",
      views: "1.8k views"
    },
    {
      title: "Reimagining prototyping with AI: A new era for designers",
      link: "https://google.com",
      views: "3.2k views"
    }
  ];

  return (
    <motion.div 
      ref={ref}
      className="w-full max-w-[1200px] bg-[#2D1D2C] rounded-[12px] p-12 grid grid-cols-4 gap-8 h-[300px] relative overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header - First Column */}
      <div className={`${doto.className} text-white text-4xl self-start pt-4`}>
        MY RECENT<br />
        WRITINGS ON<br />
        DESIGN
      </div>

      {/* Notes Container */}
      <div className="col-span-3 flex gap-8 absolute -bottom-20 right-12">
        {articles.map((article, index) => (
          <motion.a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative group transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileHover={{ 
              y: -40,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1 }
            }}
          >
            <motion.div 
              className="relative w-full"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 30px -10px rgba(0,0,0,0.2)"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <img 
                src="/images/note.svg" 
                alt="Note background" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 p-8 flex flex-col">
                <div className={`${ibmPlexMono.className} space-y-1 pt-4 text-[#2D1D2C]`}>
                  <motion.div 
                    className="text-sm leading-tight"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {article.title}
                  </motion.div>
                  
                  {/* View count - Smoother transitions */}
                  <div 
                    className="text-sm text-[#2D1D2C] flex items-center gap-2 pt-2 opacity-0 transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
                  >
                    <svg 
                      className="w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="font-medium">{article.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default function Current() {
  return (
    <div className="min-h-[100svh] px-24 pt-16 flex flex-col items-center gap-4 bg-[#F5F4F0]">
      <MainCard />
      <SubstackCard />
    </div>
  );
} 