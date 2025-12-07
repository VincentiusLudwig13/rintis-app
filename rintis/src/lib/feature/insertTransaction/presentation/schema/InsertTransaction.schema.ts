import { z } from 'zod';

export const InsertTransactionSchema = z.object({
  // Accept number or numeric string (e.g. "125000"), strip thousand separators if provided.
  amount: z.preprocess(
    (val) => {
      if (typeof val === 'string') {
        // accept "125.000", "125,000", "125000" etc.
        const cleaned = val.replaceAll(/[.,\s]/g, '');
        const parsed = Number(cleaned);
        return Number.isNaN(parsed) ? val : parsed;
      }
      return val;
    },
    z.number().int().positive({ message: 'amount must be a positive integer' })
  ),

  // Non-empty description
  desc: z.string().trim().min(1, { message: 'desc is required' }),

  // Date in YYYY-MM-DD and valid calendar date
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: 'date must be in YYYY-MM-DD format',
    })
    .refine(
      (s) => {
        const [y, m, d] = s.split('-').map(Number);
        const dt = new Date(s);
        return (
          !Number.isNaN(dt.getTime()) &&
          dt.getUTCFullYear() === y &&
          dt.getUTCMonth() + 1 === m &&
          dt.getUTCDate() === d
        );
      },
      { message: 'date must be a valid calendar date' }
    ),

  // Accept number or numeric string for type, but validate against allowed values
  type: z.preprocess((val) => {
    if (typeof val === 'string') {
      const parsed = Number.parseInt(val, 10);
      return Number.isNaN(parsed) ? val : parsed;
    }
    return val;
  }, z.number().int()),
});

export type InsertTransactionPayload = z.infer<typeof InsertTransactionSchema>;
