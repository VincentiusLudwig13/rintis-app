import styled from 'styled-components';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { FaPlus } from 'react-icons/fa6';

export const StyledTagInputPillWraper = styled.div`
  border-radius: 100px;
  padding: 5px 5px 5px 10px;
  background-color: ${lightPalette.primary.main};
  color: white;
  font-size: 10px;
  font-weight: 600;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledActionButton = styled.button`
  color: white;
  width: 14px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 3px;
  font-size: 8px;
  border-radius: 100%;
  position: relative;
`;

export const StyledPlusIcon = styled(FaPlus)<{ $isAdded: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  transition:
    transform 0.25s ease,
    color 0.25s ease;

  transform: ${({ $isAdded }) => ($isAdded ? 'rotate(45deg)' : 'rotate(0deg)')};
`;

export const StyledTagInputWrapperBox = styled.div`
  border-radius: 10px;
  border: 1px solid ${lightPalette.border.purpleGlow};
  padding: 10px;
  min-height: 47px;
`;
