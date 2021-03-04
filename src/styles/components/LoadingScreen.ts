import styled, { keyframes } from 'styled-components';

export const Overlay = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.6);
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 10px solid #fff;
  border-top: 10px solid ${props => props.theme.blue};
  border-radius: 50%;
  width: 100px;
  height: 100px;

  animation: ${spin} 1.4s linear infinite;
`;
