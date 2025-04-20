"use client";

import React from 'react';
import {
  FullWidthText,
  TextLeftImageRight,
  TwoColumnImages,
  ImageTopTextBottom,
  ThreeColumnText
} from './layouts';

export default function Solution() {
  return (
    <div className="max-w-[800px] mx-auto px-[40px] py-[60px]">
      {/* Section Header */}
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Final Solution",
          paragraph: "Our solution simplifies the navigation experience while maintaining access to all critical features. The redesigned interface reduces cognitive load through clear information architecture, consistent patterns, and intuitive wayfinding elements."
        }}
      />
      
      {/* Main Solution Overview */}
      <TextLeftImageRight
        sectionCode="L-MIXED-02"
        image={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=Solution+Overview",
          alt: "Screenshot of the main navigation interface"
        }}
        content={{
          heading: "Simplified Navigation System",
          subheading: "Designed for clarity and efficiency",
          paragraph: "The new navigation system employs a structured, hierarchical approach that reduces the number of top-level categories from 12 to 5, grouping related functions together in a more logical way. The redesigned menu provides visual cues and persistent breadcrumbs to help users understand where they are in the system."
        }}
      />
      
      {/* Key Features */}
      <ThreeColumnText
        sectionCode="L-TEXT-03"
        columns={[
          {
            heading: "Contextual Navigation",
            paragraph: "Context-sensitive menus display relevant options based on the user's current task and previous behavior patterns."
          },
          {
            heading: "Smart Search",
            paragraph: "Enhanced search with predictive suggestions and categorized results makes finding specific features much faster."
          },
          {
            heading: "Personalized Shortcuts",
            paragraph: "Users can customize their experience by pinning frequently used features for one-click access."
          }
        ]}
      />
      
      {/* Design Details */}
      <TwoColumnImages
        sectionCode="L-IMG-02"
        leftImage={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=Mobile+View",
          alt: "Mobile interface view"
        }}
        rightImage={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=Desktop+View",
          alt: "Desktop interface view"
        }}
        caption="The solution maintains consistency across device types while optimizing for each platform's unique characteristics"
      />
      
      {/* Solution Details */}
      <ImageTopTextBottom
        sectionCode="L-MIXED-03"
        image={{
          src: "https://placehold.co/1200x400/e6e6e6/808080?text=User+Flow+Diagram",
          alt: "User flow diagram showing key paths through the interface"
        }}
        content={{
          heading: "Streamlined User Flows",
          paragraph: "We reduced the number of steps required for common tasks by an average of 60%, creating more direct pathways to key functionality. The new information architecture makes it easier for users to build accurate mental models of the system, resulting in more confident navigation and less reliance on trial and error."
        }}
      />
      
      {/* Implementation Notes */}
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Implementation and Rollout",
          paragraph: "The solution was implemented using a progressive rollout strategy, starting with a beta program for power users who provided valuable feedback. This phased approach allowed us to refine the experience before full deployment, minimizing disruption while maximizing adoption.",
          caption: "Complete implementation was achieved over a 3-month period with 98% user retention"
        }}
      />
    </div>
  );
} 