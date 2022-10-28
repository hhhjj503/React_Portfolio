import React from 'react';
import { DivWrapper } from '../styles/DivWrapper';
import { H1 } from '../styles/H1';
import styled from 'styled-components';

const Skills = () => {
  const Ul = styled.ul`
    & li {
      font-size: 2rem;
      color: black;
      display: inline-block;
      width: 20%;
      margin: 10px 50px;
      text-align: center;
      padding: 10px 0;
      background: ${(props) => (props.color === '' ? 'black' : props.color)};
      border-radius: 10px;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  `;
  return (
    <DivWrapper>
      <H1>Skills</H1>
      <Ul>
        <li color="rgb(236, 102, 48)">HTML</li>
        <li color="rgb(0, 150, 230)">CSS</li>
        <li color="rgb(238, 175, 75)">JAVASCRIPT</li>
        <li color="rgb(6, 105, 173)">jQuery</li>
        <li color="rgb(205, 103, 153)">Sass</li>
        <li color="#50a8c0">React</li>
        <li color="rgb(0, 0, 0)">SQL</li>
        <li color="rgb(219, 56, 14)">JAVA</li>
      </Ul>
    </DivWrapper>
  );
};

export default Skills;
