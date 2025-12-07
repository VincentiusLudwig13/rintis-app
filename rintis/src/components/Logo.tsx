'use client';

import Image from 'next/image';
import { IMG } from '@/core/assets/img';

export type LogoVariant = keyof typeof IMG.logo;

export type LogoSize = 'big' | '40' | '48' | '64' | '96' | '128';

export interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

export const SIZE_MAP: Record<LogoSize, { width: number; height: number }> = {
  big: { width: 602, height: 437 },
  '40': { width: 62.81, height: 40 },
  '48': { width: 75.38, height: 48 },
  '64': { width: 100.5, height: 64 },
  '96': { width: 150.75, height: 96 },
  '128': { width: 201, height: 128 },
};

export const Logo = ({
  variant = 'default',
  size = 'big',
  className,
}: LogoProps) => {
  const img = IMG.logo[variant];
  const dimension = SIZE_MAP[size];

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: dimension.width,
        height: dimension.height,
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
};

export default Logo;
