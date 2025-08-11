'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, fiveFont } from '../../../fonts';

export default function WritingPage() {
  const articles = [
    {
      id: 1,
      title: "The Future of Design Systems",
      excerpt: "How design systems are evolving to meet the demands of modern digital products and the role of AI in their development.",
      category: "Design Systems",
      readTime: "8 min read",
      date: "March 15, 2024",
      featured: true
    },
    {
      id: 2,
      title: "Building Accessible Interfaces",
      excerpt: "A comprehensive guide to creating inclusive digital experiences that work for everyone, regardless of ability.",
      category: "Accessibility",
      readTime: "12 min read",
      date: "February 28, 2024",
      featured: false
    },
    {
      id: 3,
      title: "The Psychology of Color in UX",
      excerpt: "Understanding how color choices impact user behavior and emotional responses in digital interfaces.",
      category: "UX Psychology",
      readTime: "6 min read",
      date: "February 10, 2024",
      featured: false
    },
    {
      id: 4,
      title: "Prototyping with Framer Motion",
      excerpt: "Advanced techniques for creating smooth, performant animations in React applications using Framer Motion.",
      category: "Development",
      readTime: "10 min read",
      date: "January 25, 2024",
      featured: false
    },
    {
      id: 5,
      title: "Designing for Voice Interfaces",
      excerpt: "The challenges and opportunities of designing user experiences for voice-activated devices and AI assistants.",
      category: "Voice UX",
      readTime: "9 min read",
      date: "January 12, 2024",
      featured: false
    },
    {
      id: 6,
      title: "The Impact of Micro-interactions",
      excerpt: "How small animations and feedback loops can significantly improve user engagement and satisfaction.",
      category: "Micro-interactions",
      readTime: "7 min read",
      date: "December 30, 2023",
      featured: false
    }
  ];

  return (
    <motion.div 
      className="w-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className={`${fiveFont.className} text-black text-[48px] leading-[100%] tracking-[-0.02em] mb-4`}>
          Writing & Thoughts
        </h1>
        <p className={`${jakartaFont.className} text-gray-600 text-[20px] leading-[140%] max-w-[500px]`}>
          Insights, tutorials, and reflections on design, technology, and the creative process.
        </p>
      </motion.div>
      
      {/* Featured Article */}
      <motion.div 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {articles.filter(article => article.featured).map(article => (
          <div key={article.id} className="bg-gray-50 rounded-lg p-8 cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`${jakartaFont.className} text-blue-600 text-[14px] font-medium`}>
                  Featured
                </span>
                <span className={`${jakartaFont.className} text-gray-500 text-[14px]`}>
                  {article.category}
                </span>
                <span className={`${jakartaFont.className} text-gray-400 text-[14px]`}>
                  {article.readTime}
                </span>
              </div>
              
              <h2 className={`${fiveFont.className} text-black text-[32px] leading-[120%] hover:text-gray-600 transition-colors`}>
                {article.title}
              </h2>
              
              <p className={`${jakartaFont.className} text-gray-600 text-[18px] leading-[140%]`}>
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-4">
                <span className={`${jakartaFont.className} text-gray-500 text-[14px]`}>
                  {article.date}
                </span>
                <button className={`${jakartaFont.className} text-blue-600 text-[16px] font-medium hover:text-blue-700 transition-colors`}>
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Articles List */}
      <div className="space-y-6 mb-12">
        {articles.filter(article => !article.featured).map((article, index) => (
          <motion.div 
            key={article.id}
            className="border-b border-gray-200 pb-6 cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className={`${jakartaFont.className} text-gray-500 text-[14px]`}>
                  {article.category}
                </span>
                <span className={`${jakartaFont.className} text-gray-400 text-[14px]`}>
                  {article.readTime}
                </span>
              </div>
              
              <h3 className={`${fiveFont.className} text-black text-[24px] leading-[120%] hover:text-gray-600 transition-colors`}>
                {article.title}
              </h3>
              
              <p className={`${jakartaFont.className} text-gray-600 text-[16px] leading-[140%]`}>
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-2">
                <span className={`${jakartaFont.className} text-gray-500 text-[14px]`}>
                  {article.date}
                </span>
                <button className={`${jakartaFont.className} text-blue-600 text-[14px] font-medium hover:text-blue-700 transition-colors`}>
                  Read →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Newsletter Signup */}
      <motion.div 
        className="mt-12 pt-8 border-t border-gray-200"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className={`${fiveFont.className} text-black text-[24px] leading-[120%] mb-2`}>
            Stay Updated
          </h3>
          <p className={`${jakartaFont.className} text-gray-600 text-[16px] mb-4`}>
            Get notified when I publish new articles and insights.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className={`${jakartaFont.className} flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black`}
            />
            <button className={`${jakartaFont.className} bg-black text-white px-6 py-3 text-[16px] font-semibold rounded-lg hover:bg-gray-800 transition-colors`}>
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
