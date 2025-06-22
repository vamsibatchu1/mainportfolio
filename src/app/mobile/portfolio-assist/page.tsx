'use client';

import React, { useState } from 'react';
import { jakartaFont } from '@/app/fonts';
import { Header, PromptSection, ChatArea, ChatMessage, ResponseContent } from './components';
import { BottomNavigation } from '../dashboard/components';

export default function PortfolioAssist() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handlePromptSelect = (prompt: string) => {
    handlePromptSubmit(prompt);
  };

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
    setTimeout(() => {
      const loadingMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'response',
        content: { type: 'text', text: '' }, // Empty content for loading
        timestamp: new Date(),
        isLoading: true,
      };

      setMessages(prev => [...prev, loadingMessage]);

      // Simulate AI processing time and then show actual response
      setTimeout(() => {
        const responseContent: ResponseContent = getResponseForPrompt(prompt);
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
      }, 2000); // 2 second loading simulation
    }, 300); // Small delay to show user message first
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
    
    if (lowerPrompt.includes('ai') || lowerPrompt.includes('artificial')) {
      return {
        type: 'text',
        text: 'I believe AI is transforming design by automating repetitive tasks and enabling more personalized user experiences. It\'s a powerful tool that augments human creativity rather than replacing it.'
      };
    }
    
    // Default response
    return {
      type: 'text',
      text: 'That\'s an interesting question! I\'d be happy to share more about my work, experience, or design philosophy. What would you like to know specifically?'
    };
  };

  return (
    <div className={`bg-gray-100 min-h-screen sm:flex sm:items-center sm:justify-center ${jakartaFont.variable}`}>
      {/* Mobile Container - Full width on mobile, capped at 393px on 600px+ screens */}
      <div className="bg-white relative w-full sm:w-[393px] sm:max-w-[393px] h-screen max-h-screen overflow-hidden flex flex-col">
        
        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto w-full">
          <div className="relative w-full h-full">
            <div className="flex flex-col gap-10 items-start justify-start pb-6 pt-6 relative w-full min-h-full">
              
              {/* Header Section */}
              <Header />
              
              {/* Chat Area */}
              <ChatArea messages={messages} />
              
            </div>
          </div>
        </div>
        
        {/* Prompt Section - Sticky above bottom nav */}
        <PromptSection 
          onPromptSelect={handlePromptSelect}
          onPromptSubmit={handlePromptSubmit}
        />
        
        {/* Bottom Navigation - Sticky */}
        <BottomNavigation />
      </div>
    </div>
  );
} 