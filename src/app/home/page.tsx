"use client";

import React, { useState, useEffect, useRef } from "react";
import { Benne } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { TestimonialCarousel } from "@/components/ui/testimonial";
//import { GeistMono } from "next/font/google";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { StackedCards } from "@/components/ui/stacked-cards";

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

//Poppins Font
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

//Testimonial Data
const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Kriti B",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "Vamsi has been the most approachable mentor I came across! He is so easy to talk to and his guidance was very detailed. Vamsi is encouraging, supportive and very passionate about the design field! I would 200% recommend Vamsi",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Highly recommended! Great service and professional approach.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    description:
      "Exceptional quality and professionalism. Would definitely work with them again.",
  },
];

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);


  //Font size of the typewriter animation on the monitor
  const getFontSize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        return "22px";
      } else {
        return "42px";
      }
    }
    return "44px"; // Default size for SSR
  };

  return (
    <pre
      style={{
        whiteSpace: "pre",
        display: "block",
        lineHeight: "1",
        fontFamily: "'128k', monospace",
        fontSize: getFontSize(),
      }}
    >
      {displayText}
      <span className="animate-pulse">_</span>
    </pre>
  );
}

function IntroSequence() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute top-[22%] left-[50%] transform -translate-x-1/2 w-[65%] z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[#F0BFFF] text-sm md:text-base space-y-2"
        style={{
          fontFamily: "'128k', monospace",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        {showLogo ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-[150px] md:w-[300px] h-[100px] md:h-[200px] pt-12 md:pt-24">
              <AnimatedLogo width="100%" height="100%" color="#ffffff" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="pt-4 md:pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TypewriterText
              text={`Hello, I'm Vamsi Batchu.
Atlanta based product 
design leader working at 
the intersection of 
{craft} & <code>`}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen">
      {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="bg-[#0F413B] h-screen flex items-center justify-center px-8 md:px-[15%] relative"
      >
        <motion.div
          className="w-full h-full px-8 md:px-[6%] flex items-end"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.6, // Delay to let background appear first
          }}
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <IntroSequence />

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
        </motion.div>
      </motion.section>

      {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      <section className="bg-[#fff] h-screen px-8 md:px-[15%] relative pt-0 md:pt-20">
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
            hidden: {},
          }}
          className="bg-[#fff] space-y-8 pt-24"
        >
          {/* Row 1 - Header */}
          <motion.div
            className="w-full"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2
              className={`${benne.className} text-[24px] md:text-[24px] lg:text-[42px] leading-tight`}
            >
              Design, to me, is fundamentally about providing clarity in
              complexity. Every pixel we place and system we architect architect
              has the power to make someone's day better or their work more
              efficient.
            </h2>
          </motion.div>

          {/* Row 2 - Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Two Column Text */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[95%]"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <p
                  className={`${poppins.className} text-gray-500 text-[16px] md:text-[18px] leading-[1.8] max-w-[460px]`}
                >
                  I believe great product design emerges at the intersection of
                  empathy, systems thinking, and craftsmanship. Having started
                  as a computer science engineer who discovered design through
                  building solutions, I've learned that impactful products
                  aren't just beautiful interfaces – they're thoughtfully
                  architected systems. What excites me about design is its
                  potential to orchestrate meaningful change.
                </p>
              </div>
              <div className="space-y-4">
                <p
                  className={`${poppins.className} text-gray-500 text-[16px] md:text-[18px] leading-[1.8] max-w-[460px]`}
                >
                  I emphasize both macro and micro aspects of design – from
                  high-level strategy to delightful details that make products
                  lovable. As a creative leader, I foster environments where
                  creativity flourishes alongside technical excellence, never
                  losing sight of the humans we're designing for. The best
                  designs create possibilities.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative h-full flex flex-col justify-end"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 40 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <StackedCards
                cards={[
                  {
                    color: "#40BCD9",
                    content: "Creating next gen 0-1 products and mvps",
                    icon: "/images/stackcard1.png",
                  },
                  {
                    color: "#F0CB46",
                    content: "leading system wide redesigns",
                    icon: "/images/stackcard2.png",
                  },
                  {
                    color: "#948DBC",
                    content: "delightful consumer apps",
                    icon: "/images/stackcard3.png",
                  },
                  {
                    color: "#CA84C0",
                    content: "setting high bar for craft",
                    icon: "/images/stackcard4.png",
                  },
                  {
                    color: "#F18520",
                    content: "designing large scale enterprise products",
                    icon: "/images/stackcard5.png",
                  },
                  {
                    color: "#47AB68",
                    content: "defining product vision & strategy",
                    icon: "/images/stackcard6.png",
                  },
                ]}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      {/*Section 3 - Projects*/}
      {/* <section className="bg-[#fff] min-h-screen px-8 md:px-[6%] relative pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}

      {/* First Row */}
      {/* <div className="md:col-span-2 aspect-[16/9] rounded-3xl overflow-hidden bg-[#3B1914]">
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
          </div> */}

      {/* Second Row */}
      {/* <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#7CC3F7]">
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
      </section> */}

      {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      {/*Section 4 - Mentorship*/}
      {/* <section className="bg-[#fff] min-h-screen px-8 md:px-[6%] relative pt-20">
        <div className="bg-[#f7f7f1] grid grid-cols-1 md:grid-cols-2 gap-8 items-start rounded-3xl p-12 md:p-24">
          <div className="space-y-8">
            <h2
              className={`${benne.className} text-[#000000] text-2xl md:text-4xl font-serif leading-tight`}
            >
              Over the years, I had the privilege of mentoring aspiring
              designers and individuals worldwide, helping them in land their
              ideal design roles & offering career guidance in their day to day
              work.
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#ab95ce]" />
                <span
                  className={`${benne.className} text-[#000000] text-xl md:text-2xl font-medium`}
                >
                  Portfolio reviews
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#85aef2]" />
                <span
                  className={`${benne.className} text-[#000000] text-xl md:text-2xl font-medium`}
                >
                  Design leadership coaching
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#7ac7a3]" />
                <span
                  className={`${benne.className} text-[#000000] text-xl md:text-2xl font-medium`}
                >
                  Mock interview practice
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#f3d56a]" />
                <span
                  className={`${benne.className} text-[#000000] text-xl md:text-2xl font-medium`}
                >
                  Day to day work guidance
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <p
              className={`${dmSans.className} text-[#797979] text-lg md:text-2xl`}
            >
              I offer 1:1 mentorship for designers and non designers on ADP List
              on a variety of subjects. Let us connect and elevate your design
              journey together!
            </p>
            <TestimonialCarousel
              testimonials={TESTIMONIAL_DATA}
              className="max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section> */}
    </main>
  );
}
