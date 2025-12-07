import * as z from 'zod';

export const LoginFormSchema = z.object({
  username: z.string().trim().min(1, { message: 'Username diperlukan' }),
  password: z
    .string()
    .min(1, { message: 'Password diperlukan' })
});

export type FormState =
  | {
      errors?: {
        username?: string[];
        password?: string[];
      };
      message?: string;
      values?: {
        username?: string;
      };
    }
  | undefined;
