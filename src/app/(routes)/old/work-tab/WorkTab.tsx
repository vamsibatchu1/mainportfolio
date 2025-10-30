'use client';

import { Editor } from "./editor"
import { ChatBot } from "./chatbot"

export function WorkTab() {
  return (
    <div className="h-full w-full font-inter">
      <div className="flex h-full gap-10">
        {/* Editor - 1000px width */}
        <div className="w-[1000px] h-full">
          <Editor />
        </div>
        
        {/* Chat - 400px width */}
        <div className="w-[400px] h-full">
          <ChatBot />
        </div>
      </div>
    </div>
  )
}
