'use server';

import { fetchLabaRugi } from './labaRugi.data';

export async function getLabaRugiAction() {
  return await fetchLabaRugi();
}
