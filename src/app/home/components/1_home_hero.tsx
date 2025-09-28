'use client';

import React, { useState, useEffect, useRef } from 'react';
import { jakartaFont } from '../../fonts';
import { motion } from 'framer-motion';
import TextRotate from '../../components/text-rotate';

// Word arrays for rotating text functionality
const wordArrays = {
  productBuilder: [
    "product builder",
    "product designer", 
    "design leader",
    "systems thinker",
    "strategic designer",
    "experience architect",
    "innovation driver",
    "design strategist",
    "creative technologist",
    "product visionary",
    "design innovator"
  ],
  
  visualDesign: [
    "visual design",
    "design craft",
    "interaction design",
    "design excellence",
    "user experience",
    "design systems",
    "product craft",
    "design quality",
    "UX craft",
    "interface design",
    "design standards"
  ],
  
  skilled: [
    "skilled",
    "expert",
    "strategic",
    "visionary",
    "experienced",
    "masterful",
    "exceptional",
    "influential",
    "proficient",
    "passionate"
  ],
  
  simplifyingComplexity: [
    "simplifying complexity",
    "navigating ambiguity",
    "solving problems",
    "driving innovation",
    "creating clarity",
    "transforming chaos",
    "architecting solutions",
    "tackling challenges",
    "untangling problems",
    "reframing challenges",
    "orchestrating systems"
  ],
  
  scalable: [
    "scalable",
    "intuitive",
    "impactful",
    "innovative",
    "delightful",
    "meaningful",
    "transformative",
    "cohesive",
    "seamless",
    "elegant",
    "future-ready"
  ],
  
  productExperiences: [
    "product experiences",
    "user experiences",
    "digital solutions",
    "design systems",
    "customer journeys",
    "platform experiences",
    "service designs",
    "product strategies",
    "design frameworks",
    "user interfaces"
  ],
  
  leading: [
    "leading",
    "driving",
    "shaping",
    "pioneering",
    "championing",
    "architecting",
    "influencing",
    "spearheading",
    "advancing",
    "elevating",
    "defining"
  ],
  
  bigBets: [
    "big bets",
    "0→1 initiatives",
    "strategic initiatives",
    "complex problems",
    "frontier domains",
    "moonshot projects",
    "critical initiatives",
    "ambitious projects",
    "new ventures",
    "breakthrough ideas",
    "transformative work"
  ],
  
  aiProducts: [
    "AI products",
    "emerging tech",
    "future platforms",
    "ML experiences",
    "autonomous systems",
    "intelligent products",
    "next-gen solutions",
    "innovative platforms",
    "cutting-edge tech",
    "AI experiences",
    "frontier technology"
  ]
};

