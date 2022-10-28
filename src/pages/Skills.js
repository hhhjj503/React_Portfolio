import React from 'react';
import { DivWrapper } from '../styles/DivWrapper';
import { H1 } from '../styles/H1';
import styled from 'styled-components';
import Palette from '../components/Palette';

const Skills = () => {
  const Ul = styled.ul`
    @media screen and (min-width: 320px) and (max-width: 479px) {
      text-align: center;
    }
  `;

  const Li = styled.li`
    font-size: 2rem;
    color: white;
    display: inline-block;
    width: 20%;
    margin: 10px 50px;
    text-align: center;
    padding: 10px 0;
    background-color: ${(props) =>
      props.background === '' ? '#626262' : props.background};
    border-radius: 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: transparent;
      color: black;
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
      font-size: 1.7rem;
      padding: 10px 0;
      margin: 10px 20px;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      width: 40%;
      font-size: 1.5rem;
      padding: 10px 0;
      margin: 10px 10px;
    }
  `;

  return (
    <DivWrapper>
      <H1>Skills</H1>
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
    </DivWrapper>
  );
};

export default Skills;
