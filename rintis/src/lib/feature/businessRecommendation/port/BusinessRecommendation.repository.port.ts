import {
  IGetBusinessRecommendationRequest,
  IGetBusinessRecommendationResponse,
} from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';

export interface BusinessRecommendationRepositoryPort {
  getAll(
    request: IGetBusinessRecommendationRequest
  ): Promise<IGetBusinessRecommendationResponse | null>;
}
