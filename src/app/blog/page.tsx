"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { louize } from '@/app/fonts'; // Commented out font
// import { Work_Sans } from 'next/font/google'; // Commented out font
import ClientOnly from '../components/ClientOnly';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

// const workSans = Work_Sans({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap'
// });

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
          Thoughts on design, technology, and product development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Post 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-2">Design Systems at Scale</h2>
          <p className="text-sm text-gray-500 mb-4">April 12, 2023</p>
          <p className="text-gray-600">
            Building and maintaining design systems for enterprise products: lessons learned and best practices.
          </p>
        </motion.div>

        {/* Blog Post 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-2">The Future of AI in Design</h2>
          <p className="text-sm text-gray-500 mb-4">March 5, 2023</p>
          <p className="text-gray-600">
            How AI tools are changing the landscape of product design and what designers should know.
          </p>
        </motion.div>

        {/* Blog Post 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-2">Designing for Accessibility</h2>
          <p className="text-sm text-gray-500 mb-4">February 18, 2023</p>
          <p className="text-gray-600">
            Practical strategies for making products more accessible without compromising on aesthetics.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 