'use server';

import { TransaksiFormSchema, FormState } from './transaksi.schema';
import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';
import { getAuthToken } from '@/lib/auth';

export async function submitTransaksiAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Extract form data
  const amount = formData.get('amount');
  const desc = formData.get('desc') as string;
  const date = formData.get('date') as string;
  const type = formData.get('type') as string;
  // Parse amount to number
  const parsedAmount = amount ? parseInt(amount as string, 10) : null;

  // Validate with Zod schema
  const validatedFields = TransaksiFormSchema.safeParse({
    amount: parsedAmount,
    desc,
    date,
    type,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validasi gagal. Silakan cek kembali data Anda.',
    };
  }

  try {
    // Get auth token
    const token = await getAuthToken();
    if (!token) {
      return {
        message: 'Session Anda telah berakhir. Silakan login kembali.',
      };
    }

    const payload = {
      amount: validatedFields.data.amount,
      desc: validatedFields.data.desc,
      date: validatedFields.data.date,
      type: parseInt(validatedFields.data.type, 10),
    };

    // Wrap payload in array as API expects
    const requestBody = [payload];
    const bodyString = JSON.stringify(requestBody);

    // Send to API
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.TRANSAKSI}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': bodyString.length.toString(),
        Authorization: `Bearer ${token}`,
      },
      body: bodyString,
      cache: 'no-store',
    });

    if (response.status === 401) {
      const { cookies } = await import('next/headers');
      const { redirect } = await import('next/navigation');
      const cookieStore = await cookies();
      cookieStore.delete('auth_token');
      cookieStore.delete('user_id');
      redirect('/login');
    }

    let responseData;
    try {
      responseData = await response.json();
    } catch {
      // If we can't parse JSON but got a 200, it's still success
      if (response.ok) {
        return {
          message: 'Transaksi berhasil disimpan!',
          success: true,
        };
      }
      return {
        message: `API Error: ${response.status} ${response.statusText}`,
      };
    }

    if (!response.ok) {
      console.error('API error response:', responseData);

      // Extract error message from various possible API response formats
      let errorMessage = 'Gagal menyimpan transaksi. Coba lagi.';
      if (responseData.message) {
        errorMessage = responseData.message;
      } else if (responseData.error) {
        errorMessage = `API Error: ${responseData.error}`;
      } else if (responseData.errors) {
        // Handle validation errors array
        errorMessage = Array.isArray(responseData.errors)
          ? responseData.errors.join(', ')
          : JSON.stringify(responseData.errors);
      }

      console.error('Final error message:', errorMessage);
      return { message: errorMessage };
    }

    // Success
    return {
      message: 'Transaksi berhasil disimpan!',
      success: true,
    };
  } catch (error) {
    console.error('Submit transaksi error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      message: `Terjadi kesalahan: ${errorMessage}`,
    };
  }
}
