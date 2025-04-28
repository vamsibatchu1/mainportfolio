"use client";

import React from 'react';
import { 
  FullWidthText, 
  TwoColumnText, 
  BeforeAfter,
  CardGrid,
  Quote,
  FullWidthImage
} from './layouts';

export default function Testing() {
  return (
    <div className="max-w-[800px] mx-auto px-[40px] py-[60px]">
      {/* Section Header */}
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Testing & Validation",
          paragraph: "After developing our design solution, we conducted several rounds of usability testing to validate our concepts and refine the experience. Our testing focused on identifying any usability issues and measuring improvement against our baseline metrics."
        }}
      />
      
      {/* Testing Methodology */}
      <TwoColumnText
        sectionCode="L-TEXT-02"
        leftContent={{
          heading: "Testing Objectives",
          paragraph: "Our testing aimed to validate that the new navigation system reduced cognitive load, improved task completion rates, and provided a more intuitive user experience for both new and experienced users."
        }}
        rightContent={{
          heading: "Participants",
          paragraph: "We recruited 15 participants representing different user types, including power users, occasional users, and those who had never used the system before. This diverse group helped ensure our solution worked for all audience segments."
        }}
      />
      
      {/* Prototype Testing */}
      <BeforeAfter
        sectionCode="L-SPECIAL-05"
        beforeImage={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=Original+Design",
          alt: "Original navigation design"
        }}
        afterImage={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=New+Design",
          alt: "New navigation design"
        }}
        caption="Side-by-side comparison of the original navigation system and our redesigned solution"
      />
      
      {/* Key Metrics */}
      <CardGrid
        sectionCode="L-SPECIAL-02"
        columns={2}
        showNumbers={true}
        cards={[
          {
            heading: "Task Completion Rate",
            paragraph: "Improved from 62% to 94% for critical tasks, significantly reducing user frustration and support requests."
          },
          {
            heading: "Time on Task",
            paragraph: "Reduced average time to complete key workflows by 45%, improving efficiency and user satisfaction."
          },
          {
            heading: "Error Rate",
            paragraph: "Decreased navigation errors by 78%, minimizing user confusion and mistaken actions."
          },
          {
            heading: "User Satisfaction",
            paragraph: "System Usability Scale (SUS) score improved from 56 to 84, indicating excellent usability."
          }
        ]}
      />
      
      {/* User Feedback Quote */}
      <Quote
        sectionCode="L-SPECIAL-03"
        quote="The new navigation is so much clearer. I can actually find what I'm looking for without having to click through endless menus."
        author="User Testing Participant"
        role="Power User, Financial Department"
      />
      
      {/* Testing Sessions */}
      <FullWidthImage
        sectionCode="L-IMG-01"
        image={{
          src: "https://placehold.co/1200x600/e6e6e6/808080?text=Usability+Testing+Session",
          alt: "Usability testing session in progress"
        }}
        caption="Remote usability testing session showing a participant navigating through the new interface"
      />
      
      {/* Iterations */}
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Iterations Based on Feedback",
          paragraph: "Testing revealed several areas for improvement, including unclear labeling in the sub-navigation and confusion around the search functionality. We made targeted refinements to address these issues, resulting in a final design that scored significantly higher on all usability metrics during follow-up testing.",
          caption: "Three rounds of testing were conducted, with design iterations between each round"
        }}
      />
    </div>
  );
} 