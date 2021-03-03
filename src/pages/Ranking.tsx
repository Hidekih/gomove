import Head from 'next/head';
import styles from '../styles/pages/Ranking.module.css';

import { SideBar } from "../components/SideBar";

export default function Ranking() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.content}>
        <Head>
          <title>GoMove | Ranking</title>
        </Head> 
      </div>
    </div>
  )
}