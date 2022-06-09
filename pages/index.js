import Head from 'next/head';
import Image from 'next/image';
import { useContext, useReducer } from 'react';
import { API } from '../config/API';
import { UserContext } from '../config/context/userContext';
import styles from '../styles/Home.module.css';

export default function Home({ response }) {
  const { user, dispatch } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <h1>{user}</h1>
      <button onClick={() => {dispatch({type: 'logout'})}}>Logout</button>
    </div>
  );
}
