// Secure client-side service that calls our API route
export async function generateResponse(prompt: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response');
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    return data.response;
  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Fallback response
    return "I'm having trouble connecting right now, but I'd be happy to share more about Vamsi's work and experience. Could you try asking your question again?";
  }
} 