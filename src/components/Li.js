import React, { useCallback, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Li = ({ background, animation, score, onClick, children }) => {
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

  const [liBackground, setLiBackground] = useState(background);
  const [liScore, setLiBackgroundScore] = useState(score);

  const Li = styled.li`
    color: white;
    position: relative;
    display: inline-block;
    margin: 30px 0;
    text-align: center;
    width: 150px;
    height: 150px;
    line-height: 150px;
    box-sizing: border-box;
    background-color: ${() => (liBackground === '' ? '#626262' : liBackground)};
    //border-radius: 10px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    //top: 30px;
    //opacity: 0;
    //animation: ${showElements} 0.5s forwards ease;

    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      animation-delay: 0.5s;
    }
    &:nth-child(7) {
      animation-delay: 0.6s;
    }
    &:nth-child(8) {
      animation-delay: 0.7s;
    }

    &:hover {
      border-radius: 10px;
    }

    &:before {
      content: '';
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.3s ease-in-out;
    }

    & span {
      font-size: 1.8rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: 0.3s ease-in-out;
    }

    & svg {
      width: 150px;
      height: 150px;
      fill: none;
      stroke: white;
      stroke-width: 5px;
      //stroke-dasharray: 250;
      stroke-linecap: round;
      stroke-dashoffset: -100;
      position: relative;
      z-index: 1;
      transition: 0.3s ease-in-out;
      opacity: 0;
      &.PC {
        display: block;
      }
      &.tablet,
      &.mobile {
        display: none;
      }
    }

    &:hover {
      //border-radius: 15px;
      //animation: ${() => (animation === '' ? '' : animation)} 3s infinite;

      span {
        font-size: 1.9rem;
        font-weight: bold;
      }

      svg {
        opacity: 1;
        animation: ${rhombus} 3s infinite;
      }
    }

    @media screen and (min-width: 480px) and (max-width: 768px) {
      font-size: 1.7rem;
      width: 120px;
      height: 120px;
      margin: 10px;
      line-height: 120px;

      &:before {
        width: 100px;
        height: 100px;
      }

      & span {
        font-size: 1.6rem;
      }

      & svg {
        width: 120px;
        height: 120px;

        &.tablet {
          display: block;
          stroke-width: 7px;
        }
        &.pc,
        &.mobile {
          display: none;
        }
      }

      &:hover {
        span {
          font-size: 1.7rem;
          font-weight: bold;
        }
      }
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      width: 80px;
      height: 80px;
      line-height: 80px;
      margin: 7px;

      &:before {
        width: 60px;
        height: 60px;
      }

      & span {
        font-size: 1.3rem;
      }

      & svg {
        width: 80px;
        height: 80px;

        &.pc,
        &.tablet {
          display: none;
        }
        &.mobile {
          display: block;
          stroke-width: 4px;
        }
      }

      &:hover {
        span {
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
    }
  `;

  return (
    <Li onClick={() => onClick(liBackground, liScore)}>
      <span>{children}</span>
      <svg className="pc">
        <circle cx="75" cy="75" r="60" />
      </svg>
      <svg className="tablet">
        <circle cx="60" cy="60" r="50" />
      </svg>
      <svg className="mobile">
        <circle cx="40" cy="40" r="30" />
      </svg>
    </Li>
  );
};

export default React.memo(Li);

export const rhombus = keyframes`
  0% {
    stroke-dasharray: 100;
    
  } 50% {
    transform : rotate(360deg);
    stroke-dasharray: 250;
  } 100% {
    stroke-dasharray: 100;
  }`;
