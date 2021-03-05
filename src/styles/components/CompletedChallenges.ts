import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${props => props.theme.grayLine};
  font-weight: 500;

  span {
    font-size: 1.25rem;
  }

  span:last-child {
    font-size: 1.5rem;
  }
`;