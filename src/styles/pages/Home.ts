import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin-left: 6rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  
  @media(max-width: 720px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  max-width: 60rem;
  height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  @media(max-width: 720px) {
    margin-top: 5rem;
  }

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    /* 6.25rem === 100px  */
    gap: 6.25rem; 
    align-content: center;

    @media(max-width: 720px) {
      display: flex;
      flex-direction: column;
    }
  }
`;