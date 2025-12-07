import { IGetBusinessRecommendationRequest } from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';
import { IGetBusinessRecommendationPayload } from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';

export const mapBusinessRecommendationPayloadToRequest = (
  payload: IGetBusinessRecommendationPayload
): IGetBusinessRecommendationRequest => {
  return {
    business_model: payload.businessModel,
    budget: payload.budget,
    hour: payload.hour,
    location: payload.location,
  };
};
