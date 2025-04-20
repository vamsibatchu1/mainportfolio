"use client";

import React from 'react';
import { 
  FullWidthText,
  TwoColumnText,
  Quote,
  CardGrid,
  HighlightBox
} from './layouts';

export default function Learnings() {
  return (
    <div className="max-w-[800px] mx-auto px-[40px] py-[60px]">
      {/* Section Header */}
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Learnings & Impact",
          paragraph: "This project provided valuable insights into the challenges of redesigning navigation for complex systems while reinforcing the importance of user-centered design methodologies. Beyond the measurable metrics, we gained significant learnings that will inform future projects."
        }}
      />
      
      {/* Project Impact */}
      <HighlightBox
        sectionCode="L-SPECIAL-01"
        backgroundColor="bg-[#f4f9ff]"
        borderColor="border-blue-400"
        content={{
          heading: "Project Impact",
          paragraph: "The redesigned navigation system exceeded all target metrics, resulting in a 42% reduction in support tickets, 36% increase in feature discovery, and 28% higher user satisfaction scores. Most importantly, user retention improved by 18% in the first quarter following implementation."
        }}
      />
      
      {/* Business & User Outcomes */}
      <TwoColumnText
        sectionCode="L-TEXT-02"
        leftContent={{
          heading: "Business Outcomes",
          paragraph: "The improved navigation system translated directly to business value. With reduced training needs and support costs, the company saved an estimated $450,000 annually. Additionally, increased user engagement led to a 22% rise in premium feature adoption, driving revenue growth."
        }}
        rightContent={{
          heading: "User Outcomes",
          paragraph: "Users reported significantly higher satisfaction and confidence in using the system. Task completion rates increased across all user segments, with the most dramatic improvements seen among new users, who could now onboard more quickly and effectively."
        }}
      />
      
      {/* Key Learnings */}
      <CardGrid
        sectionCode="L-SPECIAL-02"
        columns={2}
        showNumbers={false}
        cards={[
          {
            heading: "Progressive Disclosure",
            paragraph: "Implementing progressive disclosure principles allowed us to maintain power user functionality while simplifying the experience for new users."
          },
          {
            heading: "Continuous User Validation",
            paragraph: "Regular user testing throughout the design process helped us catch and address issues early, preventing costly late-stage revisions."
          },
          {
            heading: "Cross-Functional Collaboration",
            paragraph: "Close collaboration between design, engineering, and product teams ensured a shared understanding and smoother implementation."
          },
          {
            heading: "Change Management",
            paragraph: "The phased rollout approach with clear user communication proved crucial for successful adoption of the new system."
          }
        ]}
      />
      
      {/* Reflection Quote */}
      <Quote
        sectionCode="L-SPECIAL-03"
        quote="This project reinforced that effective navigation isn't just about organizing content—it's about creating an intuitive mental model that aligns with how users think about their tasks."
        author="Project Lead"
        role="UX Design Director"
      />
      
      {/* Next Steps */}
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Future Opportunities",
          paragraph: "Building on the success of this project, we've identified several opportunities for future enhancements. These include implementing personalized navigation paths based on user behavior patterns, developing an AI-assisted navigation helper, and expanding the contextual help system to further support user education and feature discovery.",
          caption: "A roadmap for continued improvements has been developed for the next 12 months"
        }}
      />
      
      {/* Personal Reflection */}
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Personal Growth",
          paragraph: "Leading this project expanded my skills in managing complex system redesigns while balancing stakeholder needs with user expectations. I gained valuable experience in facilitating cross-functional collaboration and learned new approaches to measuring and communicating design impact to business stakeholders. These skills will directly inform my approach to future projects of similar complexity."
        }}
      />
    </div>
  );
} 