import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import gear from '../assets/gear-solid.svg';
import { useState } from 'react';

const Header = () => {
  const [color, setColor] = useState('');
  const [active, setActive] = useState('none');

  const colorKeyframes = (color) => {
    return keyframes`
    0% {
      background-color: ${color};
    }
    100% {
      background-color: ${color};
    }
    `;
  };

  const Header = styled.header`
    width: 100%;
    padding: 30px 0;
    position: relative;
    background-color: white;
    z-index: 2;
    animation: ${colorKeyframes(color)} 0.5s forwards ease-in-out;
  `;

  const Ul = styled.ul`
    width: 100%;
    text-align: center;
    color: ${(props) =>
      (props.color === 'midnightBlue') |
      (props.color === 'crimson') |
      (props.color === 'green')
        ? 'floralwhite'
        : 'black'};

    & li {
      font-size: 2rem;
      display: inline-block;
      padding: 0 30px;
      color: inherit;

      &.config {
        position: absolute;
        width: 20px;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);

        &:hover {
          cursor: pointer;
        }

        & img {
          width: 100%;
        }
      }

      & a {
        font-weight: bold;
        color: inherit;
      }

      @media screen and (min-width: 480px) and (max-width: 768px) {
        font-size: 1.5rem;
        padding: 0 15px;
      }

      @media screen and (min-width: 320px) and (max-width: 479px) {
        font-size: 1.4rem;
        padding: 0 15px;
      }
    }
  `;

  /**
   *
   * @param {String} color : String;
   * 색상값을 전달받아 헤더색상변경
   */
  function changeColor(color) {
    setColor(color);
    changeActive('none');
  }

  /**
   *
   * @param {String} color : String;
   * 팔레트 컴포넌트의 display 속성 변경
   */
  function changeActive() {
    if (active === 'none') setActive('block');
    else setActive('none');
  }

  return (
    <>
      <Header color={color}>
        <Ul color={color}>
          <li>
            <Link to="/React_Portfolio">Home</Link>
          </li>
          <li>
            <Link to="/React_Portfolio/about">About</Link>
          </li>
          <li>
            <Link to="/React_Portfolio/skills">Skills</Link>
          </li>
          <li>
            <Link to="/React_Portfolio/portfolio">Portfolio</Link>
          </li>
        </Ul>
        <Config onClick={() => changeActive()}>
          <img src={gear} alt="gear" />
        </Config>
        <Palette onClick={changeColor} active={active}></Palette>
      </Header>
    </>
  );
};

const Config = styled.div`
  position: absolute;
  top: 50%;
  right: 70px;
  width: 20px;
  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
  }

  @media screen and (min-width: 320px) and (max-width: 479px) {
    width: 15px;
    right: 20px;
  }
`;

const Palette = (props) => {
  //색상팔레트
  const Palette = styled.div`
    position: absolute;
    top: calc(50% + 40px);
    right: 70px;
    padding: 10px 20px;
    transform: translateY(-50%);
    background-color: white;
    border-radius: 10px;
    border: 1px solid #666;
    display: ${props.active};

    @media screen and (min-width: 320px) and (max-width: 479px) {
      right: 20px;
    }
  `;

  //li 태그
  const Li = styled.li`
    width: 20px;
    height: 20px;
    margin: 0 2px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: inline-block;
    box-sizing: border-box;

    &.white {
      border: 1px solid #666;
    }

    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <Palette>
      <ul>
        <Li
          className="white"
          color="white"
          onClick={() => {
            props.onClick('white');
          }}
        ></Li>
        <Li color="crimson" onClick={() => props.onClick('crimson')}></Li>
        <Li color="orange" onClick={() => props.onClick('orange')}></Li>
        <Li color="gold" onClick={() => props.onClick('gold')}></Li>
        <Li color="green" onClick={() => props.onClick('green')}></Li>
        <Li color="lightblue" onClick={() => props.onClick('lightblue')}></Li>
        <Li
          color="midnightBlue"
          onClick={() => props.onClick('midnightBlue')}
        ></Li>
        <Li color="plum" onClick={() => props.onClick('plum')}></Li>
      </ul>
    </Palette>
  );
};

export default Header;
