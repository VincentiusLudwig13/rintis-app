import { lightPalette } from '@/core/theme/styleGuide/color';
import styled from 'styled-components';

export const StyledSelect = styled.select`
  border: 1px solid ${lightPalette.border.purpleGlow};
  border-radius: 10px;
  color: ${lightPalette.text.secondary};
  padding: 10px 15px 10px 15px;
  font-size: 8px;
  line-height: 12px;
  font-weight: 600;
  width: 100%;
  transition: 0.4s;
  outline: none;
`;

export const StyledOption = styled.option`
  padding: 10px;
  transition: 0.4s;

  &:first-of-type {
    border-radius: 10px 10px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 10px 10px;
  }

  &:not(option:last-of-type) {
    border-bottom: none;
  }

  &:focus,
  &:hover {
    background-color: rgba(178, 156, 255, 0.35);
  }

  &:checked {
    font-weight: bold;
  }
`;
