import React from 'react';
import {
  FlexPillButton,
  FlexPillSlider,
  FlexPillWrapper,
} from '@/components/stepper/indicators/IndicatorPill.styled';

interface FlexCategoryPillStepperIndicatorProps {
  currentStep: number;
  categories: string[];
  onStepClick?: (step: number) => void;
}

const FlexCategoryPillStepperIndicator: React.FC<
  FlexCategoryPillStepperIndicatorProps
> = ({ currentStep, categories, onStepClick }) => {
  return (
    <FlexPillWrapper>
      <FlexPillSlider
        $currentStep={currentStep}
        $itemCount={categories.length}
      />

      {categories.map((category, index) => {
        const isActive = index === currentStep;
        const clickable = !!onStepClick && !isActive;

        return (
          <FlexPillButton
            key={`flex-category-pill-${index}`}
            $isActive={isActive}
            $clickable={clickable}
            onClick={() => clickable && onStepClick?.(index)}
            aria-label={`${category} ${isActive ? '(current)' : ''}`}
            tabIndex={clickable ? 0 : -1}
            title={category}
          >
            {category}
          </FlexPillButton>
        );
      })}
    </FlexPillWrapper>
  );
};

export default FlexCategoryPillStepperIndicator;
