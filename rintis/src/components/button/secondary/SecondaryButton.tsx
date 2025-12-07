import React from 'react';
import { PrimaryButtonProps } from '@/components/button/primary/PrimaryButton.type';
import {
  StyledSecondaryButton,
  StyledSecondaryLinkButton,
} from '@/components/button/secondary/SecondaryButton.styled';

function SecondaryButton({
  children,
  href,
  ...props
}: Readonly<PrimaryButtonProps>) {
  return href ? (
    <StyledSecondaryLinkButton href={href}>
      {children}
    </StyledSecondaryLinkButton>
  ) : (
    <StyledSecondaryButton {...props}>{children}</StyledSecondaryButton>
  );
}

export default SecondaryButton;
