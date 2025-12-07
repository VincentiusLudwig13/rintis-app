import styled, { css } from 'styled-components';

export const FlexPillWrapper = styled('div')`
  display: flex;
  padding: 4px;
  background-color: #f8f9fa;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  border: 1px solid #e9ecef;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  min-width: 280px;
  max-width: 600px;
  min-height: 44px;
  width: 100%;

  @media (max-width: 480px) {
    min-width: 250px;
    max-width: 100%;
    min-height: 40px;
    padding: 3px;
  }
`;

export const FlexPillSlider = styled('div')<{
  $currentStep: number;
  $itemCount: number;
}>`
  position: absolute;
  left: 4px;
  top: 4px;
  height: calc(100% - 8px);
  width: calc((100% - 8px) / ${({ $itemCount }) => $itemCount});
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  border-radius: 50px;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateX(calc(${({ $currentStep }) => $currentStep} * 100%));
  z-index: 1;

  @media (max-width: 480px) {
    left: 3px;
    top: 3px;
    height: calc(100% - 6px);
    width: calc((100% - 6px) / ${({ $itemCount }) => $itemCount});
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    border-radius: inherit;
    animation: shimmer 2s infinite;
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

export const FlexPillButton = styled('button')<{
  $isActive: boolean;
  $clickable: boolean;
}>`
  position: relative;
  z-index: 2;
  flex: 1;
  min-height: 36px;
  margin: 0 2px;
  border: none;
  background: transparent;
  border-radius: 50px;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#495057')};
  font-weight: ${({ $isActive }) => ($isActive ? '500' : '400')};
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  transition: all 0.2s ease;
  text-align: center;
  line-height: 1.2;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  hyphens: auto;
  letter-spacing: -0.2px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    ${({ $clickable, $isActive }) =>
      $clickable &&
      !$isActive &&
      css`
        background-color: rgba(79, 70, 229, 0.08);
        color: #4f46e5;
      `}
  }

  &:active {
    ${({ $clickable }) =>
      $clickable &&
      css`
        transform: scale(0.96);
        transition: transform 0.1s ease;
      `}
  }

  &:focus-visible {
    outline: 1px solid #4f46e5;
    outline-offset: 1px;
  }

  @media (max-width: 480px) {
    min-height: 34px;
    margin: 0 1px;
    padding: 4px 6px;
    font-size: 7px;
    line-height: 1.1;
  }

  @media (min-width: 768px) {
    font-size: 9px;
    padding: 8px 10px;
  }
`;
