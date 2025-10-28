import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Terminal } from 'lucide-react';
import { interFont } from '@/app/fonts';
import assistBrowsingAnimation from '../../../../../../../assets/animations/assist-browsing.json';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface VariantPodcastProps {
  content: string;
}

// Skeleton Loader Components
const WikipediaSkeleton = () => (
  <div className="w-full h-full bg-white p-2 animate-pulse">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
      <div className="h-3 bg-gray-200 rounded w-16"></div>
      <div className="h-3 bg-gray-200 rounded w-20"></div>
    </div>
    <div className="flex gap-4 mb-2">
      <div className="h-3 bg-blue-200 rounded w-12"></div>
      <div className="h-3 bg-gray-200 rounded w-8"></div>
    </div>
    <div className="space-y-1">
      <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-5/6 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-2/3 animate-pulse"></div>
    </div>
  </div>
);

const W3SchoolsSkeleton = () => (
  <div className="w-full h-full bg-white p-2 animate-pulse">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-4 h-4 bg-green-200 rounded"></div>
      <div className="h-3 bg-gray-200 rounded w-20"></div>
    </div>
    <div className="space-y-1">
      <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-4/5 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-3/5 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-5/6 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-2/3 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-4/5 animate-pulse"></div>
    </div>
  </div>
);

const ArchiveSkeleton = () => (
  <div className="w-full h-full bg-white p-2 animate-pulse">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-4 h-4 bg-orange-200 rounded"></div>
      <div className="h-3 bg-gray-200 rounded w-24"></div>
    </div>
    <div className="space-y-1">
      <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-2/3 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-4/5 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-3/4 animate-pulse"></div>
    </div>
  </div>
);

const CodepenSkeleton = () => (
  <div className="w-full h-full bg-white p-2 animate-pulse">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-4 h-4 bg-purple-200 rounded"></div>
      <div className="h-3 bg-gray-200 rounded w-16"></div>
    </div>
    <div className="space-y-1">
      <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-5/6 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-3/5 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-4/5 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-2/3 animate-pulse"></div>
    </div>
  </div>
);

