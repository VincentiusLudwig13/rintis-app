import React from 'react';
import {
  Backdrop,
  ModalBox,
  ModalContent,
  ModalHeader,
  StyledCloseButton,
} from './Modal.styled';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  header,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <StyledCloseButton onClick={onClose} />
        {header && <ModalHeader>{header}</ModalHeader>}
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </Backdrop>
  );
};
