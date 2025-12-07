'use server';

import { fetchBalance } from "./balance.data";

export async function getBalanceAction() {
  return await fetchBalance();
}