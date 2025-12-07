export function formatRupiahNumber(value: number | string): string {
  if (value === null || value === undefined) return '';

  const num = typeof value === 'string' ? Number(value) : value;

  if (isNaN(num)) return '';

  return num.toLocaleString('id-ID');
}
