'use client';

import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import { jakartaFont, triFont, interFont } from '../fonts';
import { Button } from '../../components/ui/button';
import { Expand, Building2 } from 'lucide-react';
import { CaseStudyDialog } from '../components/casestudy_dialog';
import { motion } from 'framer-motion';



// New Header Component
function NewHeader() {
  const [selectedText, setSelectedText] = useState("oh hi");

  const textBlocks = [
    { id: "oh hi", text: "oh hi", bg: "bg-white", textColor: "text-black" },
    { id: "I am vamsi batchu", text: "I am vamsi batchu", bg: "bg-black", textColor: "text-white" },
    { id: "product builder", text: "product builder", bg: "bg-white", textColor: "text-black" },
    { id: "with", text: "with", bg: "bg-white", textColor: "text-black" },
    { id: "a high bar for", text: "a high bar for", bg: "bg-white", textColor: "text-black" },
    { id: "visual design", text: "visual design", bg: "bg-white", textColor: "text-black" },
    { id: "skilled", text: "skilled", bg: "bg-white", textColor: "text-black" },
    { id: "simplifying complexity", text: "simplifying complexity", bg: "bg-white", textColor: "text-black" },
    { id: "and designing", text: "and designing", bg: "bg-white", textColor: "text-black" },
    { id: "scalable", text: "scalable", bg: "bg-white", textColor: "text-black" },
    { id: "product experiences", text: "product experiences", bg: "bg-white", textColor: "text-black" },
    { id: "currently", text: "currently", bg: "bg-white", textColor: "text-black" },
    { id: "at", text: "at", bg: "bg-white", textColor: "text-black" },
    { id: "Rocket mortgage", text: "Rocket mortgage", bg: "bg-white", textColor: "text-black" },
    { id: "leading", text: "leading", bg: "bg-white", textColor: "text-black" },
    { id: "design for", text: "design for", bg: "bg-white", textColor: "text-black" },
    { id: "big bets", text: "big bets", bg: "bg-white", textColor: "text-black" },
    { id: "&", text: "&", bg: "bg-white", textColor: "text-black" },
    { id: "AI products", text: "AI products", bg: "bg-white", textColor: "text-black" }
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
            onClick={() => setSelectedText("oh hi")}
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
            onClick={() => setSelectedText("I am vamsi batchu")}
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
            onClick={() => setSelectedText("product builder")}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-[90px] cursor-pointer transition-colors ${
              selectedText === "product builder" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "product builder" ? "text-white" : "text-black"
            }`}>
              product builder
            </div>
          </button>
          
          {/* with */}
          <button 
            onClick={() => setSelectedText("with")}
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
            onClick={() => setSelectedText("a high bar for")}
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
            onClick={() => setSelectedText("visual design")}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tr-[48px] cursor-pointer transition-colors ${
              selectedText === "visual design" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "visual design" ? "text-white" : "text-black"
            }`}>
              visual design
            </div>
          </button>
          
          {/* skilled */}
          <button 
            onClick={() => setSelectedText("skilled")}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-[60px] cursor-pointer transition-colors ${
              selectedText === "skilled" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "skilled" ? "text-white" : "text-black"
            }`}>
              skilled
            </div>
          </button>
          
          {/* simplifying complexity */}
          <button 
            onClick={() => setSelectedText("simplifying complexity")}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tl-[48px] rounded-tr-[48px] cursor-pointer transition-colors ${
              selectedText === "simplifying complexity" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "simplifying complexity" ? "text-white" : "text-black"
            }`}>
              simplifying complexity
            </div>
          </button>
          
          {/* and designing */}
          <button 
            onClick={() => setSelectedText("and designing")}
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
            onClick={() => setSelectedText("scalable")}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-br-[40px] rounded-tl-[48px] cursor-pointer transition-colors ${
              selectedText === "scalable" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "scalable" ? "text-white" : "text-black"
            }`}>
              scalable
            </div>
          </button>
          
          {/* product experiences */}
          <button 
            onClick={() => setSelectedText("product experiences")}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-tl-[48px] cursor-pointer transition-colors ${
              selectedText === "product experiences" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "product experiences" ? "text-white" : "text-black"
            }`}>
              product experiences
            </div>
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
            onClick={() => setSelectedText("currently")}
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
            onClick={() => setSelectedText("at")}
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
            onClick={() => setSelectedText("Rocket mortgage")}
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
            onClick={() => setSelectedText("leading")}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] cursor-pointer transition-colors ${
              selectedText === "leading" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "leading" ? "text-white" : "text-black"
            }`}>
              leading
            </div>
          </button>
          
          {/* design for */}
          <button 
            onClick={() => setSelectedText("design for")}
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
            onClick={() => setSelectedText("big bets")}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-bl-[48px] cursor-pointer transition-colors ${
              selectedText === "big bets" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "big bets" ? "text-white" : "text-black"
            }`}>
              big bets
            </div>
          </button>
          
          {/* & */}
          <button 
            onClick={() => setSelectedText("&")}
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
            onClick={() => setSelectedText("AI products")}
            className={`border-2 border-black flex items-center justify-center p-[16.976px] rounded-br-[48px] cursor-pointer transition-colors ${
              selectedText === "AI products" ? "bg-black" : "bg-white"
            }`}
          >
            <div className={`${jakartaFont.variable} font-jakarta font-bold text-[37.348px] tracking-[-1.4939px] leading-[1.1] ${
              selectedText === "AI products" ? "text-white" : "text-black"
            }`}>
              AI products
            </div>
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
