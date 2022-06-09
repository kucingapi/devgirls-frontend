import Head from 'next/head';
import Image from 'next/image';
import { useContext, useReducer } from 'react';
import { API } from '../config/API';
import { UserContext } from '../config/context/userContext';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button variant="contained" color="secondary">
        Test
      </Button>
    </div>
  );
}
