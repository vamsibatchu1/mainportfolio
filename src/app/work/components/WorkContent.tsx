'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { louize } from '@/app/fonts';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

export default function WorkContent() {
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
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className={`${louize.className} text-4xl md:text-5xl font-bold mb-4`}>
          My Work
        </h1>
        <p className={`${workSans.className} text-lg text-gray-600 max-w-2xl mx-auto`}>
          A collection of projects I&apos;ve led and contributed to over the years.
        </p>
      </motion.div>

      <AnimatePresence>
        {loaded && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col md:flex-row md:gap-[32px]"
          >
            {/* Left Column */}
            <div className="md:w-[544px]">
              <motion.div
                variants={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg h-[500px] flex flex-col"
              >
                <div className="bg-gray-200 h-48 w-full"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`${louize.className} text-xl font-bold`}>Left Column Card</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      2023
                    </span>
                  </div>
                  <p className={`${workSans.className} text-gray-600 mb-4 flex-1`}>
                    This is a dummy card in the left column. All existing project cards have been removed as requested.
                    This card has equal height to the one in the right column.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className={`${workSans.className} text-sm text-gray-500`}>Dummy Category</span>
                    <button className={`${workSans.className} text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors`}>
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="md:w-[544px] mt-8 md:mt-0">
              <motion.div
                variants={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg h-[500px] flex flex-col"
              >
                <div className="bg-gray-200 h-48 w-full"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`${louize.className} text-xl font-bold`}>Right Column Card</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      2023
                    </span>
                  </div>
                  <p className={`${workSans.className} text-gray-600 mb-4 flex-1`}>
                    This is a dummy card in the right column. All existing project cards have been removed as requested.
                    This card has equal height to the one in the left column.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className={`${workSans.className} text-sm text-gray-500`}>Dummy Category</span>
                    <button className={`${workSans.className} text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors`}>
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 