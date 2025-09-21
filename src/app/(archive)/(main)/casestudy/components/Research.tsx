"use client";

import React from 'react';
import { 
  FullWidthText, 
  ImageLeftTextRight, 
  HighlightBox, 
  ThreeColumnText,
  ProcessSteps
} from './layouts';

export default function Research() {
  return (
    <div className="max-w-[800px] mx-auto px-[40px] py-[60px]">
      {/* Section Header */}
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Research",
          paragraph: "To understand the problem space thoroughly, we conducted a multi-faceted research approach combining quantitative data analysis with qualitative user interviews. This allowed us to identify key pain points and opportunities for improvement in the current system."
        }}
      />
      
      {/* Research Approach */}
      <HighlightBox
        sectionCode="L-SPECIAL-01"
        content={{
          heading: "Research Question",
          paragraph: "How might we improve the navigation experience for our users while maintaining access to all critical features and supporting both novice and expert user workflows?"
        }}
      />
      
      {/* Research Methods */}
      <ThreeColumnText
        sectionCode="L-TEXT-03"
        columns={[
          {
            heading: "User Interviews",
            paragraph: "We conducted in-depth interviews with 12 users across different demographics and usage patterns to understand their pain points and needs."
          },
          {
            heading: "Analytics Review",
            paragraph: "Analysis of user behavior data from the past 6 months revealed key problem areas and drop-off points in the current navigation."
          },
          {
            heading: "Competitive Analysis",
            paragraph: "We evaluated 8 competitor products to identify industry standards and potential opportunities for differentiation."
          }
        ]}
      />
      
      {/* Research Process */}
      <ProcessSteps
        sectionCode="L-SPECIAL-04"
        steps={[
          {
            title: "Planning",
            description: "Defined research objectives and methodologies based on project goals and constraints."
          },
          {
            title: "Recruitment",
            description: "Selected participants representing diverse user segments and use cases."
          },
          {
            title: "Data Collection",
            description: "Conducted interviews, surveys, and analyzed existing product analytics."
          },
          {
            title: "Analysis",
            description: "Synthesized findings to identify patterns and key insights to guide design decisions."
          }
        ]}
      />
      
      {/* Key Finding */}
      <ImageLeftTextRight
        sectionCode="L-MIXED-01"
        image={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=User+Journey+Map",
          alt: "User journey map showing pain points"
        }}
        content={{
          heading: "Key Findings",
          paragraph: "Our research revealed that 78% of users struggled with the current navigation system, particularly when trying to access advanced features. The hierarchical menu structure created cognitive overload, while inconsistent labeling caused confusion about where to find specific functionality."
        }}
      />
      
      {/* Research Insights Summary */}
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Synthesis",
          paragraph: "After synthesizing all the research data, we identified three primary opportunity areas: simplifying the navigation structure, improving information architecture, and creating more intuitive pathways for completing key tasks. These insights formed the foundation for our design exploration phase.",
          caption: "Research conducted over a 3-week period with 25 participants across 4 countries"
        }}
      />
    </div>
  );
} 