'use client';

import useStepper from '@/components/stepper/hooks/useStepper';
import StepperIndicatorBullet from '@/components/stepper/indicators/StepperIndicatorBullet';
import Stepper from '@/components/stepper/Stepper';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { KelolaData } from '@/app/(main)/(landing-page)/kelola/data/Kelola.data';
import KelolaContent from '@/app/(main)/(landing-page)/kelola/components/KelolaContent';
import { useBusinessRecommendation } from '@/app/(main)/(landing-page)/context/BusinessRecommendation.context';
import { useEffect } from 'react';
import { IKelolaForm } from '@/app/(main)/(landing-page)/kelola/type/Kelola.type';
import { toast } from 'sonner';

export default function KelolaPage() {
  const { currentStep, next, goToStep } = useStepper({
    totalSteps: KelolaData.length,
  });
  const { onKelolaFinish, kelolaForm, loading } = useBusinessRecommendation();

  useEffect(() => {
    if (loading) {
      toast.loading('Sedang memproses rekomendasi...');
    } else {
      toast.dismiss();
    }

    return () => {
      toast.dismiss();
    };
  }, [loading]);

  const handleClickLastStep = async () => {
    const payload: IKelolaForm = kelolaForm.getValues();

    try {
      await onKelolaFinish(payload.cash, payload.omzet);
    } catch (error) {
      toast.error('Gagal memuat rekomendasi bisnis');
      return;
    }
  };

  const stepContents = KelolaData.map((data, index) => (
    <KelolaContent
      key={data.id}
      onNext={next}
      isLastStep={index === KelolaData.length - 1}
      handleClickLastStep={handleClickLastStep}
      {...data}
    />
  ));

  return (
    <StyledFlex width={'100%'} direction={'column'}>
      <Stepper currentStep={currentStep}>{stepContents}</Stepper>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-1/5">
        <StepperIndicatorBullet
          totalSteps={KelolaData.length}
          currentStep={currentStep}
          onStepClick={goToStep}
        />
      </div>
    </StyledFlex>
  );
}
