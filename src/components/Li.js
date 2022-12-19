import React from 'react';
import styled, { keyframes } from 'styled-components';

const Li = ({ background, animation, score, onClick, children }) => {
  const LiComponent = styled.li`
    color: white;
    position: relative;
    display: inline-block;
    margin: 30px 0;
    text-align: center;
    width: 160px;
    height: 160px;
    line-height: 160px;
    box-sizing: border-box;
    background-color: ${() => (background === '' ? '#626262' : background)};
    //border-radius: 10px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    & span {
      font-size: 1.8rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      //border-radius: 15px;
      animation: ${() => (animation === '' ? '' : animation)} 3s infinite;
      span {
        font-size: 1.9rem;
        font-weight: bold;
      }
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
      font-size: 1.7rem;
      width: 120px;
      height: 120px;
      margin: 10px;
      line-height: 120px;

      & span {
        font-size: 1.6rem;
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

      & span {
        font-size: 1.3rem;
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
    <LiComponent onClick={() => onClick(background, score)}>
      <span>{children}</span>
    </LiComponent>
  );
};

export default React.memo(Li);

export const rhombus = keyframes`
  0% {
    
  } 50% {
    transform : rotate(360deg);
  }`;
