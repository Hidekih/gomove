import Head from 'next/head';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { LoadingScreen } from '../components/LoadingScreen';

import { Container, SplashArtContainer, LoginSection } from '../styles/pages/Login';

export default function Login() {
  const [ session, loading ] = useSession();
  const router = useRouter();

  useEffect(() => {
    async function handleRedirectToHome() {
      await router.push('/home');
    }

    if(session) {
      handleRedirectToHome();
      console.log()
    }
  }, [session])
  
  return (
    <>
      { loading && <LoadingScreen/> }

      { !session && (
        <Container>
          <Head>
            <title>GoMove | Login</title>
          </Head> 
          <SplashArtContainer />

          <LoginSection>
            <img src="/logo.svg"/>

            <strong>Bem-vindo</strong>
            <div>
              <img src="/icons/github.svg"/>
              <p>Faça login com o seu Github para começar!</p>
            </div>
            <button onClick={(): Promise<void> => signIn("github")} >
              <span>Entrar com GitHub</span>
              <img src="/icons/arrow-right.svg"/>
            </button>
          </LoginSection>
        </Container>
      )}
    </>
  )
}
