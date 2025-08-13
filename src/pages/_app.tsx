import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { Roboto, Kalam, Roboto_Condensed, Roboto_Slab } from 'next/font/google';

import { GLOBAL_MUI_THEME } from '../styles/global.theme';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const kalam = Kalam({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kalam',
});

const roboto_condensed = Roboto_Condensed({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

const roboto_slab = Roboto_Slab({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={GLOBAL_MUI_THEME}>
        <main
          className={`${roboto.variable} ${kalam.variable} ${roboto_condensed.variable} ${roboto_slab.variable} font-sans`}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Component {...pageProps} />
          </LocalizationProvider>
        </main>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
