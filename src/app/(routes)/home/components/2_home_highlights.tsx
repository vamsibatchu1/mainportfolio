'use client';

import React, { useState, useEffect } from 'react';
import { jakartaFont } from '../../../fonts';
import { motion } from 'framer-motion';
import { Briefcase, Palette, Monitor, Image, Layers } from 'lucide-react';
import { useHomepageAnimation } from '../../../context/HomepageAnimationContext';

export default function HomeHighlights() {
  const [currentSpecialty, setCurrentSpecialty] = useState(0);
  const { hasAnimated, isInitialized } = useHomepageAnimation();

  const specialties = [
    {
      icon: Briefcase,
      text: "enterprise design",
      backgroundImage: "/images/speciality1.png",
      description: "Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with"
    },
    {
      icon: Monitor,
      text: "product design", 
      backgroundImage: "/images/speciality2.png",
      description: "Creating intuitive and user-centered product experiences that drive engagement and business value"
    },
    {
      icon: Palette,
      text: "ui/ux design",
      backgroundImage: "/images/speciality3.png",
      description: "Designing beautiful interfaces and seamless user experiences that delight and convert users"
    },
    {
      icon: Image,
      text: "brand identity",
      backgroundImage: "/images/speciality4.png",
      description: "Building cohesive brand identities and visual systems that communicate values and connect with audiences"
    },
    {
      icon: Layers,
      text: "design systems",
      backgroundImage: "/images/speciality5.png",
      description: "Creating scalable design systems that ensure consistency and efficiency across all touchpoints"
    }
  ];

  // Auto-rotate specialties
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [specialties.length]);

  const currentData = specialties[currentSpecialty];
  const IconComponent = currentData.icon;

  return (
    <motion.div 
      className="w-[1440px] mx-auto flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: (isInitialized && hasAnimated) ? 0 : 2.2, ease: "easeOut" }}
    >
      <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[40px] items-end justify-start overflow-clip pb-0 pt-[40px] px-0 relative rounded-[14px] size-full h-[400px]">
        {/* Text Content */}
        <div className="basis-0 box-border content-stretch flex flex-col gap-[12px] grow items-start justify-start leading-[0] min-h-px min-w-px pb-[32px] pl-[32px] pr-0 pt-0 relative shrink-0 text-black">
          <motion.div 
            key={`title-${currentSpecialty}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${jakartaFont.variable} font-jakarta font-bold relative shrink-0 text-[28px] text-nowrap tracking-[-1.12px] leading-[1.1] whitespace-pre`}
          >
            {currentData.text}
          </motion.div>
          
          <motion.div 
            key={`description-${currentSpecialty}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className={`${jakartaFont.variable} font-jakarta font-medium h-[40px] relative shrink-0 text-[18px] w-[470px] leading-[1.1]`}
          >
            {currentData.description}
          </motion.div>
        </div>

        {/* Background Image */}
        <motion.div 
          key={`bg-${currentSpecialty}`}
          className="bg-center bg-cover bg-no-repeat h-[288px] shrink-0 w-[898px]"
          style={{ 
            backgroundImage: `url('${currentData.backgroundImage}')` 
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
