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

    & span {
      color: rgb(65, 191, 207);
      font-weight: bold;
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: 320px) and (max-width: 479px) {
      font-size: 1.2rem;
    }
  `;

  const Div = styled.div`
    font-size: 1.4rem;
    line-height: 20px;
    letter-spacing: 1px;

    @media screen and (min-width: 480px) and (max-width: 767px) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: 320px) and (max-width: 479px) {
      font-size: 1.2rem;
    }
  `;

  const Ul = styled.ul`
    width: 100%;
    text-align: left;

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

      @media screen and (min-width: 480px) and (max-width: 767px) {
        font-size: 1.2rem;
      }
      @media screen and (min-width: 320px) and (max-width: 479px) {
        font-size: 1.1rem;
      }
    }
    @media screen and (min-width: 320px) and (max-width: 479px) {
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

    @media screen and (min-width: 480px) and (max-width: 767px) {
      display: block;
      width: 100%;

      &:first-child {
        margin-bottom: 50px;
      }
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      display: block;
      width: 100%;

      &:first-child {
        margin-bottom: 30px;
      }
    } ;
  `;

  const Img = styled.div`
    width: ${(props) => props.widthValue};
    height: ${(props) => props.heightValue};
    background-image: url(${(props) => props.path});
    background-size: cover;
    background-position: center;
    margin: 0 auto;

    @media screen and (min-width: 480px) and (max-width: 767px) {
      width: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      width: 100%;
      height: 300px;
    } ;
  `;

  const StyledDivWrapper = styled(DivWrapper)`
    @media screen and (min-width: 480px) and (max-width: 767px) {
      height: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      height: 100%;
    } ;
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
          <span>???????????????</span>, ???????????? ???????????? ???????????? ????????? ?????????
          <br /> <br />
          ?????????????????? ?????????????????? ???????????? ??????????????? ?????? ??? ???????????????{' '}
          <br />
          ???????????? ????????? ?????? 6????????? ?????? ????????? ?????????????????? ???????????? <br />
          IT???????????? ????????? ??????, ??? ????????? ????????? ??? ?????? ???????????? ?????? ?????????
          <br />
          ????????? ?????????
        </P>
        <br />
        <br />
        <P fontWeight="bold">
          2020.05 | ?????????????????????1???
          <br /> 2022.09 | ??????????????????
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
