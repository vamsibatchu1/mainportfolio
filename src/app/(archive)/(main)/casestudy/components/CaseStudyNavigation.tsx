"use client";

import React, { useState } from 'react';
import { ChevronLeft, Send } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { secFont, triFont } from '@/lib/config/fonts';

interface Section {
  id: string;
  title: string;
}

interface CaseStudyNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const CaseStudyNavigation: React.FC<CaseStudyNavigationProps> = ({
  sections,
  activeSection,
  onSectionChange,
}) => {
  const [question, setQuestion] = useState('');

  const handleSubmitQuestion = () => {
    if (question.trim()) {
      // Handle question submit
      setQuestion("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmitQuestion();
    }
  };

  return (
    <div className="w-[300px] md:w-[350px] lg:w-[400px] bg-background border-r h-screen sticky top-0 flex flex-col">
      <ScrollArea className="flex-grow">
        <div className="flex flex-col min-h-[calc(100vh-16px)] p-8">
          <div id='details-container-navigation'>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ChevronLeft size={16} />
            </Link>

            <h1 className={`${secFont.className} text-xl font-medium mb-4 leading-tight md:text-2xl tracking-[-0.3px]`}>
              Revolutionizing Health Tracking with AI
            </h1>
            
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              A comprehensive case study on creating an innovative health monitoring application 
              that leverages artificial intelligence.
            </p>

            
            <Card className="bg-gray-100 p-4 mb-8 border-[0px]">
            <h2 className={`${secFont.className} text-md font-medium mb-3 tracking-[-0.2px]`}>
              Table of Contents
            </h2>
              <ul className="flex flex-col gap-3">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className={
                      cn(
                        `${triFont.className} text-sm cursor-pointer py-1 hover:text-foreground transition-colors tracking-[-0.2px]`,
                        activeSection === section.id
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      )
                    }
                    onClick={() => onSectionChange(section.id)}
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div id='ask-me-anything' className="mt-auto pt-8">
            <h2 className={`${secFont.className} text-lg font-medium mb-3 tracking-[-0.2px]`}>
              Ask me anything
            </h2>
            <div className="relative flex gap-2">
              <Input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question about this project..."
                className="w-full"
              />
              <Button 
                size="icon" 
                onClick={handleSubmitQuestion}
                disabled={!question.trim()}
                aria-label="Send question"
                className="bg-blue-500 hover:bg-blue-600"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default CaseStudyNavigation; 