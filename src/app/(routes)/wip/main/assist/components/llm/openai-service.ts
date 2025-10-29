import { LLMService, LLMMessage, LLMResponse, LLMError } from './types';

export class OpenAIService implements LLMService {
  async generateResponse(
    messages: LLMMessage[], 
    config?: any
  ): Promise<LLMResponse> {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API error: ${errorData.error || 'Unknown error'}`);
      }

      const data = await response.json();

      return {
        content: data.content,
        usage: data.usage,
        finishReason: data.finishReason,
      };
    } catch (error) {
      console.error('OpenAI Service Error:', error);
      throw {
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        type: 'api_error',
      } as LLMError;
    }
  }

  async *streamResponse(
    messages: LLMMessage[], 
    config?: any
  ): AsyncIterable<string> {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API error: ${errorData.error || 'Unknown error'}`);
      }

      const data = await response.json();
      
      // For now, yield the entire response as a single chunk
      // In the future, we can implement streaming
      yield data.content;
    } catch (error) {
      console.error('OpenAI Streaming Error:', error);
      throw {
        message: error instanceof Error ? error.message : 'Unknown streaming error occurred',
        type: 'streaming_error',
      } as LLMError;
    }
  }
}

// Export singleton instance
export const openAIService = new OpenAIService();
