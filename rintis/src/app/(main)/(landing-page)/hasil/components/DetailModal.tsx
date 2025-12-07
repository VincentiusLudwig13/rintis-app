import React from 'react';
import { Modal, ModalProps } from '@/components/modal/Modal';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { StyledButton } from '@/components/button/primary/PrimaryButton.styled';
import { IBusinessDetail } from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';
import { formatRupiahNumber } from '@/common/utils/rupiah';
import { toast } from 'sonner';
import { useBusinessRecommendation } from '@/app/(main)/(landing-page)/context/BusinessRecommendation.context';

interface DetailModalProps extends ModalProps {
  data: IBusinessDetail;
}

function DetailModal({ data, ...props }: Readonly<DetailModalProps>) {
  const {
    onChooseBusiness,
    form,
    data: businessRecommendation,
  } = useBusinessRecommendation();

  const businessRecommendationChoosed =
    businessRecommendation?.data.rekomendasi.find(
      (item) => item.info_lain.pro === data.pro
    );

  const handleChooseBusiness = async () => {
    if (!businessRecommendationChoosed) {
      toast.error('⚠️ Generate rekomendasi bisnis terlebih dahulu yaa!');
      return;
    }

    await onChooseBusiness(form.getValues(), businessRecommendationChoosed);
  };

  const content = (
    <StyledFlex direction={'column'} gap={'10px'} marginTop={'20px'}>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>Omzet Harian</Typography>
        <Typography variant={'pixie'}>
          Rp {formatRupiahNumber(data.estimasi_omset_harian)}
        </Typography>
      </StyledFlex>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>HPP/Modal</Typography>
        <Typography variant={'pixie'}>
          Rp {formatRupiahNumber(data.estimasi_hpp)}
        </Typography>
      </StyledFlex>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}> Harian</Typography>
        <Typography variant={'pixie'}>
          Rp {formatRupiahNumber(data.profit_harian)}
        </Typography>
      </StyledFlex>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}> Simulasi ROI</Typography>
        <Typography className={'max-w-[75%] text-right'} variant={'pixie'}>
          {data.simulasi_roi}
        </Typography>
      </StyledFlex>

      <StyledFlex direction={'column'} gap={'10px'} marginTop={'15px'}>
        {data.pro && (
          <Typography component={'p'} variant={'pixie'}>
            ✅ {data.pro}
          </Typography>
        )}
        {data.kontra && (
          <Typography component={'p'} variant={'pixie'}>
            ⚠️ {data.kontra}
          </Typography>
        )}
      </StyledFlex>

      <StyledButton
        className={'mt-3 w-fit self-center'}
        style={{ border: '1px solid #C4C4C4' }}
        onClick={handleChooseBusiness}
      >
        Pilih Bisnis
      </StyledButton>
    </StyledFlex>
  );

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} header={props.header}>
      {content}
    </Modal>
  );
}

// Tambahkan CSS untuk animasi
const styles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;

// Tambahkan style ke document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default DetailModal;
