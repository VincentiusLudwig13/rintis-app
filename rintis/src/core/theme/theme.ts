// src/core/theme/theme.ts

import { darkPalette, lightPalette } from './styleGuide/color';
import { border } from './styleGuide/border';
import { boxShadow } from './styleGuide/boxShadow';
import { layout } from './styleGuide/layout';
import { motion } from './styleGuide/motion';
import { typographyConfig } from '@/core/theme/styleGuide/typographyConfig';

export const getTheme = (mode: 'light' | 'dark') => ({
  mode,
  palette: mode === 'light' ? lightPalette : darkPalette,
  border,
  boxShadow,
  typographyConfig,
  layout,
  motion,
});
