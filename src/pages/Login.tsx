import styles from '../styles/pages/Login.module.css';
import { signIn } from 'next-auth/client';

export default function Login() {
  return (
    <div className={styles.container}>
      <div />

      <section className={styles.loginSection}>
        <img src="/logo.svg" alt=""/>

        <strong>Bem-vindo</strong>
        <div>
          <img src="/icons/github.svg"/>
          <p>Faça login com o seu Github para começar!</p>
        </div>
        <button onClick={() => signIn()}>
          <span>Entrar com GitHub</span>
          <img src="/icons/arrow-right.svg"/>
        </button>
      </section>
    </div>
  )
}