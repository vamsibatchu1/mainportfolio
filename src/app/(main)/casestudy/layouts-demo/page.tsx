"use client";

import React from 'react';
import { secFont, priFont } from '@/lib/config/fonts';
import {
  FullWidthText,
  TwoColumnText,
  ThreeColumnText,
  FullWidthImage,
  TwoColumnImages,
  ImageLeftTextRight,
  TextLeftImageRight,
  ImageTopTextBottom,
  HighlightBox,
  CardGrid,
  Quote,
  ProcessSteps,
  BeforeAfter,
  SingleColumnReport,
  TextWithImageAndQuote
} from '../components/layouts';

export default function LayoutsDemo() {
  return (
    <div className="max-w-[800px] mx-auto px-[40px] py-[60px]">
      <h1 className={`${priFont.className} text-[40px] font-bold mb-[40px] tracking-[-1px]`}>
        Case Study Layout Components
      </h1>
      
      <p className={`${secFont.className} text-[18px] leading-[28px] mb-[40px]`}>
        This page demonstrates all available layout components that can be used across case study pages.
        Each section includes the component&apos;s unique code identifier for easy reference.
      </p>
      
      <hr className="border-t border-[#e0e0e0] mb-[60px]" />
      
      {/* TEXT LAYOUTS */}
      <h2 className={`${priFont.className} text-[28px] font-bold mb-[40px]`}>Text Layouts</h2>
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-TEXT-01: Full Width Text</h3>
      </div>
      
      <FullWidthText
        sectionCode="L-TEXT-01"
        content={{
          heading: "Research Methodology",
          subheading: "How we approached the problem",
          paragraph: "For this project, we conducted a comprehensive research phase including user interviews, competitive analysis, and stakeholder workshops. This gave us a solid foundation of insights to inform our design decisions.",
          caption: "Research conducted over a 4-week period with 24 participants"
        }}
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-TEXT-02: Two Column Text</h3>
      </div>
      
      <TwoColumnText
        sectionCode="L-TEXT-02"
        leftContent={{
          heading: "User Needs",
          paragraph: "Through our research, we identified that users needed a simpler navigation system with fewer options and clearer categorization of features."
        }}
        rightContent={{
          heading: "Business Goals",
          paragraph: "The organization wanted to increase user engagement, reduce support tickets related to navigation issues, and improve overall conversion rates."
        }}
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-TEXT-03: Three Column Text</h3>
      </div>
      
      <ThreeColumnText
        sectionCode="L-TEXT-03"
        columns={[
          {
            heading: "Research",
            paragraph: "We started with comprehensive user research to understand pain points and opportunities."
          },
          {
            heading: "Design",
            paragraph: "Based on research insights, we created wireframes and prototypes to test with users."
          },
          {
            heading: "Implementation",
            paragraph: "We worked closely with developers to ensure the final product matched design specifications."
          }
        ]}
      />
      
      {/* IMAGE LAYOUTS */}
      <h2 className={`${priFont.className} text-[28px] font-bold mb-[40px] mt-[80px]`}>Image Layouts</h2>
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-IMG-01: Full Width Image</h3>
      </div>
      
      <FullWidthImage
        sectionCode="L-IMG-01"
        image={{
          src: "https://placehold.co/1200x600/e6e6e6/808080?text=Full+Width+Image",
          alt: "Full width placeholder image"
        }}
        caption="Caption for the full width image with additional context or explanation"
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-IMG-02: Two Column Images</h3>
      </div>
      
      <TwoColumnImages
        sectionCode="L-IMG-02"
        leftImage={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=Left+Image",
          alt: "Left side placeholder image"
        }}
        rightImage={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=Right+Image",
          alt: "Right side placeholder image"
        }}
        caption="Comparison of two different design approaches explored during the process"
      />
      
      {/* MIXED CONTENT LAYOUTS */}
      <h2 className={`${priFont.className} text-[28px] font-bold mb-[40px] mt-[80px]`}>Mixed Content Layouts</h2>
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-MIXED-01: Image Left, Text Right</h3>
      </div>
      
      <ImageLeftTextRight
        sectionCode="L-MIXED-01"
        image={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=Image",
          alt: "Placeholder image on the left"
        }}
        content={{
          heading: "Key Insights",
          subheading: "What we discovered",
          paragraph: "Our research revealed that users were struggling with the complex navigation system. Many reported difficulty finding important features and frequently abandoned tasks out of frustration."
        }}
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-MIXED-02: Text Left, Image Right</h3>
      </div>
      
      <TextLeftImageRight
        sectionCode="L-MIXED-02"
        image={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=Image",
          alt: "Placeholder image on the right"
        }}
        content={{
          heading: "Solution Overview",
          subheading: "How we addressed the problem",
          paragraph: "We designed a simplified navigation system with clear categorization and reduced the number of top-level items. The new structure makes it easier for users to find the features they need."
        }}
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-MIXED-03: Image Top, Text Bottom</h3>
      </div>
      
      <ImageTopTextBottom
        sectionCode="L-MIXED-03"
        image={{
          src: "https://placehold.co/1200x400/e6e6e6/808080?text=Image+Top",
          alt: "Placeholder image at the top"
        }}
        content={{
          heading: "User Testing Results",
          paragraph: "We conducted usability testing with 12 participants to evaluate our design solutions. The results showed a significant improvement in task completion rates and user satisfaction scores compared to the previous design."
        }}
      />
      
      {/* SPECIAL LAYOUTS */}
      <h2 className={`${priFont.className} text-[28px] font-bold mb-[40px] mt-[80px]`}>Special Layouts</h2>
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-SPECIAL-01: Highlight Box</h3>
      </div>
      
      <HighlightBox
        sectionCode="L-SPECIAL-01"
        content={{
          heading: "Problem Statement",
          paragraph: "How might we redesign the navigation system to improve user experience and increase engagement while maintaining access to all critical features?"
        }}
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-SPECIAL-02: Card Grid</h3>
      </div>
      
      <CardGrid
        sectionCode="L-SPECIAL-02"
        columns={2}
        showNumbers={true}
        cards={[
          {
            heading: "Complex Navigation",
            paragraph: "Users struggled to find important features due to deeply nested menus and inconsistent navigation patterns."
          },
          {
            heading: "Outdated Visual Design",
            paragraph: "The interface looked dated compared to competitors, reducing perceived credibility and user trust."
          },
          {
            heading: "Poor Mobile Experience",
            paragraph: "The platform was not fully responsive, causing frustration for the 60% of users who access it via mobile devices."
          },
          {
            heading: "Confusing User Flows",
            paragraph: "Critical tasks like account setup and checkout had high abandonment rates due to unnecessarily complex flows."
          }
        ]}
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-SPECIAL-03: Quote</h3>
      </div>
      
      <Quote
        sectionCode="L-SPECIAL-03"
        quote="The new navigation system is so much easier to use. I can find what I need quickly without having to click through multiple menus."
        author="Sarah Johnson"
        role="User Research Participant"
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-SPECIAL-04: Process Steps</h3>
      </div>
      
      <ProcessSteps
        sectionCode="L-SPECIAL-04"
        steps={[
          {
            title: "Research",
            description: "Conducted user interviews and analyzed existing data to understand pain points."
          },
          {
            title: "Ideation",
            description: "Generated multiple design concepts based on research insights."
          },
          {
            title: "Prototyping",
            description: "Created interactive prototypes to test our design solutions."
          },
          {
            title: "User Testing",
            description: "Evaluated the designs with users to gather feedback."
          },
          {
            title: "Implementation",
            description: "Worked with developers to build the final solution."
          }
        ]}
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-SPECIAL-05: Before/After Comparison</h3>
      </div>
      
      <BeforeAfter
        sectionCode="L-SPECIAL-05"
        beforeImage={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=Before",
          alt: "Previous design"
        }}
        afterImage={{
          src: "https://placehold.co/600x400/e6e6e6/808080?text=After",
          alt: "New design"
        }}
        caption="Comparison of the navigation system before and after our redesign"
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-SPECIAL-06: Single Column Report</h3>
      </div>
      
      <SingleColumnReport
        sectionCode="L-SPECIAL-06"
        title="Single Column Report Format"
        intro="Consistency in layout, font usage, and design elements helps to create a professional and polished final product. By maintaining a uniform structure throughout the document, writers can ensure that their report is easy to navigate."
        sections={[
          {
            type: 'image-row',
            content: "",
            leftImage: {
              src: "https://placehold.co/350x350/f9f9f9/808080?text=Image+1",
              alt: "Left side placeholder image"
            },
            rightImage: {
              src: "https://placehold.co/350x350/f9f9f9/808080?text=Image+2",
              alt: "Right side placeholder image"
            }
          },
          {
            type: 'paragraph',
            content: "In addition to its simplicity, the single column report format is highly versatile. It can be used for a variety of document types, from business reports and academic papers to newsletters and magazines. This versatility makes it a popular choice for many writers and designers who need a reliable and straightforward way to present their content."
          },
          {
            type: 'quote',
            content: "The single column format also lends itself well to digital media. On screens of various sizes, from smartphones to desktop monitors, a single column layout can adapt more readily to different viewing environments. This flexibility is especially important in an age where content is often consumed on multiple devices.",
            author: "Name Surname"
          },
          {
            type: 'paragraph',
            content: "The single column report format is a structured way of presenting information where all text and visual elements are aligned in a single, continuous column. This format is particularly effective for creating a clean, organized look that guides the reader through the document in a linear fashion. It is commonly used in reports, articles, and other written documents to enhance readability and maintain a consistent flow of information."
          },
          {
            type: 'subheading',
            content: "Simplicity"
          },
          {
            type: 'paragraph',
            content: "One of the primary advantages of using a single column layout is its simplicity. This format eliminates the need for complex page layouts and reduces visual clutter. By keeping all content within a single column, readers can easily follow the text without being distracted by multiple sections or sidebars, which can often disrupt the reading experience."
          }
        ]}
      />
      
      <div className="inline-block bg-black text-white px-[12px] py-[8px] mb-[20px]">
        <h3 className={`${secFont.className} text-[20px] font-medium`}>L-SPECIAL-07: Text with Image and Quote</h3>
      </div>
      
      <TextWithImageAndQuote
        sectionCode="L-SPECIAL-07"
        leftContent={{
          paragraph: "One of the primary advantages of using a single column layout is its simplicity. This format eliminates the need for complex page layouts and reduces visual clutter."
        }}
        mainImage={{
          src: "https://placehold.co/600x350/f9f9f9/808080?text=Main+Image",
          alt: "Main feature image"
        }}
        quote="This minimalist approach can help to highlight the most important information and make the document more engaging."
        author="Name Surname"
      />
      
      <div className={`${secFont.className} text-[16px] leading-[24px] mt-[120px] p-[24px] border border-[#e0e0e0] rounded-lg bg-[#f9f9f9]`}>
        <p className="mb-[16px]"><strong>How to use these layouts:</strong></p>
        <p className="mb-[8px]">1. Import the desired component from <code className="bg-white px-[4px] py-[2px] rounded text-[14px]">../components/layouts</code></p>
        <p className="mb-[8px]">2. Include the component in your page with the appropriate props</p>
        <p className="mb-[8px]">3. Reference the section code (e.g., L-TEXT-01) when discussing specific layouts</p>
      </div>
    </div>
  );
} 