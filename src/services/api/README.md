# API Services

This directory contains client-side API services for communicating with the backend API routes.

## Structure

```
src/services/
├── api/
│   ├── client.ts          # Base HTTP client with error handling
│   ├── chat.ts            # Chat/AI service
│   ├── types.ts           # API request/response types
│   └── README.md          # This file
├── ai/
│   └── gemini.ts          # Direct Gemini AI integration (client-side)
└── index.ts               # Export all services
```

## Usage

### ChatService

```typescript
import { ChatService } from '@/services/api/chat';

// Send a message to the AI assistant
const response = await ChatService.sendMessage("Tell me about Vamsi's experience");

// Stream a message (simulated streaming for now)
await ChatService.streamMessage(
  "What projects has Vamsi worked on?",
  (chunk) => console.log(chunk),      // onChunk
  (error) => console.error(error),    // onError
  () => console.log('Complete')       // onComplete
);
```

### GeminiService (Direct Integration)

```typescript
import { GeminiService } from '@/services/ai/gemini';

// Generate content directly with Gemini
const response = await GeminiService.generateContent(
  "Write a short bio for a product designer",
  { temperature: 0.7, maxOutputTokens: 500 }
);

// Create portfolio-specific prompts
const prompt = GeminiService.createPortfolioPrompt("What are Vamsi's skills?");
```

### ApiClient (Base Client)

```typescript
import { apiClient } from '@/services/api/client';

// Make HTTP requests with built-in error handling
const data = await apiClient.post('/custom-endpoint', { key: 'value' });
const result = await apiClient.get('/data');
```

## Migration Guide

### From Old generateResponse Function

**Before:**
```typescript
import { generateResponse } from '@/lib/gemini';

const response = await generateResponse("Hello");
```

**After:**
```typescript
import { ChatService } from '@/services/api/chat';

const response = await ChatService.sendMessage("Hello");
```

## Error Handling

All services include comprehensive error handling:

- **Network errors**: Automatic retries and fallback responses
- **API errors**: Proper error messages and status codes
- **Timeout handling**: Configurable request timeouts
- **Type safety**: Full TypeScript support

## Environment Variables

Required environment variables:

```bash
# For API routes (server-side)
GEMINI_API_KEY=your_server_side_key

# For client-side direct integration
NEXT_PUBLIC_GEMINI_API_KEY=your_client_side_key

# API configuration
NEXT_PUBLIC_API_URL=/api
```

## Future Enhancements

- [ ] Real streaming support for AI responses
- [ ] Request/response caching
- [ ] Retry logic with exponential backoff
- [ ] Request deduplication
- [ ] Analytics and monitoring integration
