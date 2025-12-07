import { insertTransactionRepository } from '@/lib/feature/insertTransaction/adapter/instance/InsertTransaction.repository.instance';
import { InsertTransactionUsecase } from '@/lib/feature/insertTransaction/usecase/Insert/InsertTransaction.usecase';

export const getInsertTransactionUsecase = new InsertTransactionUsecase(
  insertTransactionRepository
);
