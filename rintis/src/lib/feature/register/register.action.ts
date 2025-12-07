'use server';

import { redirect } from 'next/navigation';
import { RegisterFormSchema, FormState } from './register.schema';
import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';

export async function registerAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Extract form data
  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;

  // Validate with Zod schema
  const validatedFields = RegisterFormSchema.safeParse({
    username,
    email,
    password,
    name,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the errors above.',
      values: {
        username,
        email,
        name,
      },
    };
  }

  let data;

  try {
    const response = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.AUTH.REGISTER}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: validatedFields.data.username,
          name: validatedFields.data.name,
          email: validatedFields.data.email,
          password: validatedFields.data.password,
        }),
      }
    );
    data = await response.json();

    if (!response.ok) {
      return {
        message: data.message || 'Pendaftaran gagal. Silakan coba lagi.',
        values: {
          username: validatedFields.data.username,
          email: validatedFields.data.email,
          name: validatedFields.data.name,
        },
      };
    }
  } catch (error) {
    console.error('Register error:', error);
    return {
      message: 'Terjadi kesalahan. Silakan coba lagi nanti.',
    };
  }

  try {
    redirect('/login');
  } catch (error) {
    throw error;
  }
}
