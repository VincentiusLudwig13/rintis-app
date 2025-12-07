import { PrimaryButtonProps } from '@/components/button/primary/PrimaryButton.type';
import {
  StyledPrimaryButton,
  StyledPrimaryLinkButton,
} from '@/components/button/primary/PrimaryButton.styled';

function PrimaryButton({
  children,
  href,
  ...props
}: Readonly<PrimaryButtonProps>) {
  if (href) {
    return (
      <StyledPrimaryLinkButton href={href}>{children}</StyledPrimaryLinkButton>
    );
  }

  return <StyledPrimaryButton {...props}>{children}</StyledPrimaryButton>;
}

export default PrimaryButton;
