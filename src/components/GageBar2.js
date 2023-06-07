import React, { useState } from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';
import DecoBar from './DecoBar';

const size = 350;
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

    @media screen and (max-width: 1024px) {
      width: ${size - 50}px;
      height: ${size - 50}px;
    }

    @media screen and (max-width: 500px) {
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
  const [result, setResult] = useState([]);
  //const [rotateDeg, setRotateDeg] = useState([]);

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

    @media screen and (max-width: 1024px) {
      width: ${changedSize * 0.7}px;
      height: ${changedSize * 0.7}px;
    }

    @media screen and (max-width: 500px) {
      width: ${changedSize * 0.4}px;
      height: ${changedSize * 0.4}px;
    }
  `;

  const makeBar = (size, minRotate, score) => {
    //size = 350
    const tempResult = [];
    const tempRotateDeg = [];
    let decoBarCount = (score / size) * 100 * 2;
    decoBarCount = parseInt(decoBarCount);
    for (let i = 0; i < decoBarCount; i++) {
      tempRotateDeg.push(minRotate);
      minRotate += 6.5;
    }

    tempRotateDeg.map((num, i) =>
      tempResult.push(
        <DecoBar key={i} size={size} rotateValue={num}></DecoBar>,
      ),
    );

    return tempResult;
  };

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

    @media screen and (max-width: 1024px) {
      width: ${changedSize * 0.7}px;
      height: ${changedSize * 0.7}px;
      line-height: ${changedSize * 0.7}px;
      font-size: 30px;
    }

    @media screen and (max-width: 500px) {
      width: ${changedSize * 0.4}px;
      height: ${changedSize * 0.4}px;
      line-height: ${changedSize * 0.4}px;
      font-size: 20px;
    }
  `;
  return <Round>{score}</Round>;
};

export default React.memo(GageBar2);
