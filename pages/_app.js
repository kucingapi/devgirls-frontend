import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { normalTheme } from '../common';
import { UserContext } from '../config/context/userContext';
import { useUser } from '../functions/user';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const value = useUser();
  const theme = useMemo(() => {
    return createTheme(normalTheme);
  }, []);

  return (
    <UserContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default MyApp;
