import React from 'react';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { IoIosSearch } from 'react-icons/io';
import { FaArrowUpLong } from 'react-icons/fa6';
import { StyledOutlineInput } from '@/components/input/Input.styled';
import { KelolaStepType } from '@/app/(main)/(landing-page)/kelola/type/Kelola.type';
import { useBusinessRecommendation } from '@/app/(main)/(landing-page)/context/BusinessRecommendation.context';

interface KelolaContentProps extends Readonly<KelolaStepType> {
  onNext: () => void;
  isLastStep: boolean;
  handleClickLastStep: () => void;
}

function KelolaContent({
  onNext,
  isLastStep,
  handleClickLastStep,
  ...props
}: Readonly<KelolaContentProps>) {
  const { kelolaForm } = useBusinessRecommendation();
  const { register } = kelolaForm;

  const renderField = () => {
    if (props.type === 'input') {
      return (
        <StyledOutlineInput
          placeholder={props.placeholder}
          {...register(props.field!)}
        />
      );
    }

    return null;
  };

  const handleClick = () => {
    if (isLastStep) handleClickLastStep();
    onNext();
  };

  const hasField = props.type !== 'none';

  return (
    <StyledFlex width="100%" gap={10} direction="column" align="start">
      {/* TITLE */}
      <StyledFlex align="center" gap={20}>
        <Typography
          className="text-start"
          variant="h5"
          color={lightPalette.primary.main}
        >
          {props.title}
        </Typography>

        {/* Special case: last step has no description & no field */}
        {isLastStep && !props.description && !hasField && (
          <FaArrowUpLong
            size={24}
            color={lightPalette.primary.main}
            className="rotate-90 cursor-pointer"
            onClick={handleClick}
          />
        )}
      </StyledFlex>

      {/* DESCRIPTION */}
      {props.description && (
        <Typography variant="caption">{props.description}</Typography>
      )}

      {/* FIELD */}
      {hasField && (
        <StyledFlex gap={10} align="center" className="w-full pb-[120px]">
          <div className="w-[90%]">{renderField()}</div>

          {/* icons */}
          {isLastStep ? (
            <IoIosSearch
              className="cursor-pointer"
              size={24}
              color={lightPalette.primary.main}
              onClick={handleClick}
            />
          ) : (
            <FaArrowUpLong
              size={24}
              color={lightPalette.primary.main}
              className="rotate-90 cursor-pointer"
              onClick={handleClick}
            />
          )}
        </StyledFlex>
      )}
    </StyledFlex>
  );
}

export default KelolaContent;
