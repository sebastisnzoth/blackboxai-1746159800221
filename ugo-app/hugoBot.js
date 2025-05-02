const OPENROUTER_API_KEY = 'YOUR_OPENROUTER_API_KEY';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function sendMessageToHugo(messages) {
  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'openchat/openchat-3.5',
      messages: messages,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenRouter API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message;
}
