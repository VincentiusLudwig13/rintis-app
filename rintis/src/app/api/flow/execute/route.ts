// /api/flow/execute/route.ts
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

  const { insertTransactionPayload, getItemRecommendationPayload } =
    await req.json();

  try {
    // Hit API
    await fetch(`${API_BASE_URL}/insertTransaksi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify([insertTransactionPayload]),
    });

    await fetch(`${API_BASE_URL}/getRekomendasiItem`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(getItemRecommendationPayload),
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      { success: false, message: 'Flow exec failed' },
      { status: 500 }
    );
  }
}
