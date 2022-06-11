import { createContext, useCallback, useEffect, useReducer } from 'react';
import jwt_decode from 'jwt-decode';

export const UserContext = createContext(null);

const initialState = {
  token: null,
  data: {},
  login: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'decode':
      try {
        const token = localStorage.getItem('auth');
        const data = jwt_decode(token);
        return {
          ...state,
          token,
          data,
          login: true,
        };
      } catch (e) {
        return initialState;
      }
    case 'logout':
      localStorage.removeItem('auth');
      return initialState;
  }
};

export const UserContextProvider = (props) => {
  const [profile, profileR] = useReducer(reducer, initialState);

  const onReloadNeeded = useCallback(() => {
    profileR({ type: 'decode' });
  }, []);

  const onLogout = useCallback(() => {
    profileR({ type: 'logout' });
  }, []);

  useEffect(() => {
    onReloadNeeded();
  });

  return (
    <UserContext.Provider value={{ onReloadNeeded, onLogout, profile }}>
      {props.children}
    </UserContext.Provider>
  );
};
