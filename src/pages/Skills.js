import React, { useEffect, useState } from 'react';
import { DivWrapper } from '../styles/DivWrapper';
import { H1 } from '../styles/H1';
import styled, { keyframes } from 'styled-components';
import Li, { rhombus } from '../components/Li';
import { useCallback } from 'react';
import GageBar from '../components/GageBar';
import GageBar2 from '../components/GageBar2';

const Skills = () => {
  const Wrapper = styled.div`
    height: 100%;
    background: white;
    min-height: calc(100vh - 80px);

    @media screen and (max-width: 1024px) {
      min-height: calc(100vh - 75px);
    }

    @media screen and (max-width: 500px) {
      min-height: calc(100vh - 74px);
    }
  `;

  const Ul = styled.ul`
    width: 70%;
    margin: 10vh auto 0 auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;

    @media screen and (max-width: 1024px) {
      width: 90%;
      margin: 5vh auto 0 auto;
      height: 100%;
    }

    @media screen and (max-width: 500px) {
      width: auto;
      margin: 0;
    }
  `;

  const StyledDivWrapper = styled(DivWrapper)`
    height: auto;
    padding: 0;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
    }

    @media screen and (max-width: 500px) {
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

    @media screen and (max-width: 1024px) {
      padding: 40px;
      font-size: 1.6rem;
    }

    @media screen and (max-width: 500px) {
      padding: 30px;
      font-size: 1.4rem;
    }
  `;

  const [score, setScore] = useState(0);
  //const [barGage, setbarGage] = useState(0);
  const [barColor, setbarColor] = useState('');

  const changeScore = useCallback((background, score) => {
    setScore(score);
    //setbarGage(score);
    setbarColor(background);
  }, []);

  return (
    <Wrapper>
      <StyledDivWrapper className="skills">
        <H1 hidden={true}>Skills</H1>
        <Ul>
          <Li background="rgb(236, 102, 48)" score={80} onClick={changeScore}>
            {'HTML'}
          </Li>
          <Li background="rgb(0, 150, 230)" score={80} onClick={changeScore}>
            {'CSS'}
          </Li>
          <Li background="rgb(238, 175, 75)" score={80} onClick={changeScore}>
            {'JAVASCRIPT'}
          </Li>
          <Li background="rgb(6, 105, 173)" score={50} onClick={changeScore}>
            {'jQuery'}
          </Li>
          <Li background="rgb(205, 103, 153)" score={50} onClick={changeScore}>
            {'Sass'}
          </Li>
          <Li background="#50a8c0" score={50} onClick={changeScore}>
            {'React'}
          </Li>
          <Li background="rgb(0, 0, 0)" score={50} onClick={changeScore}>
            {'SQL'}
          </Li>
          <Li background="rgb(219, 56, 14)" score={50} onClick={changeScore}>
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
        className="score-wrapper"
      >
        <div
          className="deco"
          style={{
            width: '100%',
          }}
        >
          {/* <ScoreRound className="score" barColor={barColor}>
            {score}
          </ScoreRound> */}
        </div>
        {/* <GageBar barGage={barGage} barColor={barColor}></GageBar> */}
        <GageBar2 barColor={barColor} score={score}></GageBar2>
      </div>
    </Wrapper>
  );
};

export default React.memo(Skills);
