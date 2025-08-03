'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { geminiService } from '../services/gemini';
import TerminalHeader from './TerminalHeader';
import ExpandableCard from './ExpandableCard';
import ChatArea from './ChatArea';
import InputArea from './InputArea';

interface Message {
  id: string;
  type: 'command' | 'output';
  content: string;
  timestamp: Date;
}

interface TerminalProps {
  initialPosition?: { x: number; y: number };
  onMinimize?: () => void;
}

export default function Terminal({ initialPosition, onMinimize }: TerminalProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  // Different welcome messages for variety
  const welcomeMessages = [
    'Hey there! 👋 I\'m your AI companion, ready to chat about anything that sparks your curiosity. From deep thoughts to casual conversation, I\'m here to explore ideas with you. What\'s on your mind?',
    
    'Welcome to our little chat corner! ✨ I\'m your friendly AI assistant, and I love diving into interesting conversations. Whether you want to brainstorm, learn something new, or just chat, I\'m all ears. What shall we explore today?',
    
    'Hello, curious mind! 🚀 I\'m your AI buddy, and I\'m excited to see what fascinating topics we\'ll uncover together. I\'m here to help, inspire, and maybe even surprise you with some insights. What\'s your question?',
    
    'Greetings, fellow explorer! 🌟 I\'m your AI companion, ready to embark on whatever journey your mind takes us on. From the practical to the philosophical, I\'m here to chat, think, and discover with you. What would you like to dive into?',
    
    'Hi there, creative soul! 🎨 I\'m your AI partner in crime, and I can\'t wait to see what brilliant ideas we\'ll bounce around together. Whether you need advice, inspiration, or just a good conversation, I\'m your AI. What\'s brewing in that mind of yours?',
    
    'Welcome to our digital hangout! 💫 I\'m your AI friend, and I\'m genuinely excited to chat with you. I love learning from humans and sharing perspectives. So, what\'s something you\'ve been thinking about lately?'
  ];

  // Get a random welcome message
  const getRandomWelcomeMessage = () => {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    return welcomeMessages[randomIndex];
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'output',
      content: getRandomWelcomeMessage(),
      timestamp: new Date()
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState('');
  const [position, setPosition] = useState(initialPosition || { x: 100, y: 100 });
  const [isLoading, setIsLoading] = useState(false);
  const [currentTopic, setCurrentTopic] = useState('');
  const [showChatContent, setShowChatContent] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggestion options
  const suggestionOptions = [
    'What does design mean to you?',
    'How did you start your journey?',
    'What are you currently building?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Center the terminal on mount if no initial position is provided
  useEffect(() => {
    if (!initialPosition) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const terminalWidth = viewportWidth >= 768 ? 480 : 320;
      const terminalHeight = 500;
      
      setPosition({
        x: (viewportWidth - terminalWidth) / 2,
        y: (viewportHeight - terminalHeight) / 2
      });
    }
  }, [initialPosition]);

  // Show chat content after terminal container loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatContent(true);
    }, 800); // 0.8s delay after terminal appears

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    await handleUserMessage(currentInput);
  };

  const handleUserMessage = async (message: string) => {
    // Extract topic from user message (first few words)
    const topicWords = message.split(' ').slice(0, 4).join(' ');
    setCurrentTopic(topicWords);

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'command',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setCurrentInput('');

    // Show loading state
    setIsLoading(true);

    // Generate AI response using Gemini
    try {
      const response = await geminiService.generateCreativeResponse(message);
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: response.text,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleUserMessage(suggestion);
  };

  const handleRefresh = () => {
    setMessages([
      {
        id: '1',
        type: 'output',
        content: getRandomWelcomeMessage(),
        timestamp: new Date()
      }
    ]);
    geminiService.resetChat();
  };

  const handleCardToggle = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    onMinimize?.();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = dragRef.current?.getBoundingClientRect();
    if (rect) {
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const handleMouseMove = (e: MouseEvent) => {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get terminal dimensions (responsive)
        const terminalWidth = window.innerWidth >= 768 ? 480 : 320;
        const terminalHeight = 500; // Fixed height
        
        // Calculate boundaries
        const maxX = viewportWidth - terminalWidth;
        const maxY = viewportHeight - terminalHeight;
        
        // Constrain position within viewport
        const constrainedX = Math.max(0, Math.min(e.clientX - offsetX, maxX));
        const constrainedY = Math.max(0, Math.min(e.clientY - offsetY, maxY));
        
        setPosition({
          x: constrainedX,
          y: constrainedY
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  return (
    <motion.div
      ref={dragRef}
      className="fixed bg-[#f6f6f6] rounded-lg shadow-2xl border border-gray-300 select-none w-[320px] md:w-[480px]"
      style={{
        left: position.x,
        top: position.y,
        zIndex: 50
      }}
      drag={false}
    >
                     <TerminalHeader onMouseDown={handleMouseDown} onRefresh={handleRefresh} onMinimize={handleMinimize} currentTopic={currentTopic} messageCount={messages.length} />

      {/* <ExpandableCard 
        isExpanded={isCardExpanded}
        onToggle={handleCardToggle}
      /> */}

      <ChatArea 
        messages={messages}
        isLoading={isLoading}
        suggestionOptions={suggestionOptions}
        onSuggestionClick={handleSuggestionClick}
        messagesEndRef={messagesEndRef}
        showContent={showChatContent}
      />

      <InputArea 
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        onSubmit={handleSubmit}
        placeholder="Ask me anything that you want to know"
      />
    </motion.div>
  );
}