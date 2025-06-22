import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyCNv9zQirdKcVSzh0q1BDqUBvT0SMb4n08');

// Get the model (using the cheapest Gemini 2.0 Flash-Lite model)
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

export async function generateResponse(prompt: string): Promise<string> {
  try {
    // Simple cost-effective prompt for the portfolio assistant
    const contextualPrompt = `You are Vamsi Batchu's portfolio assistant. Vamsi is a product designer and a leader with 12+ years experience, currently working at Rocket. He is specializes in design craft, leading teams and creating impactful products and AI enablement.

Question: ${prompt}

Respond as Vamsi in under 400 characters. Be friendly and professional.`;

    const result = await model.generateContent(contextualPrompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Fallback response
    return "I'm having trouble connecting right now, but I'd be happy to share more about Vamsi's work and experience. Could you try asking your question again?";
  }
} 