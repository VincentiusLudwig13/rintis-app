import styled from 'styled-components';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { IoClose } from 'react-icons/io5';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalBox = styled.div`
  width: 353px;
  max-width: 90%;
  background: white;
  border-radius: 20px;
  padding: 20px;
  animation: scaleIn 0.25s ease;
  position: relative;

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalHeader = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${lightPalette.text.primary};
  margin-bottom: 12px;
  max-width: 90%;
`;

export const ModalContent = styled.div`
  font-size: 14px;
  color: ${lightPalette.text.secondary};
`;

export const StyledCloseButton = styled(IoClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`;
