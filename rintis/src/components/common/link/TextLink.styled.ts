import styled from 'styled-components';
import Link from 'next/link';
import { lightPalette } from '@/core/theme/styleGuide/color';

export const StyledTextLink = styled(Link)`
  color: ${lightPalette.primary.main};
  text-decoration: none;
  font-size: 12px;
  line-height: 18px;
  &:hover {
    color: ${lightPalette.primary.light};
  }
`;
