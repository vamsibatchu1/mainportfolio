// LLM Configuration and Types
export interface LLMConfig {
  apiKey: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
}

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMResponse {
  content: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  finishReason?: string;
}

export interface LLMError {
  message: string;
  code?: string;
  type?: string;
}

// LLM Service Interface
export interface LLMService {
  generateResponse(messages: LLMMessage[], config?: Partial<LLMConfig>): Promise<LLMResponse>;
  streamResponse(messages: LLMMessage[], config?: Partial<LLMConfig>): AsyncIterable<string>;
}

// Response Processing Types
export interface ProcessedResponse {
  type: 'text' | 'code' | 'multi-agent' | 'image-cards' | 'data-stats';
  content: string;
  metadata?: Record<string, any>;
}
