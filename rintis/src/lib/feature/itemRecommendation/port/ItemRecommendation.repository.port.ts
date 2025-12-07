import {
  IGetItemRecommendationRequest,
  IGetItemRecommendationResponse,
} from '@/lib/feature/itemRecommendation/presentation/dto/GetItemRecommendation.dto';

export interface ItemRecommendationRepositoryPort {
  getAll(
    request: IGetItemRecommendationRequest
  ): Promise<IGetItemRecommendationResponse | null>;
}
