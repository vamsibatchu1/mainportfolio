// DEPRECATED: Use ChatService from services/api/chat.ts instead
// This file is kept for backward compatibility but will be removed in future versions

import { ChatService } from '@/services/api/chat';

/**
 * @deprecated Use ChatService.sendMessage() instead
 * Legacy function for backward compatibility
 */
export async function generateResponse(prompt: string): Promise<string> {
  console.warn('generateResponse is deprecated. Use ChatService.sendMessage() instead.');
  return ChatService.sendMessage(prompt);
} 