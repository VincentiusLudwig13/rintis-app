'use server';

import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';
import { getAuthToken } from '@/lib/auth';
import ChartData from '@/types/ChartTypes';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function fetchChartData() {
  try {
    const token = await getAuthToken();

    if (!token) {
      return null;
    }

    const url = `${API_BASE_URL}${API_ENDPOINTS.GETCHARTDATA}`;
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
      console.error('Failed to fetch chart data:', response.status, errorText);
      return null;
    }

    const data = await response.json();
    return data as ChartData[];
  } catch (error) {
    console.error('Error fetching chart data:', error);
    return null;
  }
}
