'use client';

import React from 'react';
import TopbarLandingPage from '@/components/topbar/topbarLandingPage/TopbarLandingPage';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { BusinessRecommendationProvider } from '@/app/(main)/(landing-page)/context/BusinessRecommendation.context';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BusinessRecommendationProvider>
      <TopbarLandingPage />
      <StyledFlex
        direction={'column'}
        height={'calc(100% - 60px)'}
        align={'center'}
        justify={'center'}
        gap={10}
        width={'100%'}
        overflowY={'auto'}
      >
        {children}
      </StyledFlex>
    </BusinessRecommendationProvider>
  );
}

export default Layout;
