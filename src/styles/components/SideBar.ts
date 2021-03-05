import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 0;

  width: 6rem;
  height: 100vh;
  padding: 2rem 0;

  background-color: #4953B8;
  background: linear-gradient(to bottom, ${p => p.theme.backgroundSecundary} , transparent);

  @media(max-width: 720px) {
    flex-direction: row;
    width: 100%;
    height: 5rem;
    padding: 1.6rem;

    background: ${props => props.theme.backgroundSecundary};
  }

  > button {
    background: none;
    border: 0;
    font-size: 0px; /* negócio mágico pra quando se tem só imagem dentro do botão */
  }

  > button img {
    height: 1.8rem;
    color: ${props => props.theme.text};
  }
`;

export const LogoAndSwitchTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 720px) {
    flex-direction: row;
    align-items: center;
  }

  > img {
    height: 2.4rem;
  }

  button {
    margin-top: 1.6rem;
    background: none;
    border: 0;
    font-size: 0px; /* negócio mágico pra quando se tem só uma imagem dentro do botão*/

    @media(max-width: 720px) {
      margin: 0 0 0 1.4rem;
    }
  }

  button img {
    height: 1.8rem;
  }
`;

export const NavigationLinks = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media(max-width: 720px) {
    flex-direction: row;
    width: 13rem;
  }

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
