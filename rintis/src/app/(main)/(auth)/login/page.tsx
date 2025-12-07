'use client';

import { useActionState } from 'react';
import Typography from '@/components/Typography';
import PrimaryButton from '@/components/button/primary/PrimaryButton';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledTextLink } from '@/components/common/link/TextLink.styled';
import { StyledOutlineInput } from '@/components/input/Input.styled';
import { StyledLabel } from '@/components/input/InputLabel.styled';
import { loginAction } from '@/lib/feature/login/login.action';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);

  return (
    <>
      <Typography variant={'h5'} color={lightPalette.primary.main}>
        Selamat datang 👋
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
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledOutlineInput
              id="password"
              name="password"
              type={'password'}
              className={'mb-1'}
              placeholder={'Password'}
              required
            />
            {state?.errors?.password && (
              <Typography
                variant={'caption'}
                color="red"
                style={{ display: 'block', marginBottom: '8px' }}
              >
                {state.errors.password[0]}
              </Typography>
            )}
          </>
        </StyledFlex>

        <PrimaryButton type="submit" disabled={isPending} className="w-full">
          {isPending ? 'Memproses...' : 'Masuk'}
        </PrimaryButton>
      </form>

      <Typography variant={'caption'} weight={'regular'} align={'center'}>
        Belum punya akun?{' '}
        <StyledTextLink href={'/register'}>
          <b>Daftar</b>
        </StyledTextLink>
      </Typography>
    </>
  );
}
