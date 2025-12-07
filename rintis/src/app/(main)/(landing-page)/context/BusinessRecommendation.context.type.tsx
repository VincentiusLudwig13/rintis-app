// BusinessRecommendationContext.type.ts

import {
  IBusinessRecommendation,
  IGetBusinessRecommendationResponse,
} from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';
import { IGetBusinessRecommendationPayload } from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';
import { UseFormReturn } from 'react-hook-form';
import { IKelolaForm } from '@/app/(main)/(landing-page)/kelola/type/Kelola.type';

export interface BusinessRecommendationContextType {
  form: UseFormReturn<IGetBusinessRecommendationPayload>;
  data: IGetBusinessRecommendationResponse | null;
  loading: boolean;
  error: string | null;

  onSubmit: (data: IGetBusinessRecommendationPayload) => Promise<boolean>;
  onChooseBusiness: (
    payload: IGetBusinessRecommendationPayload,
    recommendation: IBusinessRecommendation
  ) => Promise<void>;
  onKelolaFinish: (cash: string, omzet: string) => Promise<void>;
  kelolaForm: UseFormReturn<IKelolaForm>;
}
