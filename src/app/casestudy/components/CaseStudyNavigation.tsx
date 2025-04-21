"use client";

import React from 'react';
// import { louize, doto } from '../../fonts'; // Commented out fonts
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Section {
  id: string;
  title: string;
  component: React.ComponentType;
}

interface CaseStudyNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function CaseStudyNavigation({ 
  sections, 
  activeSection, 
  onSectionChange 
}: CaseStudyNavigationProps) {
  return (
    <div className="w-[400px] h-screen fixed left-0 top-0 bg-white">
      <div className="p-[32px] h-full flex flex-col">
        {/* Back button - Subtle navigation */}
        <Link href="/work" className="inline-flex items-center mb-[24px] opacity-70 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-[18px] h-[18px] text-[#6f6f6f] mr-[8px]" />
          <span className="text-[16px] text-[#6f6f6f] hover:text-black transition-colors tracking-[-0.2px]">
          </span>
        
        </Link>
        
        {/* Project Title */}
        <h1 className="text-[30px] leading-[36px] tracking-[-0.5px] mb-[24px]">
          Redefining the navigation of a million user billpayment system
        </h1>
        
        {/* Project Subtitle */}
        <p className="text-[22px] text-[#6f6f6f] leading-[32px] tracking-[-0.5px] mb-[40px]">
          subtitle for the project that is long enough to tell a little bit more....
        </p>
        
        {/* Table of contents section */}
        <div className="bg-[#f9f9f9] rounded-[8px] px-[32px] py-[24px] mb-[32px]">
          <div className="text-[18px] uppercase tracking-[1px] mb-[16px]">
            TABLE OF CONTENTS
          </div>
          
          <hr className="border-t border-[#e5e5e5] mb-[24px]" />
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-[16px]">
            {/* Problem Statement */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => onSectionChange(sections[0]?.id || 'problem')}
            >
              <span className={`text-[18px] leading-[28px] ${activeSection === (sections[0]?.id || 'problem') ? 'text-black font-medium' : 'text-[#6f6f6f]'}`}>
                The Problem
              </span>
              {activeSection === (sections[0]?.id || 'problem') && <div className="w-[8px] h-[8px] bg-black rounded-full ml-[8px]" />}
            </div>
            
            {/* Research */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => onSectionChange(sections[1]?.id || 'research')}
            >
              <span className={`text-[18px] leading-[28px] ${activeSection === (sections[1]?.id || 'research') ? 'text-black font-medium' : 'text-[#6f6f6f]'}`}>
                Research
              </span>
              {activeSection === (sections[1]?.id || 'research') && <div className="w-[8px] h-[8px] bg-black rounded-full ml-[8px]" />}
            </div>
            
            {/* Explorations */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => onSectionChange(sections[2]?.id || 'explorations')}
            >
              <span className={`text-[18px] leading-[28px] ${activeSection === (sections[2]?.id || 'explorations') ? 'text-black font-medium' : 'text-[#6f6f6f]'}`}>
                Explorations
              </span>
              {activeSection === (sections[2]?.id || 'explorations') && <div className="w-[8px] h-[8px] bg-black rounded-full ml-[8px]" />}
            </div>
            
            {/* Testing */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => onSectionChange(sections[3]?.id || 'testing')}
            >
              <span className={`text-[18px] leading-[28px] ${activeSection === (sections[3]?.id || 'testing') ? 'text-black font-medium' : 'text-[#6f6f6f]'}`}>
                Testing
              </span>
              {activeSection === (sections[3]?.id || 'testing') && <div className="w-[8px] h-[8px] bg-black rounded-full ml-[8px]" />}
            </div>
            
            {/* Learnings (Note: In screenshot it shows "Research" again) */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => onSectionChange(sections[4]?.id || 'learnings')}
            >
              <span className={`text-[18px] leading-[28px] ${activeSection === (sections[4]?.id || 'learnings') ? 'text-black font-medium' : 'text-[#6f6f6f]'}`}>
                Research
              </span>
              {activeSection === (sections[4]?.id || 'learnings') && <div className="w-[8px] h-[8px] bg-black rounded-full ml-[8px]" />}
            </div>
          </div>
        </div>
        
        {/* Spacer to push chatbot to bottom */}
        <div className="flex-grow"></div>
        
        {/* Ask me anything text */}
        <div className="text-[18px] uppercase tracking-[1px] mb-[16px]">
          ASK ME ANYTHING
        </div>
        
        {/* Chatbot box */}
        <div className="bg-[#f9f9f9] rounded-[8px] h-[140px] w-full mb-[32px]">
          <div className="flex items-center justify-center h-full">
            {/* Chatbot will be integrated here */}
          </div>
        </div>
      </div>
    </div>
  );
} 