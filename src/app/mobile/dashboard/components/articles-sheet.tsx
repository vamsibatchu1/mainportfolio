'use client';

import React, { useState, useEffect } from 'react';
import { X, Share } from 'lucide-react';

// Simple inline shimmer component
const ShimmerText: React.FC<{ children: string; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`animate-pulse bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </div>
  );
};

interface ArticleData {
  title: string;
  readTime: string;
  publishedDate: string;
  substackUrl?: string;
}

interface ArticlesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  article: ArticleData | null;
}

export const ArticlesSheet: React.FC<ArticlesSheetProps> = ({ isOpen, onClose, article }) => {
  const [aiSummary, setAiSummary] = useState<string>('');
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);

  // Generate AI summary when article changes
  useEffect(() => {
    if (article && isOpen) {
      setIsGeneratingSummary(true);
      setAiSummary('');
      
      // Simulate AI summary generation
      const generateSummary = () => {
        const summaries = {
          "Unpacking the UX of deep research": "This article explores the intersection of user experience design and deep research methodologies. It delves into how UX practitioners can leverage comprehensive research techniques to uncover meaningful insights that drive product innovation. The piece examines case studies where thorough research transformed user interfaces and experiences, highlighting the importance of going beyond surface-level user feedback to understand underlying behavioral patterns and motivations.",
          "Home buying expectations": "An insightful analysis of modern home buying trends and buyer expectations in today's market. The article discusses how digital transformation has reshaped the real estate experience, from virtual tours to AI-powered property recommendations.",
          "Design principles": "A comprehensive guide to fundamental design principles that every designer should master. This piece covers visual hierarchy, color theory, typography, and user-centered design approaches that create meaningful and effective user experiences.",
          "The future of enterprise design": "Exploring emerging trends in enterprise software design, this article examines how companies are reimagining business tools to be more intuitive, efficient, and user-friendly in the modern workplace."
        };
        
        return summaries[article.title as keyof typeof summaries] || "This article provides valuable insights into modern design practices and methodologies, offering practical guidance for professionals looking to enhance their craft and create more impactful user experiences.";
      };

      // Simulate API delay
      setTimeout(() => {
        setAiSummary(generateSummary());
        setIsGeneratingSummary(false);
      }, 2000);
    }
  }, [article, isOpen]);

  if (!isOpen || !article) return null;

  const handleShare = () => {
    // Placeholder for share functionality
    console.log('Share article:', article.title);
  };

  const handleReadOnSubstack = () => {
    if (article.substackUrl) {
      window.open(article.substackUrl, '_blank');
    } else {
      // Placeholder for substack link
      console.log('Read on substack:', article.title);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300 flex justify-center">
        <div className="bg-[#ffffff] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_0px_24px_0px_rgba(17,17,17,0.12)] mx-3 w-full max-w-[calc(393px-24px)] sm:w-[calc(393px-24px)]">
          <div className="flex flex-col items-center relative w-full h-full">
            <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start pb-8 pt-10 px-6 relative w-full h-full">
              
              {/* Header */}
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
                  <div className="font-jakarta font-semibold leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[28px] text-left text-nowrap">
                    <p className="block leading-[32px] overflow-inherit whitespace-pre">
                      My articles
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="relative shrink-0 w-6 h-6"
                  >
                    <X className="w-full h-full" />
                  </button>
                </div>
              </div>
              
              {/* Article Title */}
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
                  <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[20px] text-left w-full">
                    <p className="block leading-[24px]">
                      {article.title}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Article Details and Share Button */}
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative text-left w-full">
                      <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[14px] w-full">
                        <p className="block leading-[16px]">{article.readTime}</p>
                      </div>
                      <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                        <p className="block leading-[24px]">{article.publishedDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0">
                    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative">
                      <button
                        onClick={handleShare}
                        className="bg-[#e4e4e4] relative rounded-2xl shrink-0 size-12"
                      >
                        <div className="flex flex-row items-center justify-center relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative size-12">
                            <div className="relative shrink-0 size-6">
                              <Share className="w-full h-full" />
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Summary Area */}
              <div className="bg-[#f7f7f7] relative rounded-[20px] shrink-0 w-full min-h-[140px]">
                <div className="flex flex-col justify-start overflow-clip relative w-full h-full">
                  <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start px-5 py-6 relative w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
                        <span className="text-[#10b981] text-sm font-jakarta font-medium">AI Summary</span>
                      </div>
                      
                      {isGeneratingSummary ? (
                        <div className="space-y-3">
                          <ShimmerText className="text-[14px] font-jakarta font-medium leading-[20px]">
                            Analyzing article content and generating insights...
                          </ShimmerText>
                          <ShimmerText className="text-[14px] font-jakarta font-medium leading-[20px]">
                            Processing key themes and takeaways...
                          </ShimmerText>
                          <ShimmerText className="text-[14px] font-jakarta font-medium leading-[20px]">
                            Creating comprehensive summary...
                          </ShimmerText>
                        </div>
                      ) : aiSummary ? (
                        <div className="text-[#545454] text-[14px] font-jakarta font-medium leading-[20px]">
                          {aiSummary}
                        </div>
                      ) : (
                        <div className="text-[#999999] text-[14px] font-jakarta font-medium leading-[20px] italic">
                          AI summary will appear here...
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Read on Substack Button */}
              <button
                onClick={handleReadOnSubstack}
                className="bg-[#111111] h-12 relative rounded-[48px] shrink-0 w-[321px]"
              >
                <div className="flex flex-row items-center justify-center relative w-full h-full">
                  <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-5 py-3 relative w-[321px]">
                    <div className="font-jakarta font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                      <p className="block leading-[24px] whitespace-pre">
                        Read on substack
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 