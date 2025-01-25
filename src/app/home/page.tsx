"use client";

import React, { useState, useEffect } from "react";
import { Benne } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "@/components/ui/testimonial"
import { TextAnimate } from "@/components/ui/text-animate";
import { TypeAnimation } from "react-type-animation";
//import { GeistMono } from "next/font/google";

//Benne Font
const benne = Benne({
  weight: "400",
  subsets: ["latin"],
});

//DM Sans Font
const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

//Nunito Sans Font
const nunitoSans = Nunito_Sans({
  weight: "400",
  subsets: ["latin"],
});


//Testimonial Data
const TESTIMONIAL_DATA = [
    {
      id: 1,
      name: "Kriti B",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "Vamsi has been the most approachable mentor I came across! He is so easy to talk to and his guidance was very detailed. Vamsi is encouraging, supportive and very passionate about the design field! I would 200% recommend Vamsi"
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      description: "Highly recommended! Great service and professional approach."
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      description: "Exceptional quality and professionalism. Would definitely work with them again."
    }
  ]

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  const getFontSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        return '26px';
      } else {
        return '42px';
      }
    }
    return '44px'; // Default size for SSR
  };

  return (
    <pre style={{ 
      whiteSpace: 'pre',
      display: 'block',
      lineHeight: '1',
      fontFamily: "'128k', monospace",
      fontSize: getFontSize()
    }}>
      {displayText}
      <span className="animate-pulse">_</span>
    </pre>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="bg-[#0F413B] h-screen relative overflow-hidden"
      >
        <div className="w-full px-8 md:px-[6%] absolute top-40 bottom-0 flex items-end justify-center pb-0">
          <div className="relative w-full max-w-2xl">
            {/* Typing Text Container - Positioned absolutely over the monitor screen */}
            <div className="absolute top-[22%] left-[50%] transform -translate-x-1/2 w-[65%] z-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#F0BFFF] text-sm md:text-base space-y-2"
                style={{ 
                  fontFamily: "'128k', monospace"
                }}
              >
                <TypewriterText 
                  text={`Hello, I'm Vamsi Batchu.
Atlanta based product design
leader working at the
intersection of {craft}
& <code>`}
                />
              </motion.div>
            </div>

            {/* Monitor SVG */}
            <motion.img 
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
              src="/images/mac.svg" 
              alt="Retro Monitor" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.section>

      {/*Section 2 - Experience*/}
      <section className="bg-[#fff] min-h-screen px-8 md:px-[6%] relative pt-20">
        <div className="bg-[#fff] space-y-16 pt-24">
          {/* Row 1 - Header */}
          <div className="w-full">
            <h2 className={`${benne.className} text-3xl md:text-4xl lg:text-5xl leading-tight max-w-5xl`}>
              Hands-on product design leader with ten+ years of experience in designing and leading teams developing highly impactful products at scale.
            </h2>
          </div>

          {/* Row 2 - Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Two Column Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className={`${nunitoSans.className} text-gray-500 text-xl leading-relaxed`}>
                  I guide teams while staying deeply involved in the process—designing intuitive interactions, building scalable systems, and refining user flows. By blending strategic vision with attention to detail, I ensure every product reflects thoughtfulness, usability, and high-quality execution.
                </p>
              </div>
              <div className="space-y-4">
              <p className={`${nunitoSans.className} text-gray-500 text-xl leading-relaxed`}>
                  I specialize in turning ambiguity into clarity, transforming big ideas into impactful solutions. Whether crafting zero-to-one products or refining existing systems, I bring vision, strategy, and alignment to help teams navigate complexity.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full">
              <img 
                src="/images/projects.png" 
                alt="Product Design Skills" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Section 3 - Projects*/}
      <section className="bg-[#fff] min-h-screen px-8 md:px-[6%] relative pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="md:col-span-2 aspect-[16/9] rounded-3xl overflow-hidden bg-[#3B1914]">
            <img 
              src="/images/bento1.png" 
              alt="Project 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#F8D7E3]">
            <img 
              src="/images/bento2.png" 
              alt="Project 2" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Row */}
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#7CC3F7]">
            <img 
              src="/images/bento3.png" 
              alt="Project 3" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#F5B748]">
            <img 
              src="/images/bento4.png" 
              alt="Project 4" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#F37F5F]">
            <img 
              src="/images/bento5.png" 
              alt="Project 5" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/*Section 4 - Mentorship*/}
      <section className="bg-[#fff] min-h-screen px-8 md:px-[6%] relative pt-20">
        <div className="bg-[#f7f7f1] grid grid-cols-1 md:grid-cols-2 gap-8 items-start rounded-3xl p-12 md:p-24">
          <div className="space-y-8">          
            <h2 className={`${benne.className} text-[#000000] text-2xl md:text-4xl font-serif leading-tight`}>
              Over the years, I've had the privilege of mentoring aspiring designers and individuals worldwide, helping
              them in land their ideal design roles & offering career guidance in their day to day work.
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#ab95ce]" />
                <span className={`${benne.className} text-[#000000] text-xl md:text-2xl font-medium`}>Portfolio reviews</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#85aef2]" />
                <span className={`${benne.className} text-[#000000] text-xl md:text-2xl font-medium`}>Design leadership coaching</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#7ac7a3]" />
                <span className={`${benne.className} text-[#000000] text-xl md:text-2xl font-medium`}>Mock interview practice</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#f3d56a]" />
                <span className={`${benne.className} text-[#000000] text-xl md:text-2xl font-medium`}>Day to day work guidance</span>
              </li>
            </ul>
          {/*  <InteractiveHoverButton text="Connect with me" className="w-auto pl-12 pr-12"/> */}

          </div>
          <div className="space-y-8">
            <p className={`${dmSans.className} text-[#797979] text-lg md:text-2xl`}>
              I offer 1:1 mentorship for designers and non designers on ADP List on a variety of subjects. Let's connect
              and elevate your design journey together!
            </p>
            <TestimonialCarousel 
        testimonials={TESTIMONIAL_DATA}
        className="max-w-2xl mx-auto"
      />

          </div>
        </div>
      </section>
    </main>
  );
}
