"use client";

import React from 'react';
import { louize, doto } from '../../fonts';
import Image from 'next/image';

// Types for props
interface TextContentProps {
  heading?: string;
  subheading?: string;
  paragraph: string;
  caption?: string;
}

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

// Basic section props that most layouts share
interface BaseSectionProps {
  id?: string;
  className?: string;
  sectionCode: string; // Unique identifier for the section layout
}

// TEXT COMPONENTS

// L-TEXT-01: Full width text section with heading and paragraph
interface FullWidthTextProps extends BaseSectionProps {
  content: TextContentProps;
}

export const FullWidthText = ({ content, className = "", sectionCode = "L-TEXT-01", id }: FullWidthTextProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      {content.heading && (
        <h2 className={`${louize.className} text-[28px] font-normal mb-[20px] tracking-[-0.5px]`}>
          {content.heading}
        </h2>
      )}
      {content.subheading && (
        <h3 className={`${louize.className} text-[22px] text-[#6f6f6f] mb-[16px] tracking-[-0.3px]`}>
          {content.subheading}
        </h3>
      )}
      <p className={`${louize.className} text-[18px] leading-[28px] tracking-[-0.2px]`}>
        {content.paragraph}
      </p>
      {content.caption && (
        <p className={`${louize.className} text-[14px] text-[#6f6f6f] mt-[12px] italic`}>
          {content.caption}
        </p>
      )}
    </section>
  );
};

// L-TEXT-02: Two column text layout
interface TwoColumnTextProps extends BaseSectionProps {
  leftContent: TextContentProps;
  rightContent: TextContentProps;
  leftWidth?: string;
  rightWidth?: string;
}

export const TwoColumnText = ({ 
  leftContent, 
  rightContent, 
  leftWidth = "w-1/2", 
  rightWidth = "w-1/2", 
  className = "", 
  sectionCode = "L-TEXT-02",
  id
}: TwoColumnTextProps) => {
  return (
    <section id={id} className={`flex flex-wrap mb-[80px] gap-[40px] ${className}`} data-layout-code={sectionCode}>
      <div className={leftWidth}>
        {leftContent.heading && (
          <h2 className={`${louize.className} text-[24px] font-normal mb-[16px] tracking-[-0.4px]`}>
            {leftContent.heading}
          </h2>
        )}
        <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
          {leftContent.paragraph}
        </p>
      </div>
      <div className={rightWidth}>
        {rightContent.heading && (
          <h2 className={`${louize.className} text-[24px] font-normal mb-[16px] tracking-[-0.4px]`}>
            {rightContent.heading}
          </h2>
        )}
        <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
          {rightContent.paragraph}
        </p>
      </div>
    </section>
  );
};

// L-TEXT-03: Three column text grid
interface ThreeColumnTextProps extends BaseSectionProps {
  columns: TextContentProps[];
}

