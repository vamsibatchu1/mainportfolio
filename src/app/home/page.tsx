'use client';

import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '../layout/MainLayout';
import { jakartaFont, triFont, interFont } from '../fonts';
import { Button } from '../../components/ui/button';
import { Expand, Building2 } from 'lucide-react';
import { CaseStudyDialog } from '../components/casestudy_dialog';
import { motion } from 'framer-motion';

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



// New Header Component
function NewHeader() {
  const [selectedText, setSelectedText] = useState("I am vamsi batchu");
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);
  
  // State for rotating text blocks
  const [currentWordIndices, setCurrentWordIndices] = useState({
    productBuilder: 0,
    visualDesign: 0,
    skilled: 0,
    simplifyingComplexity: 0,
    scalable: 0,
    productExperiences: 0,
    leading: 0,
    bigBets: 0,
    aiProducts: 0
  });

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

  const [currentRotatingIndex, setCurrentRotatingIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get current text for each rotating block
  const getCurrentText = (blockKey: string) => {
    const words = wordArrays[blockKey as keyof typeof wordArrays];
    const currentIndex = currentWordIndices[blockKey as keyof typeof currentWordIndices];
    return words[currentIndex] || words[0];
  };

  // Rotate text function
  const rotateText = () => {
    if (isPaused || hoveredBlock) return;

    const currentBlock = rotatingBlocks[currentRotatingIndex];
    const words = wordArrays[currentBlock as keyof typeof wordArrays];
    const currentIndex = currentWordIndices[currentBlock as keyof typeof currentWordIndices];
    
    // Move to next word in current block
    const nextIndex = (currentIndex + 1) % words.length;
    
    setCurrentWordIndices(prev => ({
      ...prev,
      [currentBlock]: nextIndex
    }));

    // Move to next block after a delay
    setTimeout(() => {
      setCurrentRotatingIndex(prev => (prev + 1) % rotatingBlocks.length);
    }, 3500); // 3.5 second pause between blocks
  };

  // Set up rotation interval
  useEffect(() => {
    if (!isPaused && !hoveredBlock) {
      intervalRef.current = setInterval(rotateText, 4000); // 4 second intervals
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
  }, [isPaused, hoveredBlock, currentRotatingIndex, currentWordIndices]);

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

  const textBlocks = [
    { id: "oh hi", text: "oh hi", bg: "bg-white", textColor: "text-black", isRotating: false },
    { id: "I am vamsi batchu", text: "I am vamsi batchu", bg: "bg-black", textColor: "text-white", isRotating: false },
    { id: "product builder", text: getCurrentText('productBuilder'), bg: "bg-white", textColor: "text-black", isRotating: true, rotationKey: 'productBuilder' },
    { id: "with", text: "with", bg: "bg-white", textColor: "text-black", isRotating: false },
    { id: "a high bar for", text: "a high bar for", bg: "bg-white", textColor: "text-black", isRotating: false },
    { id: "visual design", text: getCurrentText('visualDesign'), bg: "bg-white", textColor: "text-black", isRotating: true, rotationKey: 'visualDesign' },
    { id: "skilled", text: getCurrentText('skilled'), bg: "bg-white", textColor: "text-black", isRotating: true, rotationKey: 'skilled' },
    { id: "simplifying complexity", text: getCurrentText('simplifyingComplexity'), bg: "bg-white", textColor: "text-black", isRotating: true, rotationKey: 'simplifyingComplexity' },
    { id: "and designing", text: "and designing", bg: "bg-white", textColor: "text-black", isRotating: false },
    { id: "scalable", text: getCurrentText('scalable'), bg: "bg-white", textColor: "text-black", isRotating: true, rotationKey: 'scalable' },
    { id: "product experiences", text: getCurrentText('productExperiences'), bg: "bg-white", textColor: "text-black", isRotating: true, rotationKey: 'productExperiences' },
    { id: "currently", text: "currently", bg: "bg-white", textColor: "text-black", isRotating: false },
    { id: "at", text: "at", bg: "bg-white", textColor: "text-black", isRotating: false },
    { id: "Rocket mortgage", text: "Rocket mortgage", bg: "bg-white", textColor: "text-black", isRotating: false },
    { id: "leading", text: getCurrentText('leading'), bg: "bg-white", textColor: "text-black", isRotating: true, rotationKey: 'leading' },
    { id: "design for", text: "design for", bg: "bg-white", textColor: "text-black", isRotating: false },
    { id: "big bets", text: getCurrentText('bigBets'), bg: "bg-white", textColor: "text-black", isRotating: true, rotationKey: 'bigBets' },
    { id: "&", text: "&", bg: "bg-white", textColor: "text-black", isRotating: false },
    { id: "AI products", text: getCurrentText('aiProducts'), bg: "bg-white", textColor: "text-black", isRotating: true, rotationKey: 'aiProducts' }
  ];

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
            <motion.div 
              key={getCurrentText('productBuilder')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "product builder" ? "text-white" : "text-black"
              }`}
            >
              {getCurrentText('productBuilder')}
            </motion.div>
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
            <motion.div 
              key={getCurrentText('visualDesign')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "visual design" ? "text-white" : "text-black"
              }`}
            >
              {getCurrentText('visualDesign')}
            </motion.div>
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
            <motion.div 
              key={getCurrentText('skilled')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "skilled" ? "text-white" : "text-black"
              }`}
            >
              {getCurrentText('skilled')}
            </motion.div>
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
            <motion.div 
              key={getCurrentText('simplifyingComplexity')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "simplifying complexity" ? "text-white" : "text-black"
              }`}
            >
              {getCurrentText('simplifyingComplexity')}
            </motion.div>
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
            <motion.div 
              key={getCurrentText('scalable')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "scalable" ? "text-white" : "text-black"
              }`}
            >
              {getCurrentText('scalable')}
            </motion.div>
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
            <motion.div 
              key={getCurrentText('productExperiences')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "product experiences" ? "text-white" : "text-black"
              }`}
            >
              {getCurrentText('productExperiences')}
            </motion.div>
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
            <motion.div 
              key={getCurrentText('leading')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "leading" ? "text-white" : "text-black"
              }`}
            >
              {getCurrentText('leading')}
            </motion.div>
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
            <motion.div 
              key={getCurrentText('bigBets')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "big bets" ? "text-white" : "text-black"
              }`}
            >
              {getCurrentText('bigBets')}
            </motion.div>
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
            <motion.div 
              key={getCurrentText('aiProducts')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
                selectedText === "AI products" ? "text-white" : "text-black"
              }`}
            >
              {getCurrentText('aiProducts')}
            </motion.div>
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

// Home Header 2 Component
function HomeHeader2() {
  return (
    <div className="w-[1440px] mx-auto mt-[40px] flex flex-col">
      {/* Home Header 2 Section */}
      <div className="content-stretch flex gap-[40px] items-end justify-start relative size-full">
        {/* Left side - Main content */}
        <motion.div 
          className="basis-0 content-stretch flex flex-col gap-[40px] grow items-start justify-start min-h-px min-w-px relative shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          {/* Main description with different font sizes */}
          <div className={`${jakartaFont.variable} font-jakarta font-bold leading-[0] relative shrink-0 text-[0px] text-black tracking-[-1.6px] w-full`}>
            <img 
              src="/images/home-header1.png" 
              alt="Handwritten note about current role at Rocket Mortgage"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Right side - Handwritten note image */}
        <motion.div 
          className="h-[300px] shrink-0 w-[411px] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        >
          <img 
            src="/images/currently.png" 
            alt="Handwritten note about current role at Rocket Mortgage"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}


// Specialties Component
function Specialties() {
  const [currentSpecialty, setCurrentSpecialty] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const specialties = [
    {
      icon: "/images/spe1logo.svg",
      text: "enterprise design",
      backgroundImage: "/images/speciality1.png"
    },
    {
      icon: "/images/spe2logo.svg",
      text: "product design",
      backgroundImage: "/images/speciality2.png"
    },
    {
      icon: "/images/spe3logo.svg",
      text: "ui/ux design",
      backgroundImage: "/images/speciality3.png"
    },
    {
      icon: "/images/spe4logo.svg",
      text: "brand identity",
      backgroundImage: "/images/speciality4.png"
    },
    {
      icon: "/images/spe5logo.svg",
      text: "design systems",
      backgroundImage: "/images/speciality5.png"
    }
  ];

  // Typing effect
  useEffect(() => {
    const currentText = specialties[currentSpecialty].text;
    console.log('Starting typing effect for:', currentText, 'specialty:', currentSpecialty);
    
    let timeoutId: NodeJS.Timeout;
    let index = 0;
    let isDeleting = false;

    // Reset display text when specialty changes
    setDisplayText("");

    const typeCharacter = () => {
      console.log('typeCharacter called, isDeleting:', isDeleting, 'index:', index, 'currentText:', currentText);
      
      if (!isDeleting) {
        // Typing forward
        if (index < currentText.length) {
          const newText = currentText.substring(0, index + 1);
          console.log('Setting display text to:', newText);
          setDisplayText(newText);
          index++;
          const speed = Math.max(50, Math.floor(2500 / currentText.length));
          timeoutId = setTimeout(typeCharacter, speed);
        } else {
          // Finished typing, wait then start deleting
          console.log('Finished typing, waiting to start deleting');
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeCharacter();
          }, 1000);
        }
      } else {
        // Deleting
        if (index > 0) {
          const newText = currentText.substring(0, index - 1);
          console.log('Deleting, setting display text to:', newText);
          setDisplayText(newText);
          index--;
          const speed = Math.max(30, Math.floor(1500 / currentText.length));
          timeoutId = setTimeout(typeCharacter, speed);
        } else {
          // Finished deleting, move to next specialty
          console.log('Finished deleting, moving to next specialty');
          isDeleting = false;
          setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
        }
      }
    };

    // Start the typing effect after a small delay
    timeoutId = setTimeout(typeCharacter, 600);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentSpecialty]);

  const currentData = specialties[currentSpecialty];

  return (
    <motion.div 
      className="w-[1440px] mx-auto flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
    >
      <div className="relative w-full h-[400px] bg-[#f2f2f2] rounded-[14px] overflow-hidden">
        {/* Background Image */}
        <motion.div 
          key={`bg-${currentSpecialty}`}
          className="absolute bg-center bg-cover bg-no-repeat h-[288px] right-[32px] top-[112px] w-[898px]"
          style={{ 
            backgroundImage: `url('${currentData.backgroundImage}')` 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
        {/* Content */}
        <motion.div 
          key={`content-${currentSpecialty}`}
          className="absolute left-[32px] top-[301px] flex gap-[8px] items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative shrink-0 w-[67px] h-[67px]">
            <img src={currentData.icon} alt={currentData.text} className="w-full h-full object-cover" />
          </div>
          <div className={`${jakartaFont.variable} font-jakarta font-bold leading-[1.1] text-[32px] text-black tracking-[-1.28px] whitespace-nowrap`}>
            {displayText}
            <span className="animate-[blink_1s_ease-in-out_infinite]">|</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}


// Case Study 1 Component
function CaseStudy1() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="w-[1440px] mx-auto flex flex-col">
      {/* Main Content */}
      <div className="content-stretch flex gap-[24px] items-start justify-start relative shrink-0 w-full">
            {/* Left side - Text content */}
            <motion.div 
              className="content-stretch flex flex-col gap-[16px] items-start justify-start leading-none relative shrink-0 text-black w-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.0, ease: "easeOut" }}
            >
              <div className="content-stretch flex flex-col gap-[32px] items-start justify-start relative size-full">
                <div className={`${triFont.variable} font-tri leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.68px] w-full`}>
                  <p className="leading-[1.3]">Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with bankers, coming up with new design patterns and flows to ensure adoption & consistency. This initiative solved critical usability issues, improved information architecture.</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                  <div className={`basis-0 flex flex-col ${interFont.variable} font-inter font-normal grow justify-center leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-neutral-950`}>
                    <p className="mb-0">Client requested dashboard redesign with focus on mobile responsiveness.</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">1. New analytics widgets for daily/weekly metrics</p>
                    <p className="mb-0">2. Simplified navigation menu</p>
                    <p className="mb-0">3. Dark mode support</p>
                    <p>4. Timeline: 6 weeks</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Image placeholders */}
            <div className="basis-0 content-stretch flex gap-[40px] grow items-center justify-start min-h-px min-w-px relative shrink-0">
              <motion.div 
                className="basis-0 bg-[#e2e2e2] grow h-[300px] min-h-px min-w-px rounded-[14px] shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.4, ease: "easeOut" }}
              >
                <img 
                  src="/images/casestudy1-t1.png" 
                  alt="Handwritten note about current role at Rocket Mortgage"
                  className="w-full h-full object-cover"
              />
              </motion.div>
              <motion.div 
                className="basis-0 bg-[#e2e2e2] grow h-[300px] min-h-px min-w-px rounded-[14px] shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.8, ease: "easeOut" }}
              >
                <img 
              src="/images/casestudy1-t2.png" 
              alt="Handwritten note about current role at Rocket Mortgage"
              className="w-full h-full object-cover"
              />
              </motion.div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <motion.div 
            className="bg-white box-border content-stretch flex h-[auto] items-center justify-between px-0 pt-[16px] relative shrink-0 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4.2, ease: "easeOut" }}
          >
            <div className={`${interFont.variable} font-inter font-semibold justify-center leading-[28px] relative shrink-0 text-[18px] text-neutral-950 text-nowrap`}>
              <p className="leading-[28px] whitespace-pre">Quick actions</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start justify-start relative shrink-0">
              <div className="relative">
                <Button 
                  variant="secondary" 
                  size="default" 
                  className="h-[36px] px-[16px] py-[8px] bg-[#F5F5F5]"
                  onClick={() => setIsDialogOpen(!isDialogOpen)}
                >
                  <span className={`${interFont.variable} font-inter font-medium text-[14px] leading-[20px] text-neutral-900`}>
                    Explain like I am 5
                  </span>
                </Button>
                
                {/* Tooltip-like Case Study Dialog */}
                {isDialogOpen && (
                  <div className="absolute bottom-full left-0 mb-2 z-50">
                    <CaseStudyDialog />
                  </div>
                )}
              </div>
              <Button variant="secondary" size="default" className="h-[36px] px-[16px] py-[8px] bg-[#F5F5F5]">
                <span className={`${interFont.variable} font-inter font-medium text-[14px] leading-[20px] text-neutral-900`}>
                  View the full case study
                </span>
              </Button>
              <Button variant="secondary" size="icon" className="w-[36px] h-[36px] bg-[#F5F5F5]">
                <Expand className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
    </div>
  );
}




export default function HomePage() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-[96px]">
        {/* Home Header Section 
        <HomeHeader />*/}
        
        {/* New Header Section */}
        <NewHeader />
        
        {/* Home Header 2 Section 
        <HomeHeader2 />*/}
        
        {/* Specialties Section */}
        <Specialties />
        
        {/* Case Study 1 Section */}
        <CaseStudy1 />

        {/* Text Shimmer Basic Section 
        <TextShimmerBasic />*/}

        {/* Additional sections will be added here as components */}
      </div>
    </MainLayout>
  );
}
