import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 992px;
  height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    /* 6.25rem === 100px  */
    gap: 6.25rem; 
    align-content: center;
  }
`;