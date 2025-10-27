'use client';

import React, { useState } from 'react';
import { ChevronDown, Send, AppWindow, Code, Bold, Italic, Underline, ChevronRight, Folder, ChevronsUpDown } from 'lucide-react';
import { interFont } from '@/app/fonts';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PromptsSuggestions } from './prompt/PromptsSuggestions';
import { SlashMenu } from './prompt/SlashMenu';
import { SlashChip } from './prompt/SlashChip';
import { QuestionBubble } from './questions/QuestionBubble';
import { ResponseContainer } from './responses/ResponseContainer';
import { llmManager } from './llm';
import { ChatMessage, ResponseData, TextResponse, CodeResponse, MultiAgentResponse, ImageCardsResponse, DataStatsResponse } from '../types/responses';

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
  const [selectedFramework, setSelectedFramework] = useState<string>('');
  const [isFrameworkOpen, setIsFrameworkOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [showSlashMenu, setShowSlashMenu] = useState(false);
  const [slashChips, setSlashChips] = useState<Array<{ id: string; command: string }>>([]);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);

  // Framework options
  const frameworks = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'next', label: 'Next.js' },
    { value: 'nuxt', label: 'Nuxt.js' },
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

          {/* Prompt Container */}
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full">
            {/* Chips Container - Above prompt with 4px gap */}
            <div className="relative">
              {slashChips.length > 0 && (
                <div className="flex flex-wrap gap-[6px]">
                  {slashChips.map((chip) => (
                    <SlashChip
                      key={chip.id}
                      command={chip.command}
                      onRemove={() => handleChipRemove(chip.id)}
                    />
                  ))}
                </div>
              )}
              
              {/* Slash Menu - Positioned absolutely over chips */}
              {showSlashMenu && (
                <div className="absolute top-[-72px] left-0 z-50">
                  <SlashMenu onItemClick={handleSlashMenuItemClick} />
                </div>
              )}
            </div>
            
            <div className="bg-popover border-[1.25px] border-border border-solid max-w-[640px] relative rounded-[12.5px] shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start max-w-inherit overflow-clip relative rounded-[inherit] w-full">
                        {/* Command Main */}
                        <div className="bg-transparent border-0 relative shrink-0 w-full">
                          <div className="box-border content-stretch flex gap-[10px] h-[80px] items-start overflow-clip px-[15px] pt-[15px] relative rounded-[inherit] w-full">
                            <Textarea
                              value={inputValue}
                              onChange={handleInputChange}
                              onKeyPress={handleKeyPress}
                              placeholder="Ask anything to the portfolio assist"
                              className={`basis-0 ${interFont.className} font-normal grow leading-[25px] min-h-px min-w-px overflow-y-auto relative shrink-0 text-[17.5px] text-muted-foreground resize-none border-none outline-none bg-transparent placeholder:text-muted-foreground h-full shadow-none focus:ring-0 focus:border-none focus:outline-none p-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
                              style={{
                                userSelect: 'none',
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                                outline: 'none',
                                boxShadow: 'none',
                                border: 'none',
                                WebkitAppearance: 'none',
                                MozAppearance: 'none',
                                appearance: 'none',
                                padding: '0'
                              }}
                              rows={4}
                            />
                            <div className={`border border-[#e8e8e8] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 size-[36px] transition-colors ${
                              inputValue.trim() || slashChips.length > 0 ? 'bg-black' : 'bg-[#F5F5F5]'
                            }`}>
                              <Button
                                onClick={handleSend}
                                size="icon"
                                variant="ghost"
                                className={`overflow-clip relative shrink-0 size-4 p-0 transition-colors ${
                                  inputValue.trim() || slashChips.length > 0
                                    ? 'hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white' 
                                    : 'hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground'
                                }`}
                              >
                                <Send className={`w-4 h-4 transition-colors ${
                                  inputValue.trim() || slashChips.length > 0 ? 'text-white' : 'text-foreground'
                                }`} />
                              </Button>
                            </div>
                  </div>
                </div>

                {/* Command Tools */}
                <div className="box-border content-stretch flex flex-col items-start px-[10px] py-[12px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    {/* Tabs */}
                    <div className="bg-neutral-100 box-border content-stretch flex h-[36px] items-center p-[3px] relative rounded-[10px] shrink-0">
                      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'agent' | 'code')}>
                        <TabsList className="bg-transparent h-full p-0 w-full">
                          <TabsTrigger 
                            value="agent" 
                            className="box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 data-[state=active]:bg-background data-[state=active]:border data-[state=active]:border-solid data-[state=active]:border-transparent hover:bg-background/80 transition-colors"
                          >
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <AppWindow className="w-4 h-4" />
                            </div>
                            <p className={`${interFont.className} font-medium leading-[20px] relative shrink-0 text-foreground text-[14px] text-center text-nowrap whitespace-pre`}>
                              Agent
                            </p>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="code" 
                            className="box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 data-[state=active]:bg-background data-[state=active]:border data-[state=active]:border-solid data-[state=active]:border-transparent hover:bg-background/80 transition-colors"
                          >
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <Code className="w-4 h-4" />
                            </div>
                            <p className={`${interFont.className} font-medium leading-[20px] relative shrink-0 text-foreground text-[14px] text-center text-nowrap whitespace-pre`}>
                              Code
                            </p>
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>

                    {/* Framework Combobox */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[200px]">
                      <Popover open={isFrameworkOpen} onOpenChange={setIsFrameworkOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={isFrameworkOpen}
                            className="bg-background border border-input border-solid h-[36px] relative rounded-[8px] shrink-0 w-full justify-between px-[16px] py-[8px] hover:bg-muted focus:bg-muted transition-colors"
                          >
                            <span className={`${interFont.className} font-medium leading-[20px] text-[14px] text-foreground`}>
                              {selectedFramework ? frameworks.find(f => f.value === selectedFramework)?.label : "Select framework..."}
                            </span>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0 bg-background border border-border" align="start">
                          <Command className="bg-background">
                            <CommandInput 
                              placeholder="Search framework..." 
                              className={`${interFont.className} font-normal text-[14px]`}
                            />
                            <CommandList>
                              <CommandEmpty className={`${interFont.className} font-normal text-[14px]`}>
                                No framework found.
                              </CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framework) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                      setSelectedFramework(currentValue === selectedFramework ? "" : currentValue);
                                      setIsFrameworkOpen(false);
                                    }}
                                    className={`${interFont.className} font-medium leading-[20px] text-[14px] transition-colors`}
                                    style={{
                                      '--hover-bg': '#F5F5F5',
                                      '--focus-bg': '#F5F5F5'
                                    } as React.CSSProperties}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = '#F5F5F5';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = '';
                                    }}
                                    onFocus={(e) => {
                                      e.currentTarget.style.backgroundColor = '#F5F5F5';
                                    }}
                                    onBlur={(e) => {
                                      e.currentTarget.style.backgroundColor = '';
                                    }}
                                  >
                                    {framework.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}