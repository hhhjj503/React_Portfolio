import React from 'react';
import styled from 'styled-components';
import { DivWrapper } from '../styles/DivWrapper';
import { H1 } from '../styles/H1';

const Home = () => {
  const P = styled.p`
    font-size: ${(props) => (props.size === '' ? '1.2rem' : props.size)};
    line-height: 20px;
    text-align: center;
    font-weight: ${(props) =>
      props.fontWeight === 'bold' ? 'bold' : 'normal'};
    color: ${(props) => (props.color === '' ? 'black' : props.color)};
    margin-bottom: 20px;

    & span {
      color: black;
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
      font-size: 2.3rem;

      &:last-child {
        font-size: 2rem;
      }
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      font-size: 2rem;

      &:last-child {
        font-size: 1.7rem;
      }
    } ;
  `;

  return (
    <DivWrapper>
      <H1>Home</H1>
      <P fontWeight="bold" color="rgb(65, 191, 207)" size="3rem">
        Welcome to HJ's <span>React.js</span> Profile
      </P>
      <P size="2rem">프로필에 방문에 주셔서 감사합니다</P>
    </DivWrapper>
  );
};

export default Home;
