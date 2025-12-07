// Typography configuration based on Figma design system
export const typographyConfig = {
  h1: { size: 56, height: 64, weight: { bold: 700 } },
  h2: { size: 48, height: 54, weight: { bold: 700 } },
  h3: { size: 36, height: 46, weight: { bold: 700 } },
  h4: { size: 32, height: 38, weight: { bold: 700 } },
  h5: { size: 24, height: 32, weight: { bold: 700 } },
  h6: { size: 20, height: 28, weight: { bold: 700 } },

  bodyLarge: { size: 20, height: 28, weight: { bold: 700, regular: 400 } },
  bodyMedium: { size: 16, height: 24, weight: { bold: 700, regular: 400 } },
  bodySmall: { size: 14, height: 22, weight: { bold: 700, regular: 400 } },

  caption: { size: 12, height: 20, weight: { bold: 700, regular: 400 } },
  pixie: { size: 10, height: 12, weight: { bold: 700, regular: 400 } },
};

export type TypographyVariant = keyof typeof typographyConfig;
export type TypographyWeight = 'bold' | 'regular';
