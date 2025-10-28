'use client';

import React, { useState } from 'react';
import { interFont } from '@/app/fonts';
import { QuestionBubble } from './questions/QuestionBubble';
import { ResponseContainer } from './responses/ResponseContainer';
import { AssistPrompt } from './prompt/AssistPrompt';
import { llmManager } from './llm';
import { ChatMessage, ResponseData, TextResponse, LoadingResponse, CodeResponse, MultiAgentResponse, ImageCardsResponse, DataStatsResponse } from '../types/responses';

interface AssistSidebarProps {
  messages?: ChatMessage[];
  onSendMessage?: (message: string) => void;
  className?: string;
}

export function AssistSidebar({ messages = [], onSendMessage, className = '' }: AssistSidebarProps) {
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState<'agent' | 'code'>('agent');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<string>('');
  const [isPersonaOpen, setIsPersonaOpen] = useState(false);
  const [selectedTone, setSelectedTone] = useState<string>('');
  const [isToneOpen, setIsToneOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [showSlashMenu, setShowSlashMenu] = useState(false);
  const [slashChips, setSlashChips] = useState<Array<{ id: string; command: string }>>([]);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);

  // Persona options
  const personas = [
    { value: 'designer', label: 'Designer' },
    { value: 'recruiter', label: 'Recruiter' },
    { value: 'curious-mind', label: 'Curious mind' },
  ];

  // Tone options
  const tones = [
    { value: 'general', label: 'General' },
    { value: 'professional', label: 'Professional' },
    { value: 'sarcastic', label: 'Sarcastic' },
    { value: 'friendly', label: 'Friendly' },
  ];

  // Filter options
  const filters = [
    { value: 'recent', label: 'Recent' },
    { value: 'popular', label: 'Popular' },
    { value: 'trending', label: 'Trending' },
    { value: 'featured', label: 'Featured' },
  ];

  // Welcome message from AI
  const welcomeMessage: ChatMessage = {
    id: 'welcome',
    question: '',
    response: {
      id: 'welcome-response',
      type: 'text',
      content: 'Welcome to Portfolio Assist! I\'m here to help you explore my portfolio and answer any questions you might have. You can ask me about my projects, design process, technical skills, or anything else you\'d like to know. What would you like to learn about?'
    },
    timestamp: new Date()
  };

  // Auto-scroll to bottom function
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Initialize with welcome message
  React.useEffect(() => {
    if (chatMessages.length === 0) {
      setChatMessages([welcomeMessage]);
    }
  }, [chatMessages.length]);

  // Auto-scroll when messages change
  React.useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  // Close slash menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is inside the slash menu
      const slashMenuElement = document.querySelector('[data-slash-menu]');
      if (slashMenuElement && slashMenuElement.contains(event.target as Node)) {
        return; // Don't close if clicking inside the menu
      }
      
      if (showSlashMenu) {
        setShowSlashMenu(false);
      }
    };

    if (showSlashMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showSlashMenu]);

  const displayMessages = chatMessages.length > 0 ? chatMessages : [welcomeMessage];

  // Helper function to convert ProcessedResponse to ResponseData
  const convertToResponseData = (processedResponse: any, messageId: string): ResponseData => {
    const baseResponse = {
      id: messageId + '-response',
      content: processedResponse.content,
      timestamp: new Date()
    };

    switch (processedResponse.type) {
      case 'code':
        return {
          ...baseResponse,
          type: 'code',
          language: processedResponse.metadata?.language || 'text',
          code: processedResponse.content,
          title: processedResponse.metadata?.title
        } as CodeResponse;

      case 'multi-agent':
        return {
          ...baseResponse,
          type: 'multi-agent',
          agents: processedResponse.metadata?.agents || []
        } as MultiAgentResponse;

      case 'image-cards':
        return {
          ...baseResponse,
          type: 'image-cards',
          cards: processedResponse.metadata?.cards || []
        } as ImageCardsResponse;

      case 'data-stats':
        return {
          ...baseResponse,
          type: 'data-stats',
          title: processedResponse.metadata?.title || 'Data Statistics',
          stats: processedResponse.metadata?.stats || [],
          chartData: processedResponse.metadata?.chartData
        } as DataStatsResponse;

      default:
        return {
          ...baseResponse,
          type: 'text'
        } as TextResponse;
    }
  };

  const handleSend = async () => {
    if (inputValue.trim() || slashChips.length > 0) {
      const messageId = Date.now().toString();
      const userQuestion = inputValue.trim();
      
      // Check for variant test commands
      if (userQuestion === '1' || userQuestion === '2' || userQuestion === '3' || userQuestion === '4') {
        let testResponse: ResponseData;
        
        switch (userQuestion) {
          case '1':
            // Variant General
            testResponse = {
              id: messageId + '-response',
              type: 'text',
              content: 'This is a general text response variant.',
              timestamp: new Date()
            } as TextResponse;
            break;
            
          case '2':
            // Variant Loading
            testResponse = {
              id: messageId + '-response',
              type: 'loading',
              content: 'This is a loading response variant.',
              timestamp: new Date()
            } as LoadingResponse;
            break;
            
          case '3':
            // Variant Agent
            testResponse = {
              id: messageId + '-response',
              type: 'multi-agent',
              content: 'This is a test of the agent response variant.',
              timestamp: new Date(),
              agents: [
                {
                  id: 'agent-1',
                  name: 'Email Agent',
                  status: 'running',
                  result: 'Processing emails...'
                },
                {
                  id: 'agent-2', 
                  name: 'File Agent',
                  status: 'completed',
                  result: 'Files processed successfully'
                }
              ]
            } as MultiAgentResponse;
            break;
            
          case '4':
            // Variant Agent Tabs
            testResponse = {
              id: messageId + '-response',
              type: 'code',
              content: 'This is a test of the agent tabs variant.',
              timestamp: new Date(),
              language: 'javascript',
              code: 'console.log("Hello World");',
              title: 'Sample Code'
            } as CodeResponse;
            break;
            
          default:
            testResponse = {
              id: messageId + '-response',
              type: 'text',
              content: 'Unknown variant.',
              timestamp: new Date()
            } as TextResponse;
        }
        
        // Create test message
        const testMessage: ChatMessage = {
          id: messageId,
          question: `Test Variant ${userQuestion}`,
          response: testResponse,
          timestamp: new Date()
        };
        
        setChatMessages(prev => [...prev, testMessage]);
        setInputValue('');
        setSlashChips([]);
        return;
      }
      
      // Create initial message with loading state
      const userMessage: ChatMessage = {
        id: messageId,
        question: userQuestion,
        response: {
          id: messageId + '-response',
          type: 'text',
          content: 'Here goes the loading message'
        },
        timestamp: new Date(),
        isLoading: true
      };

      setChatMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setSlashChips([]); // Clear chips after sending
      
      if (onSendMessage) {
        onSendMessage(userQuestion);
      }

      try {
        // Generate AI response using LLM
        const aiResponse = await llmManager.generateResponse(userQuestion);
        
        // Convert ProcessedResponse to ResponseData
        const responseData = convertToResponseData(aiResponse, messageId);
        
        // Update the message with the actual response
        setChatMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { 
                  ...msg, 
                  isLoading: false,
                  response: responseData
                }
              : msg
          )
        );
      } catch (error) {
        console.error('Error generating response:', error);
        
        // Create error response
        const errorResponse: TextResponse = {
          id: messageId + '-response',
          type: 'text',
          content: 'I apologize, but I encountered an error while processing your request. Please try again.',
          timestamp: new Date()
        };
        
        // Update with error response
        setChatMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { 
                  ...msg, 
                  isLoading: false,
                  response: errorResponse
                }
              : msg
          )
        );
      }
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  const handleSlashMenuItemClick = (item: any) => {
    // Add chip for the selected command
    const chipId = Date.now().toString();
    const commandName = item.label.toLowerCase().replace(/\s+/g, '-');
    
    setSlashChips(prev => [...prev, { id: chipId, command: commandName }]);
    setShowSlashMenu(false);
  };

  const handleChipRemove = (chipId: string) => {
    setSlashChips(prev => prev.filter(chip => chip.id !== chipId));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Show slash menu if user types "/"
    if (value.endsWith('/')) {
      setShowSlashMenu(true);
    } else if (showSlashMenu && !value.includes('/')) {
      setShowSlashMenu(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    // Handle backspace to remove chips when input is empty
    if (e.key === 'Backspace' && inputValue === '' && slashChips.length > 0) {
      e.preventDefault();
      const lastChip = slashChips[slashChips.length - 1];
      handleChipRemove(lastChip.id);
      return;
    }
    
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`box-border content-stretch flex flex-col items-start relative shadow-[0px_2.56px_51.2px_0px_rgba(21,62,90,0.3)] size-full ${className}`}>
      {/* Window Header */}
      <div className="bg-[#F6F6F6] border-[0.64px] border-black/20 border-solid box-border content-stretch flex flex-col items-start px-[21.333px] py-[18.667px] relative rounded-tl-[15.36px] rounded-tr-[15.36px] shrink-0 w-[460px]">
        <div className="content-stretch flex gap-[10.667px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[16px] bg-red-500 rounded-full"></div>
          <div className="relative shrink-0 size-[16px] bg-yellow-500 rounded-full"></div>
          <div className="relative shrink-0 size-[16px] bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[460px]">
        <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
          {/* Chat Container */}
          <div className="box-border content-stretch flex gap-[10px] h-[calc(100vh-360px)] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-full">
            <div ref={chatContainerRef} className="flex flex-col gap-[24px] w-full h-full overflow-y-auto overflow-x-hidden pr-2">
              {/* Chat Messages */}
              {displayMessages.map((message) => (
                <div key={message.id} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  {/* Question Container - Only show if there's a question */}
                  {message.question && (
                    <QuestionBubble 
                      question={message.question} 
                      timestamp={message.timestamp} 
                    />
                  )}

                  {/* Response Container */}
                  <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
                    <ResponseContainer 
                      response={message.response} 
                      messageId={message.id} 
                      isLoading={message.isLoading}
                      onPromptClick={handlePromptClick}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assist Prompt Component */}
          <AssistPrompt
            // Assist Selections
            slashChips={slashChips}
            onChipRemove={handleChipRemove}
            showSlashMenu={showSlashMenu}
            onSlashMenuItemClick={handleSlashMenuItemClick}
            
            // Assist Prompt
            inputValue={inputValue}
            onInputChange={handleInputChange}
                              onKeyPress={handleKeyPress}
            onSend={handleSend}
            
            // Assist Tools
            activeTab={activeTab}
            onTabChange={(value) => setActiveTab(value as 'agent' | 'code')}
            selectedPersona={selectedPersona}
            onPersonaChange={setSelectedPersona}
            isPersonaOpen={isPersonaOpen}
            onPersonaOpenChange={setIsPersonaOpen}
            personas={personas}
            selectedTone={selectedTone}
            onToneChange={setSelectedTone}
            isToneOpen={isToneOpen}
            onToneOpenChange={setIsToneOpen}
            tones={tones}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
            isFilterOpen={isFilterOpen}
            onFilterOpenChange={setIsFilterOpen}
            filters={filters}
          />
        </div>
      </div>
    </div>
  );
}