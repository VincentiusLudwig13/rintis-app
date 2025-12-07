'use server';

import { getAuthToken } from '@/lib/auth';
import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';
import { UserInfo } from '@/types/UserInfoTypes';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function fetchUserInfo(): Promise<UserInfo | null> {
  const token = await getAuthToken();

  if (!token) {
    return null;
  }

  try {
    const url = `${API_BASE_URL}${API_ENDPOINTS.USERINFO}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    if (response.status === 401) {
      const cookieStore = await cookies();
      cookieStore.delete('auth_token');
      cookieStore.delete('user_id');
      redirect('/login');
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch user info:', response.status, errorText);
      return null;
    }

    const data = await response.json();
    return data as UserInfo;
  } catch (error) {
    console.error('Error fetching user info:', error);
    return null;
  }
}
