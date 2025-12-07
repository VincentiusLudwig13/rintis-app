import { darkPalette, lightPalette } from './src/core/theme/styleGuide/color';

const flattenPalette = (palette, prefix = '') => {
  const result = {};

  const walk = (obj, path = []) => {
    for (const key in obj) {
      const value = obj[key];
      const newPath = [...path, key];

      if (typeof value === 'string') {
        result[`${prefix}${newPath.join('-')}`] = value;
      } else if (typeof value === 'object' && value !== null) {
        walk(value, newPath);
      }
    }
  };

  walk(palette);
  return result;
};

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{ts,tsx,html}'],

  theme: {
    extend: {
      colors: {
        light: flattenPalette(lightPalette, ''),
        dark: flattenPalette(darkPalette, ''),
      },
    },
  },
};
