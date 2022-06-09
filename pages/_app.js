import { useMemo, useState } from 'react';
import { UserContext } from '../config/context/userContext';
import { useUser } from '../functions/user';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const value = useUser();

  return (
    <UserContext.Provider value={value}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
