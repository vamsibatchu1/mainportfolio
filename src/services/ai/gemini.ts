import { GoogleGenerativeAI } from '@google/generative-ai';

export interface GeminiResponse {
  text: string;
  error?: string;
}

export interface GeminiConfig {
  model?: string;
  temperature?: number;
  maxOutputTokens?: number;
}

export class GeminiService {
  private static instance: GoogleGenerativeAI | null = null;
  private static readonly DEFAULT_CONFIG: Required<GeminiConfig> = {
    model: 'gemini-2.0-flash-exp',
    temperature: 0.7,
    maxOutputTokens: 1000,
  };

  /**
   * Get singleton instance of Gemini AI client
   * Uses NEXT_PUBLIC_GEMINI_API_KEY for client-side usage
   */
  static getInstance(): GoogleGenerativeAI {
    if (!this.instance) {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('NEXT_PUBLIC_GEMINI_API_KEY environment variable is required');
      }
      
      this.instance = new GoogleGenerativeAI(apiKey);
    }
    return this.instance;
  }

  /**
   * Generate content using Gemini AI
   * @param prompt The input prompt
   * @param config Optional configuration for the model
   * @returns Promise containing the generated response
   */
  static async generateContent(
    prompt: string,
    config: GeminiConfig = {}
  ): Promise<GeminiResponse> {
    try {
      const genAI = this.getInstance();
      const modelConfig = { ...this.DEFAULT_CONFIG, ...config };
      
      const model = genAI.getGenerativeModel({ 
        model: modelConfig.model,
        generationConfig: {
          temperature: modelConfig.temperature,
          maxOutputTokens: modelConfig.maxOutputTokens,
        },
      });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return { text };
    } catch (error) {
      console.error('Gemini API Error:', error);
      return {
        text: '',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Generate content with streaming (for future implementation)
   * @param prompt The input prompt
   * @param onChunk Callback for each chunk received
   * @param onError Callback for errors
   * @param onComplete Callback for completion
   */
  static async generateContentStream(
    prompt: string,
    onChunk: (chunk: string) => void,
    onError: (error: Error) => void,
    onComplete: () => void,
    config: GeminiConfig = {}
  ): Promise<void> {
    try {
      // This is a placeholder for future streaming implementation
      // For now, we'll use the regular generateContent and simulate streaming
      const response = await this.generateContent(prompt, config);
      
      if (response.error) {
        onError(new Error(response.error));
        return;
      }
      
      // Simulate streaming by sending the response in chunks
      const words = response.text.split(' ');
      for (let i = 0; i < words.length; i++) {
        const chunk = words[i] + (i < words.length - 1 ? ' ' : '');
        onChunk(chunk);
        
        // Small delay to simulate streaming
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      
      onComplete();
    } catch (error) {
      onError(error as Error);
    }
  }

  /**
   * Create a contextual prompt for portfolio assistant
   * @param userPrompt The user's question
   * @returns Formatted prompt for the portfolio assistant
   */
  static createPortfolioPrompt(userPrompt: string): string {
    return `You are Vamsi Batchu's portfolio assistant. Vamsi is a product designer and a leader with 12+ years experience, currently working at Rocket. He specializes in design craft, leading teams and creating impactful products and AI enablement.

Question: ${userPrompt}

Respond as Vamsi in under 400 characters. Be friendly and professional.`;
  }

  /**
   * Reset the singleton instance (useful for testing)
   */
  static resetInstance(): void {
    this.instance = null;
  }
}
