import * as z from 'zod';

export const TransaksiFormSchema = z.object({
  amount: z.number().positive('Amount harus lebih dari 0'),
  desc: z.string().min(1, 'Deskripsi diperlukan'),
  date: z.string().date('Format tanggal harus YYYY-MM-DD'),
  type: z.enum(['1', '2'], {
    message: 'Type harus 1 (income) atau 2 (expense)',
  }),
});

export type TransaksiFormData = z.infer<typeof TransaksiFormSchema>;

export type FormState =
  | {
      errors?: {
        amount?: string[];
        desc?: string[];
        date?: string[];
        type?: string[];
      };
      message?: string;
      success?: boolean;
    }
  | undefined;
