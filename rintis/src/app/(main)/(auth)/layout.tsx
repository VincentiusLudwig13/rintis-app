'use client';

import React from 'react';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Logo from '@/components/Logo';
import Link from 'next/link';

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link className={'absolute top-5 left-5'} href={'/'}>
        <Logo size={'40'} />
      </Link>
      <StyledFlex
        direction={'column'}
        height={'100%'}
        justify={'center'}
        gap={10}
        width={'100%'}
      >
        {children}
      </StyledFlex>
    </>
  );
}

export default AuthLayout;
