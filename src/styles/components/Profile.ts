import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 720px) {
    margin-top: 3rem;
  }

  > img {
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;
  }

  div strong {
    font-weight: 500;
    font-size: 1.5rem;
    color: ${props => props.theme.title};
  }

  div p {
    margin-top: 0.6rem;
    font-size: 1.1rem;
  }

  div p img {
    margin-right: 0.5rem;
  }
`;