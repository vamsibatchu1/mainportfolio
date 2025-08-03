'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, MessageSquare, Search, HelpCircle, Folder } from 'lucide-react';
import { geminiService } from '../services/gemini';

interface Message {
  id: string;
  type: 'command' | 'output';
  content: string;
  timestamp: Date;
}

interface TerminalProps {
  initialPosition?: { x: number; y: number };
}

export default function Terminal({ initialPosition = { x: 100, y: 100 } }: TerminalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'output',
      content: 'Hey, I am your helpful AI agent! 🤖\n\nI can help you answer any questions that you want to ask. Feel free to ask me anything - whether it\'s about coding, design, technology, or just general knowledge.\n\nWhat would you like to know?',
      timestamp: new Date()
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState('');
  const [position, setPosition] = useState(initialPosition);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    await handleUserMessage(currentInput);
  };

  const handleUserMessage = async (message: string) => {
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

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = dragRef.current?.getBoundingClientRect();
    if (rect) {
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const handleMouseMove = (e: MouseEvent) => {
        setPosition({
          x: e.clientX - offsetX,
          y: e.clientY - offsetY
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
      className="fixed bg-[#f6f6f6] rounded-lg shadow-2xl border border-gray-300 select-none"
      style={{
        left: position.x,
        top: position.y,
        width: '480px',
        zIndex: 50
      }}
      drag={false}
    >
      {/* Top Bar */}
      <div 
        className="bg-[#f6f6f6] rounded-t-lg border-b border-gray-300 px-4 py-3 flex items-center justify-between cursor-move"
        onMouseDown={handleMouseDown}
      >
        {/* Traffic Lights */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#ff5f57] rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-[#ffbd2e] rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-[#28ca42] rounded-full cursor-pointer"></div>
        </div>

        {/* Title */}
        <div className="flex-1 text-center">
          <span className="text-gray-700 font-medium text-sm font-sf-pro">Untitled</span>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">
          <RotateCcw className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
          <MessageSquare className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
          <Search className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
          <HelpCircle className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
          <div className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1 font-sf-pro">
            <Folder className="w-3 h-3" />
            <span>_vamsi</span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="bg-[#ECECEC] h-[400px] overflow-y-auto p-4 font-mono text-sm">
        <div className="space-y-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'command' ? 'justify-end' : 'justify-start'}`}>
              {message.type === 'command' ? (
                // User message (right side, blue background, white text)
                <div className="bg-[#007AFF] text-white px-3 py-2 rounded-lg max-w-[70%] font-sf-pro text-sm">
                  {message.content}
                </div>
              ) : (
                // System/AI response (left side, no background, black text)
                <div className="text-black max-w-[70%] font-sf-pro text-sm">
                  {message.content}
                </div>
              )}
            </div>
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="text-black max-w-[70%] font-sf-pro text-sm flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                <span>Thinking...</span>
              </div>
            </div>
          )}

          {/* Suggestion options - only show if no messages from user yet */}
          {messages.length === 1 && !isLoading && (
            <div className="flex flex-col space-y-2 mt-4">
              {suggestionOptions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-left text-gray-500 hover:text-gray-700 font-sf-pro text-sm px-3 py-2 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors cursor-pointer w-fit bg-white"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-[#ECECEC] rounded-b-lg p-4">
        <form onSubmit={handleSubmit} className="flex items-center space-x-3">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            placeholder="Ask me anything"
            className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none font-sf-pro placeholder-gray-500"
          />
          <button 
            type="submit"
            className="bg-black text-white rounded-full hover:bg-gray-800 transition-colors w-8 h-8 flex items-center justify-center text-xs"
          >
            ▶
          </button>
        </form>
      </div>
    </motion.div>
  );
}