export async function getChatResponse(messages: { role: 'user' | 'assistant'; content: string }[]) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: `You are a helpful and professional medical receptionist assistant. Your goal is to help patients schedule appointments at our medical clinic.
            Follow these guidelines:
            - Be polite and professional
            - Ask for necessary information (name, preferred time, type of appointment)
            - Provide clear options for appointment times
            - Confirm appointment details before finalizing
            - If you need more information, ask specific questions
            - Keep responses concise and relevant`
          },
          ...messages
        ],
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response:', data);
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error details:', error);
    return 'I apologize, but I am having trouble processing your request. Please try again.';
  }
} 