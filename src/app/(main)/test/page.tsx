'use client'; // Mark as client component for potential future interactions

import React from 'react';
import Link from 'next/link';

// List of known viewable pages in the (main) group and others
const pages = [
  { name: 'Home', path: '/home' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Case Study (Example)', path: '/casestudy' }, // Assuming /casestudy is a viewable index or example
  { name: 'Contact', path: '/contact' },
  { name: 'Pixel Art Generator', path: '/home/components/pixelart' }, // Path for the component page
  { name: 'Intro Animation', path: 'home/components/intro-animation' } // Path for the temporary test page
];

export default function TestLauncherPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Page Launcher</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Use this page to quickly navigate to different sections of the site for testing.
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <ul className="space-y-3">
            {pages.map((page) => (
              <li key={page.path}>
                <Link 
                  href={page.path}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium transition-colors duration-200"
                  target="_blank" // Open in new tab for easier testing
                  rel="noopener noreferrer"
                >
                  {page.name}
                </Link>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({page.path})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 