export default function HomeHero() {
  const [selectedText, setSelectedText] = useState("I am vamsi batchu");
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  // Define the order of blocks that should rotate
  const rotatingBlocks = [
    'productBuilder',
    'visualDesign', 
    'skilled',
    'simplifyingComplexity',
    'scalable',
    'productExperiences',
    'leading',
    'bigBets',
    'aiProducts'
  ];

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Refs for TextRotate components
  const textRotateRefs = useRef<{ [key: string]: any }>({});

  // Set up rotation interval - only one block should auto-rotate at a time
  useEffect(() => {
    if (!isPaused && !hoveredBlock) {
      intervalRef.current = setInterval(() => {
        // Randomly select a block to rotate
        const randomIndex = Math.floor(Math.random() * rotatingBlocks.length);
        const randomBlock = rotatingBlocks[randomIndex];
        const ref = textRotateRefs.current[randomBlock];
        
        if (ref) {
          ref.next();
        }
      }, 2200); // 1.2 second intervals
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, hoveredBlock]);

  // Handle block selection
  const handleBlockClick = (blockId: string) => {
    setSelectedText(blockId);
    setIsPaused(true);
    
    // Resume after 5 seconds of no interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Handle hover events
  const handleBlockHover = (blockId: string) => {
    setHoveredBlock(blockId);
  };

  const handleBlockLeave = () => {
    setHoveredBlock(null);
  };

  const getSubtext = (selectedId: string) => {
    const subtexts: { [key: string]: string } = {
      "oh hi": "Welcome to my portfolio! I'm a product designer passionate about creating meaningful experiences.",
      "I am vamsi batchu": "I'm a product designer with 5+ years of experience in enterprise and consumer products.",
      "product builder": "I specialize in building products from concept to launch, focusing on user-centered design.",
      "with": "I work with cross-functional teams to deliver exceptional products that users love.",
      "a high bar for": "I maintain high standards for visual design, user experience, and product quality.",
      "visual design": "I create beautiful, functional interfaces that are both aesthetically pleasing and user-friendly.",
      "skilled": "I'm skilled in design systems, prototyping, user research, and product strategy.",
      "simplifying complexity": "I excel at breaking down complex problems into simple, elegant solutions.",
      "and designing": "I design products that are intuitive, accessible, and delightful to use.",
      "scalable": "I build scalable design systems and products that grow with business needs.",
      "product experiences": "I create end-to-end product experiences that drive user engagement and business value.",
      "currently": "I'm currently working on exciting projects that push the boundaries of product design.",
      "at": "I'm based in Detroit, working with amazing teams to build the future of fintech.",
      "Rocket mortgage": "I lead design initiatives at Rocket Mortgage, America's largest mortgage lender.",
      "leading": "I lead design teams and initiatives that impact millions of users nationwide.",
      "design for": "I design for big bets and AI products that transform the mortgage industry.",
      "big bets": "I work on high-impact projects that have the potential to change entire industries.",
      "&": "I collaborate with engineers, product managers, and stakeholders to deliver exceptional results.",
      "AI products": "I design AI-powered products that make complex financial decisions simple and accessible."
    };
    return subtexts[selectedId] || "Select a text block to learn more about my work and experience.";
  };

  return (
    <div className="w-[1440px] mx-auto mt-[40px] flex flex-col gap-[40px]">
      {/* Main text blocks */}
      <div className="flex flex-wrap gap-[30px] items-end justify-start w-full">
        <div className="bg-white flex flex-wrap gap-[13px] items-start justify-start w-full">
          {/* oh hi */}
          <button 
            onClick={() => handleBlockClick("oh hi")}
            onMouseEnter={() => handleBlockHover("oh hi")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tl-[48px] cursor-pointer transition-colors ${
              selectedText === "oh hi" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "oh hi" ? "text-white" : "text-black"
            }`}>
              oh hi
            </div>
          </button>
          
          {/* I am vamsi batchu */}
          <button 
            onClick={() => handleBlockClick("I am vamsi batchu")}
            onMouseEnter={() => handleBlockHover("I am vamsi batchu")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tr-[48px] cursor-pointer transition-colors ${
              selectedText === "I am vamsi batchu" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "I am vamsi batchu" ? "text-white" : "text-black"
            }`}>
              I am vamsi batchu
            </div>
          </button>
          
          {/* product builder */}
          <button 
            onClick={() => handleBlockClick("product builder")}
            onMouseEnter={() => handleBlockHover("product builder")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-[90px] cursor-pointer transition-colors ${
              selectedText === "product builder" ? "bg-black" : "bg-white"
            }`}
          >
            <TextRotate
              ref={(ref) => { textRotateRefs.current['productBuilder'] = ref; }}
              texts={wordArrays.productBuilder}
              auto={false}
              mainClassName={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "product builder" ? "text-white" : "text-black"
              }`}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </button>
          
          {/* with */}
          <button 
            onClick={() => handleBlockClick("with")}
            onMouseEnter={() => handleBlockHover("with")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tl-[48px] rounded-tr-[48px] cursor-pointer transition-colors ${
              selectedText === "with" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "with" ? "text-white" : "text-black"
            }`}>
              with
            </div>
          </button>
          
          {/* a high bar for */}
          <button 
            onClick={() => handleBlockClick("a high bar for")}
            onMouseEnter={() => handleBlockHover("a high bar for")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-[90px] cursor-pointer transition-colors ${
              selectedText === "a high bar for" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "a high bar for" ? "text-white" : "text-black"
            }`}>
              a high bar for
            </div>
          </button>
          
          {/* visual design */}
          <button 
            onClick={() => handleBlockClick("visual design")}
            onMouseEnter={() => handleBlockHover("visual design")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tr-[48px] cursor-pointer transition-colors ${
              selectedText === "visual design" ? "bg-black" : "bg-white"
            }`}
          >
            <TextRotate
              ref={(ref) => { textRotateRefs.current['visualDesign'] = ref; }}
              texts={wordArrays.visualDesign}
              auto={false}
              mainClassName={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "visual design" ? "text-white" : "text-black"
              }`}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </button>
          
          {/* skilled */}
          <button 
            onClick={() => handleBlockClick("skilled")}
            onMouseEnter={() => handleBlockHover("skilled")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-[60px] cursor-pointer transition-colors ${
              selectedText === "skilled" ? "bg-black" : "bg-white"
            }`}
          >
            <TextRotate
              ref={(ref) => { textRotateRefs.current['skilled'] = ref; }}
              texts={wordArrays.skilled}
              auto={false}
              mainClassName={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "skilled" ? "text-white" : "text-black"
              }`}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </button>
          
          {/* simplifying complexity */}
          <button 
            onClick={() => handleBlockClick("simplifying complexity")}
            onMouseEnter={() => handleBlockHover("simplifying complexity")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tl-[48px] rounded-tr-[48px] cursor-pointer transition-colors ${
              selectedText === "simplifying complexity" ? "bg-black" : "bg-white"
            }`}
          >
            <TextRotate
              ref={(ref) => { textRotateRefs.current['simplifyingComplexity'] = ref; }}
              texts={wordArrays.simplifyingComplexity}
              auto={false}
              mainClassName={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "simplifying complexity" ? "text-white" : "text-black"
              }`}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </button>
          
          {/* and designing */}
          <button 
            onClick={() => handleBlockClick("and designing")}
            onMouseEnter={() => handleBlockHover("and designing")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-[70px] cursor-pointer transition-colors ${
              selectedText === "and designing" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "and designing" ? "text-white" : "text-black"
            }`}>
              and designing
            </div>
          </button>
          
          {/* scalable */}
          <button 
            onClick={() => handleBlockClick("scalable")}
            onMouseEnter={() => handleBlockHover("scalable")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-br-[40px] rounded-tl-[48px] cursor-pointer transition-colors ${
              selectedText === "scalable" ? "bg-black" : "bg-white"
            }`}
          >
            <TextRotate
              ref={(ref) => { textRotateRefs.current['scalable'] = ref; }}
              texts={wordArrays.scalable}
              auto={false}
              mainClassName={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "scalable" ? "text-white" : "text-black"
              }`}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </button>
          
          {/* product experiences */}
          <button 
            onClick={() => handleBlockClick("product experiences")}
            onMouseEnter={() => handleBlockHover("product experiences")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tl-[48px] cursor-pointer transition-colors ${
              selectedText === "product experiences" ? "bg-black" : "bg-white"
            }`}
          >
            <TextRotate
              ref={(ref) => { textRotateRefs.current['productExperiences'] = ref; }}
              texts={wordArrays.productExperiences}
              auto={false}
              mainClassName={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "product experiences" ? "text-white" : "text-black"
              }`}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </button>
          
          {/* Decorative elements */}
          <div className="relative w-[74.95px] h-[74.95px]">
            <img 
                  src="/images/newheader_svg1.svg" 
                  alt="Handwritten note about current role at Rocket Mortgage"
                  className="w-full h-full object-cover"
              />
          </div>
          
          <div className="relative w-[74.95px] h-[74.95px]">
            <img 
                  src="/images/newheader_svg2.svg" 
                  alt="Handwritten note about current role at Rocket Mortgage"
                  className="w-full h-full object-cover"
              />
          </div>
          
          {/* currently */}
          <button 
            onClick={() => handleBlockClick("currently")}
            onMouseEnter={() => handleBlockHover("currently")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tr-[48px] cursor-pointer transition-colors ${
              selectedText === "currently" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "currently" ? "text-white" : "text-black"
            }`}>
              currently
            </div>
          </button>
          
          {/* at */}
          <button 
            onClick={() => handleBlockClick("at")}
            onMouseEnter={() => handleBlockHover("at")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tl-[48px] cursor-pointer transition-colors ${
              selectedText === "at" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "at" ? "text-white" : "text-black"
            }`}>
              at
            </div>
          </button>
          
          {/* Rocket mortgage */}
          <button 
            onClick={() => handleBlockClick("Rocket mortgage")}
            onMouseEnter={() => handleBlockHover("Rocket mortgage")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-[80px] cursor-pointer transition-colors ${
              selectedText === "Rocket mortgage" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "Rocket mortgage" ? "text-white" : "text-black"
            }`}>
              Rocket mortgage
            </div>
          </button>
          
          {/* leading */}
          <button 
            onClick={() => handleBlockClick("leading")}
            onMouseEnter={() => handleBlockHover("leading")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] cursor-pointer transition-colors ${
              selectedText === "leading" ? "bg-black" : "bg-white"
            }`}
          >
            <TextRotate
              ref={(ref) => { textRotateRefs.current['leading'] = ref; }}
              texts={wordArrays.leading}
              auto={false}
              mainClassName={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "leading" ? "text-white" : "text-black"
              }`}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </button>
          
          {/* design for */}
          <button 
            onClick={() => handleBlockClick("design for")}
            onMouseEnter={() => handleBlockHover("design for")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-bl-[48px] cursor-pointer transition-colors ${
              selectedText === "design for" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "design for" ? "text-white" : "text-black"
            }`}>
              design for
            </div>
          </button>
          
          {/* big bets */}
          <button 
            onClick={() => handleBlockClick("big bets")}
            onMouseEnter={() => handleBlockHover("big bets")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-bl-[48px] cursor-pointer transition-colors ${
              selectedText === "big bets" ? "bg-black" : "bg-white"
            }`}
          >
            <TextRotate
              ref={(ref) => { textRotateRefs.current['bigBets'] = ref; }}
              texts={wordArrays.bigBets}
              auto={false}
              mainClassName={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "big bets" ? "text-white" : "text-black"
              }`}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </button>
          
          {/* & */}
          <button 
            onClick={() => handleBlockClick("&")}
            onMouseEnter={() => handleBlockHover("&")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-br-[48px] cursor-pointer transition-colors ${
              selectedText === "&" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "&" ? "text-white" : "text-black"
            }`}>
              &
            </div>
          </button>
          
          {/* AI products */}
          <button 
            onClick={() => handleBlockClick("AI products")}
            onMouseEnter={() => handleBlockHover("AI products")}
            onMouseLeave={handleBlockLeave}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-br-[48px] cursor-pointer transition-colors ${
              selectedText === "AI products" ? "bg-black" : "bg-white"
            }`}
          >
            <TextRotate
              ref={(ref) => { textRotateRefs.current['aiProducts'] = ref; }}
              texts={wordArrays.aiProducts}
              auto={false}
              mainClassName={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "AI products" ? "text-white" : "text-black"
              }`}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </button>
        </div>
      </div>
      
      {/* Subtext */}
      <div className={`${jakartaFont.variable} font-jakarta font-medium text-[18px] text-black flex gap-[64px]`}>
        <div className="w-[400px] leading-[1.2]">
          {getSubtext(selectedText)}
        </div>
        <div className="w-[400px] leading-[1.2]">
          {getSubtext(selectedText)}
        </div>
      </div>
    </div>
  );
}
