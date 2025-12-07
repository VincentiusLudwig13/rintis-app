import { InsertTransactionRequest } from '@/lib/feature/insertTransaction/presentation/dto/InsertTransaction.dto';

export interface InsertTransactionRepositoryPort {
  insertTransaction(
    request: InsertTransactionRequest[]
  ): Promise<string | null>;
}
