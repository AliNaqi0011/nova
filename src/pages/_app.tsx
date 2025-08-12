/** @jsxImportSource @emotion/react */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';

import { GLOBAL_MUI_THEME } from '../styles/global.theme';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={GLOBAL_MUI_THEME}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Component {...pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
