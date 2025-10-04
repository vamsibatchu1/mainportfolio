import { apiClient } from './client';
import { ChatRequest, ChatResponse } from './types';

export class ChatService {
  /**
   * Send a message to the portfolio AI assistant
   * @param prompt The user's question or message
   * @returns Promise containing the AI response
   */
  static async sendMessage(prompt: string): Promise<string> {
    if (!prompt.trim()) {
      throw new Error('Prompt cannot be empty');
    }

    try {
      const response = await apiClient.post<ChatResponse>('/chat', {
        prompt: prompt.trim(),
      } as ChatRequest);

      if (response.error) {
        throw new Error(response.error);
      }

      return response.response;
    } catch (error) {
      console.error('Chat service error:', error);
      
      // Fallback response for better UX
      return "I'm having trouble connecting right now, but I'd be happy to share more about Vamsi's work and experience. Could you try asking your question again?";
    }
  }

  /**
   * Stream a message to the portfolio AI assistant (for future streaming implementation)
   * @param prompt The user's question or message
   * @param onChunk Callback for each chunk received
   * @param onError Callback for errors
   * @param onComplete Callback for completion
   */
  static async streamMessage(
    prompt: string,
    onChunk: (chunk: string) => void,
    onError: (error: Error) => void,
    onComplete: () => void
  ): Promise<void> {
    if (!prompt.trim()) {
      onError(new Error('Prompt cannot be empty'));
      return;
    }

    try {
      // This is a placeholder for future streaming implementation
      // For now, we'll use the regular sendMessage and simulate streaming
      const response = await this.sendMessage(prompt);
      
      // Simulate streaming by sending the response in chunks
      const words = response.split(' ');
      for (let i = 0; i < words.length; i++) {
        const chunk = words[i] + (i < words.length - 1 ? ' ' : '');
        onChunk(chunk);
        
        // Small delay to simulate streaming
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      onComplete();
    } catch (error) {
      onError(error as Error);
    }
  }
}
