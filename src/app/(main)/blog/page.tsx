"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { secFont, triFont } from '@/lib/config/fonts';
import Navbar from '../home/components/navbar-test/Navbar';

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

  return (
    <div className="py-16 relative min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className={`${secFont.className} text-4xl md:text-5xl font-bold mb-4`}>
          Blog &amp; Thoughts
        </h1>
        <p className={`${triFont.className} text-lg text-gray-600 max-w-2xl mx-auto`}>
          I write about design, technology, and everything in between regularly.
        </p>
      </motion.div>

      <div className="max-w-[1120px] mx-auto px-4">
        <AnimatePresence>
          {loaded && (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-3 gap-[32px]"
            >
              {/* Column 1 */}
              <motion.div variants={item} className="h-[400px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                <div className="bg-gray-200 h-40 w-full"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`${secFont.className} text-xl font-bold`}>Column 1 Article</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">May 2023</span>
                  </div>
                  <p className={`${triFont.className} text-gray-600 mb-4 flex-1`}>
                    This is a dummy article in the first column. It&apos;s designed to showcase the 3-column layout.
                  </p>
                  <div className="mt-auto">
                    <button className={`${triFont.className} text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors`}>
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Column 2 */}
              <motion.div variants={item} className="h-[400px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                <div className="bg-gray-200 h-40 w-full"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`${secFont.className} text-xl font-bold`}>Column 2 Article</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">June 2023</span>
                  </div>
                  <p className={`${triFont.className} text-gray-600 mb-4 flex-1`}>
                    This is a dummy article in the second column. All articles have the same height for consistency.
                  </p>
                  <div className="mt-auto">
                    <button className={`${triFont.className} text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors`}>
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Column 3 */}
              <motion.div variants={item} className="h-[400px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                <div className="bg-gray-200 h-40 w-full"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`${secFont.className} text-xl font-bold`}>Column 3 Article</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">July 2023</span>
                  </div>
                  <p className={`${triFont.className} text-gray-600 mb-4 flex-1`}>
                    This is a dummy article in the third column. The 3-column layout provides a good density of content.
                  </p>
                  <div className="mt-auto">
                    <button className={`${triFont.className} text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors`}>
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Navbar />
    </div>
  );
} 