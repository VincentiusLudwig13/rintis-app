import { UseCase } from '@/lib/common/types/usecase';
import { ValidationPipe } from '@/lib/common/pipes/Validation.pipe';
import {
  GetItemRecommendationRequestSchema,
  IGetItemRecommendationPayload,
} from '@/lib/feature/itemRecommendation/presentation/schema/GetItemRecommendation.schema';
import { IGetItemRecommendationResponse } from '@/lib/feature/itemRecommendation/presentation/dto/GetItemRecommendation.dto';
import { ItemRecommendationRepositoryPort } from '@/lib/feature/itemRecommendation/port/ItemRecommendation.repository.port';

export class GetItemRecommendationUsecase implements UseCase<
  IGetItemRecommendationPayload,
  IGetItemRecommendationResponse | null
> {
  constructor(private readonly service: ItemRecommendationRepositoryPort) {}

  async execute(
    input: IGetItemRecommendationPayload
  ): Promise<IGetItemRecommendationResponse | null> {
    const validatedPayload: IGetItemRecommendationPayload =
      ValidationPipe.validate(GetItemRecommendationRequestSchema, input);

    return await this.service.getAll(validatedPayload);
  }
}
