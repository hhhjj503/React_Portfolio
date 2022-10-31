import React from 'react';
import styled from 'styled-components';
import { DivWrapper } from '../styles/DivWrapper';
import { H1 } from '../styles/H1';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const Home = () => {
  //P태그
  const P = styled.p`
    font-size: ${(props) => (props.size === '' ? '1.2rem' : props.size)};
    text-align: center;
    font-weight: ${(props) =>
      props.fontWeight === 'bold' ? 'bold' : 'normal'};
    color: ${(props) => (props.color === '' ? 'black' : props.color)};
    line-height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s ease-in-out;
    width: 100%;

    & span {
      color: black;
    }

    & .sub {
      font-size: 3rem;
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
      line-height: 30px;
      font-size: 2.5rem;

      & .sub {
        font-size: 2rem;
      }
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      line-height: 20px;
      font-size: 2rem;

      & .sub {
        font-size: 1.5rem;
      }
    } ;
  `;

  //배경원
  const ColorBox = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: black;

      & + p span {
        color: white;
      }

      & ~ a {
        color: white;
      }
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
      height: 350px;
      width: 350px;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      height: 250px;
      width: 250px;
    } ;
  `;

  //링크태그
  const StyledLink = styled(Link)`
    position: absolute;
    top: 60%;
    left: 50%;
    font-size: 5rem;
    font-weight: bold;
    transform: translate(-50%, -50%);
    transition: 0.3s ease-in-out;

    @media screen and (min-width: 480px) and (max-width: 767px) {
      font-size: 3rem;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      font-size: 2rem;
    } ;
  `;

  return (
    <DivWrapper>
      <H1 hidden={true}>Home</H1>
      <ColorBox />
      <P fontWeight="bold" color="rgb(65, 191, 207)" size="5rem">
        Welcome to HJ's <span>React.js </span>Profile
        <br />
        <span className="sub"> 프로필에 방문해 주셔서 감사합니다</span>
        <br />
        <br />
      </P>
      <StyledLink to="/React_Portfolio/about">Enter</StyledLink>
    </DivWrapper>
  );
};

export default Home;
