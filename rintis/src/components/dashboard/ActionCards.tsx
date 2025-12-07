'use client';

import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { redirect } from 'next/navigation';
import Card from '@/components/Card';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function ActionCards() {
  return (
    <StyledFlex justify="space-between" className="mt-5" gap={20}>
      <Card
        type="fill"
        color="#F0EEFA"
        className="w-full"
        onClick={() => {
          redirect('catat-pemasukan');
        }}
      >
        <StyledFlex gap={5} align="center" justify="space-evenly" height="100%">
          <TrendingUp size={24} color={lightPalette.primary.main} />
          <Typography
            weight="bold"
            variant={'caption'}
            color={lightPalette.text.primary}
          >
            Catat <br /> Pemasukan
          </Typography>
        </StyledFlex>
      </Card>
      <Card
        type="fill"
        color="#F0EEFA"
        className="w-full"
        onClick={() => {
          redirect('/catat-pengeluaran');
        }}
      >
        <StyledFlex gap={5} align="center" justify="space-evenly" height="100%">
          <TrendingDown size={24} color={lightPalette.primary.main} />
          <Typography
            weight="bold"
            variant={'caption'}
            color={lightPalette.text.primary}
          >
            Catat <br /> Pengeluaran
          </Typography>
        </StyledFlex>
      </Card>
    </StyledFlex>
  );
}
