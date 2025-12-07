import { GetBusinessRecommendationUsecase } from '@/lib/feature/businessRecommendation/usecase/Get/GetBusinessRecommendation.usecase';
import { businessRecommendationRepository } from '@/lib/feature/businessRecommendation/adapter/instance/BusinessRecommendation.repository.instance';

export const getBusinessRecommendationUsecase =
  new GetBusinessRecommendationUsecase(businessRecommendationRepository);
