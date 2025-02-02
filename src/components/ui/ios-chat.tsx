"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  message: string;
  type: "send" | "receive";
  className?: string;
}

interface IOSChatProps {
  messages: Array<{
    message: string;
    type: "send" | "receive";
  }>;
  className?: string;
}

const ChatBubble = ({ message, type, className }: ChatBubbleProps) => {
  return (
    <p className={cn(
      "max-w-[255px] break-words mb-3 leading-6 relative px-5 py-2.5 rounded-[25px]",
      type === "send" ? "text-white bg-[#0B93F6] self-end chat-bubble-send" : 
                       "text-black bg-[#E5E5EA] self-start chat-bubble-receive",
      className
    )}>
      {message}
    </p>
  );
};

export function IOSChat({ messages, className }: IOSChatProps) {
  return (
    <div className={cn(
      "font-[Helvetica Neue] text-xl font-normal max-w-[367px] mx-auto my-[50px]",
      "flex flex-col bg-white",
      className
    )}>
      {messages.map((msg, index) => (
        <ChatBubble
          key={index}
          message={msg.message}
          type={msg.type}
        />
      ))}
    </div>
  );
} 