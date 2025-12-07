import styled, { keyframes } from 'styled-components';

const slideNext = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slidePrev = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledStepperWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

function getTransform(isActive: boolean, direction: 'next' | 'prev') {
  if (isActive) return 'translateX(0)';

  if (direction === 'next') {
    return 'translateX(-40px)';
  }

  return 'translateX(40px)';
}

export const StyledSlide = styled.div<{
  $isActive: boolean;
  $direction: 'next' | 'prev';
}>`
  width: 100%;
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;

  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transform: ${({ $isActive, $direction }) =>
    getTransform($isActive, $direction)};

  position: ${({ $isActive }) => ($isActive ? 'relative' : 'absolute')};
  pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};
`;
