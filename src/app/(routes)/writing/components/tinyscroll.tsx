import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { jakartaFont } from '../../../fonts';
import { TextShimmer } from './shimmer-text';

interface ExampleScrollAreaProps {
  height?: number;
  selectedFile?: string | null;
}

// Mock content for different files
const getFileContent = (fileName: string | null) => {
  if (!fileName) return "Select a file to view its content";
  
  const contentMap: Record<string, string> = {
    "product-thinking.md": `# Product Thinking

This document explores the fundamentals of product thinking and how to approach product development with a user-centric mindset.

## Key Principles

- **User Empathy**: Understanding the real problems users face
- **Data-Driven Decisions**: Using metrics and feedback to guide product direction
- **Iterative Development**: Building, measuring, and learning in cycles
- **Cross-functional Collaboration**: Working closely with design, engineering, and business teams

## The Product Thinking Process

1. **Discovery**: Research and understand user needs
2. **Definition**: Clearly define the problem and success metrics
3. **Ideation**: Generate and evaluate potential solutions
4. **Prototyping**: Build and test concepts quickly
5. **Validation**: Gather feedback and iterate

*This is a work in progress document that will be expanded with more detailed insights and case studies.*`,

    "design-systems.md": `# Design Systems

Building and maintaining a cohesive design system that scales across teams and products.

## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.

## Core Components

- **Design Tokens**: Colors, typography, spacing, and other visual properties
- **Component Library**: Reusable UI components with consistent behavior
- **Patterns**: Common interaction patterns and layouts
- **Documentation**: Guidelines and best practices for implementation

## Benefits

- **Consistency**: Ensures a cohesive user experience across all touchpoints
- **Efficiency**: Reduces design and development time through reusability
- **Quality**: Promotes best practices and accessibility standards
- **Collaboration**: Creates a shared language between design and development teams`,

    "user-research.md": `# User Research

Understanding users through systematic research methods to inform product decisions.

## Research Methods

### Qualitative Research
- **User Interviews**: One-on-one conversations to understand motivations and pain points
- **Usability Testing**: Observing users interact with products to identify issues
- **Contextual Inquiry**: Studying users in their natural environment

### Quantitative Research
- **Surveys**: Gathering data from large user populations
- **Analytics**: Analyzing user behavior through data
- **A/B Testing**: Comparing different versions to measure impact

## Research Process

1. **Planning**: Define research goals and select appropriate methods
2. **Recruitment**: Find and schedule participants
3. **Execution**: Conduct research sessions
4. **Analysis**: Synthesize findings and identify insights
5. **Sharing**: Communicate results to stakeholders

*This document will be updated with specific research findings and methodologies.*`
  };

  return contentMap[fileName] || `# ${fileName}

This is a placeholder for the content of ${fileName}. 

In a real application, this content would be loaded from a file system or content management system. The content would be dynamically generated based on the selected file.

## Features to implement:
- File content loading
- Markdown rendering
- Syntax highlighting
- Search functionality
- Version history

*This is a work in progress document.*`;
};

export default function ExampleScrollArea({ height = 136, selectedFile }: ExampleScrollAreaProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [currentContent, setCurrentContent] = useState<string>('');

  useEffect(() => {
    if (selectedFile) {
      // Show loading state
      setIsLoading(true);
      setShowContent(false);
      
      // After 2 seconds, show content
      const timer = setTimeout(() => {
        setCurrentContent(getFileContent(selectedFile));
        setIsLoading(false);
        setShowContent(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setCurrentContent(getFileContent(null));
      setIsLoading(false);
      setShowContent(true);
    }
  }, [selectedFile]);
  
  return (
    <ScrollArea 
      className="w-full rounded-md border"
      style={{ height: `${height}px` }}
    >
      <div className={`${jakartaFont.className} flex flex-col gap-4 py-3 pr-6 pl-4 text-sm leading-[1.375rem] text-gray-900`}>
        {isLoading ? (
          <div className="flex items-start h-full">
            <TextShimmer duration={2} spread={3}>
              Pulling drafts...
            </TextShimmer>
          </div>
        ) : (
          <div 
            className={`whitespace-pre-wrap transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
          >
            {currentContent}
          </div>
        )}
        </div>
    </ScrollArea>
  );
}
