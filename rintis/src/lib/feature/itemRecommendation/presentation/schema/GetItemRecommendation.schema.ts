import { z } from 'zod';

export const GetItemRecommendationRequestSchema = z.object({
  businessType: z.string(),
  budget: z.string(), // "20.000.000"
});

export type IGetItemRecommendationPayload = z.infer<
  typeof GetItemRecommendationRequestSchema
>;
