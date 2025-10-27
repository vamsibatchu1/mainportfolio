import { LLMService, LLMMessage, LLMResponse, LLMError } from './types';
import { OPENAI_CONFIG, PORTFOLIO_SYSTEM_PROMPT } from './config';

export class OpenAIService implements LLMService {
  private config: typeof OPENAI_CONFIG;

  constructor(config = OPENAI_CONFIG) {
    this.config = config;
  }

  async generateResponse(
    messages: LLMMessage[], 
    config?: Partial<typeof OPENAI_CONFIG>
  ): Promise<LLMResponse> {
    try {
      const finalConfig = { ...this.config, ...config };
      
      // Add system prompt if not present
      const systemMessage: LLMMessage = {
        role: 'system',
        content: PORTFOLIO_SYSTEM_PROMPT
      };

      const allMessages = messages.some(m => m.role === 'system') 
        ? messages 
        : [systemMessage, ...messages];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${finalConfig.apiKey}`,
        },
        body: JSON.stringify({
          model: finalConfig.model,
          messages: allMessages,
          temperature: finalConfig.temperature,
          max_tokens: finalConfig.maxTokens,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const choice = data.choices[0];

      return {
        content: choice.message.content,
        usage: data.usage,
        finishReason: choice.finish_reason,
      };
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw {
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        type: 'api_error',
      } as LLMError;
    }
  }

  async *streamResponse(
    messages: LLMMessage[], 
    config?: Partial<typeof OPENAI_CONFIG>
  ): AsyncIterable<string> {
    try {
      const finalConfig = { ...this.config, ...config };
      
      // Add system prompt if not present
      const systemMessage: LLMMessage = {
        role: 'system',
        content: PORTFOLIO_SYSTEM_PROMPT
      };

      const allMessages = messages.some(m => m.role === 'system') 
        ? messages 
        : [systemMessage, ...messages];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${finalConfig.apiKey}`,
        },
        body: JSON.stringify({
          model: finalConfig.model,
          messages: allMessages,
          temperature: finalConfig.temperature,
          max_tokens: finalConfig.maxTokens,
          stream: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No response body reader available');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') return;

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  yield content;
                }
              } catch (e) {
                // Skip invalid JSON lines
              }
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
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
