import styled from 'styled-components';
import Link from 'next/link';
import { lightPalette } from '@/core/theme/styleGuide/color';

export const StyledPrimaryLinkButton = styled(Link)`
  background-color: ${lightPalette.primary.main};
  border-radius: 100px;
  height: 35px;
  padding: 5px 20px;
  font-size: 8px;
  font-weight: bold;
  color: #fff;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: none;
`;

export const StyledPrimaryButton = styled.button`
  background-color: ${lightPalette.primary.main};
  border-radius: 100px;
  height: 35px;
  padding: 5px 20px;
  font-size: 8px;
  font-weight: bold;
  color: #fff;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: none;
`;

export const StyledButton = styled.button`
  border-radius: 100px;
  height: 35px;
  padding: 5px 20px;
  font-size: 8px;
  font-weight: 500;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
