import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: row;

    margin: 0 1.5rem;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.grayLine};
  }

`;

export const CurrentExperienceContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: row;

  margin: 0 1.5rem;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.grayLine};

  div {
    position: absolute;
    
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.green};
  }

  span {
    position: absolute;
    top: 0.9rem;
    transform: translateX(-50%);
  }
`;
