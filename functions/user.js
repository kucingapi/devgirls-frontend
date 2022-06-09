import { useMemo, useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'logout':
      return 'logout';
    case 'login':
      return 'login';
    case 'refresh':
      return 'login';
  }
};

export const useUser = () => {
  const [state, dispatch] = useReducer(reducer, 'not');
  const value = useMemo(() => {
    return { user: state, dispatch };
  }, [state, dispatch]);
  return value;
};
