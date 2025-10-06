'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import MainLayout from '../../layout/MainLayout';
import { FilesystemItem } from './components/filetree';
import ArticleCard from './components/article-card';
import AllArticlesCarousel from './components/all-articles-carousel';
import { jakartaFont } from '../../fonts';
import Image from 'next/image';

// Sample file tree data
const fileTreeData = {
  name: "writing",
  nodes: [
    {
      name: "drafts",
      nodes: [
        {
          name: "product-thinking.txt",
          nodes: []
        },
        {
          name: "design-systems.txt", 
          nodes: []
        },
        {
          name: "user-research.txt",
          nodes: []
        }
      ]
    },
    {
      name: "published",
      nodes: [
        {
          name: "building-better-ux.md",
          nodes: []
        },
        {
          name: "design-process.md",
          nodes: []
        }
      ]
    },
    {
      name: "ideas",
      nodes: [
        {
          name: "future-of-design.txt",
          nodes: []
        },
        {
          name: "accessibility-notes.txt",
          nodes: []
        }
      ]
    }
  ]
};

// Notepad content component with shimmer loading
function NotepadContent({ selectedFile }: { selectedFile: string | null }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [currentContent, setCurrentContent] = useState<string>('');

  // Mock content for different files (same as tinyscroll)
  const getFileContent = (fileName: string | null) => {
    if (!fileName) return "Select a file to view its content";
    
    const contentMap: Record<string, string> = {
      "product-thinking.txt": `Had this thought while walking to work today - what if we're approaching product thinking all wrong? 

Everyone talks about user empathy like it's some magical skill you either have or don't. But I think it's more about asking the right questions at the right time. Not just "what do users want" but "what are they trying to accomplish and why does it matter to them?"

Been working on this article idea about how product decisions often get made in boardrooms with zero user context. The disconnect between what executives think users want versus what they actually need is staggering. Maybe I should write about bridging that gap.

Also, there's something about the iterative process that feels broken. We build, measure, learn - but what if we're measuring the wrong things? Vanity metrics vs real impact. Need to think more about this.

The cross-functional collaboration piece is interesting too. Design speaks one language, engineering another, business yet another. How do we create a shared vocabulary that actually works?`,

      "design-systems.txt": `Working on a piece about design systems and honestly, I think we've overcomplicated them.

Everyone wants to build the next Material Design or Ant Design, but most teams don't need that level of complexity. Sometimes a simple style guide with consistent colors and typography is enough. The key is actually using it, not just having it.

Had a conversation with a startup founder who said they spent 6 months building a design system and then never used it because it was too rigid. That's the problem - we build for perfection instead of flexibility.

Been thinking about the documentation side. No one reads 50-page design system docs. Maybe we need bite-sized, contextual documentation that shows up when you need it, not when you're browsing the system.

The component library part is interesting. When do you build vs buy? When do you customize vs compromise? These decisions can make or break adoption.

Also, who owns the design system? Design? Engineering? Product? The answer is everyone and no one, which is usually the problem.`,

      "user-research.txt": `Had an interesting user interview yesterday that got me thinking about how we approach research.

The participant said something that completely shifted my perspective on the feature we're building. All our assumptions were wrong. This happens way too often - we think we know what users want, but we're really just projecting our own biases.

Been reflecting on the research methods we use. User interviews are great for understanding motivations, but they're also performative. People tell you what they think you want to hear. Usability testing is better for finding friction points, but it's artificial.

The contextual inquiry stuff is fascinating though. Watching someone actually use your product in their real environment reveals so much more than a lab setting ever could. The distractions, the interruptions, the real-world constraints.

Been thinking about the analysis phase. How do you separate signal from noise? How do you know when you have enough data to make a decision? Sometimes I think we over-research because we're afraid to be wrong.

The sharing part is crucial too. Beautiful research reports that no one reads are worthless. Need to find better ways to communicate insights that actually influence decisions.`
    };

    return contentMap[fileName] || `Just started thinking about this topic. Need to flesh out some ideas here.

This would be where I jot down initial thoughts before turning them into a proper article. The messy first draft where everything is still forming.

Need to research this more. Maybe talk to some people about it. Get different perspectives.

What's the main point I want to make? What's the story I want to tell?

Still working on this one...`;
  };

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

  if (isLoading) {
    return (
      <div className="flex items-start">
        <span className="animate-pulse text-gray-600 text-base">
          Pulling drafts...
        </span>
      </div>
    );
  }

  return (
    <div 
      className={`whitespace-pre-wrap transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
    >
      {currentContent}
    </div>
  );
}

export default function WritingPage() {
  const [fileTreeHeight, setFileTreeHeight] = useState(243); // Default height
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [showScrollArea, setShowScrollArea] = useState(false);
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(['writing'])); // Track open folders
  const fileTreeRef = useRef<HTMLDivElement>(null);

  // Update height function
  const updateHeight = useCallback(() => {
    if (fileTreeRef.current) {
      const height = fileTreeRef.current.scrollHeight;
      setFileTreeHeight(prevHeight => {
        // Only update if height actually changed to prevent unnecessary re-renders
        if (prevHeight !== height) {
          return height;
        }
        return prevHeight;
      });
      
      // Show scroll area if any folders are expanded (height > initial collapsed height)
      const hasExpandedFolders = height > 100; // Approximate collapsed height
      setShowScrollArea(hasExpandedFolders);
    }
  }, []);

  // Initial height measurement
  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  // Update height when folders change (not on every DOM change)
  useEffect(() => {
    // Use a small delay to let animations complete
    const timeoutId = setTimeout(updateHeight, 100);
    return () => clearTimeout(timeoutId);
  }, [openFolders, updateHeight]);

  // Handle file selection with useCallback to prevent re-renders
  const handleFileSelect = useCallback((fileName: string) => {
    setSelectedFile(fileName);
  }, []);

  // Handle folder toggle with accordion behavior (only one folder open at a time)
  const handleFolderToggle = useCallback((folderName: string) => {
    setOpenFolders(prev => {
      // If clicking on the currently open folder, close it
      if (prev.has(folderName)) {
        return new Set(['writing']); // Keep only the root folder open
      }
      
      // If clicking on a different folder, close all others and open this one
      return new Set(['writing', folderName]);
    });
  }, []);

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-[96px]">

        {/* Article Card Component */}
        <ArticleCard
          title="How prompt to UI tools are reshaping product development"
          author="John Maverick"
          publishDate="January 1, 2024"
          summary="A complex and exciting new project is kicked off. The initial meetings are filled with ambition, but they soon devolve into a series of prolonged, circular discussions. Without a tangible focal point, product managers, engineers, and designers struggle to align. Even with a meticulously written Product Requirements Document (PRD), the full vision remains elusive,"
          onReadArticle={() => console.log('Read article clicked')}
          onSummarize={() => console.log('Summarize clicked')}
        />

        {/* All Articles Carousel */}
        <AllArticlesCarousel
          onArticleClick={(article) => console.log('Article clicked:', article.title)}
        />

        {/* Drafts Component */}
        <div className="content-stretch flex gap-[40px] items-start relative size-full">
          {/* Main Text Column */}
          <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full">
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
              <div className="h-[70px] relative shrink-0 w-[68.478px]">
                <div className="absolute bottom-0 left-[-1.11%] right-[-1.11%] top-[-1.09%]">
                  <img alt="Floppy disk icon" className="block max-w-none size-full" src="http://localhost:3845/assets/ecffe8959bb17e2317a2bd03128964c2d3068887.svg" />
                </div>
              </div>
              <p className={`${jakartaFont.className} font-medium leading-[1.1] relative shrink-0 text-[32px] text-black flex-1`}>
                read through the drafts that are currently work in progress
              </p>
            </div>
            <p className={`${jakartaFont.className} font-medium leading-[1.1] relative shrink-0 text-[15.875px] text-black text-nowrap whitespace-pre`}>
              click on any folder to see read the drafts
            </p>
          </div>
          
          {/* File Tree Column */}
          <div 
            ref={fileTreeRef}
            className="relative shrink-0 w-[278px]"
            style={{ height: 'auto', minHeight: '243px' }}
          >
            <div className="w-full">
              <FilesystemItem 
                node={fileTreeData} 
                animated={true} 
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                openFolders={openFolders}
                onFolderToggle={handleFolderToggle}
              />
            </div>
          </div>
          
          {/* Vintage Mac Notepad Column */}
          <div 
            className="relative shrink-0 w-[329px]"
            style={{ height: `${fileTreeHeight}px` }}
          >
            {showScrollArea && (
              <div className="animate-in fade-in duration-300 relative">
                {/* Background notepad image */}
                <img
                  src="/images/icons/draft.svg"
                  alt="vintage mac notepad"
                  className="w-full h-full object-contain"
                />
                
                {/* Text overlay */}
                <div 
                  className="absolute inset-0 flex flex-col"
                  style={{
                    paddingTop: '52px',    // 28px + 24px
                    paddingBottom: '64px', // 40px + 24px
                    paddingLeft: '24px',
                    paddingRight: '24px'
                  }}
                >
                  <div className={`${jakartaFont.className} flex-1 overflow-auto text-sm leading-relaxed text-gray-900`}>
                    <NotepadContent selectedFile={selectedFile} />
            </div>
          </div>
        </div>
      )}
          </div>
        </div>

         
         </div>
    </MainLayout>
  );
}