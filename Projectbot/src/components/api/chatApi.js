const API_URL = 'https://your-backend.com/api/chat'; // Replace with your real endpoint

export async function sendMessage(message) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) throw new Error('Failed to fetch');
  return await response.json(); // { reply: 'Bot response here' }
}
