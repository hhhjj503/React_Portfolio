import React from 'react';
import { DivWrapper } from '../styles/DivWrapper';
import { H1 } from '../styles/H1';
import styled from 'styled-components';

const Skills = () => {
  const Ul = styled.ul`
    width: 70%;
    position: relative;
    margin: 10vh auto 0 auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;

    @media screen and (min-width: 480px) and (max-width: 767px) {
      width: auto;
      margin: 0;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      width: auto;
      margin: 0;
    }
  `;

  const Li = styled.li`
    font-size: 2rem;
    color: white;
    display: inline-block;
    margin: 30px 50px;
    text-align: center;
    width: 200px;
    height: 200px;
    line-height: 200px;
    box-sizing: border-box;
    background-color: ${(props) =>
      props.background === '' ? '#626262' : props.background};
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      border-radius: 50%;
      font-size: 2.3rem;
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
      font-size: 1.7rem;
      margin: 10px 20px;
      width: 150px;
      height: 150px;
      line-height: 150px;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      font-size: 1.5rem;
      width: 130px;
      height: 130px;
      line-height: 130px;
      margin: 10px 10px;

      &:hover {
        font-size: 1.7rem;
      }
    }
  `;

  const StyledDivWrapper = styled(DivWrapper)`
    padding: 0;
    box-sizing: border-box;
    @media screen and (min-width: 480px) and (max-width: 767px) {
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
    } ;
  `;

  return (
    <>
      <StyledDivWrapper>
        <H1 hidden={true}>Skills</H1>
        <Ul>
          <Li background="rgb(236, 102, 48)">HTML</Li>
          <Li background="rgb(0, 150, 230)">CSS</Li>
          <Li background="rgb(238, 175, 75)">JAVASCRIPT</Li>
          <Li background="rgb(6, 105, 173)">jQuery</Li>
          <Li background="rgb(205, 103, 153)">Sass</Li>
          <Li background="#50a8c0">React</Li>
          <Li background="rgb(0, 0, 0)">SQL</Li>
          <Li background="rgb(219, 56, 14)">JAVA</Li>
        </Ul>
      </StyledDivWrapper>
    </>
  );
};

export default Skills;
