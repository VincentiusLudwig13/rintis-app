'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTheme } from '@/core/theme/theme';
import { createCssVars } from '@/common/utils/createCssVars';
import { Toaster } from '@/components/ui/sonner';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  theme: ReturnType<typeof getTheme>;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // 1️⃣ SSR-safe init (tanpa localStorage)
  const [mode, setMode] = useState<ThemeMode>('light');

  // 2️⃣ Sync browser preference setelah mount
  // useEffect(() => {
  //   const getSystemMode = (): ThemeMode =>
  //     window.matchMedia('(prefers-color-scheme: dark)').matches
  //       ? 'dark'
  //       : 'light';

  //   const saved = localStorage.getItem('app-theme-mode') as ThemeMode | null;
  //   const initial = saved || getSystemMode();

  //   setMode(initial); // update setelah mount
  // }, []);

  const theme = getTheme(mode);

  const updateDOMTheme = (mode: ThemeMode) => {
    document.documentElement.setAttribute('data-theme', mode);
  };

  const toggleTheme = () => {
    const newMode: ThemeMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('app-theme-mode', newMode);
    updateDOMTheme(newMode);
  };

  // Apply data-theme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateDOMTheme(mode);
    }
  }, [mode]);

  // Apply CSS vars
  useEffect(() => {
    if (typeof globalThis.window === 'undefined') return;

    const vars = createCssVars(theme.palette, 'color-');
    const root = document.documentElement;

    Object.entries(vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });

    root.setAttribute('data-theme', mode);
  }, [mode, theme]);

  useEffect(() => {
    document.body.classList.add('theme-ready');
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = `var(--color-background-default)`;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme, setMode }}>
      {children}
      <Toaster />
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeContext must be used within <ThemeProvider />');
  }
  return ctx;
};
