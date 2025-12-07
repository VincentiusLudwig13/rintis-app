'use client';

import { lightPalette } from '@/core/theme/styleGuide/color';
import { Badge } from './ui/badge';
import Typography from './Typography';
import { PlusIcon } from 'lucide-react';

export const Chip = ({
  labelWeight = 'regular',
  label = 'Rekomendasi AI',
  type = 'add',
  iconLeft,
}: {
  labelWeight?: 'regular' | 'bold';
  label?: string;
  type?: 'add' | 'remove' | 'badge';
  iconLeft?: React.ReactNode;
}) => {
  const renderIcon = () => {
    if (type === 'add') {
      return (
        <div
          className="flex items-center justify-center w-6 h-6 rounded-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          <PlusIcon size={16} color={lightPalette.text.inverse} />
        </div>
      );
    }
    if (type === 'remove') {
      return (
        <div
          className="flex items-center justify-center w-6 h-6 rounded-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          <PlusIcon
            size={16}
            color={lightPalette.text.inverse}
            style={{ transform: 'rotate(45deg)' }}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <Badge
      className={`items-center gap-2 rounded-full p-1 pl-2 inline-flex ${
        type === 'badge' ? 'pr-2' : 'pr-1'
      }`}
      style={{ backgroundColor: lightPalette.primary.main, height: '30px' }}
    >
      {iconLeft && <>{iconLeft}</>}
      <Typography
        variant="pixie"
        weight={labelWeight}
        color={lightPalette.text.inverse}
      >
        {label}
      </Typography>
      {renderIcon()}
    </Badge>
  );
};
