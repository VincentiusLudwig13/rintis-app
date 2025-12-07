'use server';

import { getAuthToken } from '@/lib/auth';
import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function fetchBalance(): Promise<number | null> {
  try {
    const token = await getAuthToken();

    if (!token) {
      return null;
    }

    const url = `${API_BASE_URL}${API_ENDPOINTS.BALANCE}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    // If token is invalid/expired (401), clear cookies and redirect to login
    if (response.status === 401) {
      const cookieStore = await cookies();
      cookieStore.delete('auth_token');
      cookieStore.delete('user_id');
      redirect('/login');
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        'Failed to fetch user balance:',
        response.status,
        errorText
      );
      return null;
    }

    const data = await response.json();
    return data as number;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return null;
  }
}
