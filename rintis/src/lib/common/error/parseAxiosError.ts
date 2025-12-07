import { AxiosError } from 'axios';
import { HttpError } from './HttpError';

interface ErrorResponseShape {
  message?: string;
}

/**
 * Parse error dari Axios dan hasilkan HttpError.
 *
 * @param err - error yang dilempar oleh axios
 * @param fallbackMessage - pesan alternatif jika server tidak mengirim message
 */
export function parseAxiosError(
  err: unknown,
  fallbackMessage = 'Terjadi kesalahan. Silakan coba lagi.'
): HttpError {
  const error = err as AxiosError<ErrorResponseShape>;

  const message = error.response?.data?.message ?? fallbackMessage;

  const status = error.response?.status ?? 500;

  return new HttpError(message, status);
}
