'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { LoginFormSchema, FormState } from './login.schema';
import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';

export async function loginAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Extract form data
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  // Validate with Zod schema
  const validatedFields = LoginFormSchema.safeParse({
    username,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the errors above.',
      values: {
        username,
      },
    };
  }

  let response;
  let data;

  try {
    response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: validatedFields.data.username,
        password: validatedFields.data.password,
      }),
      cache: 'no-store',
    });

    data = await response.json();

    if (!response.ok) {
      return {
        message: data.message || 'Login gagal. Silakan coba lagi.',
        values: {
          username: validatedFields.data.username,
        },
      };
    }

    // Store token in cookies if provided
    if (data.token) {
      const cookieStore = await cookies();
      cookieStore.set('auth_token', data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      // Also store user id if provided
      if (data.id_user) {
        cookieStore.set('user_id', data.id_user.toString(), {
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
        });
      }
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      message: 'Terjadi kesalahan. Silakan coba lagi nanti.',
      values: {
        username: validatedFields.data.username,
      },
    };
  }

  try {
    redirect('/dashboard');
  } catch (error) {
    throw error;
  }
}