export const ThreeColumnText = ({ columns, className = "", sectionCode = "L-TEXT-03", id }: ThreeColumnTextProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className="grid grid-cols-3 gap-[40px]">
        {columns.map((column, index) => (
          <div key={index}>
            {column.heading && (
              <h3 className={`${louize.className} text-[20px] font-normal mb-[12px] tracking-[-0.3px]`}>
                {column.heading}
              </h3>
            )}
            <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
              {column.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// IMAGE LAYOUTS

// L-IMG-01: Full width image with optional caption
interface FullWidthImageProps extends BaseSectionProps {
  image: ImageProps;
  caption?: string;
}

export const FullWidthImage = ({ image, caption, className = "", sectionCode = "L-IMG-01", id }: FullWidthImageProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className="w-full">
        <Image 
          src={image.src} 
          alt={image.alt} 
          width={image.width || 1200} 
          height={image.height || 800} 
          priority={image.priority}
          className="w-full h-auto"
        />
        {caption && (
          <p className={`${louize.className} text-[14px] text-[#6f6f6f] mt-[12px] italic`}>
            {caption}
          </p>
        )}
      </div>
    </section>
  );
};

// L-IMG-02: Two column images
interface TwoColumnImagesProps extends BaseSectionProps {
  leftImage: ImageProps;
  rightImage: ImageProps;
  caption?: string;
}

export const TwoColumnImages = ({ leftImage, rightImage, caption, className = "", sectionCode = "L-IMG-02", id }: TwoColumnImagesProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className="flex gap-[24px]">
        <div className="w-1/2">
          <Image 
            src={leftImage.src} 
            alt={leftImage.alt} 
            width={leftImage.width || 600} 
            height={leftImage.height || 400}
            className="w-full h-auto" 
          />
        </div>
        <div className="w-1/2">
          <Image 
            src={rightImage.src} 
            alt={rightImage.alt} 
            width={rightImage.width || 600} 
            height={rightImage.height || 400}
            className="w-full h-auto" 
          />
        </div>
      </div>
      {caption && (
        <p className={`${louize.className} text-[14px] text-[#6f6f6f] mt-[12px] italic`}>
          {caption}
        </p>
      )}
    </section>
  );
};

// MIXED CONTENT LAYOUTS

// L-MIXED-01: Image left, text right
interface ImageLeftTextRightProps extends BaseSectionProps {
  image: ImageProps;
  content: TextContentProps;
  imageWidth?: string;
  contentWidth?: string;
}

export const ImageLeftTextRight = ({ 
  image, 
  content, 
  imageWidth = "w-1/2", 
  contentWidth = "w-1/2", 
  className = "", 
  sectionCode = "L-MIXED-01",
  id
}: ImageLeftTextRightProps) => {
  return (
    <section id={id} className={`flex flex-wrap mb-[80px] gap-[40px] ${className}`} data-layout-code={sectionCode}>
      <div className={imageWidth}>
        <Image 
          src={image.src} 
          alt={image.alt} 
          width={image.width || 600} 
          height={image.height || 400}
          className="w-full h-auto"
        />
      </div>
      <div className={contentWidth}>
        {content.heading && (
          <h2 className={`${louize.className} text-[24px] font-normal mb-[16px] tracking-[-0.4px]`}>
            {content.heading}
          </h2>
        )}
        {content.subheading && (
          <h3 className={`${louize.className} text-[20px] text-[#6f6f6f] mb-[12px] tracking-[-0.3px]`}>
            {content.subheading}
          </h3>
        )}
        <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
          {content.paragraph}
        </p>
      </div>
    </section>
  );
};

// L-MIXED-02: Text left, image right
export const TextLeftImageRight = ({ 
  image, 
  content, 
  imageWidth = "w-1/2", 
  contentWidth = "w-1/2", 
  className = "", 
  sectionCode = "L-MIXED-02",
  id
}: ImageLeftTextRightProps) => {
  return (
    <section id={id} className={`flex flex-wrap mb-[80px] gap-[40px] ${className}`} data-layout-code={sectionCode}>
      <div className={contentWidth}>
        {content.heading && (
          <h2 className={`${louize.className} text-[24px] font-normal mb-[16px] tracking-[-0.4px]`}>
            {content.heading}
          </h2>
        )}
        {content.subheading && (
          <h3 className={`${louize.className} text-[20px] text-[#6f6f6f] mb-[12px] tracking-[-0.3px]`}>
            {content.subheading}
          </h3>
        )}
        <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
          {content.paragraph}
        </p>
      </div>
      <div className={imageWidth}>
        <Image 
          src={image.src} 
          alt={image.alt} 
          width={image.width || 600} 
          height={image.height || 400}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

// L-MIXED-03: Image top, text bottom
interface ImageTopTextBottomProps extends BaseSectionProps {
  image: ImageProps;
  content: TextContentProps;
}

export const ImageTopTextBottom = ({ image, content, className = "", sectionCode = "L-MIXED-03", id }: ImageTopTextBottomProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className="w-full mb-[32px]">
        <Image 
          src={image.src} 
          alt={image.alt} 
          width={image.width || 1200} 
          height={image.height || 800}
          className="w-full h-auto"
        />
      </div>
      <div>
        {content.heading && (
          <h2 className={`${louize.className} text-[24px] font-normal mb-[16px] tracking-[-0.4px]`}>
            {content.heading}
          </h2>
        )}
        <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
          {content.paragraph}
        </p>
      </div>
    </section>
  );
};

// SPECIAL LAYOUTS

// L-SPECIAL-01: Highlight box with border
interface HighlightBoxProps extends BaseSectionProps {
  content: TextContentProps;
  borderColor?: string;
  backgroundColor?: string;
}

export const HighlightBox = ({ 
  content, 
  borderColor = "border-black", 
  backgroundColor = "bg-[#f9f9f9]", 
  className = "", 
  sectionCode = "L-SPECIAL-01",
  id
}: HighlightBoxProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className={`p-[32px] border-l-4 ${borderColor} ${backgroundColor} rounded-r-lg`}>
        {content.heading && (
          <h2 className={`${doto.className} text-[22px] font-bold mb-[16px] tracking-[-0.3px]`}>
            {content.heading}
          </h2>
        )}
        <p className={`${louize.className} text-[18px] leading-[28px] tracking-[-0.2px] ${content.heading ? "" : "italic"}`}>
          {content.paragraph}
        </p>
      </div>
    </section>
  );
};

// L-SPECIAL-02: Card grid
interface CardItem extends TextContentProps {
  icon?: string;
  number?: number;
}

interface CardGridProps extends BaseSectionProps {
  cards: CardItem[];
  columns?: 2 | 3 | 4;
  showNumbers?: boolean;
}

export const CardGrid = ({ 
  cards, 
  columns = 2, 
  showNumbers = false, 
  className = "", 
  sectionCode = "L-SPECIAL-02",
  id
}: CardGridProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className={`grid grid-cols-${columns} gap-[24px]`}>
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-[24px] rounded-lg border border-[#e0e0e0]">
            <div className="flex items-start mb-[16px]">
              {showNumbers && (
                <div className="w-[32px] h-[32px] rounded-full bg-[#f3f3f3] flex items-center justify-center mr-[12px]">
                  <span className={`${doto.className} text-black font-bold`}>{index + 1}</span>
                </div>
              )}
              {card.heading && (
                <h3 className={`${doto.className} text-[18px] font-bold`}>{card.heading}</h3>
              )}
            </div>
            <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
              {card.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// L-SPECIAL-03: Quote with large typography
interface QuoteProps extends BaseSectionProps {
  quote: string;
  author?: string;
  role?: string;
}

export const Quote = ({ quote, author, role, className = "", sectionCode = "L-SPECIAL-03", id }: QuoteProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className="py-[40px] border-t border-b border-[#e0e0e0]">
        <p className={`${louize.className} text-[28px] leading-[36px] tracking-[-0.5px] italic mb-[24px]`}>
          &ldquo;{quote}&rdquo;
        </p>
        {author && (
          <div>
            <p className={`${doto.className} text-[16px] font-bold`}>{author}</p>
            {role && <p className={`${louize.className} text-[14px] text-[#6f6f6f]`}>{role}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

// L-SPECIAL-04: Process steps with connected lines
interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessStepsProps extends BaseSectionProps {
  steps: ProcessStep[];
}

export const ProcessSteps = ({ steps, className = "", sectionCode = "L-SPECIAL-04", id }: ProcessStepsProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="flex mb-[40px] relative">
            <div className="mr-[24px]">
              <div className="w-[40px] h-[40px] rounded-full bg-black text-white flex items-center justify-center">
                <span className={`${doto.className} font-bold`}>{index + 1}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-[40px] left-[20px] w-[2px] h-[40px] bg-[#e0e0e0]"></div>
              )}
            </div>
            <div>
              <h3 className={`${doto.className} text-[20px] font-bold mb-[8px]`}>{step.title}</h3>
              <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// L-SPECIAL-05: Before/After comparison
interface BeforeAfterProps extends BaseSectionProps {
  beforeImage: ImageProps;
  afterImage: ImageProps;
  caption?: string;
}

export const BeforeAfter = ({ beforeImage, afterImage, caption, className = "", sectionCode = "L-SPECIAL-05", id }: BeforeAfterProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className="flex gap-[24px]">
        <div className="w-1/2">
          <div className="mb-[8px] text-center">
            <span className={`${doto.className} text-[16px] font-bold`}>Before</span>
          </div>
          <Image 
            src={beforeImage.src} 
            alt={beforeImage.alt || "Before image"} 
            width={beforeImage.width || 600} 
            height={beforeImage.height || 400}
            className="w-full h-auto border border-[#e0e0e0]" 
          />
        </div>
        <div className="w-1/2">
          <div className="mb-[8px] text-center">
            <span className={`${doto.className} text-[16px] font-bold`}>After</span>
          </div>
          <Image 
            src={afterImage.src} 
            alt={afterImage.alt || "After image"} 
            width={afterImage.width || 600} 
            height={afterImage.height || 400}
            className="w-full h-auto border border-[#e0e0e0]" 
          />
        </div>
      </div>
      {caption && (
        <p className={`${louize.className} text-[14px] text-[#6f6f6f] mt-[12px] italic text-center`}>
          {caption}
        </p>
      )}
    </section>
  );
};

// L-SPECIAL-06: Single Column Report format
interface ReportSection {
  type: 'heading' | 'paragraph' | 'quote' | 'subheading' | 'image-row';
  content: string;
  author?: string;
  title?: string;
  leftImage?: ImageProps;
  rightImage?: ImageProps;
}

interface SingleColumnReportProps extends BaseSectionProps {
  title?: string;
  intro?: string;
  sections: ReportSection[];
}

export const SingleColumnReport = ({ 
  title, 
  intro, 
  sections, 
  className = "", 
  sectionCode = "L-SPECIAL-06",
  id
}: SingleColumnReportProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      <div className="max-w-[720px]">
        {title && (
          <h2 className={`${doto.className} text-[30px] font-bold mb-[30px] tracking-[-0.5px]`}>
            {title}
          </h2>
        )}
        
        {intro && (
          <p className={`${louize.className} text-[18px] leading-[28px] tracking-[-0.2px] mb-[40px]`}>
            {intro}
          </p>
        )}
        
        <div className="space-y-[32px]">
          {sections.map((section, index) => {
            switch(section.type) {
              case 'heading':
                return (
                  <h3 key={index} className={`${louize.className} text-[24px] font-medium tracking-[-0.4px]`}>
                    {section.content}
                  </h3>
                );
              case 'subheading':
                return (
                  <h4 key={index} className={`${louize.className} text-[20px] font-medium tracking-[-0.3px] text-[#E05D2A]`}>
                    {section.content}
                  </h4>
                );
              case 'paragraph':
                return (
                  <p key={index} className={`${louize.className} text-[18px] leading-[28px] tracking-[-0.2px]`}>
                    {section.content}
                  </p>
                );
              case 'quote':
                return (
                  <div key={index} className="pl-[24px] border-l-2 border-[#e0e0e0] py-[8px]">
                    <p className={`${louize.className} text-[18px] leading-[28px] tracking-[-0.2px] italic mb-[8px]`}>
                      &ldquo;{section.content}&rdquo;
                    </p>
                    {section.author && (
                      <div>
                        <p className={`${louize.className} text-[16px] font-medium`}>{section.author}</p>
                        {section.title && <p className={`${louize.className} text-[14px] text-[#6f6f6f]`}>{section.title}</p>}
                      </div>
                    )}
                  </div>
                );
              case 'image-row':
                return (
                  <div key={index} className="flex gap-[24px]">
                    {section.leftImage && (
                      <div className="w-1/2">
                        <Image 
                          src={section.leftImage.src} 
                          alt={section.leftImage.alt} 
                          width={section.leftImage.width || 350} 
                          height={section.leftImage.height || 350}
                          className="w-full h-auto bg-[#f9f9f9]" 
                        />
                      </div>
                    )}
                    {section.rightImage && (
                      <div className="w-1/2">
                        <Image 
                          src={section.rightImage.src} 
                          alt={section.rightImage.alt} 
                          width={section.rightImage.width || 350} 
                          height={section.rightImage.height || 350}
                          className="w-full h-auto bg-[#f9f9f9]" 
                        />
                      </div>
                    )}
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
};

// L-SPECIAL-07: Text with Full-width Image and centered quote
interface TextWithImageAndQuoteProps extends BaseSectionProps {
  leftContent: {
    paragraph: string;
  };
  mainImage: ImageProps;
  quote: string;
  author?: string;
}

export const TextWithImageAndQuote = ({ 
  leftContent, 
  mainImage, 
  quote, 
  author, 
  className = "", 
  sectionCode = "L-SPECIAL-07",
  id
}: TextWithImageAndQuoteProps) => {
  return (
    <section id={id} className={`mb-[80px] ${className}`} data-layout-code={sectionCode}>
      {/* First row: Text on left, Image on right */}
      <div className="flex mb-[60px]">
        <div className="w-[300px] mr-[24px]">
          <p className={`${louize.className} text-[16px] leading-[24px] tracking-[-0.2px]`}>
            {leftContent.paragraph}
          </p>
        </div>
        
        <div className="flex-1">
          <Image 
            src={mainImage.src} 
            alt={mainImage.alt} 
            width={mainImage.width || 600} 
            height={mainImage.height || 350}
            className="w-full h-auto bg-[#f9f9f9]" 
          />
        </div>
      </div>
      
      {/* Second row: Centered quote */}
      <div className="flex justify-center">
        <div className="max-w-[700px] text-center">
          <p className={`${louize.className} text-[28px] leading-[36px] tracking-[-0.5px] italic mb-[16px]`}>
            &ldquo;{quote}&rdquo;
          </p>
          {author && (
            <p className={`${louize.className} text-[16px] text-[#6f6f6f]`}>
              {author}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}; 