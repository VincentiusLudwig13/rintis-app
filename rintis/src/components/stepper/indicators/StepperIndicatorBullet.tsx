// Component dengan state untuk animasi
import {
  Bullet,
  StyledStepperIndicatorWrapper,
} from '@/components/stepper/indicators/Indicator.styled';

interface StepperIndicatorProps {
  totalSteps: number;
  currentStep: number;
  onStepClick?: (step: number) => void;
}

const StepperIndicatorBullet = ({
  totalSteps,
  currentStep,
  onStepClick,
}: StepperIndicatorProps) => {
  return (
    <StyledStepperIndicatorWrapper>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index === currentStep;
        const clickable = !!onStepClick && !isActive;
        const key: string = `key-${index}`;

        return (
          <Bullet
            key={key}
            $isActive={isActive}
            $clickable={clickable}
            onClick={() => clickable && onStepClick?.(index)}
            aria-label={`Step ${index + 1} ${isActive ? '(current)' : ''}`}
            tabIndex={clickable ? 0 : -1}
            onKeyDown={(e) => {
              if (clickable && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onStepClick?.(index);
              }
            }}
          />
        );
      })}
    </StyledStepperIndicatorWrapper>
  );
};

export default StepperIndicatorBullet;
