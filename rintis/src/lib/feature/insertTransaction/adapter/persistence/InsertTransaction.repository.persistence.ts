import { api } from '@/lib/common/api/axios.instance';
import { API_ENDPOINTS } from '@/core/config/api.config';
import { parseAxiosError } from '@/lib/common/error/parseAxiosError';
import { InsertTransactionRepositoryPort } from '@/lib/feature/insertTransaction/port/InsertTransaction.repository.port';
import { InsertTransactionRequest } from '@/lib/feature/insertTransaction/presentation/dto/InsertTransaction.dto';

export class InsertTransactionRepositoryPersistence implements InsertTransactionRepositoryPort {
  async insertTransaction(
    request: InsertTransactionRequest[]
  ): Promise<string | null> {
    try {
      return await api.post(API_ENDPOINTS.INSERT_TRANSAKSI, request);
    } catch (err) {
      throw parseAxiosError(err, 'Gagal memasukan transaksi. Coba lagi nanti.');
    }
  }
}
