export const API_URL = 'http://localhost:3000';

export async function createAppointment(name: string, date: Date, location: string) {
  const response = await fetch(`${API_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, date, location }),
  });

  if (!response.ok) {
    throw new Error('Failed to create appointment');
  }

  return response.json();
}
