import styled from 'styled-components';
import { lightPalette } from '@/core/theme/styleGuide/color';

export const StyledOutlineInput = styled('input')`
  border: 1px solid ${lightPalette.border.purpleGlow};
  border-radius: 10px;
  color: ${lightPalette.text.secondary};
  padding: 10px 15px 10px 15px;
  font-size: 8px;
  line-height: 12px;
  font-weight: 600;
  width: 100%;
  outline-color: ${lightPalette.primary.main};
`;

export const StyledFilledInput = styled('input')`
  border: none;
  border-radius: 10px;
  background-color: ${lightPalette.background.subtle};
  color: ${lightPalette.text.secondary};
  padding: 10px 15px 10px 15px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
