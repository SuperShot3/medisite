import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    if (!process.env.API_SECRET_KEY) {
      console.error('API_SECRET_KEY is not defined');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const body = await req.json()
    console.log('API Key available:', !!process.env.API_SECRET_KEY); // Для отладки
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_SECRET_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: body.messages,
        max_tokens: 1000,
        temperature: 0.7,
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('OpenAI API Error:', data);
      throw new Error(data.error?.message || 'OpenAI API error');
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 