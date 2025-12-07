'use client';

import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import PrimaryButton from '@/components/button/primary/PrimaryButton';
import SecondaryButton from '@/components/button/secondary/SecondaryButton';
import { lightPalette } from '@/core/theme/styleGuide/color';

export default function Home() {
  return (
    <>
      <Typography variant={'h5'} color={lightPalette.primary.main}>
        Hai, kamu lagi binggung mau mulai bisnis dari mana?{' '}
      </Typography>
      <Typography variant={'caption'} weight={'regular'}>
        Tenang, kita bisa bantu kasih rekomendasi bisnis yang mungkin menarik
        untuk kamu
      </Typography>
      <StyledFlex width={'100%'} gap={'15px'}>
        <PrimaryButton href={'/mulai'}>Temukan Bisnismu</PrimaryButton>
        <SecondaryButton href={'/kelola'}>
          Sudah Punya Bisnis? Yuk Kelola Bareng!
        </SecondaryButton>
      </StyledFlex>
    </>
  );
}
