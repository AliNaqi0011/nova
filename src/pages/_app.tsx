import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto, Kalam, Roboto_Condensed, Roboto_Slab } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import theme from '@/styles/global.theme';
import createEmotionCache from '@/styles/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

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

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <main
            className={`${roboto.variable} ${kalam.variable} ${roboto_condensed.variable} ${roboto_slab.variable} font-sans`}
          >
            <Component {...pageProps} />
          </main>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
