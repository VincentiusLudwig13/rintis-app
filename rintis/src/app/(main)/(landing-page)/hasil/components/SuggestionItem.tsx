import React from 'react';
import Typography from '@/components/Typography';
import Card from '@/components/Card';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { StyledButton } from '@/components/button/primary/PrimaryButton.styled';
import { useModal } from '@/components/modal/hooks/useModal';
import DetailModal from '@/app/(main)/(landing-page)/hasil/components/DetailModal';
import { IBusinessRecommendation } from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';
import { formatRupiahNumber } from '@/common/utils/rupiah';

interface SuggestionItemProps {
  data: IBusinessRecommendation;
}

function SuggestionItem({ data }: Readonly<SuggestionItemProps>) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <StyledFlex direction={'column'} gap={'10px'}>
        <Card
          type={'fill'}
          color={lightPalette.background.subtle}
          className={'flex flex-col gap-[15px]'}
        >
          <Typography component={'p'} variant={'caption'} weight={'bold'}>
            {data.nama_bisnis}
          </Typography>
          <Typography component={'p'} variant={'caption'} weight={'regular'}>
            {data.description}
          </Typography>
          <Typography component={'p'} variant={'caption'} weight={'regular'}>
            Modal awal Rp {formatRupiahNumber(data.estimasi_modal)}
          </Typography>

          <StyledButton
            onClick={openModal}
            className={'bg-white w-fit self-end'}
          >
            Lihat Rincian
          </StyledButton>
        </Card>
      </StyledFlex>

      <DetailModal
        data={data.info_lain}
        isOpen={isOpen}
        onClose={closeModal}
        header={data.nama_bisnis}
      >
        Ini kontennya
      </DetailModal>
    </>
  );
}

export default SuggestionItem;