export function VariantPodcast({ content }: VariantPodcastProps) {
  const [showHeader, setShowHeader] = useState(false);
  const [showTab1, setShowTab1] = useState(false);
  const [showTab2, setShowTab2] = useState(false);
  const [showTab3, setShowTab3] = useState(false);
  const [showTab4, setShowTab4] = useState(false);
  const [showScreenshots, setShowScreenshots] = useState(false);

  useEffect(() => {
    // Choreographed sequence
    const timers = [
      // Show header immediately
      setTimeout(() => setShowHeader(true), 0),
      
      // Show first tab after 1 second
      setTimeout(() => setShowTab1(true), 1000),
      
      // Show second tab after 2 seconds
      setTimeout(() => setShowTab2(true), 2000),
      
      // Show third tab after 3 seconds
      setTimeout(() => setShowTab3(true), 3000),
      
      // Show fourth tab after 4 seconds
      setTimeout(() => setShowTab4(true), 4000),
      
      // Show screenshots after 6 seconds (2 seconds after last tab appears)
      setTimeout(() => setShowScreenshots(true), 6000),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className={`content-stretch flex gap-[10px] items-center relative shrink-0 transition-all duration-500 ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <Lottie 
              animationData={assistBrowsingAnimation}
              loop={true}
              autoplay={true}
              style={{ width: 20, height: 20 }}
            />
          </div>
          <p className={`${interFont.className} font-normal leading-[20px] max-w-[320px] not-italic relative shrink-0 text-[16px] text-foreground whitespace-pre-wrap`}>
            Let me search that for you online
          </p>
        </div>
        
        {/* Horizontal scrolling browser tabs */}
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="flex gap-[24px] items-start min-w-max px-2">
            {/* Browser 1 - Wikipedia */}
            <div className={`bg-white border border-border border-solid box-border content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[266px] transition-all duration-500 ${showTab1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="border-b border-border border-l-0 border-r-0 border-solid border-t-0 box-border content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[10.667px]">
                  <Terminal className="w-[10.667px] h-[10.667px] text-muted-foreground" />
                </div>
                <p className={`${interFont.className} font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-muted-foreground text-nowrap`}>
                  Browsing https://en.wikipedia.org
                </p>
              </div>
              <div className="bg-[#f1f1f1] border-[0px_1px_1px] border-border border-solid box-border content-stretch flex flex-col h-[160px] items-start rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full relative overflow-hidden">
                {/* Wikipedia Content */}
                {!showScreenshots ? (
                  <WikipediaSkeleton />
                ) : (
                  <img
                    src="/api/screenshot?url=https://en.wikipedia.org/wiki/Main_Page"
                    alt="Wikipedia Screenshot"
                    className="w-full h-full object-cover"
                    style={{
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>
            </div>
            
            {/* Browser 2 - W3Schools */}
            <div className={`bg-white border border-border border-solid box-border content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[266px] transition-all duration-500 ${showTab2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="border-b border-border border-l-0 border-r-0 border-solid border-t-0 box-border content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[10.667px]">
                  <Terminal className="w-[10.667px] h-[10.667px] text-muted-foreground" />
                </div>
                <p className={`${interFont.className} font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-muted-foreground text-nowrap`}>
                  Browsing https://w3schools.com
                </p>
              </div>
              <div className="bg-[#f1f1f1] border-[0px_1px_1px] border-border border-solid box-border content-stretch flex flex-col h-[160px] items-start rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full relative overflow-hidden">
                {/* W3Schools Content */}
                {!showScreenshots ? (
                  <W3SchoolsSkeleton />
                ) : (
                  <img
                    src="/api/screenshot?url=https://w3schools.com"
                    alt="W3Schools Screenshot"
                    className="w-full h-full object-cover"
                    style={{
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>
            </div>

            {/* Browser 3 - Archive.org */}
            <div className={`bg-white border border-border border-solid box-border content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[266px] transition-all duration-500 ${showTab3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="border-b border-border border-l-0 border-r-0 border-solid border-t-0 box-border content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[10.667px]">
                  <Terminal className="w-[10.667px] h-[10.667px] text-muted-foreground" />
                </div>
                <p className={`${interFont.className} font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-muted-foreground text-nowrap`}>
                  Browsing https://archive.org
                </p>
              </div>
              <div className="bg-[#f1f1f1] border-[0px_1px_1px] border-border border-solid box-border content-stretch flex flex-col h-[160px] items-start rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full relative overflow-hidden">
                {/* Archive.org Content */}
                {!showScreenshots ? (
                  <ArchiveSkeleton />
                ) : (
                  <img
                    src="/api/screenshot?url=https://archive.org"
                    alt="Archive.org Screenshot"
                    className="w-full h-full object-cover"
                    style={{
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>
            </div>

            {/* Browser 4 - Codepen */}
            <div className={`bg-white border border-border border-solid box-border content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[266px] transition-all duration-500 ${showTab4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="border-b border-border border-l-0 border-r-0 border-solid border-t-0 box-border content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[10.667px]">
                  <Terminal className="w-[10.667px] h-[10.667px] text-muted-foreground" />
                </div>
                <p className={`${interFont.className} font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-muted-foreground text-nowrap`}>
                  Browsing https://codepen.io
                </p>
              </div>
              <div className="bg-[#f1f1f1] border-[0px_1px_1px] border-border border-solid box-border content-stretch flex flex-col h-[160px] items-start rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full relative overflow-hidden">
                {/* Codepen Content */}
                {!showScreenshots ? (
                  <CodepenSkeleton />
                ) : (
                  <img
                    src="/api/screenshot?url=https://codepen.io"
                    alt="Codepen Screenshot"
                    className="w-full h-full object-cover"
                    style={{
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
