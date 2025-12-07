import { UseCase } from '@/lib/common/types/usecase';
import { ValidationPipe } from '@/lib/common/pipes/Validation.pipe';
import {
  InsertTransactionPayload,
  InsertTransactionSchema,
} from '@/lib/feature/insertTransaction/presentation/schema/InsertTransaction.schema';
import { InsertTransactionRepositoryPort } from '@/lib/feature/insertTransaction/port/InsertTransaction.repository.port';

export class InsertTransactionUsecase implements UseCase<
  InsertTransactionPayload[],
  string | null
> {
  constructor(private readonly service: InsertTransactionRepositoryPort) {}

  async execute(input: InsertTransactionPayload[]): Promise<string | null> {
    const validatedPayload: InsertTransactionPayload[] = input.map((item) => {
      return ValidationPipe.validate(InsertTransactionSchema, item);
    });

    return await this.service.insertTransaction(validatedPayload);
  }
}
