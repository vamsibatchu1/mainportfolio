"use client";

import React, { useState } from 'react';
import CaseStudyNavigation from './components/CaseStudyNavigation';
import { Problem } from './components/Problem';
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
  { id: 'learnings', title: 'Learnings', component: Learnings },
];

export default function CaseStudy() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('problem');

  // Get the current component to render based on active section
  const CurrentSection = SECTIONS.find(section => section.id === activeSection)?.component || Problem;

  return (
    <div className="min-h-screen flex w-full">
      {/* Navigation - Now the component handles its own width */}
      <CaseStudyNavigation 
        sections={SECTIONS} 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Content Area - Taking the remaining width */}
      <div className="flex-grow overflow-y-auto bg-[#f5f4f0]">
        <CurrentSection />
      </div>
    </div>
  );
} 