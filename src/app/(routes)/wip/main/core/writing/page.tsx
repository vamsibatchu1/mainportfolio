'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { jakartaFont } from '@/app/fonts';
import Link from 'next/link';

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
  return (
    <div className="relative h-full w-full p-6 overflow-hidden">
      {/* Gradient Background Layers - Exact code from user */}
      <div className="bg-inverse z-[2] absolute left-0 right-0 top-0 h-[160px] w-full" style={{background:'linear-gradient(180deg, #FFF 14.33%, rgba(255, 255, 255, 0.00) 100%)'}}></div>
      
      <div aria-hidden="true" className="z-[1] pointer-events-none absolute" style={{top:'1px',left:'1px',right:'1px',bottom:'1px',height:'calc(50vh - 2px)',width:'calc(100% - 2px)',background:'radial-gradient(48.46% 47.11% at 25.78% 0%, #83DFFF 0%, rgba(131, 223, 255, 0.00) 100%), linear-gradient(180deg, rgba(73, 156, 222, 0.00) 48.1%, #499CDE 100%), radial-gradient(59.6% 57.06% at 18.87% 74.15%, #6686E4 14.71%, rgba(102, 134, 228, 0.00) 100%), #61B5DB',transform:'rotate(180deg)'}}></div>
      
      <div aria-hidden="true" className="z-[1] pointer-events-none absolute left-0 top-0 w-full" style={{height:'50vh',background:'radial-gradient(65.51% 113.9% at 50% 113.9%, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',transform:'rotate(180deg)'}}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`${jakartaFont.variable} font-jakarta text-3xl font-bold text-gray-900 mb-8`}>Writing</h1>
          
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <Link 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h2 className={`${jakartaFont.variable} font-jakarta text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors`}>
                    {article.title}
                  </h2>
                  <p className={`${jakartaFont.variable} font-jakarta text-sm font-medium text-gray-500 mb-3`}>
                    {article.subtitle}
                  </p>
                  <p className={`${jakartaFont.variable} font-jakarta text-sm text-gray-600 leading-relaxed`}>
                    {article.summary}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
