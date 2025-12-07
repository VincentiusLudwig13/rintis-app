'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get('auth_token')?.value;
}

export async function getUserId() {
  const cookieStore = await cookies();
  return cookieStore.get('user_id')?.value;
}

export async function isAuthenticated() {
  const token = await getAuthToken();
  return !!token;
}

export async function requireAuth() {
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    redirect('/login');
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  cookieStore.delete('user_id');
  redirect('/login');
}
