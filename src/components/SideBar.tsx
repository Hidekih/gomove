import Link from 'next/link'
import { signOut } from 'next-auth/client'

import { Container, LogoAndSwitchTheme, NavigationLinks } from '../styles/components/SideBar';
import { useState } from 'react';

export function SideBar() {
  const [ theme, setTheme ] = useState('light');
  return (
    <Container>
      <LogoAndSwitchTheme>
        <img src="/icons/logo-blue.svg"/>
        <button type="button">
          { theme === 'light' ? (
            <img src="/icons/sun.svg"/>
          ) : (
            <img src="/icons/moon.svg"/>
          )}
        </button>
      </LogoAndSwitchTheme>

      <NavigationLinks>
        <Link href='/'>
          <a> <img src="/icons/home.svg"/> </a>
        </Link>

        <Link href='/Ranking'>
          <a> <img src="/icons/award.svg"/> </a>
        </Link>
      </NavigationLinks>

      
      <button type="button" onClick={() => signOut()}>
        <img src="/icons/log-out.svg"/>
      </button>
    </Container>
  )
}