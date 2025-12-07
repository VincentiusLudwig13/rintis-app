import * as z from 'zod';

export const RegisterFormSchema = z.object({
  name: z.string().trim(),
  username: z.string().trim(),
  email: z.email({ error: 'Masukkan email yang valid' }).trim(),
  password: z
    .string()
    .min(1, { error: 'Password gaboleh kosong' })
    .min(8, { error: 'Minimal 8 karakter' })
    .regex(/[a-zA-Z]/, { error: 'Harus mengandung setidaknya satu huruf.' })
    .regex(/[0-9]/, { error: 'Harus mengandung setidaknya satu angka.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Harus mengandung setidaknya satu karakter khusus.',
    })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
        name?: string[];
      };
      message?: string;
      values?: {
        username?: string;
        email?: string;
        name?: string;
      };
    }
  | undefined;
