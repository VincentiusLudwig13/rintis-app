import { UseCase } from '@/lib/common/types/usecase';
import {
  GetBusinessRecommendationSchema,
  IGetBusinessRecommendationPayload,
} from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';
import { IGetBusinessRecommendationResponse } from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';
import { BusinessRecommendationRepositoryPort } from '@/lib/feature/businessRecommendation/port/BusinessRecommendation.repository.port';
import { ValidationPipe } from '@/lib/common/pipes/Validation.pipe';
import { mapBusinessRecommendationPayloadToRequest } from '@/lib/feature/businessRecommendation/presentation/mapper/BusinessRecommendation.mapper';

export class GetBusinessRecommendationUsecase implements UseCase<
  IGetBusinessRecommendationPayload,
  IGetBusinessRecommendationResponse | null
> {
  constructor(private readonly service: BusinessRecommendationRepositoryPort) {}

  async execute(
    input: IGetBusinessRecommendationPayload
  ): Promise<IGetBusinessRecommendationResponse | null> {
    const validatedPayload: IGetBusinessRecommendationPayload =
      ValidationPipe.validate(GetBusinessRecommendationSchema, input);

    const request = mapBusinessRecommendationPayloadToRequest(validatedPayload);

    return await this.service.getAll(request);
  }
}
