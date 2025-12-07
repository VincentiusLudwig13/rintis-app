export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return { success: true };
  } catch (err) {
    console.error('Copy failed:', err);
    return { success: false };
  }
}
