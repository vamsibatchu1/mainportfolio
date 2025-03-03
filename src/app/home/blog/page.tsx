"use client";

import React, { useState, useEffect } from 'react';
import { doto } from '@/app/fonts';
import { IBM_Plex_Mono } from 'next/font/google';
import { newake } from '../../fonts';
import Link from 'next/link';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function BlogPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Sample blog data - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: 'FROM PERSONAL COMPUTING TO PERSONAL SOFTWARE',
      excerpt: 'As designers, we are often in our visual canvas painting the vision of what is possible.\n\nIt\'s also really important for us to share ideas, stories and experiences with the next generation of our designers.This helps me connect with new folks and share perspectives.',
      image: '/images/blog-placeholder.jpg',
    },
    {
      id: 2,
      title: 'MY RECENT WRITINGS ON DESIGN',
      excerpt: 'As designers, we are often in our visual canvas painting the vision of what is possible.\n\nIt\'s also really important for us to share ideas, stories and experiences with the next generation of our designers.This helps me connect with new folks and share perspectives.',
      image: '/images/blog-placeholder.jpg',
    },
    {
      id: 3,
      title: 'EXPLORING NEW INTERFACES',
      excerpt: 'As designers, we are often in our visual canvas painting the vision of what is possible.\n\nIt\'s also really important for us to share ideas, stories and experiences with the next generation of our designers.This helps me connect with new folks and share perspectives.',
      image: '/images/blog-placeholder.jpg',
    },
    {
      id: 4,
      title: 'THE FUTURE OF DIGITAL EXPERIENCES',
      excerpt: 'As designers, we are often in our visual canvas painting the vision of what is possible.\n\nIt\'s also really important for us to share ideas, stories and experiences with the next generation of our designers.This helps me connect with new folks and share perspectives.',
      image: '/images/blog-placeholder.jpg',
    },
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <div className="mx-auto w-[1000px] py-20">
        {/* Blog Introduction */}
        <div 
          className={`mb-20 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className={`${doto.className} text-2xl leading-relaxed`}>
            AS DESIGNERS, WE ARE OFTEN IN OUR VISUAL CANVAS
            PAINTING THE VISION OF WHAT IS POSSIBLE.
          </p>
          <p className={`${doto.className} text-2xl leading-relaxed mt-8`}>
            IT&apos;S ALSO REALLY IMPORTANT FOR US TO SHARE IDEAS,
            STORIES AND EXPERIENCES WITH THE NEXT GENERATION
            OF OUR DESIGNERS. THIS HELPS ME CONNECT WITH NEW
            FOLKS AND SHARE PERSPECTIVES.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-10">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`transition-all duration-700 ease-out ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${800 + (index * 150)}ms`
              }}
            >
              <Link href="#">
                <div 
                  className="flex border rounded-lg bg-white border-gray-200 mb-10 transition-transform duration-300 hover:scale-[1.02]"
                >
                  {/* Title Column */}
                  <div className="w-1/3 p-8">
                    <h2 className={`${newake.className} font-bold text-[40px] leading-[100%] tracking-[0.02em]`}>{post.title}</h2>
                  </div>
                  
                  {/* Content Column */}
                  <div className="w-1/3 p-8">
                    {post.excerpt.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className={`${ibmPlexMono.className} text-sm leading-relaxed ${idx > 0 ? 'mt-4' : ''}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Image Column */}
                  <div className="w-1/3 bg-gray-200 m-8">
                    {/* Image placeholder */}
                    <div className="w-full h-full min-h-[280px] bg-gray-200"></div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 