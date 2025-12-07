import { api } from '@/lib/common/api/axios.instance';
import { API_ENDPOINTS } from '@/core/config/api.config';
import { parseAxiosError } from '@/lib/common/error/parseAxiosError';
import { ItemRecommendationRepositoryPort } from '@/lib/feature/itemRecommendation/port/ItemRecommendation.repository.port';
import {
  IGetItemRecommendationRequest,
  IGetItemRecommendationResponse,
} from '@/lib/feature/itemRecommendation/presentation/dto/GetItemRecommendation.dto';

export class ItemRecommendationRepositoryPersistence implements ItemRecommendationRepositoryPort {
  async getAll(
    request: IGetItemRecommendationRequest
  ): Promise<IGetItemRecommendationResponse | null> {
    try {
      console.log('request', request);
      return await api.post(API_ENDPOINTS.GET_ITEM_RECOMMENDATIONS, request);
    } catch (err) {
      throw parseAxiosError(
        err,
        'Gagal memuat rekomendasi bisnis. Coba lagi nanti.'
      );
    }
  }
}
