import styled from 'styled-components';
import { TwitterShareButton } from 'react-share';

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

  background: rgba(37, 37, 37, 0.8);
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;

  overflow: hidden;

  @media(max-width: 720px) {
    max-width: 85%;
  }

  > div {
    padding: 2rem 3rem;
  }

  header {
    font-size: 8.8rem;
    font-weight: 600 ;
    color: #5965e0;
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    font-weight: 600 ;
    color: #2e384d;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400 ;
    color: #667;
  }

  footer {
    display: flex;
    width: 100%;
    height: 4rem;
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0px;
  border: 0;
  background: none;
`;

export const TwitterShareBtn = styled(TwitterShareButton)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #dcdde0 !important;
  background: #F5FCFF !important;

  span{
    font-size: 1.2rem;
    font-weight: 600;
    color: #2aa9e0;
    margin-right: 1rem;
  }
`;