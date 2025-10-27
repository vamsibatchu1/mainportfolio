import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Add system prompt if not present
    const systemMessage = {
      role: 'system',
      content: `You are a helpful AI assistant for a portfolio website. You help users explore and understand the portfolio owner's work, projects, and expertise.

Key guidelines:
- Be conversational and helpful
- Focus on the portfolio owner's work, projects, and skills
- Provide accurate and relevant information
- If you don't know something specific about their work, say so politely
- Keep responses concise but informative
- Use a friendly, professional tone

You can help with:
- Explaining projects and case studies
- Discussing technical skills and expertise
- Providing insights about design decisions
- Answering questions about the portfolio owner's background
- Suggesting relevant projects or skills to explore

Remember: You're representing the portfolio owner, so be professional and helpful.`
    };

    const allMessages = messages.some((m: any) => m.role === 'system') 
      ? messages 
      : [systemMessage, ...messages];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: allMessages,
      temperature: 0.7,
      max_tokens: 2000,
    });

    const response = completion.choices[0]?.message?.content || '';

    return NextResponse.json({
      content: response,
      usage: completion.usage,
      finishReason: completion.choices[0]?.finish_reason,
    });

  } catch (error) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}