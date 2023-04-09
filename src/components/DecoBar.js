import React from 'react';
import { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const DecoBar = ({ size, rotateValue }) => {
  const changedSize = size * 0.4;

  const Bar = styled.div`
    width: 15px;
    height: ${changedSize}px;
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform-origin: 0 100%;
    animation: ${rotating(rotateValue)} 0.5s forwards ease-in-out;

    @media screen and (min-width: 480px) and (max-width: 768px) {
      width: 13px;
      height: ${changedSize * 0.8}px;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      width: 11px;
      height: ${changedSize * 0.4}px;
    }
  `;

  return <Bar></Bar>;
};

const rotating = (rotateValue) => {
  const rotate = keyframes`
    0% {
          transform: translateY(-100%) rotate(0);
        }
        100% {
          transform: translateY(-100%) rotate(${rotateValue}deg);
        }
  `;

  return rotate;
};

export default DecoBar;
