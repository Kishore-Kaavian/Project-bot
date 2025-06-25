const API_URL = 'http://127.0.0.1:8001/prompt/chat';

export async function sendMessage(prompt) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) throw new Error('Failed to fetch');

  const data = await response.json();
  return data;
}
sendMessage();