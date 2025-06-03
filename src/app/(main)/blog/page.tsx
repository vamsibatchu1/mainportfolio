"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GridContainer, Field } from '@/components/grid';
import { tekoFont, loraFont } from '@/app/fonts';

export default function BlogPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const articles = [
    {
      id: 1,
      title: "Design Systems Evolution",
      date: "May 2023",
      excerpt: "Exploring how modern design systems have evolved to support complex digital products and teams.",
      category: "Design"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      date: "June 2023", 
      excerpt: "A deep dive into emerging technologies and frameworks shaping the next generation of web applications.",
      category: "Development"
    },
    {
      id: 3,
      title: "User Experience Principles",
      date: "July 2023",
      excerpt: "Core principles that guide effective user experience design in the digital age.",
      category: "UX"
    },
    {
      id: 4,
      title: "Typography in Digital Design",
      date: "August 2023",
      excerpt: "How typography choices impact readability, hierarchy, and overall user experience.",
      category: "Design"
    },
    {
      id: 5,
      title: "Performance Optimization",
      date: "September 2023",
      excerpt: "Strategies and techniques for building lightning-fast web applications.",
      category: "Development"
    },
    {
      id: 6,
      title: "Accessibility Best Practices",
      date: "October 2023",
      excerpt: "Creating inclusive digital experiences that work for everyone.",
      category: "Accessibility"
    }
  ];

  const renderArticleContent = (article: typeof articles[0]) => {
    return (
      <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-32 w-full flex items-center justify-center">
          <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">
              {article.category}
            </span>
            <span className={`${loraFont.className} text-gray-500 text-xs`}>
              {article.date}
            </span>
          </div>
          <h3 className={`${tekoFont.className} text-lg font-bold mb-2 text-gray-900`}>
            {article.title}
          </h3>
          <p className={`${loraFont.className} text-gray-600 text-sm mb-4 flex-1 leading-relaxed`}>
            {article.excerpt}
          </p>
          <button className={`${loraFont.className} text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors self-start`}>
            Read More →
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
        transition={{ duration: 0.6 }}
        className="pt-16 pb-8 text-center bg-white"
      >
        <h1 className={`${tekoFont.className} text-4xl md:text-5xl font-bold mb-4 text-gray-900`}>
          Blog &amp; Thoughts
        </h1>
        <p className={`${loraFont.className} text-lg text-gray-600 max-w-2xl mx-auto px-4`}>
          I write about design, technology, and everything in between regularly.
        </p>
      </motion.div>

      <div className="bg-gray-50 min-h-screen">
        <AnimatePresence>
          {loaded && (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <GridContainer 
                marginHorizontal={60} 
                marginVertical={40}
              >
                <div 
                  className="grid grid-cols-2 grid-rows-3 w-full h-full"
                  style={{ gap: '24px' }}
                >
                  {articles.map((article, index) => {
                    const rowStart = Math.floor(index / 2) + 1;
                    const colStart = (index % 2) + 1;
                    
                    return (
                      <Field
                        key={article.id}
                        rowStart={rowStart}
                        colStart={colStart}
                        className="bg-transparent border-none p-0 min-h-0"
                      >
                        <motion.div
                          variants={item}
                          className="w-full h-full"
                        >
                          {renderArticleContent(article)}
                        </motion.div>
                      </Field>
                    );
                  })}
                </div>
              </GridContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 