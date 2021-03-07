import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 2rem 2rem 2rem 8rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  
  @media(max-width: 720px) {
    flex-direction: column;
    padding: 8rem 2rem 2rem 2rem;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  max-width: 60rem;
  height: 100vh;
  margin: 0 auto;

  @media(max-width: 720px) {
    
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