import { signIn } from 'next-auth/client';

import { Container, SplashArtContainer, LoginSection } from '../styles/pages/Login';

export default function Login() {
  return (
    <Container>
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
  )
}