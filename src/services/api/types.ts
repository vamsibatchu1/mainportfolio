// API Request/Response Types

export interface ChatRequest {
  prompt: string;
}

export interface ChatResponse {
  response: string;
  error?: string;
}

export class ApiError extends Error {
  public status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export interface ApiClientConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}
