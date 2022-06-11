import Head from 'next/head';
import Image from 'next/image';
import { useContext, useEffect, useReducer } from 'react';
import { API } from '../config/API';
import { UserContext } from '../config/context/userContext';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';

export async function getServerSideProps() {
  // const response = await API.login('novelbafagi2@mail.com', '12345');
  // const authToken = response.headers['auth-token'];
  // console.log(authToken);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home() {
  const { profile, onReloadNeeded } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          onReloadNeeded();
        }}
      >
        halo a
      </Button>
    </div>
  );
}
