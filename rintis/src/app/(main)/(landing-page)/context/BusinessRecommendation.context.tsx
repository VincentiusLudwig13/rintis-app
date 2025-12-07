'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { IGetBusinessRecommendationPayload } from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';
import {
  IBusinessRecommendation,
  IGetBusinessRecommendationResponse,
} from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';
import { BusinessRecommendationContextType } from '@/app/(main)/(landing-page)/context/BusinessRecommendation.context.type';
import { parseAxiosError } from '@/lib/common/error/parseAxiosError';
import { getBusinessRecommendationUsecase } from '@/lib/feature/businessRecommendation/usecase/Get/GetBusinessRecommendation.usecase.instance';
import { getInsertTransactionUsecase } from '@/lib/feature/insertTransaction/usecase/Insert/InsertTransaction.usecase.instance';
import { InsertTransactionPayload } from '@/lib/feature/insertTransaction/presentation/schema/InsertTransaction.schema';
import { formatDateToYMD } from '@/common/utils/formatDate';
import { IGetItemRecommendationPayload } from '@/lib/feature/itemRecommendation/presentation/schema/GetItemRecommendation.schema';
import { getItemRecommendationUsecase } from '@/lib/feature/itemRecommendation/usecase/Get/GetItemRecommendation.usecase.instance';
import { isAuthenticated } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { localStorageFlowUtils } from '@/common/utils/localStorageFlow';
import { localStorageKelolaFlowUtils } from '@/common/utils/localStorageKelolaFlowUtils';
import { IKelolaForm } from '@/app/(main)/(landing-page)/kelola/type/Kelola.type';

const BusinessRecommendationContext = createContext<
  BusinessRecommendationContextType | undefined
>(undefined);

export function BusinessRecommendationProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [data, setData] = useState<IGetBusinessRecommendationResponse | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const usecase = getBusinessRecommendationUsecase;

  const form = useForm<IGetBusinessRecommendationPayload>({
    defaultValues: {
      businessModel: '',
      budget: '',
      hour: '',
      location: '',
    },
  });

  const kelolaForm = useForm<IKelolaForm>({
    defaultValues: {
      cash: '',
      omzet: '',
    },
  });

  const onSubmit = useCallback(
    async (payload: IGetBusinessRecommendationPayload): Promise<boolean> => {
      setLoading(true);
      setError(null);

      try {
        const result = await usecase.execute(payload);
        setData(result);
        return true;
      } catch (err: unknown) {
        const parsedError = parseAxiosError(
          err,
          'Gagal memuat rekomendasi bisnis'
        );
        setError(parsedError.message);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [usecase]
  );

  const onChooseBusiness = useCallback(
    async (
      payload: IGetBusinessRecommendationPayload,
      recommendation: IBusinessRecommendation
    ) => {
      setLoading(true);
      setError(null);

      const insertTransactionPayload: InsertTransactionPayload = {
        amount: Number(payload.budget),
        desc: 'Pendapatan harian',
        date: formatDateToYMD(new Date()),
        type: 4,
      };

      const getItemRecommendationPayload: IGetItemRecommendationPayload = {
        budget: payload.budget,
        businessType: recommendation.nama_bisnis,
      };

      const isLoggedIn = await isAuthenticated();

      if (!isLoggedIn) {
        toast.error(
          '⚠️ Kamu harus login dulu untuk melanjutkan. Tapi tenang, data bisnismu akan tetap kesimpan kok 🤗'
        );

        localStorageFlowUtils.setFlow({
          insertTransactionPayload,
          getItemRecommendationPayload,
        });

        setTimeout(() => {
          router.push('/login');
        }, 800);

        setLoading(false);
        return;
      }

      try {
        await getInsertTransactionUsecase.execute([insertTransactionPayload]);
        await getItemRecommendationUsecase.execute(
          getItemRecommendationPayload
        );
        router.push('/dashboard');
      } catch (err: unknown) {
        const parsedError = parseAxiosError(
          err,
          'Gagal memilih rekomendasi bisnis'
        );
        setError(parsedError.message);
      } finally {
        setLoading(false);
      }
    },
    [getItemRecommendationUsecase, getInsertTransactionUsecase]
  );

  const onKelolaFinish = useCallback(async (cash: string, omzet: string) => {
    setLoading(true);
    setError(null);

    const insertTransactionPayload: InsertTransactionPayload = {
      amount: Number(cash),
      desc: 'Pendapatan harian',
      date: formatDateToYMD(new Date()),
      type: 4,
    };

    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn) {
      toast.error(
        '⚠️ Kamu harus login dulu untuk melanjutkan. Tenang, datamu tetap kesimpan 🤗'
      );

      localStorageKelolaFlowUtils.setFlow({
        insertTransactionPayload,
      });

      setTimeout(() => router.push('/login'), 800);

      setLoading(false);
      return;
    }

    try {
      await getInsertTransactionUsecase.execute([insertTransactionPayload]);
      router.push('/dashboard');
    } catch (err: unknown) {
      const parsedError = parseAxiosError(err, 'Gagal menyimpan data kelola');
      setError(parsedError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      form,
      data,
      loading,
      error,
      onSubmit,
      onChooseBusiness,
      onKelolaFinish,
      kelolaForm,
    }),
    [
      form,
      data,
      loading,
      error,
      onSubmit,
      onChooseBusiness,
      onKelolaFinish,
      kelolaForm,
    ]
  );

  return (
    <BusinessRecommendationContext.Provider value={value}>
      {children}
    </BusinessRecommendationContext.Provider>
  );
}

export function useBusinessRecommendation() {
  const ctx = useContext(BusinessRecommendationContext);
  if (!ctx) {
    throw new Error(
      'useBusinessRecommendation harus digunakan di dalam BusinessRecommendationProvider'
    );
  }
  return ctx;
}
