"use client";

import React from "react";
import { Benne } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
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

//Nunito Sans Font
const nunitoSans = Nunito_Sans({
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[70vh]">
            {/* Left Column - Green Section */}
            <div className="md:col-span-2 bg-[#1E7160] rounded-3xl p-12 md:p-24">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`${benne.className} text-[#fff] text-3xl md:text-5xl lg:text-7xl font-serif leading-tight`}
              >
                Hello, I'm Vamsi Batchu. A product design leader working at the intersection of {'{craft}'}&nbsp;
                <span className="inline-block w-12 h-12 bg-orange-400 rounded-full ml-2" aria-hidden="true" />
                &nbsp;and {'<code>'}&nbsp;
                <span className="inline-block w-12 h-12 bg-blue-400 transform rounded-12 rotate-45 ml-2" aria-hidden="true" />
              </motion.h1>
            </div>

            {/* Right Column - Stacked Cards */}
            <div className="flex flex-col gap-8 h-full">
              {/* Top Card */}
              <div className="flex-1 bg-gray-100 rounded-3xl p-8">
                <div className="h-full flex items-center justify-center">
                  {/* Add content for first card */}
                </div>
              </div>
              
              {/* Bottom Card */}
              <div className="flex-1 bg-[#FDF4F0] rounded-3xl p-16">
                <div className="h-full flex flex-col justify-center">
                  <img src="/logos/rocket.png" alt="Rocket Logo" className="w-1/2" /> <br></br>
                  <p className={`${benne.className} text-[#373333] text-3xl`}>
                    Currently leading an enterprise design focused on banking and AI experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>




{/*Section 2 - Experience*/}
<section className="bg-[#fff] min-h-screen px-8 md:px-[6%] relative pt-20">
  <div className="bg-[#fff] space-y-16 border-t-2 border-[#000000] pt-24">
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
          <p className={`${nunitoSans.className} text-gray-500 text-xl leading-relaxed`}>
            I specialize in turning ambiguity into clarity, transforming big ideas into impactful solutions. Whether crafting zero-to-one products or refining existing systems, I bring vision, strategy, and alignment to help teams navigate complexity.
          </p>
        </div>
        <div className="space-y-4">
        <p className={`${nunitoSans.className} text-gray-500 text-xl leading-relaxed`}>
        My focus is on building meaningful, scalable experiences that solve real problems while empowering teams to deliver their best work. With a strong ability to connect design, product, and engineering, I foster collaboration and alignment across disciplines.
          </p>
          <p className={`${nunitoSans.className} text-gray-500 text-xl leading-relaxed`}>
            My technical fluency and strategic approach ensure every decision is rooted in both creative and practical feasibility. By combining innovation, quality, and user value, I aim to leave a lasting impact.
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
    <div className="md:col-span-2 h-[600px] rounded-3xl overflow-hidden bg-[#3B1914] flex flex-col justify-end items-center">
      <img 
        src="/images/bento1.png" 
        alt="Project 1" 
        className="w-[90%] object-contain" 
      />
    </div>
    <div className="h-[600px] rounded-3xl overflow-hidden bg-[#F8D7E3]">
      <img 
        src="/images/bento2.png" 
        alt="Project 2" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Second Row */}
    <div className="h-[400px] rounded-3xl overflow-hidden bg-[#7CC3F7]">
      <img 
        src="/images/bento3.png" 
        alt="Project 3" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="h-[400px] rounded-3xl overflow-hidden bg-[#F5B748]">
      <img 
        src="/images/bento4.png" 
        alt="Project 4" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="h-[400px] rounded-3xl overflow-hidden bg-[#F37F5F]">
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
