import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#8d6e63',
      secondary: '#8d6e63',
    },
    info: {
      main: '#558b2f',
    },
  },
};

const theme = createTheme(themeOptions);

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}