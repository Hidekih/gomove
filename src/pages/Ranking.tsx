import Head from 'next/head';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';

import { SideBar } from "../components/SideBar";
import { useStyledTheme } from '../hooks/StylesContext';
import { UserRankStatus } from '../components/UserRankStatus'

import { Container, Content, RankSubtitle } from '../styles/pages/Ranking';
import { useEffect, useState } from 'react';
import { LoadingScreen } from '../components/LoadingScreen';

export interface userData {
  _id: string;
  avatar_url: string;
  name: string;
  level: number;
  challengesCompleted: number;
  experience: number;
}

export default function Ranking() {
  const { theme } = useStyledTheme();
  const [ users, setUsers ] = useState<userData[]>([]);
  
  useEffect(() => {
    async function findAllUsers() {
      const response = await axios.get<userData[]>('api/users');
      const requestedUsers = response.data;
      
      console.log(requestedUsers)
      setUsers(requestedUsers);
      console.log(users)
    }

    findAllUsers();
  }, []);
  
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
            { users && users.map(user => (
              <UserRankStatus 
                key={user._id} 
                name={user.name} 
                avatar_url={user.avatar_url}
                level={user.level}
                challengesCompleted={user.challengesCompleted}
                experience={user.experience}
              />
            ))}

              {/* <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              />
              <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              />
              <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              />
              <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              />
              <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              />
              <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              />
              <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              />
              <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              />
              <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              />
              <UserRankStatus 
                key={'user._id'} 
                name={'user.name'} 
                avatar_url={'user.avatar_url'}
                level={2}
                challengesCompleted={3}
                experience={4}
              /> */}
              
          </section>
        </Content>
      </Container>
    </ThemeProvider>
  )
}