import { GetItemRecommendationUsecase } from '@/lib/feature/itemRecommendation/usecase/Get/GetItemRecommendation.usecase';
import { itemRecommendationRepository } from '@/lib/feature/itemRecommendation/adapter/instance/ItemRecommendation.repository.instance';

export const getItemRecommendationUsecase = new GetItemRecommendationUsecase(
  itemRecommendationRepository
);
