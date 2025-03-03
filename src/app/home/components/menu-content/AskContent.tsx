"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Link, Send, Paperclip, Mic } from 'lucide-react';
import { IBM_Plex_Mono } from 'next/font/google';
import type { MenuContentProps } from './types';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

type Message = {
  id: number;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
};

export function AskContent({ isActive, onClose }: MenuContentProps) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I can help you answer questions about Vamsi's work, experience, and projects. How else can I assist you?",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    setInputValue('');

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "I'm an AI assistant embedded in this portfolio. I can answer questions about Vamsi's work, experience, and projects. How else can I assist you?",
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full" style={{ height: '300px' }}>
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 overflow-hidden flex-shrink-0">
                <img 
                  src="/images/ai-avatar.jpg" 
                  alt="AI" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
            <div 
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === 'user' 
                  ? 'bg-black text-white rounded-tr-none ml-2' 
                  : 'bg-gray-100 rounded-tl-none'
              }`}
            >
              <p className={`${ibmPlexMono.className} text-sm`}>{message.text}</p>
            </div>
            {message.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-200 ml-2 overflow-hidden flex-shrink-0">
                <img 
                  src="/images/user-avatar.jpg" 
                  alt="User" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>
        ))}
        {/* Empty div for scrolling to bottom */}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type your message..."
              className={`${ibmPlexMono.className} w-full p-3 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-2">
              <button type="button" className="text-gray-400 hover:text-gray-600">
                <Paperclip size={18} />
              </button>
              <button type="button" className="text-gray-400 hover:text-gray-600">
                <Mic size={18} />
              </button>
            </div>
          </div>
          <button 
            type="submit" 
            className="ml-2 bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
            disabled={!inputValue.trim()}
          >
            <div className="flex items-center">
              <span className="mr-1">Send Message</span>
              <Send size={16} />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
} 