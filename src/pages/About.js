import React from 'react';
import styled from 'styled-components';
import { DivWrapper } from '../styles/DivWrapper';
import { H1 } from '../styles/H1';
import developerImg from '../assets/developer.JPG';

const About = () => {
  const P = styled.p`
    font-size: 1.4rem;
    line-height: 20px;
    font-weight: ${(props) =>
      props.fontWeight === 'bold' ? 'bold' : 'normal'};
    word-break: keep-all;
    width: 60%;
    line-height: 1.618;

    & span {
      color: rgb(65, 191, 207);
      font-weight: bold;
    }

    @media screen and (max-width: 1024px) {
      width: 80%;
      text-align: center;
      margin: 0 auto;
      font-size: 1.3rem;
    }
    @media screen and (max-width: 500px) {
      width: initial;
      text-align: left;
      margin: 0;
      font-size: 1.2rem;
    }
  `;

  const Div = styled.div`
    font-size: 1.4rem;
    line-height: 20px;
    letter-spacing: 1px;

    @media screen and (max-width: 1024px) {
      text-align: center;
      font-size: 1.3rem;
    }
    @media screen and (max-width: 500px) {
      text-align: left;
      font-size: 1.2rem;
    }
  `;

  const Ul = styled.ul`
    width: 100%;
    text-align: left;

    @media screen and (max-width: 1024px) {
      text-align: center;
    }
    @media screen and (max-width: 500px) {
      text-align: left;
    }

    & li {
      font-size: 1.3rem;
      font-weight: bold;
      display: inline-block;
      padding: 5px 10px;
      margin: 0 10px;
      background-color: #494949;
      color: white;
      border-radius: 10px;
      transition: 0.3s ease-in-out;
      cursor: default;

      &:hover {
        background-color: transparent;
        color: black;
      }

      @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
      }
      @media screen and (max-width: 500px) {
        font-size: 1.1rem;
      }
    }
    @media screen and (max-width: 500px) {
      text-align: center;
    }
  `;

  const Half = styled.div`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 50%;

    &.img {
      text-align: center;
    }

    @media screen and (max-width: 1024px) {
      display: block;
      width: 100%;

      &:first-child {
        margin-bottom: 50px;
      }
    }

    @media screen and (max-width: 500px) {
      display: block;
      width: 100%;

      &:first-child {
        margin-bottom: 30px;
      }
    }
  `;

  const Img = styled.div`
    width: ${(props) => props.widthValue};
    height: ${(props) => props.heightValue};
    background-image: url(${(props) => props.path});
    background-size: cover;
    background-position: center;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
      height: 300px;
    }
  `;

  const StyledDivWrapper = styled(DivWrapper)`
    @media screen and (max-width: 1024px) {
      height: 100%;
    }

    @media screen and (max-width: 500px) {
      height: 100%;
    }
  `;

  return (
    <StyledDivWrapper className="about">
      <Half className="img">
        <Img
          widthValue="70%"
          heightValue="500px"
          path={developerImg}
          className="abs"
        ></Img>
      </Half>
      <Half>
        <H1>About</H1>
        <P>
          <span>안녕하세요</span>, 끊임없이 노력하며 발전하는 허현재 입니다
          <br /> <br />
          고등학교부터 대학교육까지 디자인을 공부했으며 졸업 후 국비지원의
          체계적인 교육을 통한 6개월의 개발 교육과 교육수료 이후 전문적인
          IT지식들의 공부를 통해, 웹 제작과 관련한 그 어떤 분야와도 소통 가능한
          허현재 입니다
        </P>
        <br />
        <br />
        <P fontWeight="bold">
          2020.05 | 컴퓨터활용능력1급
          <br /> 2022.09 | 정보처리기사
        </P>
        <br />
        <br />
        <Div>kil3120@naver.com</Div>
        <Div>010-3793-7843</Div>
        <br />
        <br />
        <br />
        <Ul>
          <li>React</li>
          <li>Styled-Component</li>
          <li>Github</li>
          <li>JS</li>
        </Ul>
      </Half>
    </StyledDivWrapper>
  );
};

export default About;
