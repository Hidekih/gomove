import Link from 'next/link'
import { signOut } from 'next-auth/client'

import { useStyledTheme } from '../hooks/StylesContext'

import { Container, LogoAndSwitchTheme, NavigationLinks } from '../styles/components/SideBar';

export function SideBar() {
  const { theme, changeTheme } = useStyledTheme();
  
  const handleChangeTheme = () => {
    changeTheme();
  }
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