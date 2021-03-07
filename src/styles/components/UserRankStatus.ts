import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 6rem;  
  background: ${props => props.theme.backgroundSecundary};
  border-radius: 6px;
  overflow: hidden;

  @media(max-width: 720px) {
    /* max-width: 90vw; */
  }

  & + div {
    margin-top: 0.4rem;
  }
`;

export const Position = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5%;
  max-width: 7.5%;

  border-left: 3px solid transparent;
  border-right: 3px solid ${props => props.theme.background};

  span {
    font-size: 1.5rem;
    color: ${props => props.theme.text};
  }

  @media(max-width: 720px) {
    span {
      font-size: 1.6rem;
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  width: 57.5%;
  max-width: 57.5%;
  margin-left: 1rem;

  @media(max-width: 720px) {
    width: 72.5%;
    max-width: 72.5%;
  }

  > img {
    height: 4rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;
  }

  div strong {
    font-weight: 500;
    font-size: 1.25rem;
    color: ${props => props.theme.title};
  }

  div p {
    margin-top: 0.6rem;
    font-size: 1rem;
  }

  div p img {
    margin-right: 0.5rem;
  }
`;

export const Challenges = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  max-width: 20%; 

  @media(max-width: 720px) {
    display: none;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.text};
  }

  p span {
    color: ${props => props.theme.blue};
    margin-right: 0.5rem;
  }
`;

export const Experience = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  max-width: 15%;

  p {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.text};
  }

  p span {
    color: ${props => props.theme.blue};
    margin-right: 0.5rem;
  }

  @media(max-width: 720px) {
    width: 20%;
    max-width: 20%;

    p {
      font-size: 1.1rem;
    }
  }
`;