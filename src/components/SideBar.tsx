import Link from 'next/link'
import { signOut } from 'next-auth/client'

import { useStyledTheme } from '../hooks/StylesContext'

import { Container, LogoAndSwitchTheme, NavigationLinks } from '../styles/components/SideBar';
import { useCallback } from 'react';

export function SideBar() {
  const { theme, changeTheme } = useStyledTheme();
  
  const handleChangeTheme = useCallback(() => {
    changeTheme();
  }, [theme]);

  return (
    <Container>
      <LogoAndSwitchTheme>
        <img src="/icons/logo-blue.svg"/>
        <button type="button" onClick={handleChangeTheme}>
          { theme.name === 'light' ? (
            <img src="/icons/moon.svg"/>
          ) : (
            <img src="/icons/sun.svg"/>
          )}
        </button>
      </LogoAndSwitchTheme>

      <NavigationLinks>
        <Link href='/home'>
          <a> <img src="/icons/home.svg"/> </a>
        </Link>

        <Link href='/ranking'>
          <a> <img src="/icons/award.svg"/> </a>
        </Link>
      </NavigationLinks>

      
      <button type="button" onClick={() => signOut({
        callbackUrl: 'http://localhost:3000/'
      })}>
        <img src="/icons/log-out.svg"/>
      </button>
    </Container>
  )
}