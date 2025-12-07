import {
  IGetItemRecommendationResponse,
  IGetItemRecommendationResponseRaw,
} from '@/lib/feature/itemRecommendation/presentation/dto/GetItemRecommendation.dto';

export function mapItemRecommendationResponse(
  raw: IGetItemRecommendationResponseRaw
): IGetItemRecommendationResponse {
  return {
    responseCode: raw.response_code,
    items: raw.data.items.map((item) => ({
      itemName: item['item name'],
      description: item.description,
      estimatedPrices: item['estimated prices'],
      sourceOfPriceData: item['source of price data'],
    })),
  };
}
