import Head from 'next/head';

import { SideBar } from "../components/SideBar";

import { Container, Content } from '../styles/pages/Ranking';

export default function Ranking() {
  return (
    <Container>
      <SideBar />
      <Content>
        <Head>
          <title>GoMove | Ranking</title>
        </Head> 
      </Content>
    </Container>
  )
}