import { LLMMessage, ProcessedResponse } from './types';
import { openAIService } from './openai-service';
import { RESPONSE_CONFIG } from './config';

export class LLMManager {
  private conversationHistory: LLMMessage[] = [];

  // Add a message to conversation history
  addMessage(role: 'user' | 'assistant', content: string): void {
    this.conversationHistory.push({ role, content });
  }

  // Get conversation history
  getHistory(): LLMMessage[] {
    return [...this.conversationHistory];
  }

  // Clear conversation history
  clearHistory(): void {
    this.conversationHistory = [];
  }

  // Generate a response for a user question
  async generateResponse(userQuestion: string): Promise<ProcessedResponse> {
    try {
      // Add user question to history
      this.addMessage('user', userQuestion);

      // Generate response using OpenAI
      const response = await openAIService.generateResponse(this.conversationHistory);

      // Add assistant response to history
      this.addMessage('assistant', response.content);

      // Process and return the response
      return this.processResponse(response.content);
    } catch (error) {
      console.error('LLM Manager Error:', error);
      return {
        type: 'text',
        content: 'I apologize, but I encountered an error while processing your request. Please try again.',
        metadata: { error: true }
      };
    }
  }

  // Stream a response for a user question
  async *streamResponse(userQuestion: string): AsyncIterable<string> {
    try {
      // Add user question to history
      this.addMessage('user', userQuestion);

      // Stream response using OpenAI
      let fullResponse = '';
      for await (const chunk of openAIService.streamResponse(this.conversationHistory)) {
        fullResponse += chunk;
        yield chunk;
      }

      // Add assistant response to history
      this.addMessage('assistant', fullResponse);
    } catch (error) {
      console.error('LLM Streaming Error:', error);
      yield 'I apologize, but I encountered an error while processing your request. Please try again.';
    }
  }

  // Process raw response content to determine type and format
  private processResponse(content: string): ProcessedResponse {
    // Simple heuristics to determine response type
    if (this.isCodeResponse(content)) {
      return {
        type: 'code',
        content,
        metadata: { language: this.detectCodeLanguage(content) }
      };
    }

    if (this.isMultiAgentResponse(content)) {
      return {
        type: 'multi-agent',
        content,
        metadata: { agents: this.extractAgents(content) }
      };
    }

    // Default to text response
    return {
      type: 'text',
      content: content.substring(0, RESPONSE_CONFIG.maxResponseLength),
      metadata: { truncated: content.length > RESPONSE_CONFIG.maxResponseLength }
    };
  }

  // Check if response contains code
  private isCodeResponse(content: string): boolean {
    const codePatterns = [
      /```[\s\S]*?```/,  // Code blocks
      /`[^`]+`/,         // Inline code
      /function\s+\w+/,  // Function declarations
      /const\s+\w+\s*=/, // Variable declarations
      /import\s+.*from/,  // Import statements
    ];
    
    return codePatterns.some(pattern => pattern.test(content));
  }

  // Detect programming language from code content
  private detectCodeLanguage(content: string): string {
    const languagePatterns = {
      javascript: /(function|const|let|var|=>|import|export)/,
      typescript: /(interface|type|enum|as\s+\w+)/,
      python: /(def\s+\w+|import\s+\w+|from\s+\w+)/,
      react: /(import\s+React|useState|useEffect|jsx)/,
      css: /(\.\w+\s*\{|@media|@keyframes)/,
      html: /(<[a-zA-Z][^>]*>|<\/[a-zA-Z]>)/,
    };

    for (const [lang, pattern] of Object.entries(languagePatterns)) {
      if (pattern.test(content)) {
        return lang;
      }
    }

    return 'text';
  }

  // Check if response mentions multiple agents or processes
  private isMultiAgentResponse(content: string): boolean {
    const agentPatterns = [
      /agent\s+\d+/i,
      /multiple\s+agents/i,
      /parallel\s+processing/i,
      /distributed\s+system/i,
    ];
    
    return agentPatterns.some(pattern => pattern.test(content));
  }

  // Extract agent information from content
  private extractAgents(content: string): string[] {
    const agentMatches = content.match(/agent\s+(\w+)/gi);
    return agentMatches ? agentMatches.map(match => match.toLowerCase()) : [];
  }
}

// Export singleton instance
export const llmManager = new LLMManager();
