// Export all LLM-related functionality
export * from './types';
export * from './config';
export * from './openai-service';
export * from './llm-manager';

// Main exports for easy importing
export { openAIService } from './openai-service';
export { llmManager } from './llm-manager';
export { OPENAI_CONFIG, PORTFOLIO_SYSTEM_PROMPT } from './config';
