import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;

  align-items: center;
  box-shadow: 0px 0px 14px ${props => props.theme.boxShadow};

  border-radius: 5px;
  background: ${props => props.theme.backgroundSecundary};
`;

export const ChallengeBoxActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.4rem;
  min-height: 32rem;

  header {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    color: ${props => props.theme.blue};
    font-weight: 600;
    font-size: 1.2rem;
    border-bottom: 2px solid ${props => props.theme.grayLine};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 

  > div strong{
    color: ${props => props.theme.title};
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0.6rem 0;
  } 

  > div p{
    color: ${props => props.theme.text};
    font-size: 1rem;
    text-align: center;
  } 

  > div img {
    width: 8rem;
    height: 8rem;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    margin-top: 1.2rem;
  } 

  footer button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.2rem;

    border-radius: 5px;
    border: 0;
    outline: 0;
    color: white;
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.6s;
  }
`;

export const ChallengeBoxNotActive = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 32rem;
  padding: 2.5rem 4.9rem;

  strong {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.2rem;
    text-align: center;
    color: ${props => props.theme.text};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6rem;
    text-align: center;
    color: ${props => props.theme.text};
  }

  img {
    margin-top: 4rem;
    margin-bottom: 1rem;
    height: 5rem;
  }
`;

interface IFooterButtonsProps {
  buttonStyle: 'success' | 'fail';
}

const footerButtonsColor = {
  success: css`background: ${props => props.theme.green};`,
  fail: css`background: ${props => props.theme.red};`,
}

export const FooterButton = styled.button<IFooterButtonsProps>`
  ${ props => footerButtonsColor[props.buttonStyle]}
    
  &:hover {
    filter: brightness(0.9);
  }
`;