"use client";

import React, { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { IBM_Plex_Mono } from 'next/font/google';
import { doto } from '../fonts';
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

function ProfileCard() {
  return (
    <div className="w-[400px] shrink-0 bg-[#fff] rounded-xl p-4 flex flex-col justify-between border border-[#E7E5E4]">
      <div className="flex items-center gap-2">
        <h2 className={`${doto.className} text-lg font-semibold`}>PROFILE</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-gray-500">0 players</div>
        <div className="relative w-full h-2 bg-white rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[70%] bg-green-400 rounded-full"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-600">21 / 30XP</div>
          <div className="font-semibold">lv3</div>
        </div>
      </div>
    </div>
  );
}

function LiveActivityCard() {
  return (
    <motion.div 
      className="flex-1 bg-[#fff] rounded-xl p-4 flex flex-col gap-4 border border-[#E7E5E4]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <h2 className={`${doto.className} text-lg font-semibold`}>LIVE ACTIVITY</h2>
        </div>
      </div>
    </motion.div>
  );
}

function SunsetCard() {
  return (
    <motion.div
      className="w-[400px] rounded-3xl overflow-hidden border border-[#E7E5E4]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="h-52 relative bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300">
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {["bg-orange-200", "bg-orange-300", "bg-orange-400"].map((color, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${color}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SubstackCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <motion.div 
      ref={ref}
      className="w-full max-w-[1200px] bg-[#2D1D2C] rounded-[12px] p-12 grid grid-cols-4 gap-8 h-[300px] relative overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`${doto.className} text-white text-4xl self-start pt-4`}>
        MY RECENT<br />
        WRITINGS ON<br />
        DESIGN
      </div>
    </motion.div>
  );
}

export default function Current() {
  return (
    <div className="min-h-[100svh] px-24 pt-16 flex flex-col items-center gap-4 bg-[#F5F4F0]">
      <MainCard />
      <SubstackCard />
      <div className="w-full max-w-[1200px] flex gap-4">
        <ProfileCard />
        <div className="flex-1 flex gap-4">
          <LiveActivityCard />
          <SunsetCard />
        </div>
      </div>
    </div>
  );
} 