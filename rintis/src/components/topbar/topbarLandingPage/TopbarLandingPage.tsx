import React from 'react';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Logo from '@/components/Logo';
import PrimaryButton from '@/components/button/primary/PrimaryButton';
import Link from 'next/link';

function TopbarLandingPage() {
  return (
    <StyledFlex align={'start'} justify={'space-between'}>
      <Link href={'/'}>
        <Logo size={'40'} />
      </Link>
      <PrimaryButton href={'/login'}>Masuk</PrimaryButton>
    </StyledFlex>
  );
}

export default TopbarLandingPage;
