import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { SideBar } from "../components/SideBar";
import { useStyledTheme } from '../hooks/StylesContext';
import { UserRankStatus } from '../components/UserRankStatus'

import { Container, Content, RankSubtitle } from '../styles/pages/Ranking';

export default function Ranking() {
  const { theme } = useStyledTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <SideBar />
      <Container>
        <Head>
          <title>GoMove | Ranking</title>
        </Head> 
 
        <Content>
          <h1>Leaderboard</h1>
          <RankSubtitle>
              <span>POSIÇÃO</span>
              <span>USUÁRIO</span>
              <span>DESAFIOS</span>
              <span>EXPERIÊNCIA</span>
          </RankSubtitle>

          <section>
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
            <UserRankStatus />
          </section>
        </Content>
      </Container>
    </ThemeProvider>
  )
}