'use client';

import React, { useState, useRef, useEffect } from 'react';
import { jakartaFont, kodeMonoFont } from '@/app/fonts';
import { Header, PromptSection, ChatArea, ChatMessage, ResponseContent } from './components';
import { ChatService } from '@/services/api/chat';
import { Rocket, Wrench } from 'lucide-react';

export default function PortfolioAssist() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Prevent body scrolling when component mounts
  useEffect(() => {
    // Save original overflow style
    const originalOverflow = document.body.style.overflow;
    
    // Prevent page scrolling
    document.body.style.overflow = 'hidden';
    
    // Cleanup: restore original overflow when component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Auto-scroll to latest message when new messages are added
  useEffect(() => {
    if (messages.length > 0 && scrollContainerRef.current) {
      // Add a delay to ensure DOM is updated and animations have started
      setTimeout(() => {
        if (scrollContainerRef.current) {
          // Smooth scroll to bottom to show the latest message
          scrollContainerRef.current.scrollTo({
            top: scrollContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [messages]);

  // Smooth scroll specifically for when loading completes
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.type === 'response' && !lastMessage.isLoading && scrollContainerRef.current) {
      // Wait for the content animation to start, then smooth scroll
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            top: scrollContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 200); // Reduced timing to sync with animation
    }
  }, [messages]);



  const handlePromptSubmit = async (prompt: string) => {
    // Add user message immediately
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: prompt,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Add loading response after a short delay to show user message first
    setTimeout(async () => {
      const loadingMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'response',
        content: { type: 'text', text: '' }, // Empty content for loading
        timestamp: new Date(),
        isLoading: true,
      };

      setMessages(prev => [...prev, loadingMessage]);

      // Wait for 4 seconds minimum before showing response
      setTimeout(async () => {
        // Get actual AI response from Gemini
        try {
          const aiResponseText = await ChatService.sendMessage(prompt);
          
          // Check if we should add an info card based on the prompt
          const shouldAddCard = shouldIncludeInfoCard(prompt);
          console.log('Should add card:', shouldAddCard, 'for prompt:', prompt);
          
          let responseContent: ResponseContent;
          
          if (shouldAddCard) {
            const infoCard = getRelevantInfoCard(prompt);
            console.log('Generated info card:', infoCard);
            
            // Mixed content: Gemini text + relevant info card
            responseContent = {
              type: 'mixed',
              mixedContent: [
                {
                  type: 'text',
                  text: aiResponseText
                },
                {
                  type: 'info',
                  infoCard: infoCard
                }
              ]
            };
          } else {
            // Just the Gemini text response
            responseContent = {
              type: 'text',
              text: aiResponseText
            };
          }
          
          const aiMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            type: 'response',
            content: responseContent,
            timestamp: new Date(),
            isLoading: false,
          };

          // Replace loading message with actual response
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = aiMessage;
            return newMessages;
          });
        } catch (error) {
          console.error('Error getting AI response:', error);
          
          // Fallback to original mock response if API fails
          const responseContent: ResponseContent = getResponseForPrompt(prompt);
          const aiMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            type: 'response',
            content: responseContent,
            timestamp: new Date(),
            isLoading: false,
          };

          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = aiMessage;
            return newMessages;
          });
        }
      }, 4500); // Wait 4.5 seconds before showing response
    }, 300); // Small delay to show user message first
  };

  // Helper function to determine if an info card should be included
  const shouldIncludeInfoCard = (prompt: string): boolean => {
    const lowerPrompt = prompt.toLowerCase();
    return (
      lowerPrompt.includes('design') || 
      lowerPrompt.includes('process') || 
      lowerPrompt.includes('work') || 
      lowerPrompt.includes('experience') ||
      lowerPrompt.includes('project') ||
      lowerPrompt.includes('portfolio') ||
      lowerPrompt.includes('tool') ||
      lowerPrompt.includes('software') ||
      lowerPrompt.includes('app') ||
      lowerPrompt.includes('advice') ||
      lowerPrompt.includes('tip') ||
      lowerPrompt.includes('learn') ||
      lowerPrompt.includes('career')
    );
  };

  // Helper function to get relevant info card based on prompt
  const getRelevantInfoCard = (prompt: string) => {
    const lowerPrompt = prompt.toLowerCase();
    
    // Check more specific keywords first to avoid conflicts
    if (lowerPrompt.includes('tool') || lowerPrompt.includes('software') || lowerPrompt.includes('app')) {
      return {
        cardStyle: 'style3' as const,
        title: 'Design Tools',
        value: 'My Essential Toolkit',
        description: 'Figma, Sketch, Adobe Creative Suite',
        icon: React.createElement(Wrench, { size: 24, className: "text-[#111111]" }),
        rows: []
      };
    }
    
    if (lowerPrompt.includes('advice') || lowerPrompt.includes('tip') || lowerPrompt.includes('learn') || lowerPrompt.includes('career')) {
      return {
        cardStyle: 'style4' as const,
        title: 'Career Guidance',
        value: 'Design Career Roadmap',
        description: 'Essential steps to break into UX design and advance your career',
        actionText: 'Get Started',
        rows: []
      };
    }
    
    if (lowerPrompt.includes('project') || lowerPrompt.includes('portfolio')) {
      return {
        cardStyle: 'style2' as const,
        title: 'Quick Actions',
        value: 'View My Projects',
        icon: React.createElement(Rocket, { size: 24, className: "text-[#111111]" }),
        rows: []
      };
    }
    
    if (lowerPrompt.includes('work') || lowerPrompt.includes('experience')) {
      return {
        cardStyle: 'style1' as const,
        title: 'Current Role',
        value: 'Senior UX Designer at TechCorp',
        subtitle: '5+ years experience',
        imageUrl: '/images/work-experience.jpg',
        rows: []
      };
    }
    
    if (lowerPrompt.includes('design') || lowerPrompt.includes('process')) {
      return {
        cardStyle: 'style1' as const,
        title: 'Design Article',
        value: 'My Design Process Explained',
        subtitle: '4 min read',
        imageUrl: '/images/design-process.jpg',
        rows: []
      };
    }
    
    // Default card
    return {
      cardStyle: 'style1' as const,
      title: 'Learn More',
      value: 'About My Work & Philosophy',
      subtitle: 'Quick read',
      imageUrl: '/images/about-work.jpg',
      rows: []
    };
  };

  // Sample response generator based on prompt
  const getResponseForPrompt = (prompt: string): ResponseContent => {
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('work') || lowerPrompt.includes('job')) {
      return {
        type: 'mixed',
        mixedContent: [
          {
            type: 'text',
            text: 'I currently work as a Senior UX Designer at TechCorp!'
          },
          {
            type: 'info',
            infoCard: {
              title: 'Current Role',
              value: 'Senior UX Designer',
              rows: [
                { label: 'Company', value: 'TechCorp' },
                { label: 'Experience', value: '5+ years' },
                { label: 'Focus', value: 'Mobile & Web Design' }
              ]
            }
          }
        ]
      };
    }
    
    if (lowerPrompt.includes('design') || lowerPrompt.includes('process')) {
      return {
        type: 'mixed',
        mixedContent: [
          {
            type: 'text',
            text: 'My design process is collaborative & iterative. I focus on deeply understanding user needs, crafting elegant solutions, and validating them through testing. Leadership & AI enablement are key!'
          },
          {
            type: 'info',
            infoCard: {
              cardStyle: 'style1',
              title: 'Related Article',
              value: 'Design Systems at Scale',
              subtitle: '5 min read',
              imageUrl: '/images/design-article.jpg',
              rows: []
            }
          }
        ]
      };
    }
    
    if (lowerPrompt.includes('ai') || lowerPrompt.includes('artificial')) {
      return {
        type: 'text',
        text: 'I believe AI is transforming design by automating repetitive tasks and enabling more personalized user experiences. It\'s a powerful tool that augments human creativity rather than replacing it.'
      };
    }
    
    // Default response with mixed content
    return {
      type: 'mixed',
      mixedContent: [
        {
          type: 'text',
          text: 'That\'s an interesting question! I\'d be happy to share more about my work, experience, or design philosophy.'
        },
        {
          type: 'info',
          infoCard: {
            cardStyle: 'style1',
            title: 'Featured Content',
            value: 'My Journey into UX Design',
            subtitle: '3 min read',
            imageUrl: '/images/ux-journey.jpg',
            rows: []
          }
        }
      ]
    };
  };

  // Function to clear all messages
  const handleRefresh = () => {
    setMessages([]);
  };

  return (
    <div className={`bg-gray-100 overflow-hidden fixed inset-0 sm:relative sm:flex sm:items-center sm:justify-center ${jakartaFont.variable} ${kodeMonoFont.variable}`} style={{ height: '100dvh' }}>
      {/* Mobile Container - Full width on mobile, capped at 393px on 600px+ screens */}
      <div className="bg-white relative w-full sm:w-[393px] sm:max-w-[393px] h-full overflow-hidden flex flex-col">
        
        {/* Main Content - Header and Chat Area */}
        <div className="flex-1 overflow-hidden flex flex-col">
                  {/* Header Section - Fixed */}
        <div>
          <Header onRefresh={handleRefresh} />
        </div>
          
          {/* Chat Area - Scrollable */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-6 pt-10">
            <ChatArea messages={messages} />
          </div>
        </div>
        
        {/* Prompt Section - Sticky at bottom */}
        <div className="px-6 pb-6 bg-white">
          <PromptSection 
            onPromptSubmit={handlePromptSubmit}
            messages={messages}
          />
        </div>
      </div>
    </div>
  );
} 