import { useThemeContext } from '@/common/provider/ThemeProvider';

export const useTheme = () => {
  const { mode, theme, toggleTheme, setMode } = useThemeContext();

  return {
    mode,
    theme,
    toggleTheme,
    setMode,
    isDark: mode === 'dark',
    isLight: mode === 'light',
  };
};
