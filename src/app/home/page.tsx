"use client";

import React from "react";
import { Benne } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { TextAnimate } from "@/components/ui/text-animate";
import { BounceCards } from "@/components/ui/bounce-cards";
import { motion } from "framer-motion";

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

const images = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
  ]
  
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ]

//
export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <motion.section 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.2 }}
      className="bg-white min-h-screen relative">
        <div className="w-full px-8 md:px-[6%] absolute bottom-0">
          <div className="bg-[#DFF6E9] rounded-t-3xl p-16 min-h-[80vh]">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            className={`${benne.className} text-[#388D4F] text-4xl md:text-5xl lg:text-6xl font-serif max-w-4xl leading-tight`}>
              Hi there ! I am Vamsi Batchu. A product design leader working at the intersection of craft&nbsp;
              <span className="inline-block w-6 h-6 bg-yellow-400 transform rounded-4 rotate-45 ml-2" aria-hidden="true" />
              &nbsp;and code
              <span className="inline-block w-6 h-6 bg-orange-400 rounded-full ml-2" aria-hidden="true" />
            </motion.h1>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-40">

        {/* Left Column - Text */}
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.2 }}
        className={`${dmSans.className} text-[#797979] text-xl md:text-2xl lg:text-2xl flex justify-end items-center font-light`}>
            <TextAnimate animation="slideUp" by="word">
          Hands-on product design leader with ten+ years of experience in designing and leading teams developing highly impactful products at scale.
          Currently leading an enterprise design team at Rocket, helping build impactful banking and operational experiences.
            </TextAnimate>
        </motion.div>
        
        {/* Right Column - Cards */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 1.6 }}
        className="flex justify-end items-center h-full">
            <BounceCards
                images={images}
                containerWidth={200}
                containerHeight={200}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                className="mx-auto"
            />
        </motion.div>
      </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
