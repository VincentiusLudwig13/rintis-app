import React from 'react';
import { useBusinessRecommendation } from '@/app/(main)/(landing-page)/context/BusinessRecommendation.context';
import InputTag from './InputTag';
import Typography from '@/components/Typography';
import { StyledOutlineInput } from '@/components/input/Input.styled';
import { StyledOption, StyledSelect } from '@/components/select/Select.styled';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { IoIosSearch } from 'react-icons/io';
import { FaArrowUpLong } from 'react-icons/fa6';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { IGetBusinessRecommendationPayload } from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';

export interface MulaiStepType {
  id: number;
  title: string;
  description: string;
  type: 'input' | 'tags' | 'select';
  field: keyof IGetBusinessRecommendationPayload;
  placeholder?: string;
}

export interface MulaiContentProps extends MulaiStepType {
  onNext: () => void;
  isLastStep: boolean;
  handleClickLastStep: () => void;
}

function MulaiContent({
  onNext,
  isLastStep,
  handleClickLastStep,
  ...props
}: Readonly<MulaiContentProps>) {
  const { form } = useBusinessRecommendation();
  const { register } = form;

  const renderField = () => {
    switch (props.type) {
      case 'input':
        return (
          <StyledOutlineInput
            placeholder={props.placeholder}
            {...register(props.field)}
          />
        );

      case 'tags':
        return <InputTag name={props.field} form={form} />;

      case 'select':
        return (
          <StyledSelect {...register(props.field)}>
            <StyledOption value="rumah">Di Rumah Saja</StyledOption>
            <StyledOption value="keliling/mobile">
              Keliling / Mobile
            </StyledOption>
            <StyledOption value="sewa">Sewa Lokasi</StyledOption>
            <StyledOption value="online">Full Online</StyledOption>
          </StyledSelect>
        );
    }
  };

  const handleClick = () => {
    if (isLastStep) handleClickLastStep();
    onNext();
  };

  return (
    <StyledFlex width="100%" gap={10} direction="column" align="start">
      <Typography variant="h5" color={lightPalette.primary.main}>
        {props.title}
      </Typography>

      <Typography variant="caption">{props.description}</Typography>

      <StyledFlex gap={10} align="center" className="w-full pb-[120px]">
        <div className="w-[90%]">{renderField()}</div>

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
    </StyledFlex>
  );
}

export default MulaiContent;
