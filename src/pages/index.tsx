import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client'

import Login from './Login'

import { ChallengeContextProvider } from '../hooks/ChallengeContext';
import { CountdownContextProvider } from '../hooks/CountdownContext';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { SideBar } from '../components/SideBar';

import { LoadingScreen } from '../components/LoadingScreen';
import { useStyledTheme } from '../hooks/StylesContext';
import { ThemeProvider } from 'styled-components';

import { Container, Content } from '../styles/pages/Home';
import { LevelUpModal } from '../components/LevelUpModal';

interface HomeProps {
  currentXp: number;
  level: number;
  challengesCompleted: number;
}

export default function Home({ currentXp , level, challengesCompleted }: HomeProps) {
  const [ session, loading ] = useSession();
  const { theme } = useStyledTheme();
  return (
    <>
      {loading && <LoadingScreen />}
      {session ? (
        <>
            <ChallengeContextProvider 
              currentXp={currentXp}  
              level={level}
              challengesCompleted={challengesCompleted}
            >
              <ThemeProvider theme={theme}>
                <Container>
                  <SideBar />
                  <Content>
                    <Head>
                      <title>GoMove | Home</title>
                    </Head> 
                    
                    <ExperienceBar />
                    <CountdownContextProvider>
                      <section>
                        <div>
                          <Profile />
                          <CompletedChallenges />
                          <Countdown />
                        </div>

                        <div>
                          <ChallengeBox />
                        </div>
                      </section>
                    </CountdownContextProvider>
                  </Content>
                </Container>
              </ThemeProvider>
            </ChallengeContextProvider> 
        </>
      ) : (
        <Login />
      )}
    </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // In Next.JS, all in this function is loaded on server side, before rendering in browser
  // Desestruturing these values from cookies and setting default values;
  const { currentXp = '0', level = '1', challengesCompleted = '0' } = ctx.req.cookies;

  return {
    props: { 
      currentXp: Number(currentXp),
      level: Number(level),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
