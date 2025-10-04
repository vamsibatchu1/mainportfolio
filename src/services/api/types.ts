// API Request/Response Types

export interface ChatRequest {
  prompt: string;
}

export interface ChatResponse {
  response: string;
  error?: string;
}

export interface ApiError {
  error: string;
  status?: number;
}

export interface ApiClientConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}
