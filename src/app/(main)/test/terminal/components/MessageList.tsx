import React from 'react';
import MessageBubble from './MessageBubble';

interface Message {
  id: string;
  type: 'command' | 'output';
  content: string;
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="space-y-3">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}