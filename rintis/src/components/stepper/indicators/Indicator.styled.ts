import styled, { css } from 'styled-components';

export const Bullet = styled('button')<{
  $isActive: boolean;
  $clickable: boolean;
}>`
  height: 10px;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;

  ${({ $isActive }) =>
    $isActive
      ? css`
          width: 50px;
          background-color: #797979;
          border-radius: 100px;
          animation: pulse 2s infinite 0.4s;
        `
      : css`
          width: 10px;
          background-color: #d7d7d7;
          border-radius: 100%;
        `}

  &:hover {
    ${({ $clickable }) =>
      $clickable &&
      css`
        transform: scale(1.1);
      `}
  }

  &:active {
    ${({ $clickable }) =>
      $clickable &&
      css`
        transform: scale(0.95);
        transition: transform 0.1s ease;
      `}
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $isActive }) =>
      $isActive
        ? 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)'
        : 'none'};
    border-radius: inherit;
    animation: ${({ $isActive }) =>
      $isActive
        ? css`
            shimmer 1.5s infinite linear;
          `
        : 'none'};
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(121, 121, 121, 0.4);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(121, 121, 121, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(121, 121, 121, 0);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const StyledStepperIndicatorWrapper = styled('div')`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: 20px;
`;
