import React from 'react';
import styled, { keyframes } from 'styled-components';
import { DivWrapper } from '../styles/DivWrapper';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const Portfolio = () => {
  const StyledDivWrapper = styled(DivWrapper)`
    padding: 100px;
    text-align: center;

    @media screen and (min-width: 480px) and (max-width: 1024px) {
      padding: 50px;
    }

    @media screen and (max-width: 500px) {
      padding: 0;
    }
  `;

  const showElements = () => {
    return keyframes`
      0% {

      }
      100% {
        top:0;
        opacity:1
      }
    `;
  };

  const ABlockComponent = styled.a`
    display: inline-block;
    width: 300px;
    height: 300px;
    margin: 10px;
    background-image: ${(props) => `url(${props.path})`};
    background-size: cover;
    background-position: center center;
    position: relative;
    top: 30px;
    opacity: 0;
    animation: ${showElements} 0.5s forwards ease;

    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.5s;
    }
    &:nth-child(5) {
      animation-delay: 0.7s;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.6;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      cursor: pointer;

      &:after {
        opacity: 0;
      }
    }

    @media screen and (max-width: 1024px) {
      width: 270px;
      height: 270px;
      margin: 10px;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
      height: 250px;
      margin: 5px 0;

      &:nth-child(1) {
        margin-top: 0;
      }
    }
  `;
  return (
    <StyledDivWrapper>
      <ABlockComponent
        path="./api_service.JPG"
        href="https://github.com/hhhjj503/React_api_service_app"
        target="_blank"
      ></ABlockComponent>
      <ABlockComponent
        path="./amuesementpark.JPG"
        href="https://hhhjj503.github.io/PORTFOLIO/pages/amusementpark/index.html"
        target="_blank"
      ></ABlockComponent>
      <ABlockComponent
        path="./whatsinthecircle.JPG"
        href="https://hhhjj503.github.io/PORTFOLIO/pages/thecircle/index.html"
        target="_blank"
      ></ABlockComponent>
      <ABlockComponent
        path="./greennature.png"
        href="https://hhhjj503.github.io/PORTFOLIO/pages/greennature/index.html"
        target="_blank"
      ></ABlockComponent>
      <ABlockComponent
        path="./dagachi.png"
        href="https://github.com/hhhjj503/spring_project_DAGACHI"
        target="_blank"
      ></ABlockComponent>
    </StyledDivWrapper>
  );
};

export default Portfolio;
