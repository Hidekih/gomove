import styled, { css } from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani';
  font-weight: 600;
  color: ${props => props.theme.title};

  span {
    font-size: 7.5rem;
  }

  > span {
    font-size: 6.5rem;
    margin: 0 0.5rem;
  }

  > div {
    flex: 1;
    display: flex;
  }

  > div > span {
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: 7.5rem;
    background: ${props => props.theme.backgroundSecundary};
    padding: 0 auto;
    border-radius: 5px;
  }

  > div > span + span{
    margin-left: 2px;
  }
`;

interface ICountdownButtonProps {
  isActive?: boolean;
}

export const CountdownButton = styled.button<ICountdownButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  outline: 0;
  border: 0;
  border-radius: 5px;
  background: ${props => props.theme.blue};
  font-size: 1.25rem;
  color: ${props => props.theme.buttonTitle};
  font-weight: 600;

  transition: background 0.4s;

  &:not(:disabled):hover {
    background: ${props => props.theme.blueDark};
  }

  &:disabled {
    background: ${props => props.theme.backgroundSecundary};
    color: ${props => props.theme.title};
    box-shadow: 0px 0px 6px ${props => props.theme.boxShadow};

    /* Esse border-top vai servir para o texto interno ficar alinhado */
    border-top: 4px solid transparent;
    border-bottom: 4px solid ${props => props.theme.green};
    cursor: not-allowed;
  }

  img {
    margin-left: 1rem;
    height: 1.4rem;
    color: inherit;
  }

  ${props => props.isActive && 
  css`
    background: ${props.theme.backgroundSecundary};
    color: ${props.theme.title};
    box-shadow: 0px 0px 4px ${props.theme.boxShadow};

    &:not(:disabled):hover {
      background: ${props.theme.red};
      color: ${props.theme.backgroundSecundary};
    }
  `}
`;
