'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, ebGaramondFont, interFont } from '@/app/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Home, PenTool, FlaskConical, Briefcase } from 'lucide-react';

const articles = [
  {
    title: 'The AI design compass',
    subtitle: 'A designer\'s guide to shaping the AI revolution',
    summary: 'Exploring the AI design rollercoaster, understanding AI capabilities and limitations, designing for data scalability, prototyping with AI, developing an AI design sixth sense, and collaborating effectively with engineering teams. This article provides actionable strategies for designers navigating the rapidly evolving landscape of AI product design.',
    url: 'https://vamsibatchu.substack.com/p/the-ai-design-compass'
  },
  {
    title: 'Reimagining prototyping with AI: A new era for designers',
    subtitle: 'How generative AI tools are bringing creativity, speed, and efficiency to design validation',
    summary: 'Examining how AI tools like Claude Artifacts and Vercel v0 are transforming the prototyping process. The article discusses the challenges of traditional prototyping tools, demonstrates real-world examples of AI-powered prototyping, and explains how this enhances the design workflow by enabling rapid interaction validation, better stakeholder communication, and experimentation.',
    url: 'https://vamsibatchu.substack.com/p/reimagining-prototyping-with-ai-a'
  },
  {
    title: 'The next era of design is Intent-driven',
    subtitle: 'How adaptive UIs are transforming user-centered design',
    summary: 'Tracing the evolution from Google\'s "ten blue links" to today\'s adaptive, contextual interfaces. The article explores how search interfaces have become the blueprint for modern software design, examining intent-first interaction, contextual intelligence, unified experience spaces, and progressive intelligence. Features case studies from Amplitude, Arc Search, Gong, and AI-powered development tools.',
    url: 'https://vamsibatchu.substack.com/p/the-next-era-of-design-is-intent'
  },
  {
    title: 'From personal computing to personal software',
    subtitle: 'When everyone becomes a creator',
    summary: 'Exploring how AI-powered development tools are enabling designers and non-coders to build personal software solutions. The article discusses the personal software renaissance, showcases examples of creators building tools for themselves, examines the evolution of design practice, and explores the broader implications including tool evolution, learning & growth, community aspects, business implications, and cultural impact.',
    url: 'https://vamsibatchu.substack.com/p/from-personal-computing-to-personal'
  },
  {
    title: 'Unpacking the UX approaches of the deep research models',
    subtitle: 'A designer\'s interaction analysis of OpenAI & Gemini',
    summary: 'A detailed, screen-by-screen analysis comparing ChatGPT and Gemini\'s deep research features. The article examines their different UX philosophies—OpenAI as a conversational collaborator versus Gemini as a transparent workflow engine—covering model selection, research prompt entry, process layout, research visibility, and final report presentation. Explores how each platform\'s interface choices reflect different mental models about human-AI collaboration.',
    url: 'https://vamsibatchu.substack.com/p/unpacking-the-ux-approaches-of-the'
  },
  {
    title: 'How prompt to UI tools are reshaping product development',
    subtitle: 'Embracing new roles, rapid iteration, and team empowerment as a new age product designer',
    summary: 'Analyzing how AI tools like Vercel v0 and Figma Make are breaking down communication barriers and democratizing creation. The article addresses the communication chaos in product development, explores the shift from scarcity to abundance, addresses designer fears, and presents a Human-in-the-Loop framework for designers evolving from makers to multipliers. Includes actionable strategies and a designer evolution checklist.',
    url: 'https://vamsibatchu.substack.com/p/how-prompt-to-ui-tools-are-reshaping'
  },
  {
    title: 'Design in the medium of code',
    subtitle: 'Why technical literacy goes a long way for designers in this new era of building products',
    summary: 'Arguing that designers don\'t need to become engineers, but basic code literacy is becoming essential. The article breaks down three levels of technical knowledge: the basics (HTML/CSS, responsive design, component thinking), working with frameworks (libraries, APIs, interaction states), and thinking like an architect (breaking problems into pieces, understanding data flow, performance thinking). Features insights from Intercom\'s design team and Emily Strobl.',
    url: 'https://vamsibatchu.substack.com/p/design-in-the-medium-of-code'
  }
];

export default function WritingPage() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: '/home', label: 'Home', icon: Home },
    { href: '/writing', label: 'Writing', icon: PenTool },
    { href: '/experiments', label: 'Experiments', icon: FlaskConical },
    { href: '/work', label: 'Work', icon: Briefcase },
  ];

  const currentNavItem = navItems.find(item => item.href === pathname) || navItems[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileNavOpen(false);
      }
    };

    if (isMobileNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileNavOpen]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto">
      {/* Navigation */}
      <nav className={`${jakartaFont.variable} font-jakarta w-full max-w-[1200px] mx-auto px-6 md:px-4 pt-6 md:pt-8 pb-4 md:pb-6`}>
        {/* Mobile Dropdown Navigation */}
        <div className="md:hidden relative" ref={dropdownRef}>
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="flex items-center gap-2 text-black text-[16px] border-b-2 pb-1 border-dotted border-black"
          >
            {(() => {
              const Icon = currentNavItem.icon;
              return <Icon className="w-4 h-4 text-gray-500" />;
            })()}
            {currentNavItem.label}
            <ChevronDown className={`w-4 h-4 transition-transform ${isMobileNavOpen ? 'rotate-180' : ''}`} />
          </button>
          {isMobileNavOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-black shadow-lg z-50 min-w-[120px]">
              {navItems.filter(item => item.href !== pathname).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileNavOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-[16px] text-black hover:bg-gray-50 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gray-500" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        
        {/* Desktop Horizontal Navigation */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === item.href ? 'border-dotted border-black' : 'border-transparent'}`}
              >
                <Icon className="w-4 h-4 text-gray-500" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="w-full min-h-screen bg-white flex flex-col gap-[40px] md:gap-[80px] pt-6 md:pt-[40px] max-w-[1200px] mx-auto px-6 md:px-4 pb-6 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px]">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pb-6 md:pb-8"
            >
              <Link 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <h2 className={`${ebGaramondFont.className} text-[24px] md:text-[32px] font-normal text-black mb-3 leading-[1.1]`}>
                  {article.title}
                </h2>
                <p className={`${interFont.variable} font-inter text-[14px] md:text-[16px] text-gray-500 leading-tight line-clamp-3`}>
                  {article.summary}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
