'use client';

import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { lightPalette } from '@/core/theme/styleGuide/color';
import ProfileModal from '@/app/(main)/dashboard/components/ProfileModal';
import { UserInfo } from '@/types/UserInfoTypes';
import { useModal } from '@/components/modal/hooks/useModal';

interface UserHeaderProps {
  name: string;
  username: string;
  userInfo?: UserInfo;
}

export function UserHeader({
  name,
  username,
  userInfo,
}: Readonly<UserHeaderProps>) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <StyledFlex justify="space-between" align="center">
        <StyledFlex direction="column">
          <Typography variant={'h5'} color={lightPalette.primary.main}>
            Hallo, {name}
          </Typography>
          <Typography variant={'caption'} color={lightPalette.text.disabled}>
            Yuk, kita kelola keuanganmu hari ini!
          </Typography>
        </StyledFlex>
        <Avatar onClick={openModal} className="w-15 h-15">
          <AvatarImage src="https://github.com/shadcn.png" alt={username} />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </StyledFlex>

      <ProfileModal
        data={userInfo}
        isOpen={isOpen}
        onClose={closeModal}
        header={'Detail Profile'}
      />
    </>
  );
}
