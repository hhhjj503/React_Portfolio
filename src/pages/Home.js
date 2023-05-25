import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { DivWrapper } from '../styles/DivWrapper';
import { H1 } from '../styles/H1';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const Home = () => {
  //P태그
  const P = styled.p`
  font-family: font-family: "Roboto", "Noto Sans KR", sans-serif;
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
      font-size: 2.7rem;
    }

    @media screen and (min-width: 480px) and (max-width: 768px) {
      line-height: 30px;
      font-size: 3rem;

      & .sub {
        font-size: 2rem;
      }
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      line-height: 20px;
      font-size: 2rem;

      & .sub {
        font-size: 1.5rem;
        margin-top:30px;
      }
    } ;
  `;

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setUpdate(true);
  }, []);

  const changeShape = (size) => {
    return keyframes`
    0% {
     border : 0;
    }
    100% {
      width: ${size};
      height: ${size};
      border: 1px solid black;
    }
    `;
  };

  //배경원
  const ColorBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${(props) => (props.update === true ? '50%' : '0')};
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${(props) =>
      props.update === true ? changeShape('500px') : ''};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    transition: 0.3s ease;

    &:hover {
      background-color: black;

      & + p span {
        color: white;
      }

      & ~ a {
        color: white;
      }
    }

    @media screen and (min-width: 480px) and (max-width: 768px) {
      animation: ${(props) =>
        props.update === true ? changeShape('350px') : ''};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: ease;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      animation: ${(props) =>
        props.update === true ? changeShape('250px') : ''};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: ease;
    }
  `;

  //링크태그
  const StyledLink = styled(Link)`
    position: absolute;
    top: 60%;
    left: 50%;
    font-size: 4rem;
    font-weight: bold;
    transform: translate(-50%, -50%);
    transition: 0.3s ease-in-out;

    @media screen and (min-width: 480px) and (max-width: 768px) {
      font-size: 3rem;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      font-size: 2rem;
    }
  `;

  return (
    <DivWrapper>
      <H1 hidden={true}>Home</H1>
      <ColorBox update={update} />
      <P fontWeight="bold" color="rgb(65, 191, 207)" size="4rem">
        Welcome to HJ's <span>React.js </span>Profile
        <br />
        <span className="sub"> 프로필에 방문해 주셔서 감사합니다</span>
        <br />
        <br />
      </P>
      <StyledLink to="/React_Portfolio/about">ENTER</StyledLink>
    </DivWrapper>
  );
};

export default Home;
