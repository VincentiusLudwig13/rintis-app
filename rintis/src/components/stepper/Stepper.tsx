// Stepper.tsx
import React from 'react';
import {
  StyledSlide,
  StyledStepperWrapper,
} from '@/components/stepper/Stepper.styled';

interface StepperProps {
  children: React.ReactNode;
  currentStep: number;
}

const Stepper = ({ children, currentStep }: StepperProps) => {
  return (
    <StyledStepperWrapper>
      {React.Children.map(children, (child, index) => {
        const isActive = index === currentStep;
        const direction = index > currentStep ? 'prev' : 'next';
        const key: string = `key-${index}`;

        return (
          <StyledSlide key={key} $isActive={isActive} $direction={direction}>
            {child}
          </StyledSlide>
        );
      })}
    </StyledStepperWrapper>
  );
};

export default Stepper;
