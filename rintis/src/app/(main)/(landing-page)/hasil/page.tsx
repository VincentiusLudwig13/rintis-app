'use client';

import React from 'react';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import SuggestionItem from '@/app/(main)/(landing-page)/hasil/components/SuggestionItem';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { useBusinessRecommendation } from '@/app/(main)/(landing-page)/context/BusinessRecommendation.context';

function HasilPage() {
  const { data } = useBusinessRecommendation();

  return (
    <StyledFlex
      direction={'column'}
      height={'100%'}
      gap={'15px'}
      paddingTop={'10px'}
    >
      <Typography variant={'h5'} color={lightPalette.primary.main}>
        Sip, mungkin kamu bisa pertimbangin ini
      </Typography>
      <Typography variant={'caption'} weight={'regular'}>
        Berdasarkan modal dan informasi yang telah kamu berikan, kita
        merekomendasikan 3 peluang bisnis yang cocok
      </Typography>

      {data?.data.rekomendasi.map((item) => (
        <SuggestionItem data={item} key={item.nama_bisnis} />
      ))}
    </StyledFlex>
  );
}

export default HasilPage;
