import { BusinessRecommendationRepositoryPersistence } from '@/lib/feature/businessRecommendation/adapter/persistence/BusinessRecommendation.repository.persistence';

export const businessRecommendationRepository =
  new BusinessRecommendationRepositoryPersistence();
