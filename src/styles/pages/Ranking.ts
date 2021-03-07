import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 2rem 2rem 2rem 8rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  
  @media(max-width: 720px) {
    flex-direction: column;
    padding: 8rem 2rem 2rem 2rem;

    align-items: center;
  }

  h1 {
    color: ${props => props.theme.title};
  }
`;

export const Content = styled.div`
  flex: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 60rem;

  section {
    display: flex;
    flex-direction: column;
    margin-top: 1.2rem;
  }
`;

export const RankSubtitle = styled.p`
  display: flex;
  align-items: center;
  margin-top: 1.8rem;

  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.theme.text};

  @media(max-width: 720px) {
    display: none;
  }

  span:nth-child(1) {
    width: 7.5%;
    max-width: 7.5%;
  }

  span:nth-child(2) {
    width: 57.5%;
    max-width: 57.5%;
    margin-left: 1rem;
  }

  span:nth-child(3) {
    width: 20%;
    max-width: 20%; 
  }

  span:nth-child(4) {
    width: 15%;
    max-width: 15%;
  }
`;