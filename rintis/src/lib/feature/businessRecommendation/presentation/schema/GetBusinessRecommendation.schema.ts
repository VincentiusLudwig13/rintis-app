import { z } from 'zod';

export const GetBusinessRecommendationSchema = z.object({
  businessModel: z.string().min(1, 'Business model is required'),
  budget: z.string().min(1, 'Budget is required'),
  hour: z.string().min(1, 'Hour is required'),
  location: z.string().min(1, 'Location is required'),
});

export type IGetBusinessRecommendationPayload = z.infer<
  typeof GetBusinessRecommendationSchema
>;
