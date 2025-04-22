import React, { useEffect } from 'react';
import { lightTheme, darkTheme } from './theme';

type Theme = typeof lightTheme;

export const ThemeProvider: React.FC<{ theme: Theme; children: React.ReactNode }> = ({ theme, children }) => {
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return <>{children}</>;
};
