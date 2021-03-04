import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { SideBar } from "../components/SideBar";
import { useStyledTheme } from '../hooks/StylesContext';

import { Container, Content } from '../styles/pages/Ranking';

export default function Ranking() {
  const { theme } = useStyledTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SideBar />
        <Content>
          <Head>
            <title>GoMove | Ranking</title>
          </Head> 
        </Content>
      </Container>
    </ThemeProvider>
  )
}