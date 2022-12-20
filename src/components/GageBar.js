import React from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';

const GageBar = ({ barGage, barColor }) => {
  const GageBarComponent = styled.div`
    width: 80%;
    max-width: 1100px;
    height: 50px;
    background: none;
    margin: 50px auto 0 auto;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    position: relative;
    transition: 0.3s ease-in-out;

    &:after {
      content: '';
      transition: 0.3s ease-in-out;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: ${() => (barGage === '' ? 1 : barGage)}%;
      background-color: ${() => (barColor === '' ? 'gray' : barColor)};
      height: 50px;
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
      height: 40px;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      height: 30px;
    }
  `;
  return <GageBarComponent></GageBarComponent>;
};

export default React.memo(GageBar);
