"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { louize } from '@/app/fonts'; 
import { Work_Sans } from 'next/font/google';
import ClientOnly from '../components/ClientOnly';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

export default function BlogPage() {
  return (
    <ClientOnly
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <div className="animate-pulse text-xl text-gray-600">Loading...</div>
        </div>
      }
    >
      <BlogContent />
    </ClientOnly>
  );
}

function BlogContent() {
  const [loaded, setLoaded] = useState(false);
  
  // Define animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="py-16 max-w-[1120px] mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          I write about design, technology, and everything in between.
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
                    <h3 className={`${louize.className} text-xl font-bold`}>Column 1 Article</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">May 2023</span>
                  </div>
                  <p className={`${workSans.className} text-gray-600 mb-4 flex-1`}>
                    This is a dummy article in the first column. It&apos;s designed to showcase the 3-column layout.
                  </p>
                  <div className="mt-auto">
                    <button className={`${workSans.className} text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors`}>
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
                    <h3 className={`${louize.className} text-xl font-bold`}>Column 2 Article</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">June 2023</span>
                  </div>
                  <p className={`${workSans.className} text-gray-600 mb-4 flex-1`}>
                    This is a dummy article in the second column. All articles have the same height for consistency.
                  </p>
                  <div className="mt-auto">
                    <button className={`${workSans.className} text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors`}>
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
                    <h3 className={`${louize.className} text-xl font-bold`}>Column 3 Article</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">July 2023</span>
                  </div>
                  <p className={`${workSans.className} text-gray-600 mb-4 flex-1`}>
                    This is a dummy article in the third column. The grid is responsive and will stack on mobile.
                  </p>
                  <div className="mt-auto">
                    <button className={`${workSans.className} text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors`}>
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 