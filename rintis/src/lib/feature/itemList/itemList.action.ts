'use server';

import { getAuthToken } from '@/lib/auth';
import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';

export async function submitCheckedItemsAction(itemIds: number[]) {
  try {
    const token = await getAuthToken();

    if (!token) {
      throw new Error('No authentication token found');
    }

    const body = itemIds.map((itemId) => ({
      itemId,
    }));

    const response = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.INTEGRATIONEXPENSES}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to submit items: ${response.status} ${errorText}`
      );
    }

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // Handle plain text response like "OK"
      data = await response.text();
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteSelectedItemsAction(itemIds: number[]) {
  try {
    const token = await getAuthToken();

    if (!token) {
      throw new Error('No authentication token found');
    }

    const body = itemIds.map((itemId) => ({
      itemId,
    }));

    const response = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.DELETEITEMLIST}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to delete items: ${response.status} ${errorText}`
      );
    }

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // Handle plain text response like "OK"
      data = await response.text();
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function addNewItemAction(
  itemId: string | number,
  itemName: string,
  estimatedPrice: number
) {
  try {
    const token = await getAuthToken();

    if (!token) {
      throw new Error('No authentication token found');
    }

    const payload = {
      itemId: itemId ? itemId : '',
      description: '',
      source_of_price_data: '',
      estimatedPrice,
      isAdded: '',
      itemName,
    };

    const response = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.UPSERTITEMLIST}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to add/update item: ${response.status} ${errorText}`
      );
    }

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // Handle plain text response like "OK"
      data = await response.text();
    }

    return data;
  } catch (error) {
    throw error;
  }
}
