// Helper function untuk mengonversi nilai gap
export const parseGapValue = (value?: number | string): string => {
  if (value === undefined) return '0';
  if (typeof value === 'number') return `${value}px`;
  return value;
};
