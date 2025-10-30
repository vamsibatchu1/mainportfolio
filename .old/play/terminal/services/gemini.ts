import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(API_KEY);

export interface GeminiResponse {
  text: string;
  error?: string;
}

export class GeminiService {
  private model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
  private chatHistory: any[] = [];

  constructor() {
    this.initializeChat();
  }

  private initializeChat() {
    this.chatHistory = [
      {
        role: 'user',
        parts: ['You are a friendly and helpful AI assistant. You can help with any topic - from casual conversation to complex questions. Keep responses natural, engaging, and conversational. Be helpful, witty, and approachable.']
      },
      {
        role: 'model',
        parts: ['I understand! I\'m here to help with anything you\'d like to discuss. I\'ll keep responses friendly, engaging, and conversational while being genuinely helpful.']
      }
    ];
  }

  async generateResponse(userInput: string): Promise<GeminiResponse> {
    try {
      const result = await this.model.generateContent([
        ...this.chatHistory,
        { role: 'user', parts: [userInput] }
      ]);
      
      const response = await result.response;
      const text = response.text();
      
      // Update chat history
      this.chatHistory.push({ role: 'user', parts: [userInput] });
      this.chatHistory.push({ role: 'model', parts: [text] });
      
      return {
        text: text
      };
    } catch (error) {
      console.error('Gemini API Error:', error);
      return {
        text: 'Sorry, I encountered an error. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Reset the chat conversation
  resetChat() {
    this.initializeChat();
  }

  // Clean and sanitize the response text
  private sanitizeResponse(text: string): string {
    // Remove any markdown code blocks
    text = text.replace(/```[\s\S]*?```/g, '');
    
    // Remove any remaining backticks
    text = text.replace(/`/g, '');
    
    // Remove any asterisks used for bold/italic
    text = text.replace(/\*\*/g, '');
    text = text.replace(/\*/g, '');
    
    // Remove any underscores used for emphasis
    text = text.replace(/_/g, '');
    
    // Remove any hash symbols used for headers
    text = text.replace(/#{1,6}\s/g, '');
    
    // Remove any bullet points or list markers
    text = text.replace(/^[\s]*[-*+]\s/gm, '');
    text = text.replace(/^[\s]*\d+\.\s/gm, '');
    
    // Remove any extra whitespace and normalize line breaks
    text = text.replace(/\n\s*\n/g, '\n');
    text = text.replace(/\s+/g, ' ');
    
    // Trim whitespace
    text = text.trim();
    
    // Remove any remaining special characters that might cause issues
    text = text.replace(/[^\w\s.,!?;:()'"-]/g, '');
    
    return text;
  }

  // Generate a creative response based on the user's input
  async generateCreativeResponse(userInput: string): Promise<GeminiResponse> {
    try {
      const enhancedPrompt = `The user said: "${userInput}". 
      
      Respond in a friendly, helpful way. You can:
      - Be conversational and engaging
      - Share interesting insights or facts
      - Keep responses under 200 words
      - Use emojis sparingly for personality
      - Be witty and approachable
      
      Make your response feel natural and genuinely helpful.`;

      const result = await this.model.generateContent(enhancedPrompt);
      
      const response = await result.response;
      let text = response.text();
      
      // Clean and sanitize the response
      text = this.sanitizeResponse(text);
      
      // Update chat history
      this.chatHistory.push({ role: 'user', parts: [userInput] });
      this.chatHistory.push({ role: 'model', parts: [text] });
      
      return {
        text: text
      };
    } catch (error) {
      console.error('Gemini API Error:', error);
      return {
        text: '🤖 Oops! Something went wrong. Let me try again...',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

// Export a singleton instance
export const geminiService = new GeminiService(); 