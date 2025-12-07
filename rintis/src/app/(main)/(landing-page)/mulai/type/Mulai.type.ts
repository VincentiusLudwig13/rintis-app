import { IGetBusinessRecommendationPayload } from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';

export interface MulaiStepType {
  id: number;
  title: string;
  description: string;
  field: keyof IGetBusinessRecommendationPayload;
  placeholder?: string;
  type: 'input' | 'tags' | 'select';
}
