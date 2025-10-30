'use client';

import React from 'react';
import { jakartaFont } from '../../../fonts';
import { PortfolioButton } from '../../../components/portfolio_button';

interface ArticleCardProps {
  title: string;
  author: string;
  publishDate: string;
  summary: string;
  imageSrc?: string;
  onReadArticle?: () => void;
  onSummarize?: () => void;
}

export default function ArticleCard({
  title,
  author,
  publishDate,
  summary,
  imageSrc,
  onReadArticle,
  onSummarize,
}: ArticleCardProps) {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative size-full">
      {/* Title Column */}
      <div className="content-stretch flex flex-col gap-[20px] h-full items-start justify-end relative shrink-0 w-[480px]">
        <h2 className={`${jakartaFont.className} font-medium leading-[1.1] min-w-full relative shrink-0 text-[38px] text-black w-[min-content]`}>
          {title}
        </h2>
        <p className={`${jakartaFont.className} font-medium leading-[1.1] relative shrink-0 text-[15.875px] text-black w-[352.778px]`}>
          Published by {author} on {publishDate}
        </p>
        <button
          onClick={onReadArticle}
          className="bg-white border-[0.882px] border-black border-solid box-border content-stretch flex gap-[14.972px] items-center justify-center p-[14.972px] relative rounded-[79.375px] shrink-0 hover:bg-gray-50 transition-colors duration-200"
        >
          <p className={`${jakartaFont.className} font-bold leading-[1.1] relative shrink-0 text-[32.939px] text-black text-nowrap tracking-[-1.3176px] whitespace-pre`}>
            read the full article
          </p>
        </button>
      </div>

      {/* Image Column */}
      <div className="bg-[#f2f2f2] h-[400px] overflow-clip relative rounded-[16px] w-[512px]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Article illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className={`${jakartaFont.className} text-gray-500 text-sm`}>
              Image placeholder
            </p>
          </div>
        )}
      </div>

      {/* Article Summary Column */}
      <div className="bg-[#f2f2f2] box-border content-stretch flex flex-col gap-[20px] h-full items-start p-[32px] relative rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[400px]">
        <p className={`${jakartaFont.className} font-medium leading-[1.1] min-w-full relative shrink-0 text-[21px] text-black w-[min-content]`}>
          {summary}
        </p>
        <PortfolioButton
          variant="with-symbol"
          symbolColor="#f9c842"
          onClick={onSummarize}
          className="h-[36px]"
        >
          Summarize
        </PortfolioButton>
      </div>
    </div>
  );
}
