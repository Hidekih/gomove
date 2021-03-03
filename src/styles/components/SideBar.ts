import styled from 'styled-components';

export const Container = styled.header`
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 0;

  height: 100vh;
  width: 6rem;
  padding: 2rem 0;

  background-color: #4953B8;
  background: linear-gradient(to bottom, var(--white) , transparent);

  > button {
    background: none;
    border: 0;
    font-size: 0px; /* negócio mágico pra quando se tem só imagem dentro do botão */
  }

  > button img {
    height: 1.8rem;
  }
`;

export const LogoAndSwitchTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    height: 2.4rem;
  }

  button {
    margin-top: 1.6rem;
    background: none;
    border: 0;
    font-size: 0px; /* negócio mágico pra quando se tem só uma imagem dentro do botão*/
  }

  button img {
    height: 1.8rem;
  }
`;

export const NavigationLinks = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1.2rem 0;
  }

  a img {
    height: 1.8rem;
  }
`;
