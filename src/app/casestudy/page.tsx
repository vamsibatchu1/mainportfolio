"use client";

import React, { useState } from 'react';
import CaseStudyNavigation from './components/CaseStudyNavigation';
import Problem from './components/Problem';
import Research from './components/Research';
import Explorations from './components/Explorations';
import Testing from './components/Testing';
import Learnings from './components/Learnings';

// Define the sections for the case study
const SECTIONS = [
  { id: 'problem', title: 'Problem statement', component: Problem },
  { id: 'research', title: 'Research', component: Research },
  { id: 'explorations', title: 'Explorations', component: Explorations },
  { id: 'testing', title: 'Testing', component: Testing },
  { id: 'learnings', title: 'Research', component: Learnings },
];

export default function CaseStudy() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('problem');

  // Get the current component to render based on active section
  const CurrentSection = SECTIONS.find(section => section.id === activeSection)?.component || Problem;

  return (
    <div className="min-h-screen flex flex-row w-full">
      {/* Navigation - Fixed width based on the design */}
      <div className="w-[400px] flex-shrink-0">
        <CaseStudyNavigation 
          sections={SECTIONS} 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      </div>

      {/* Content Area - Taking the remaining width */}
      <div className="flex-grow w-0 overflow-y-auto bg-[#f5f4f0]">
        <CurrentSection />
      </div>
    </div>
  );
} 