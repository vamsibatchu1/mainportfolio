// Base response types
export type ResponseType = 
  | 'text'
  | 'sources'
  | 'research'
  | 'code'
  | 'multi-agent' 
  | 'image-cards'
  | 'data-stats';

export interface BaseResponse {
  id: string;
  type: ResponseType;
  content: string;
  timestamp?: Date;
}

// Source interface (existing)
export interface Source {
  id: string;
  name: string;
  type: 'package' | 'file' | 'url';
}

// Text response (current default)
export interface TextResponse extends BaseResponse {
  type: 'text';
}

// Sources response (existing)
export interface SourcesResponse extends BaseResponse {
  type: 'sources';
  sources: Source[];
}

// Research response (existing)
export interface ResearchResponse extends BaseResponse {
  type: 'research';
  researchCount: number;
}

// Code response (future)
export interface CodeResponse extends BaseResponse {
  type: 'code';
  language: string;
  code: string;
  title?: string;
}

// Multi-agent response (future)
export interface MultiAgentResponse extends BaseResponse {
  type: 'multi-agent';
  agents: Array<{
    id: string;
    name: string;
    status: 'running' | 'completed' | 'failed';
    result?: string;
  }>;
}

// Image cards response (future)
export interface ImageCardsResponse extends BaseResponse {
  type: 'image-cards';
  cards: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }>;
}

// Data stats response (future)
export interface DataStatsResponse extends BaseResponse {
  type: 'data-stats';
  title: string;
  stats: Array<{
    label: string;
    value: string | number;
    trend?: 'up' | 'down' | 'stable';
  }>;
  chartData?: any;
}

// Union type for all responses
export type ResponseData = 
  | TextResponse
  | SourcesResponse
  | ResearchResponse
  | CodeResponse
  | MultiAgentResponse
  | ImageCardsResponse
  | DataStatsResponse;

// Chat message interface (updated)
export interface ChatMessage {
  id: string;
  question: string;
  response: ResponseData;
  timestamp: Date;
  isLoading?: boolean;
}

// Component props interfaces
export interface QuestionBubbleProps {
  question: string;
  timestamp: Date;
}

export interface ResponseContainerProps {
  response: ResponseData;
  messageId?: string;
  isLoading?: boolean;
  onPromptClick?: (prompt: string) => void;
}
