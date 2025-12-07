import { BusinessRecommendationRepositoryPort } from '@/lib/feature/businessRecommendation/port/BusinessRecommendation.repository.port';
import {
  IGetBusinessRecommendationRequest,
  IGetBusinessRecommendationResponse,
} from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';
import { api } from '@/lib/common/api/axios.instance';
import { API_ENDPOINTS } from '@/core/config/api.config';
import { parseAxiosError } from '@/lib/common/error/parseAxiosError';

export class BusinessRecommendationRepositoryPersistence implements BusinessRecommendationRepositoryPort {
  async getAll(
    request: IGetBusinessRecommendationRequest
  ): Promise<IGetBusinessRecommendationResponse | null> {
    try {
      const response = await api.post(
        API_ENDPOINTS.GET_BUSINESS_RECOMMENDATIONS,
        request
      );
      return response.data;
    } catch (err) {
      throw parseAxiosError(
        err,
        'Gagal memuat rekomendasi bisnis. Coba lagi nanti.'
      );
    }
  }
}
