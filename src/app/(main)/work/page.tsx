"use client";

import { Suspense, useState } from 'react';
import { Work_Sans } from 'next/font/google';
import WorkCard from './components/WorkCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { priFont } from '@/app/fonts';
import UnifiedActionBar from '../home/components/UnifiedActionBar';
import { motion, AnimatePresence } from 'framer-motion';

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

// Placeholder data for multiple case studies
const caseStudiesData = [
  {
    id: 1,
    title: "Project Alpha",
    subtitle: "Leading the design for a new enterprise platform.",
    gridColor: "#FBAF1D", // Zenith
    // Card 2 Data
    card2ImageSrc: "/images/work/alpha-card2.png", // Example placeholder path
    card2Metrics: [
      { value: "22%", description: "Increase in user satisfaction after launch." },
      { value: "10x", description: "Faster task completion time observed." },
      { value: "4.8", description: "Rating on the internal feedback platform." }
    ],
    // Card 3 Data
    card3Title: "Alpha system is blazingly fast",
    card3Subtitle: "86% of users reported a better experience.",
    card3LinkText: "Read Alpha Case Study",
    card3LinkHref: "/casestudy/alpha" // Example link
  },
  {
    id: 2,
    title: "Service Beta Redesign",
    subtitle: "Improving user satisfaction for a customer service portal.",
    gridColor: "#E29FC8", // Nebula
    // Card 2 Data
    card2ImageSrc: "/images/work/beta-card2.png",
    card2Metrics: [
      { value: "35%", description: "Reduction in support ticket volume." },
      { value: "15min", description: "Average time saved per support interaction." },
      { value: "92%", description: "Positive feedback on the new interface." }
    ],
    // Card 3 Data
    card3Title: "Beta support is now effortless",
    card3Subtitle: "Support agents resolve issues quicker.",
    card3LinkText: "Read Beta Case Study",
    card3LinkHref: "/casestudy/beta"
  },
  {
    id: 3,
    title: "Mobile App Gamma",
    subtitle: "Launching a 0-1 consumer application for millions.",
    gridColor: "#4F7834", // Juniper
    // Card 2 Data
    card2ImageSrc: "/images/work/gamma-card2.png",
    card2Metrics: [
      { value: "1M+", description: "Downloads within the first 3 months." },
      { value: "4.9", description: "Average rating in the App Store." },
      { value: "Top 10", description: "Ranking in its category upon launch." }
    ],
    // Card 3 Data
    card3Title: "Gamma app delights users",
    card3Subtitle: "Engagement metrics exceeded all targets.",
    card3LinkText: "Read Gamma Case Study",
    card3LinkHref: "/casestudy/gamma"
  },
  {
    id: 4,
    title: "Internal Tool Delta",
    subtitle: "Streamlining workflows for internal development teams.",
    gridColor: "#90D9E0", // Breeze
    // Card 2 Data
    card2ImageSrc: "/images/work/delta-card2.png",
    card2Metrics: [
      { value: "50%", description: "Reduction in manual data entry time." },
      { value: "8hr/wk", description: "Average time saved per developer weekly." },
      { value: "100%", description: "Adoption rate across all target teams." }
    ],
    // Card 3 Data
    card3Title: "Delta tool boosts productivity",
    card3Subtitle: "Developers focus more on coding, less on admin.",
    card3LinkText: "Read Delta Case Study",
    card3LinkHref: "/casestudy/delta"
  }
];

export default function WorkPage() {
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);

  const handleNext = () => {
    setCurrentCaseStudyIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
  };

  const handlePrevious = () => {
    setCurrentCaseStudyIndex((prevIndex) => 
      (prevIndex - 1 + caseStudiesData.length) % caseStudiesData.length
    );
  };

  const currentCaseStudy = caseStudiesData[currentCaseStudyIndex];

  return (
    <main className={`h-screen overflow-hidden ${workSans.className} flex flex-col items-center justify-center bg-[#C7DCD5]`}>
      {/* New Header Row - Responsive width, margin */}
      <div 
        className="flex items-center justify-between w-full lg:w-[1248px] mb-4 lg:mb-8 rounded"
      >
        {/* Left Column: Text - Responsive size */}
        <p className={`${priFont.className} text-black text-2xl lg:text-2xl`}>
          A list of work case studies diving into the details
        </p>
        {/* Right Column: Arrows */}
        <div className="flex items-center gap-4 lg:gap-2">
          <div 
            className="p-2 bg-[#F9FFF3] rounded cursor-pointer hover:bg-opacity-80 transition-opacity"
            onClick={handlePrevious}
          >
            <ChevronLeft size={20} className="text-black" />
          </div>
          <div 
            className="p-2 bg-[#F9FFF3] rounded cursor-pointer hover:bg-opacity-80 transition-opacity"
            onClick={handleNext}
          >
            <ChevronRight size={20} className="text-black" />
          </div>
        </div>
      </div>

      {/* Existing Card Section - Wrapped in AnimatePresence and motion.div */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCaseStudyIndex}
          className="flex"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Suspense fallback={<div className="text-center text-lg">Loading Card...</div>}>
            <WorkCard 
              title={currentCaseStudy.title}
              subtitle={currentCaseStudy.subtitle}
              gridColor={currentCaseStudy.gridColor}
              card2ImageSrc={currentCaseStudy.card2ImageSrc}
              card2Metrics={currentCaseStudy.card2Metrics}
              card3Title={currentCaseStudy.card3Title}
              card3Subtitle={currentCaseStudy.card3Subtitle}
              card3LinkText={currentCaseStudy.card3LinkText}
              card3LinkHref={currentCaseStudy.card3LinkHref}
            />
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {/* Add the Unified Action Bar */}
      <UnifiedActionBar />
    </main>
  );
} 