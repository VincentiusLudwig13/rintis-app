import React from 'react';
import { Modal, ModalProps } from '@/components/modal/Modal';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { StyledButton } from '@/components/button/primary/PrimaryButton.styled';
import { UserInfo } from '@/types/UserInfoTypes';
import { copyText } from '@/common/utils/copyText';
import { toast } from 'sonner';
import { MdOutlineContentCopy } from 'react-icons/md';
import { logoutAction } from '@/lib/feature/logout/logout.action';

interface ProfileModalProps extends ModalProps {
  data?: UserInfo;
}

function ProfileModal({ data, ...props }: Readonly<ProfileModalProps>) {
  const handleSignOutButton = async () => {
    await logoutAction();
  };

  const handleCopyText = async () => {
    if (data) {
      const result = await copyText(data?.token_saweria);
      if (result.success) toast.success('Copied!');
      else toast.error('Gagal menyalin');
    } else {
      toast.error('Data user tidak ada, pastikan anda sudah login');
    }
  };

  const content = (
    <StyledFlex direction={'column'} gap={'10px'} marginTop={'20px'}>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>Name</Typography>
        <Typography variant={'pixie'}>{data?.name}</Typography>
      </StyledFlex>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>Username</Typography>
        <Typography variant={'pixie'}>{data?.username}</Typography>
      </StyledFlex>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>Email</Typography>
        <Typography variant={'pixie'}>{data?.email}</Typography>
      </StyledFlex>
      <StyledFlex
        justify="space-between"
        onClick={handleCopyText}
        className="cursor-pointer"
      >
        <Typography variant="pixie">Token Saweria</Typography>
        <StyledFlex gap={'5px'} align={'center'}>
          <MdOutlineContentCopy />
          <Typography variant="pixie">{data?.token_saweria}</Typography>
        </StyledFlex>
      </StyledFlex>

      <StyledButton
        className={'mt-3 w-fit self-center'}
        style={{ border: '1px solid red', color: 'red' }}
        onClick={handleSignOutButton}
      >
        Keluar
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

export default ProfileModal;
