'use client';

import React from 'react';
import { jakartaFont } from '../../../fonts';

interface ArticleItem {
  title: string;
  author: string;
  publishDate: string;
}

interface AllArticlesCarouselProps {
  articles?: ArticleItem[];
  onArticleClick?: (article: ArticleItem) => void;
}

const defaultArticles: ArticleItem[] = [
  {
    title: "How prompt to UI tools are reshaping product development",
    author: "John Maverick",
    publishDate: "January 1, 2024"
  },
  {
    title: "Building better user experiences through design systems",
    author: "Sarah Chen",
    publishDate: "December 15, 2023"
  },
  {
    title: "The future of AI in product design workflows and automation",
    author: "Alex Rodriguez",
    publishDate: "November 28, 2023"
  }
];

export default function AllArticlesCarousel({ 
  articles = defaultArticles, 
  onArticleClick 
}: AllArticlesCarouselProps) {
  return (
    <div className="w-full">
      {/* Title */}
      
      {/* Horizontal Scrolling Carousel */}
      <div className="overflow-x-auto">
        <div className="flex gap-[24px] items-center pb-4" style={{ width: 'max-content' }}>
          {articles.map((article, index) => (
            <div 
              key={index}
              className="bg-[#f2f2f2] box-border flex flex-col gap-[12px] items-start justify-between p-[24px] relative rounded-[16px] shrink-0 w-[500px] cursor-pointer hover:bg-gray-200 transition-colors duration-200 overflow-hidden"
              onClick={() => onArticleClick?.(article)}
            >
              <p className={`${jakartaFont.className} font-medium leading-[1.2] text-[20px] text-black w-full break-words`}>
                {article.title}
              </p>
              <p className={`${jakartaFont.className} font-medium leading-[1.2] text-[#5d5d5d] text-[16px] w-full break-words`}>
                Published by {article.author} on {article.publishDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
