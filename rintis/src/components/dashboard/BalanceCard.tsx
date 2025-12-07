'use client';

import Card from '@/components/Card';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';

interface BalanceCardProps {
  balance: number;
  labaRugi: number;
}

export function BalanceCard({ balance, labaRugi }: BalanceCardProps) {
  return (
    <Card type="fill" color="#B29CFF" className="mt-5">
      <StyledFlex direction="column" gap={5}>
        <Typography variant={'caption'} color={lightPalette.text.inverse}>
          Kamu punya,
        </Typography>
        <Typography variant={'h5'} color={lightPalette.text.inverse}>
          Rp {balance.toLocaleString('id-ID')}
        </Typography>
      </StyledFlex>
      <Typography variant={'caption'} color={lightPalette.text.inverse}>
        Laba rugi kamu, Rp {labaRugi.toLocaleString('id-ID')}
      </Typography>
    </Card>
  );
}
