"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { neueMontreal, doto } from '../../app/fonts';
import { IBM_Plex_Mono } from 'next/font/google';
import { Link, X } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TextScramble } from "@/components/ui/text-scramble";

// Initialize IBM Plex Mono
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

type MenuItem = {
  icon: React.ReactNode
  label: string
}

type SubMenuItem = {
  image?: string
  icon?: React.ReactNode
  title: string
  description?: string
  tag?: string
  date?: string
}

type MenuItemContent = {
  items: SubMenuItem[]
}

const menuItems: MenuItem[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    label: 'Work',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    label: 'Blog',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: 'About',
  },
]

const menuItemsContent: MenuItemContent[] = [
  {
    items: [
      {
        image: '/work/project1.jpg',
        title: 'Project One',
        description: 'Design System',
        tag: 'UX Design',
      },
      {
        image: '/work/project2.jpg',
        title: 'Project Two',
        description: 'Mobile App',
        tag: 'Product',
      },
    ],
  },
  {
    items: [
      {
        title: 'Design Systems',
        tag: 'Process',
        date: 'Jun 2024',
        icon: <Link size={20} />,
      },
      {
        title: 'Product Strategy',
        tag: 'Leadership',
        date: 'May 2024',
        icon: <Link size={20} />,
      },
    ],
  },
  {
    items: [
      {
        title: 'Experience',
        date: '10+ years',
        icon: <Link size={20} />,
      },
      {
        title: 'Leadership',
        date: '5+ years',
        icon: <Link size={20} />,
      },
    ],
  },
]

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
            hands-on product design leader with 10+ years of experience in designing and leading teams developing highly impactful products at scale.
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
                        src="/images/enterprise-tools.png"
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
      {/* Header */}
      <div className="flex items-center gap-2">
        <h2 className={`${doto.className} text-lg font-semibold`}>PROFILE</h2>
        <div className="flex items-center gap-4">
          <svg className="w-4 h-4 text-white-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18v-6a9 9 0 0118 0v6" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
            </svg>
          </div>
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
      {/* Players Count */}
      <div className="text-gray-500">0 players</div>

      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-white rounded-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-[70%] bg-green-400 rounded-full"></div>
      </div>

      {/* Level Info */}
      <div className="flex justify-between items-center">
        <div className="text-gray-600">21 / 30XP</div>
        <div className="font-semibold">lv3</div>
      </div>
      </div>


      {/* User Info */}
      <div className="flex items-center gap-3 mt-2">
        <div className="relative">
          <img 
            src="/avatar.jpg" 
            alt="User" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">mamkindesigner</h3>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>0</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>0</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>0</span>
            </div>
          </div>
        </div>
        <button className="w-8 h-8 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <h2 className={`${doto.className} text-lg font-semibold`}>LIVE ACTIVITY</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Last updated 2m ago</span>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Activity Sections */}
      <div className="grid grid-cols-2 gap-4">
        {/* GitHub Activity */}
        <div className="p-3 bg-[#F5F5F4] rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span className="font-medium">GitHub</span>
            <span className="text-sm text-gray-500 ml-auto">12 contributions this week</span>
          </div>
          <div className="space-y-2">
            {[
              { type: 'commit', repo: 'portfolio-2024', time: '2h ago' },
              { type: 'pr', repo: 'design-system', time: '1d ago' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </span>
                <span className="font-medium">{activity.repo}</span>
                <span className="text-gray-500">{activity.type}</span>
                <span className="text-gray-400 ml-auto">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="p-3 bg-[#F5F5F4] rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="font-medium">Latest Posts</span>
          </div>
          <div className="space-y-2">
            {[
              { title: 'Building Design Systems', date: 'Mar 15, 2024' },
              { title: 'Product Strategy 101', date: 'Mar 10, 2024' },
            ].map((post, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <span className="font-medium truncate">{post.title}</span>
                <span className="text-gray-400 ml-auto whitespace-nowrap">{post.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking Events */}
        <div className="p-3 bg-[#F5F5F4] rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">Upcoming Talks</span>
          </div>
          <div className="space-y-2">
            {[
              { event: 'Design Systems Conference', date: 'Apr 5, 2024' },
              { event: 'UX Leadership Summit', date: 'May 12, 2024' },
            ].map((talk, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <span className="font-medium truncate">{talk.event}</span>
                <span className="text-gray-400 ml-auto whitespace-nowrap">{talk.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Snippets */}
        <div className="p-3 bg-[#F5F5F4] rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="font-medium">Recent Snippets</span>
          </div>
          <div className="space-y-2">
            {[
              { name: 'AnimatedCard.tsx', lang: 'TypeScript' },
              { name: 'useInterval.ts', lang: 'TypeScript' },
            ].map((snippet, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <span className="font-medium truncate">{snippet.name}</span>
                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full ml-auto">{snippet.lang}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SunsetCard() {
  const sunsetData = {
    time: "6:42",
    date: "March 15, 2024",
    timeToDestination: "1h 23m",
    distance: "12.4 mi",
    conditions: "Clear",
    temperature: 72,
    cloudHeight: "23,000 ft",
    humidity: 46,
    visibility: 85,
    colors: {
      dots: ["bg-orange-200", "bg-orange-300", "bg-orange-400"],
      gradient: "bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300"
    }
  };

  return (
    <motion.div
      className="w-[400px] rounded-3xl overflow-hidden border border-[#E7E5E4]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* Gradient Background */}
      <div className={`h-52 relative ${sunsetData.colors.gradient}`}>
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {sunsetData.colors.dots.map((color, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${color}`} />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#fff] p-6 space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <div className={`${doto.className} text-xs uppercase tracking-wider text-gray-500`}>Today&apos;s Sunset</div>
          <div className="flex items-center justify-between">
            <div className="text-5xl font-mono">
              {sunsetData.time}
              <span className="text-lg">pm</span>
            </div>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div className="text-xs text-gray-500">{sunsetData.date}</div>
        </div>

        {/* Time and Distance */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className={`${doto.className} text-xs uppercase tracking-wider text-gray-500 mb-1`}>Time to Destination</div>
            <div className="text-2xl font-mono">{sunsetData.timeToDestination}</div>
          </div>
          <div>
            <div className={`${doto.className} text-xs uppercase tracking-wider text-gray-500 mb-1`}>Distance Left</div>
            <div className="text-2xl font-mono">{sunsetData.distance}</div>
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <div className={`${doto.className} text-xs uppercase tracking-wider text-gray-500 mb-1`}>Sunset Conditions</div>
              <div className="flex items-center gap-3">
                <div>{sunsetData.conditions}</div>
                <div className="w-1 h-6 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className="w-full bg-orange-400"
                    initial={{ height: 0 }}
                    animate={{ height: "60%" }}
                    transition={{ delay: 0.5 }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className={`${doto.className} text-xs uppercase tracking-wider text-gray-500 mb-1`}>Cloud Height</div>
              <div className="flex items-center gap-3">
                <div>{sunsetData.cloudHeight}</div>
                <div className="w-1 h-6 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className="w-full bg-orange-400"
                    initial={{ height: 0 }}
                    animate={{ height: "80%" }}
                    transition={{ delay: 0.6 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className={`${doto.className} text-xs uppercase tracking-wider text-gray-500 mb-1`}>Temperature</div>
              <div className="flex items-center gap-3">
                <div>{sunsetData.temperature}°</div>
                <div className="w-1 h-6 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className="w-full bg-orange-400"
                    initial={{ height: 0 }}
                    animate={{ height: "40%" }}
                    transition={{ delay: 0.7 }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className={`${doto.className} text-xs uppercase tracking-wider text-gray-500 mb-1`}>Humidity</div>
              <div className="flex items-center gap-3">
                <div>{sunsetData.humidity}%</div>
                <div className="w-1 h-6 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className="w-full bg-orange-400"
                    initial={{ height: 0 }}
                    animate={{ height: "46%" }}
                    transition={{ delay: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visibility Bar */}
        <div>
          <div className={`${doto.className} text-xs uppercase tracking-wider text-gray-500 mb-2`}>% Full Visibility</div>
          <div className="h-2 w-full bg-white rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${sunsetData.colors.gradient}`}
              initial={{ width: 0 }}
              animate={{ width: `${sunsetData.visibility}%` }}
              transition={{ delay: 1, duration: 1 }}
            />
          </div>
          <div className="mt-1 font-mono">{sunsetData.visibility}</div>
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

function ActionBar() {
  const [showInfo, setShowInfo] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setShowInfo(false));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowInfo(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget as Node)) {
      setActiveIndex(null);
    }
  };

  return (
    <div className="absolute inset-0 flex items-end justify-center pb-8">
      <motion.div
        className="absolute z-[2] flex w-[410px] items-center justify-center gap-2 bg-white rounded-2xl"
        style={{ borderRadius: 16 }}
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={index}
            className="flex items-center justify-center gap-2 px-4 py-3 transition-colors duration-300 hover:bg-black/5"
            style={{ borderRadius: 16 }}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {item.icon}
            <span className="font-medium text-[#2D1D2C]">{item.label}</span>
          </motion.button>
        ))}
      </motion.div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <motion.div
          ref={menuRef}
          className="overflow-hidden bg-white backdrop-blur-xl border border-[#D7D3D0]"
          style={{ borderRadius: 16 }}
          animate={{
            width: activeIndex !== null ? ['500px', '460px', '480px'][activeIndex] : '410px',
            height: activeIndex !== null ? ['290px', '284px', '226px'][activeIndex] : '48px',
            y: activeIndex !== null ? 17 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                className="absolute bottom-16 flex w-full flex-col items-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuItemsContent[activeIndex].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex w-[95%] cursor-pointer items-center gap-1.5 py-3 duration-300 hover:bg-black/5 hover:px-3"
                    onClick={() => setShowInfo(true)}
                    style={{ borderRadius: 16 }}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mr-1.5 h-16 w-16 shrink-0 object-cover"
                        style={{ borderRadius: 12 }}
                      />
                    )}
                    {item.icon && <div className="mr-1.5">{item.icon}</div>}
                    <div className="flex w-full flex-col items-start">
                      <p className="font-medium">{item.title}</p>
                      {item.description && (
                        <p className="opacity-80">{item.description}</p>
                      )}
                    </div>
                    {item.tag && (
                      <span
                        className="block shrink-0 border border-black/50 px-2 py-1 text-sm opacity-80"
                        style={{ borderRadius: 8 }}
                      >
                        {item.tag}
                      </span>
                    )}
                    {item.date && (
                      <span className="text-md block shrink-0 px-2 py-1 opacity-80">
                        {item.date}
                      </span>
                    )}
                  </div>
                ))}
                <div className="mt-4 h-[2px] w-[95%] bg-black/10"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {showInfo ? (
          <div className="absolute inset-0 z-10">
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
              <motion.div
                className="w-[400px] overflow-hidden bg-white/50 p-4 backdrop-blur-2xl"
                style={{ borderRadius: 18 }}
                ref={ref}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                <motion.button
                  layout
                  onClick={() => setShowInfo(false)}
                  className="absolute right-4 top-4 z-10"
                >
                  <X size={24} />
                </motion.button>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <p className="text-gray-600">
                    Additional information about the selected project would go here...
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function IdCard() {
  const cardData = {
    name: "Vamsi Batchu",
    title: "Product Design Leader",
    description: "Designing and leading teams developing highly impactful products at scale. Currently focused on enterprise tools and AI products.",
    imageUrl: "/images/profile.jpg"  // Add your profile image to public/images/
  };

  return (
    <motion.div 
      className="w-[320px] bg-[#ff69b4] rounded-2xl overflow-hidden font-mono"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.6 }}
    >
      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <h1 className="text-black text-5xl font-black tracking-tighter">AGORA</h1>

        {/* Photo */}
        <div className="aspect-[3/4] w-full bg-gray-900">
          <img
            src={cardData.imageUrl}
            alt={cardData.name}
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-1">
          <h2 className="text-black text-2xl font-bold tracking-tight">
            {cardData.name.toUpperCase()}
          </h2>
          <p className="text-black text-sm font-medium">
            {cardData.title.toUpperCase()}
          </p>
        </div>

        {/* Description */}
        <p className="text-black text-sm leading-tight">
          {cardData.description}
        </p>
      </div>

      {/* Bottom Strip */}
      <div className="bg-black text-white text-xs py-1 px-4 whitespace-nowrap overflow-hidden">
        <div className="animate-scroll-x flex gap-2">
          {Array(10)
            .fill("GRATUITO →")
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
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
      <div className="w-full max-w-[1200px] flex justify-center mt-4">
        <IdCard />
      </div>
      <div className="relative w-full h-[200px] mt-8">
        <ActionBar />
      </div>
    </div>
  );
} 