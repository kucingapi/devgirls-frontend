import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { normalTheme } from '../common';
import '../styles/globals.css';
import { UserContextProvider } from '../config/context/userContext';

function MyApp({ Component, pageProps }) {
  const theme = useMemo(() => {
    return createTheme(normalTheme);
  }, []);

  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default MyApp;
