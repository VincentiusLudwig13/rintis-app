// /api/flow/execute-kelola/route.ts
import { cookies } from 'next/headers';
import { API_BASE_URL } from '@/core/config/api.config';

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) {
    return Response.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  // Data dari localStorageKelolaFlowUtils
  const { insertTransactionPayload } = await req.json();

  try {
    // Hanya insert transaksi saja
    await fetch(`${API_BASE_URL}/insertTransaksi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify([insertTransactionPayload]),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Kelola flow exec failed', err);
    return Response.json(
      { success: false, message: 'Kelola flow exec failed' },
      { status: 500 }
    );
  }
}
