'use server';

import { fetchUserInfo as fetchUserData } from '@/lib/feature/user/user.data';

export async function getUserInfoAction() {
  return await fetchUserData();
}
