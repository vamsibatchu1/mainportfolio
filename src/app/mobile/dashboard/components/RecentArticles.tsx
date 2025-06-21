'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ArticlesSheet } from './articles-sheet';

// Image constants from Figma
const imgImage1 = "http://localhost:3845/assets/0710408050e27c729bcca4743ad19e12e4fe9b44.png";
const imgImage2 = "http://localhost:3845/assets/50275703f70bd26404e1a6ec4cd0a16d48ba297a.png";

// Article data interface
interface ArticleData {
  title: string;
  readTime: string;
  publishedDate: string;
  substackUrl?: string;
}

// Article data
const articlesData: ArticleData[] = [
  {
    title: "Unpacking the UX of deep research",
    readTime: "12 min read",
    publishedDate: "Published Apr 14",
    substackUrl: "https://vamsibatchu.substack.com/p/unpacking-the-ux-approaches-of-the"
  },
  {
    title: "Home buying expectations",
    readTime: "2 min read", 
    publishedDate: "Published Feb 15",
    substackUrl: "https://example.com/article2"
  },
  {
    title: "Design principles",
    readTime: "3 min read",
    publishedDate: "Published Feb 12",
    substackUrl: "https://example.com/article3"
  },
  {
    title: "The future of enterprise design",
    readTime: "5 min read",
    publishedDate: "Published Feb 10",
    substackUrl: "https://example.com/article4"
  }
];

// Simplified Button Component
const Button = () => (
  <div className="bg-[#f2f2f2] rounded-full w-8 h-8 flex items-center justify-center">
    <ChevronRight className="w-4 h-4 text-[#666666]" />
  </div>
);

export const RecentArticles: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);

  const handleArticleClick = (article: ArticleData) => {
    setSelectedArticle(article);
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
    setSelectedArticle(null);
  };
  return (
    <div className="relative shrink-0 w-full pl-6">
      <div className="flex flex-col gap-5 items-start justify-start w-full">
        
        {/* Title */}
        <div className="font-jakarta font-semibold text-[#111111] text-[20px] text-nowrap">
          <p className="leading-[24px]">Read my recent articles</p>
        </div>
        
        {/* Articles Carousel */}
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-3 items-start justify-start min-w-max pr-6">
            {articlesData.map((article, index) => (
              <button
                key={index}
                onClick={() => handleArticleClick(article)}
                className="bg-[#f7f7f7] rounded-2xl w-80 p-4 hover:bg-[#f0f0f0] transition-colors duration-200"
              >
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <div className="flex flex-row gap-4 items-center flex-1">
                    {/* Article Image */}
                    <div 
                      className="bg-center bg-cover bg-no-repeat rounded-lg w-[72px] h-[72px]"
                      style={{ backgroundImage: `url('${index % 2 === 0 ? imgImage1 : imgImage2}')` }}
                    />
                    
                    {/* Article Content */}
                    <div className="flex-1 text-left">
                      <div className="flex flex-col gap-1 items-start justify-start">
                        <div className="font-jakarta font-semibold text-[#111111] text-[16px] w-full">
                          <p className="leading-[20px]">{article.title}</p>
                        </div>
                        <div className="font-jakarta font-medium text-[#545454] text-[14px] w-full">
                          <p className="leading-[20px]">{article.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Button */}
                  <Button />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Articles Sheet */}
      <ArticlesSheet 
        isOpen={isSheetOpen}
        onClose={handleCloseSheet}
        article={selectedArticle}
      />
    </div>
  );
}; 