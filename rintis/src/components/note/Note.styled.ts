import styled from 'styled-components';

export const StyledNote = styled.p<{
  color?: string;
}>`
  color: ${(props) => props.color ?? '#2e7d32'};
  font-size: 8px;
  line-height: 12px;
  font-weight: 300;
`;
