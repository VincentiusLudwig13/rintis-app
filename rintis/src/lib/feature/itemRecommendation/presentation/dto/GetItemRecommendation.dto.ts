export interface IGetItemRecommendationRequest {
  businessType: string;
  budget: string; // contoh: "20.000.000"
}

export interface IItemRecommendationRaw {
  'item name': string;
  description: string;
  'estimated prices': number;
  'source of price data': string;
}

export interface IGetItemRecommendationResponseRaw {
  data: {
    items: IItemRecommendationRaw[];
  };
  response_code: number;
}

export interface IItemRecommendation {
  itemName: string;
  description: string;
  estimatedPrices: number;
  sourceOfPriceData: string;
}

export interface IGetItemRecommendationResponse {
  items: IItemRecommendation[];
  responseCode: number;
}
