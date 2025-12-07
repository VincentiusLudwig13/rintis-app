'use client';

import { useActionState } from 'react';
import Typography from '@/components/Typography';
import PrimaryButton from '@/components/button/primary/PrimaryButton';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledTextLink } from '@/components/common/link/TextLink.styled';
import { StyledOutlineInput } from '@/components/input/Input.styled';
import { StyledLabel } from '@/components/input/InputLabel.styled';
import { registerAction } from '@/lib/feature/register/register.action';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(
    registerAction,
    undefined
  );

  return (
    <>
      <Typography variant={'h5'} color={lightPalette.primary.main}>
        Halo, selamat bergabung
      </Typography>
      <Typography variant={'caption'} weight={'regular'}>
        Sebelum mulai buat akun dulu yuk!
      </Typography>

      {state?.message && (
        <div
          style={{
            padding: '12px',
            marginBottom: '16px',
            borderRadius: '8px',
            backgroundColor: state.message.includes('berhasil')
              ? '#d4edda'
              : '#f8d7da',
            color: state.message.includes('berhasil') ? '#155724' : '#721c24',
          }}
        >
          {state.message}
        </div>
      )}

      <form className={'mb-2'} action={formAction}>
        <StyledFlex direction="column" gap={8} className="mb-2">
          <>
            <StyledLabel htmlFor="username">Username</StyledLabel>
            <StyledOutlineInput
              id="username"
              name="username"
              className={'mb-1'}
              placeholder={'Username'}
              defaultValue={state?.values?.username || ''}
              required
            />
            {state?.errors?.username && (
              <Typography
                variant={'caption'}
                color="red"
                style={{ display: 'block', marginBottom: '8px' }}
              >
                {state.errors.username[0]}
              </Typography>
            )}
          </>
          <>
            <StyledLabel htmlFor="name">Nama Lengkap</StyledLabel>
            <StyledOutlineInput
              id="name"
              name="name"
              className={'mb-1'}
              placeholder={'Nama Lengkap'}
              defaultValue={state?.values?.name || ''}
              required
            />
            {state?.errors?.name && (
              <Typography
                variant={'caption'}
                color="red"
                style={{ display: 'block', marginBottom: '8px' }}
              >
                {state.errors.name[0]}
              </Typography>
            )}
          </>
          <>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledOutlineInput
              id="email"
              name="email"
              className={'mb-1'}
              placeholder={'Email'}
              type="email"
              defaultValue={state?.values?.email || ''}
              required
            />
            {state?.errors?.email && (
              <Typography
                variant={'caption'}
                color="red"
                style={{ display: 'block', marginBottom: '8px' }}
              >
                {state.errors.email[0]}
              </Typography>
            )}
          </>
          <>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledOutlineInput
              id="password"
              name="password"
              className={'mb-1'}
              placeholder={'Password'}
              type={'password'}
              required
            />
            {state?.errors?.password && (
              <Typography variant={'caption'} color={lightPalette.error.main}>
                {state.errors.password[0]}
              </Typography>
            )}
          </>
        </StyledFlex>

        <PrimaryButton type="submit" disabled={isPending} className="w-full">
          {isPending ? 'Memproses...' : 'Buat Akun'}
        </PrimaryButton>
      </form>

      <Typography variant={'caption'} weight={'regular'} align={'center'}>
        Sudah punya akun?{' '}
        <StyledTextLink href={'/login'}>
          <b>Masuk</b>
        </StyledTextLink>
      </Typography>
    </>
  );
}
