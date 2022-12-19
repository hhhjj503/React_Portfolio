import React, { useState } from 'react';
import { DivWrapper } from '../styles/DivWrapper';
import { H1 } from '../styles/H1';
import styled, { keyframes } from 'styled-components';
import Li, { rhombus } from '../components/Li';
import { useCallback } from 'react';
import GageBar from '../components/GageBar';

const Skills = () => {
  const Ul = styled.ul`
    width: 70%;
    margin: 10vh auto 0 auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;

    @media screen and (min-width: 480px) and (max-width: 767px) {
      width: 90%;
      margin: 5vh auto 0 auto;
      height: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      width: auto;
      margin: 0;
    }
  `;

  const StyledDivWrapper = styled(DivWrapper)`
    height: auto;
    padding: 0;
    box-sizing: border-box;

    @media screen and (min-width: 480px) and (max-width: 767px) {
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      padding-top: 50px;
    }
  `;

  const ScoreRound = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    padding: 50px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.barColor === '' ? 'gray' : props.barColor};
    display: inline-block;
    color: white;
    margin: 0 auto;
    transition: 0.3s ease-in-out;

    @media screen and (min-width: 480px) and (max-width: 767px) {
      padding: 40px;
      font-size: 1.6rem;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      padding: 30px;
      font-size: 1.4rem;
    }
  `;

  const [score, setScore] = useState(0);
  const [barGage, setbarGage] = useState(0);
  const [barColor, setbarColor] = useState('');

  const changeScore = useCallback(
    (background, score) => {
      setScore(score);
      setbarGage(score);
      setbarColor(background);
    },
    [score],
  );

  return (
    <div
      style={{
        height: '100%',
        background: 'white',
        minHeight: 'calc(100vh - 100px)',
      }}
    >
      <StyledDivWrapper className="skills">
        <H1 hidden={true}>Skills</H1>
        <Ul>
          <Li
            background="rgb(236, 102, 48)"
            animation={rhombus}
            score={80}
            onClick={changeScore}
          >
            {'HTML'}
          </Li>
          <Li
            background="rgb(0, 150, 230)"
            animation={rhombus}
            score={80}
            onClick={changeScore}
          >
            {'CSS'}
          </Li>
          <Li
            background="rgb(238, 175, 75)"
            animation={rhombus}
            score={80}
            onClick={changeScore}
          >
            {'JAVASCRIPT'}
          </Li>
          <Li
            background="rgb(6, 105, 173)"
            animation={rhombus}
            score={50}
            onClick={changeScore}
          >
            {'jQuery'}
          </Li>
          <Li
            background="rgb(205, 103, 153)"
            animation={rhombus}
            score={50}
            onClick={changeScore}
          >
            {'Sass'}
          </Li>
          <Li
            background="#50a8c0"
            animation={rhombus}
            score={50}
            onClick={changeScore}
          >
            {'React'}
          </Li>
          <Li
            background="rgb(0, 0, 0)"
            animation={rhombus}
            score={50}
            onClick={changeScore}
          >
            {'SQL'}
          </Li>
          <Li
            background="rgb(219, 56, 14)"
            animation={rhombus}
            score={50}
            onClick={changeScore}
          >
            {'JAVA'}
          </Li>
        </Ul>
      </StyledDivWrapper>
      <div
        style={{
          width: '70%',
          margin: '5vh auto 0 auto',
          textAlign: 'center',
          paddingBottom: '20px',
        }}
        className="wrapper"
      >
        <div
          className="deco"
          style={{
            width: '100%',
          }}
        >
          <ScoreRound className="score" barColor={barColor}>
            {score}
          </ScoreRound>
        </div>
        <GageBar barGage={barGage} barColor={barColor}></GageBar>
      </div>
    </div>
  );
};

export default React.memo(Skills);
