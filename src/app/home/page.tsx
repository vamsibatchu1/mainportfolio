"use client";

import React from "react";
import { Benne } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { TextAnimate } from "@/components/ui/text-animate";
import { BounceCards } from "@/components/ui/bounce-cards";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "@/components/ui/testimonial"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"


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

//Testimonial Data
const TESTIMONIAL_DATA = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "Amazing experience working with this team! The results exceeded my expectations."
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


//Images for the bounce cards
const images = [
    "/images/card1.png",
    "/images/card2.png",
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
        <div className="w-full px-8 md:px-[6%] absolute top-40 md:bottom-0">
          <div className="bg-[#FCE695] rounded-3xl p-12 md:p-24 min-h-[80vh]">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            className={`${benne.className} text-[#000] text-3xl md:text-5xl lg:text-6xl font-serif max-w-4xl leading-tight`}>
              Hi there ! I am Vamsi Batchu. A product design leader working at the intersection of craft&nbsp;
              <span className="inline-block w-6 h-6 bg-blue-400 transform rounded-4 rotate-45 ml-2" aria-hidden="true" />
              &nbsp;and code
              <span className="inline-block w-6 h-6 bg-orange-400 rounded-full ml-2" aria-hidden="true" />
            </motion.h1>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 md:pt-40">

        {/* Left Column - Text */}
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.2 }}
        className={`${dmSans.className} text-[#837339] text-xl md:text-2xl lg:text-2xl flex justify-end items-center font-light`}>
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



{/*Section 2 - Mentorship*/}

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
