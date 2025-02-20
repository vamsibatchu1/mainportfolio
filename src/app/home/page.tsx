"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Balsamiq_Sans, Benne, Ubuntu, Cormorant_Garamond} from "next/font/google";
import { motion, useInView } from "framer-motion";
import { TestimonialCarousel } from "@/components/ui/testimonial";
//import { GeistMono } from "next/font/google";
import dynamic from 'next/dynamic';

// Dynamic imports for components that might use document
const AnimatedLogo = dynamic(
  () => import('@/components/ui/animated-logo').then(mod => mod.AnimatedLogo),
  { ssr: false }
);

const StackedCards = dynamic(
  () => import('@/components/ui/stacked-cards').then(mod => mod.StackedCards),
  { ssr: false }
);

const MobileCardsGrid = dynamic(
  () => import('@/components/ui/mobile-cards-grid').then(mod => mod.MobileCardsGrid),
  { ssr: false }
);

const DynamicIslandWrapper = dynamic(
  () => import('@/components/ui/DynamicIsland/IslandController'),
  { ssr: false }
);

//Benne Font
const benne = Benne({
  weight: ["400"],
  subsets: ["latin"],
});

//Cormorant Garamond Font
const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "300"],
  subsets: ["latin"],
});

//Ubuntu Font
const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

//Balsamiq Sans Font
const balsamiqSans = Balsamiq_Sans({
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

//Typewriter Text Animation
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

  //Typewriter Text Font Size
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
        className="text-[#ffffff] text-sm md:text-base space-y-2"
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
        className="bg-[#E76324] h-[100svh] flex flex-col justify-between px-8 md:px-[15%] relative [&::before]:absolute [&::before]:inset-0 [&::before]:bg-noise [&::before]:opacity-[0.03] [&::before]:pointer-events-none"
      >
        <motion.div
          className="w-full h-full px-8 md:px-[6%] flex items-end pb-[0] md:pb-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <IntroSequence />

            {/* Monitor SVG */}
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/images/mac.png"
              alt="Retro Monitor"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
