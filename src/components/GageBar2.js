import React from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';
import DecoBar from './DecoBar';

const size = 350;
const rotateDeg = [];
const result = [];

const GageBar2 = ({ barColor, score }) => {
  const GageBarComponent = styled.div`
    width: ${size}px;
    height: ${size}px;
    background: transparent;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    transition: 0.3s ease-in-out;

    @media screen and (min-width: 480px) and (max-width: 768px) {
      width: ${size - 50}px;
      height: ${size - 50}px;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      width: ${size - 100}px;
      height: ${size - 100}px;
    }
  `;

  if (barColor === '') barColor = 'gray';

  return (
    <GageBarComponent>
      <BiggerRound size={size} barColor={barColor} score={score}></BiggerRound>
    </GageBarComponent>
  );
};

const BiggerRound = ({ barColor, score }) => {
  const changedSize = size * 0.8;
  const Round = styled.div`
    width: ${changedSize}px;
    height: ${changedSize}px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    z-index: 1;

    @media screen and (min-width: 480px) and (max-width: 768px) {
      width: ${changedSize * 0.7}px;
      height: ${changedSize * 0.7}px;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      width: ${changedSize * 0.4}px;
      height: ${changedSize * 0.4}px;
    }
  `;

  return (
    <Round>
      {makeBar(size, 0, score)}
      <SmallRound size={size} score={score} barColor={barColor}></SmallRound>
    </Round>
  );
};

const SmallRound = ({ barColor, score }) => {
  const changedSize = size * 0.6;
  const Round = styled.div`
    width: ${changedSize}px;
    height: ${changedSize}px;
    position: absolute;
    top: 50%;
    left: 50%;
    line-height: ${changedSize}px;
    font-size: 40px;
    color: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${barColor};
    z-index: 3;

    @media screen and (min-width: 480px) and (max-width: 768px) {
      width: ${changedSize * 0.7}px;
      height: ${changedSize * 0.7}px;
      line-height: ${changedSize * 0.7}px;
      font-size: 30px;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      width: ${changedSize * 0.4}px;
      height: ${changedSize * 0.4}px;
      line-height: ${changedSize * 0.4}px;
      font-size: 20px;
    }
  `;
  return <Round>{score}</Round>;
};

const makeBar = (size, minRotate, score) => {
  //size = 350
  let decoBarCount = (score / size) * 100 * 2;
  decoBarCount = parseInt(decoBarCount);
  for (let i = 0; i < decoBarCount; i++) {
    rotateDeg.push(minRotate);
    minRotate += 6.5;
  }

  for (let i = 0; i < rotateDeg.length; i++) {
    result.push(
      <DecoBar key={i} size={size} rotateValue={rotateDeg[i]}></DecoBar>,
    );
  }

  return result;
};

export default React.memo(GageBar2);
