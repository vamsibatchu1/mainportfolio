import React from 'react';
import MessageList from './MessageList';
import LoadingIndicator from './LoadingIndicator';
import SuggestionOptions from './SuggestionOptions';

interface Message {
  id: string;
  type: 'command' | 'output';
  content: string;
  timestamp: Date;
}

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean;
  suggestionOptions: string[];
  onSuggestionClick: (suggestion: string) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export default function ChatArea({ 
  messages, 
  isLoading, 
  suggestionOptions, 
  onSuggestionClick, 
  messagesEndRef 
}: ChatAreaProps) {
  return (
    <div className="bg-[#ECECEC] h-[400px] overflow-y-auto p-4 font-mono text-sm">
      <MessageList messages={messages} />
      
      <LoadingIndicator isLoading={isLoading} />

      <SuggestionOptions 
        suggestions={suggestionOptions}
        onSuggestionClick={onSuggestionClick}
        visible={messages.length === 1 && !isLoading}
      />
      
      <div ref={messagesEndRef} />
    </div>
  );
}