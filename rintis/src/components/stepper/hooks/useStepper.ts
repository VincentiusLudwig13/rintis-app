// Hook untuk handle stepper logic
import { useCallback, useState } from 'react';

interface UseStepperProps {
  totalSteps: number;
  initialStep?: number;
  onStepChange?: (step: number) => void;
}

const useStepper = ({
  totalSteps,
  initialStep = 0,
  onStepChange,
}: UseStepperProps) => {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  const next = useCallback(() => {
    setCurrentStep((prev: number) => {
      if (prev < totalSteps - 1) {
        const nextStep = prev + 1;
        onStepChange?.(nextStep);
        return nextStep;
      }
      return prev;
    });
  }, [totalSteps, onStepChange]);

  const prev = useCallback(() => {
    setCurrentStep((prev: number) => {
      if (prev > 0) {
        const prevStep = prev - 1;
        onStepChange?.(prevStep);
        return prevStep;
      }
      return prev;
    });
  }, [onStepChange]);

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps) {
        setCurrentStep(step);
        onStepChange?.(step);
      }
    },
    [totalSteps, onStepChange]
  );

  const reset = useCallback(() => {
    setCurrentStep(initialStep);
    onStepChange?.(initialStep);
  }, [initialStep, onStepChange]);

  return {
    currentStep,
    next,
    prev,
    goToStep,
    reset,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === totalSteps - 1,
  };
};

export default useStepper;
