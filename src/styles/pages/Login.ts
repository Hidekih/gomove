import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;

  background: #4953B8;
  padding: 4rem 0;  

  @media(max-width: 720px) {
    display: flex;
    padding: 0 3rem;
  }
`;

export const SplashArtContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url('/simbolo.svg') no-repeat left;
  background-size: contain;

  img{
    height: 100%;
  }

  @media(max-width: 720px) {
    display: none;
  }
`;

export const LoginSection = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 480px;
  margin-left: 4rem;

  > img {
    height: 8rem;
  }

  strong {
    margin-top: 9rem;
    font-size: 2.25rem;
    font-weight: 600;
    color: white;
  }

  div {
    display: flex;
    margin-top: 2.4rem;
  }

  div img {
    margin-right: 2rem;
  }

  div p {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    color: #B2B9FF;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.4rem;
    height: 5rem;
    background: rgba(0,0,0, 0.15);
    border: 0;
    border-radius: 5px;

    transition: background 0.6s;

    &:hover {
      background: linear-gradient(90deg, rgba(0,0,0, 0.15) 0%, rgba(0,0,0, 0.05) 110%);;
    }

    @media(max-width: 720px) {
      display: flex;
      padding: 0;
      width: 100%;
    }
  }

  button span {
    color: white;
    font-size: 1.4rem;
    font-weight: 500;
  }

  button img {
    height: 1.6rem;
    margin-left: 1.6rem;
  }
`;